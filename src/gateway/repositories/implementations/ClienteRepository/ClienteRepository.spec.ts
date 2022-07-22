import { Cliente } from '../../../../domain/models/Cliente';
import {closeDatabase, connect } from '../../../../tests/testDb';
import clienteJson from '../../../../tests/jsonMocks/clienteData.json';
import { ClienteRepository } from './ClienteRepository';

const clienteRepository = new ClienteRepository();

describe("Cliente Repository Unit Tests", () => {

    beforeAll(async () => {
        await connect();
        Cliente.createCollection();
    })

    afterAll(async () => {
        await closeDatabase();
    })

    it('Should have inserted two entries in ClienteCollection', async () => {
        for(let i = 0; i < 2; i++) {
            await clienteRepository.addData(clienteJson[i]);
        }
        let count = await Cliente.count();
        expect(count).toBe(2);
    })

    it('Should return a Cliente instance by its name', async() => {
        let clienteName = "John Mayer";
        let ClienteByName = await clienteRepository.findByName(clienteName);
        expect(ClienteByName).toBeInstanceOf(Cliente);
        expect(ClienteByName.name).toBe(clienteName);
    })
    
})





