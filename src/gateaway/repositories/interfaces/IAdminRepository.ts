export interface IAdminRepository {
    //talvez pensar na senha como um value object
    addAdmin(name:String, password:String) : Promise<void>
    removeAdmin(id:Number) : Promise<void>
}