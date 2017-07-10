import { Schema, Model, model, Document } from 'mongoose';

export interface IExample extends Document {
    property: string;
    propety2: string;
}

export var ExampleSchema: Schema = new Schema({
    property: String,
    property2: String
});

ExampleSchema.pre('save', function (next) {
    if (!this.created) {
        this.created = new Date();
    }
    next();
});

export const Example: Model<IExample> = model<IExample>('Example', ExampleSchema);
