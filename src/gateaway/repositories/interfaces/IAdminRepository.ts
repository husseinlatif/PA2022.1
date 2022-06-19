import { IAdmin } from "../../../domain/interfaces/IAdmin"

export interface IAdminRepository {
    getAdmin(id:Number) : Promise<IAdmin>
    //talvez pensar na senha como um value object
    addAdmin(name:String, password:String) : void
}