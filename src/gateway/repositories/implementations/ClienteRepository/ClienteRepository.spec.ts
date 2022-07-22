import { Admin } from '../../../../domain/models/Admin';
import {closeDatabase, connect, createTestCollection } from '../../../../tests/testDb';
//import adminJson from '../../../../resources/jsonMocks/adminData.json';

describe("Cliente Repository Unit Tests", () => {

    beforeAll(async () => {
        await connect();
    })

    afterAll(async () => {
        await closeDatabase();
    })

    it('Should have inserted entries in relatorios', async () => {
        for(let i = 0; i < 2; i++) {
            let admin = new Admin(adminJson[i]);
            await admin.save();
        }
        let count = await Admin.count();
        expect(count).toBe(2);
    })

    it('Should find client by name', async() => {
        
    })
    
})





