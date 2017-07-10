import { Express } from "express";
import { exampleController } from "../controllers/example.server.controller";

export default class ExampleRoute {
    constructor(app: Express) {
        app.route('/api/example')
            .post(exampleController.create)
            .get(exampleController.list)

        app.route('/api/example/:id')
            .put(exampleController.update)
            .get(exampleController.get)
            .delete(exampleController.delete)

    }

}