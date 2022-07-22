import { Venda } from '../../../../domain/models/Venda';
import {closeDatabase, connect } from '../../../../tests/testDb';
import vendaJson from '../../../../tests/jsonMocks/vendaData.json';
import { VendaRepository } from './VendaRepository';
import mongoose from 'mongoose';

const vendaRepository = new VendaRepository();

describe("Venda Repository Unit Tests", () => {

    beforeAll(async () => {
        await connect();
        await Venda.createCollection();
    })

    afterAll(async () => {
        await closeDatabase();
    })

    it('Should have inserted entries in "vendas" collection', async () => {
        //como vamos sempre
        for(let i = 0; i < vendaJson.length; i++) {
            await vendaRepository.addData(vendaJson[i]);
        }
        let count = await Venda.count();
        expect(count).toBe(3);
    })

    it('Should return every sale related to that client on that day', async() => {

        let name = "Keith Richards";
        let dataVenda = new Date('05 October 2011 14:48 UTC').toISOString();

        let vendas = await vendaRepository.findByClientNameAndDate(name, dataVenda);
        vendas.forEach(savedVenda => {
            expect(savedVenda).toBeInstanceOf(Venda);
            expect(savedVenda.clienteName).toBe("Kiko Loureiro");
            expect(savedVenda.dataVenda).toBe(dataVenda);
        }) 

    })

    it('Should remove report by id', async() => {
        let id = new mongoose.Types.ObjectId(vendaJson[0]._id);
        let deletedCount = await vendaRepository.removeById(id); 
        expect(deletedCount).toBe(1);
    })
    
})





