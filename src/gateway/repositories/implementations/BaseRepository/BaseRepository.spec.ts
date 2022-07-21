//Reformular essas conexões e usar mongoose de fato.

// Testar se o retorno bate com o tipo adequado, utilizando o cliente e o admin como exemplos;
// Pensar em um esquema de erro mais robusto;
import {MongoClient} from 'mongodb'; 

describe("Base Repository Unit Tests", () => {

    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect("mongodb://localhost:27017");
        db = await connection.db("fish_me");
    })

    afterAll(async () => {
        connection.close();
    })

    it('Should insert a document successfully', () => {
        
        //criar cliente aqui mesmo

        let wi = db.collections('clientes');
        wi.insertOne().exec().then(res => res);
        console.log(wi);
        expect(wi).toBeTruthy();
    })


})