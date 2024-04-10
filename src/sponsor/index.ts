import { Document } from 'mongoose';

export interface ISponsor extends Document {
    idSponsor: string;
    idSponsored: string;
}