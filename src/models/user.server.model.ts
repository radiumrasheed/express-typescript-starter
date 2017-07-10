import { Schema, Model, model, Document } from 'mongoose';

export interface IUser extends Document {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export var UserSchema: Schema = new Schema({
    created: Date,
    email: String,
    firstName: String,
    lastName: String,
    password: String
});

UserSchema.pre('save', function (next) {
    if (!this.created) {
        this.created = new Date();
    }

    next();
});

export const User: Model<IUser> = model<IUser>('User', UserSchema);
