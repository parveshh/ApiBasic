import { ServerLoader, ServerSettings } from "ts-express-decorators";
import path from "path";
import * as bodyParser from "body-parser";

@ServerSettings({
    acceptMimes: ["application/json"],
    rootDir: `${__dirname}`,
    port: process.env.PORT || 1337,   
    mount: {
        "/": "${rootDir}/controllers/**\/*.js"
    },
    componentsScan: [
        "${rootDir}/services/**/**.js"
    ],
})
export class Server extends ServerLoader {
    constructor() {
        super();        
    }
    $onMountingMiddlewares(): void | Promise<any> {

        this.use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));
    }

    public startApp() {
        this.start();
    }
    public $onReady() {
        console.log('Server started...');

    }

    public $onServerInitError(err: {} | string) {
        console.error(err);
    }
}

module.exports = new Server().startApp();