import { Produto } from '../../../../domain/models/Produto';
import {closeDatabase, connect } from '../../../../tests/testDb';
import produtoJson from '../../../../tests/jsonMocks/produtoData.json';
import { ProdutoRepository } from './ProdutoRepository';

const produtoRepository = new ProdutoRepository();

describe("Produto Repository Unit Tests", () => {

    beforeAll(async () => {
        await connect();
        Produto.createCollection();
    })

    afterAll(async () => {
        await closeDatabase();
    })

    it('Should have inserted two entries in AdminCollection', async () => {
        for(let i = 0; i < 2; i++) {
            await produtoRepository.addData(produtoJson[i]);
        }
        let count = await Produto.count();
        expect(count).toBe(2);
    })

    it('Should return a Produto instance by its name', async() => {
        let produto = {name:"Tilápia"};
        let produtoByName = await produtoRepository.getByName(produto.name);
        expect(produtoByName).toBeInstanceOf(Produto);
        expect(produtoByName.name).toBe(produto.name);
    })
    
})

