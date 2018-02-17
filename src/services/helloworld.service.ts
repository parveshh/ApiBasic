import { Service } from "ts-express-decorators";

@Service()
export class HelloService {

    public helloworld() {
        return "Hello World";
    }

}