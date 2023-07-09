/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/users/model/user.model';
export type SavedDocument = HydratedDocument<Saved>;
export declare class Saved {
    user_id: User;
    savedId: string;
    type: string;
    urlImage: string;
}
export declare const SavedSchema: import("mongoose").Schema<Saved, import("mongoose").Model<Saved, any, any, any, import("mongoose").Document<unknown, any, Saved> & Omit<Saved & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Saved, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Saved>> & Omit<import("mongoose").FlatRecord<Saved> & {
    _id: Types.ObjectId;
}, never>>;
