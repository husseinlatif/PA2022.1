import { Fornecedor } from '../../../../domain/models/Fornecedor';
import {closeDatabase, connect } from '../../../../tests/testDb';
import fornecedorJson from '../../../../tests/jsonMocks/fornecedorData.json';
import { FornecedorRepository } from './FornecedorRepository';

const fornecedorRepository = new FornecedorRepository();

describe("Fornecedor Repository Unit Tests", () => {

    beforeAll(async () => {
        await connect();
        Fornecedor.createCollection();
    })

    afterAll(async () => {
        await closeDatabase();
    })

    it('Should have inserted two entries in AdminCollection', async () => {
        for(let i = 0; i < 2; i++) {
            await fornecedorRepository.addData(fornecedorJson[i]);
        }
        let count = await Fornecedor.count();
        expect(count).toBe(2);
    })

    it('Should return a Fornecedor instance by its name', async() => {
        let fornecedor = {name:"Keith Richards", taxaComissao:0.07};
        let fornecedorByName = await fornecedorRepository.findByName(fornecedor.name);
        expect(fornecedorByName).toBeInstanceOf(Fornecedor);
        expect(fornecedorByName.name).toBe(fornecedor.name);
        expect(fornecedorByName.taxaComissao).toBe(fornecedor.taxaComissao);
    })
    
})





