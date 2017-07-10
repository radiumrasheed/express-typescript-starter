import { Request, Response } from 'express';
import { Example } from '../models/example.server.model';
import Base from '../base/base.server.controller';

export default class ExampleController extends Base {
    model = Example;
}

export const exampleController = new ExampleController();