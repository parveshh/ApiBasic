import { Controller, Get, Req, Res } from "ts-express-decorators";
import { HelloService } from "../services/helloworld.service";
import {Request,Response} from "express";

@Controller("/")
export class HelloWorldController {
    private helloService: HelloService;

    constructor(helloService: HelloService) {
        this.helloService = helloService;
    }
    @Get("/hey")
    public HelloWorld(@Req() request: Request, @Res() response: Response) {
        const result = this.helloService.helloworld();
        response.status(200).send(result);
    }

}