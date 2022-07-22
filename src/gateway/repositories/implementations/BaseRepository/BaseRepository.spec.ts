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
        //como temos timestamp e a inserção automática de id, vamos testar o nome, que é único, para garantia de integridade
        expect(res.name).toBe(testSample.name); 
        expect(res).toBeInstanceOf(Document);
    })

    it('Get all documents available successfully', async() => {
        let returnedDocuments = await testRepository.getAll();
        expect(returnedDocuments).toBeInstanceOf(Array<Document>);
        
        //lembrando que há inserção de um elemento fake logo no início dos testes, e que o teste acima cria mais um  
        let collectionLength = returnedDocuments.length;
        expect(collectionLength).toBe(2);

    })

    it('Update a mutable property successfully', async() => {

    })

    it('Raises duplicated name - and therefore, entry - error', async() => {

    })

    it('Delete given instance', async() => {

    })

    it('Get a document by id', async() => {

    })


    
})