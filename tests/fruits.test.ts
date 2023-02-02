import supertest from "supertest"
import app from "../src/index";

const api = supertest(app);

describe("fruits test", () => {
    it("post fruits route", async () => {
        const body = {
            "name": "banana",
            "price": "400"
        }

        const result = await supertest(app).post("/fruits").send(body);
        const status = result.status;

        expect(status).toEqual(201)
    });

    it("get all fruits", async () => {
        const result = await supertest(app).get("/fruits");
        const status = result.status;
        const body = result.body;
        expect(status).toEqual(200);
        expect(body).toEqual(
            [ { name: 'banana', price: '400', id: 1 } ]
        )
    });

    it("get fruit by id", async () => {
        const id = 1;
        const result = await supertest(app).get(`/fruits/${id}`);
        const status = result.status;
        const body = result.body;
        expect(status).toEqual(200);
        expect(body).toEqual(
            { name: 'banana', price: '400', id: 1 } 
        )
    })
})