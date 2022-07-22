import { Admin } from '../../../../domain/models/Admin';
import {closeDatabase, connect } from '../../../../tests/testDb';
import adminJson from '../../../../tests/jsonMocks/adminData.json';
import { AdminRepository } from './AdminRepository';

const adminRepository = new AdminRepository();

describe("Admin Repository Unit Tests", () => {

    beforeAll(async () => {
        await connect();
        Admin.createCollection();
    })

    afterAll(async () => {
        await closeDatabase();
    })

    it('Should have inserted two entries in AdminCollection', async () => {
        for(let i = 0; i < 2; i++) {
            await adminRepository.addData(adminJson[i]);
        }
        let count = await Admin.count();
        expect(count).toBe(2);
    })

    it('Should return an Admin instance by its name', async() => {
        let admin = {name:"Albert King", password:"oasdokasodkoaskdoasdoaskodas"};
        let adminByName = await adminRepository.findByName(admin.name);
        expect(adminByName).toBeInstanceOf(Admin);
        expect(adminByName.name).toBe(admin.name);
        expect(adminByName.password).toBe(admin.password);
    })
    
})





