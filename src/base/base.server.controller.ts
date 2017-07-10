import { assign } from 'lodash';
import { errorService } from '../service/error.server.service';
import { Request, Response } from 'express';
import { Schema, Model, model, Document } from 'mongoose';

export interface IModel extends Document {

}

export default abstract class BaseController {
    abstract model: Model<IModel>;
    log = errorService.log;

    list = (req: Request, res: Response) => {
        this.model.find({}, (err, docs: IModel[]) => {
            if (err) { return this.log(err); }
            res.json(docs);
        });
    };

    count = (req: Request, res: Response) => {
        this.model.count((err, count: number) => {
            if (err) { return this.log(err); }
            res.json(count);
        });
    };

    create = (req: Request, res: Response) => {
        const obj = new this.model(req.body);
        obj.save((err, item: IModel) => {
            if (err) { return this.log(err); }
            res.status(200).json(item);
        });
    };

    get = (req: Request, res: Response) => {
        this.model.findOne({ _id: req.params.id }, (err, doc: IModel) => {
            if (err) { return this.log(err); }
            res.json(doc);
        });
    };

    update = (req: Request, res: Response) => {
        this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err, doc: IModel) => {
            if (err) { return this.log(err); }
            res.status(200).json(assign(doc, req.body));
        });
    };

    delete = (req: Request, res: Response) => {
        this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
            if (err) { return this.log(err); }
            res.sendStatus(200);
        });
    };
}