import { ObjectId } from "mongoose";

export interface ISponsor {
    idSponsor: ObjectId;
    idSponsored: ObjectId;
}