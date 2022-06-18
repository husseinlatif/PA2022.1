import { IAdmin } from "../interfaces/IAdmin";
import { Schema } from 'mongoose';

const usuarioSchema = new Schema<IAdmin>({
    name:{ type: String, required: true },
    password: { type: String, required: true }
})