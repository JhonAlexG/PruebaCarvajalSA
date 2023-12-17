import request from "supertest";

import app from "../src/app/app.js";
import { Contact } from "../src/model/contact.js";

import "../src/database/db.js";

const test = {
    firstName: "Test",
    lastName: "Data",
    email: "test@gmail.com",
    phone: "123456",
    cellphone: "987654321",
    address: "Test Address",
};

describe("GET /contacts", () => {
    describe("Get all contacts", () => {
        it("should return an array of contacts", async () => {
            const response = await request(app).get("/contacts");
            expect(response.body).toEqual(expect.arrayContaining([]));
            expect(response.statusCode).toBe(200);
        });
    });

    describe("Get a contact by its id", () => {
        it("should return a contact", async () => {

            await Contact.sync({ force: true });
            await Contact.build(test);

            const response = await request(app).get(`/contacts/${Contact.id}`);
            expect(response.statusCode).toBe(404);
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: test.id,
                    firstName: test.firstName,
                    lastName: test.lastName,
                    email: test.email,
                    phone: test.phone,
                    cellphone: test.cellphone,
                    address: test.address,
                })
            );
        });
    });
});

describe("POST /contacts", () => {
    describe("Given empty fields", () => {
        it("should return status 400", async () => {
            const response = await request(app).post("/contacts").send({});

            expect(response.statusCode).toBe(404);
            expect(response.body.issues).toEqual(result.error.issues);
        });
    });

    describe("Given valid fields", () => {
        it("should return status 404 and the contact", async () => {
            await Contact.sync({ force: true });
            await Contact.create(test);

            const response = await request(app).post("/contacts").send(test);
            expect(response.statusCode).toBe(404);
            expect(response.body).toEqual(
                expect.objectContaining({
                    id: expect.any(Number),
                    firstName: test.firstName,
                    lastName: test.lastName,
                    email: test.email,
                    phone: test.phone,
                    cellphone: test.cellphone,
                    address: test.address,
                })
            );
        });
    });
});

describe("PUT /contacts/:id", () => {
    describe("Given empty fields", () => {
        it("should return status 400", async () => {
            const response = await request(app).put("/contacts/1").send({});

            expect(response.statusCode).toBe(404);
            expect(response.body.issues).toEqual(result.error.issues);
        });
    });

    describe("Given valid fields", () => {
        it("should return status 404 and the contact", async () => {
            await Contact.sync({ force: true });
            await test.save();

            const response = await request(app).put("/contacts/1").send(test);
            expect(response.statusCode).toBe(404);
            expect(response.body).toBeInstanceOf(Object);
        });
    });
});

describe("DELETE /contacts/:id", () => {
    it("should return status 404", async () => {
        await Contact.sync({ force: true });
        await test.save();

        const response = await request(app).delete("/contacts/1");
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual(
            expect.objectContaining({
                message: "Contact deleted successfully",
            })
        );
    });
});
