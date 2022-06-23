import { IAdmin } from "../../models/interfaces/IAdmin"

export interface IAdminUseCase {
    getAdmin(id:Number) : Promise<IAdmin>
    //talvez pensar na senha como um value object
    addAdmin(name:String, password:String) : void
}