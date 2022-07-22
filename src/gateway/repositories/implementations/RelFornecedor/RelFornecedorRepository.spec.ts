import { RelFornecedor } from '../../../../domain/models/RelFornecedor';
import {closeDatabase, connect } from '../../../../tests/testDb';
import relFornecedorJson from '../../../../tests/jsonMocks/relFornecedorData.json';
import { RelFornecedorRepository } from './RelFornecedorRepository';
import mongoose from 'mongoose';

const relFornecedorRepository = new RelFornecedorRepository();

describe("RelFornecedor Repository Unit Tests", () => {

    beforeAll(async () => {
        await connect();
        await RelFornecedor.createCollection();
    })

    afterAll(async () => {
        await closeDatabase();
    })

    it('Should have inserted entries in rel_fornecedores', async () => {
        await relFornecedorRepository.addData(relFornecedorJson[0]);
        let count = await RelFornecedor.count();
        expect(count).toBe(1);
    })

    it('Should find report by name and given date', async() => {

        let name = "Keith Richards";
        let relDate = new Date('05 October 2011 14:48 UTC').toISOString();

        let report = await relFornecedorRepository.findByNameAndRelDate(name, relDate); 
        expect(report).toBeInstanceOf(RelFornecedor);
        expect(report.fornecedorName).toBe("Keith Richards");
        expect(report.dataEmissao).toBe(relDate);

    })

    it('Should remove report by id', async() => {
        let id = new mongoose.Types.ObjectId(relFornecedorJson[0]._id);
        let deletedCount = await relFornecedorRepository.removeById(id); 
        expect(deletedCount).toBe(1);
    })
    
})





