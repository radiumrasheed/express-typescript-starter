import { Request, Response } from 'express';
import {IUser, User} from '../models/user.server.model';

export default class IndexController {
    static index(req: Request, res: Response, next: Function): void {
        res.render('index', { title: 'Express' });
    }
}