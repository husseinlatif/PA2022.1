import { IAdmin } from "./interfaces/IAdmin";
import * as mongoose from 'mongoose';
import commonOptions from "./Utils/schemaOptions";

const adminSchema = new mongoose.Schema<IAdmin>({
    id: { type: Number, required: true },
    name:{ type: String, required: true },
    password: { type: String, required: true }
}, commonOptions);

const Admin = mongoose.model('admins', adminSchema);
export { Admin };

