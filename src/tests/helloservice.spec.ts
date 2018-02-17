import { expect } from "chai";
import * as mocha from "mocha";
import { inject } from "ts-express-decorators/testing";
import { HelloService } from "../services/helloworld.service";
import { Done } from "ts-express-decorators/lib/testing";

describe("HelloService : ", () => {
    it("should return hello world", inject([HelloService, Done], (helloService: HelloService, done: Done) => {

        expect(helloService).to.be.instanceOf(HelloService);
        expect(helloService.helloworld()).to.equal("Hello World");
        done();

    }))
})