//Reformular essas conexões e usar mongoose de fato.

// Testar se o retorno bate com o tipo adequado, utilizando o cliente e o admin como exemplos;
// Pensar em um esquema de erro mais robusto;
import {closeDatabase, connect, createTestCollection, insertInitialFakeData } from '../../../../tests/testDb';
import { Test } from '../../../../tests/TestCollection';
import { BaseRepository } from './BaseRepository';
import { Document } from 'mongoose';


class TestRepo extends BaseRepository {
    constructor(){
        super(Test);
    }
}

const testRepository = new TestRepo();
const testSample = {name:"Carlos Santana", mutableProperty: 1984}

describe("Base Repository Unit Tests using Test collection and fake extended repo", () => {

    beforeAll(async () => {
        await connect();
        await createTestCollection();
        await insertInitialFakeData();
        
    })

    afterAll(async () => {
        await closeDatabase();
    })

    
    it('Insert sole document succesfully and with integrity', async () => {
        let res = await testRepository.addData(testSample);
        //como a inserção automática de id nesse caso, vamos testar o nome, que é único, para garantia de integridade
        expect(res.name).toBe(testSample.name); 
        expect(res).toBeInstanceOf(Document);
    })
    
    it('Raises duplicated name - and therefore, entry - error', async() => {
        let duplicatedEntry = testSample;
        try{
            let res = await testRepository.addData(duplicatedEntry);
        } catch (err){
            expect(err.search("E11000")).toBeGreaterThan(-1); //código de erro que mongo retorna para "duplicate key"
        }
    })
    
    it('Get all documents available successfully', async() => {
        let returnedDocuments = await testRepository.getAll();
        expect(returnedDocuments).toBeInstanceOf(Array<Document>);
        
        //lembrando que há inserção de um elemento fake logo no início dos testes, e que o teste acima cria mais um  
        let collectionLength = returnedDocuments.length;
        expect(collectionLength).toBe(2);
    })

    it('Update a mutable property successfully', async() => {
        let change = {name:"Sister Rosetta Tharpe", mutableProperty:18 }
        let newSavedData = await testRepository.updateDataByName(change.name, change);
        expect(newSavedData).toBe(true);
    })

    it('Delete given instance succesfully', async() => {
        const name = "Carlos Santana";
        let res = await testRepository.removeByName(name);
        expect(res).toBe(1);
    })

    it('Raise error when trying to delete a inexistent instance', async() => {
        const name = "Carlos Santana";
        let res = await testRepository.removeByName(name);
        expect(res).toBe(0);
    })

    
})