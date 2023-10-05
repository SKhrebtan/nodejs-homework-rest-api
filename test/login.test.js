const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
require("dotenv").config();

const { DB_HOST } = process.env;

mongoose.set('strictQuery', true);

// 1) відповідь повина мати статус-код 200
// 2) у відповіді повинен повертатися токен
// 3) у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String

describe("Login", () => {

    beforeAll( () => {
        mongoose.connect(DB_HOST)
        .then(() => {
            app.listen(3000)
        })})
    afterAll(async () => {
        await mongoose.disconnect(DB_HOST)
    })

    test("should return status 200", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "tuzik123@gmail.com",
      password: "tuzik123"
    });
          expect(response.statusCode).toBe(200);
    });

    test("should return token", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "tuzik123@gmail.com",
      password: "tuzik123"
    });
        expect(typeof response.body.token === "string").toBe(true); 
    });

    test("should return token", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "tuzik123@gmail.com",
      password: "tuzik123"
    });
         expect(typeof response.body.user === "object").toBe(true); 
        expect(typeof response.body.user.email === "string").toBe(true);
        expect(typeof response.body.user.subscription === "string").toBe(true);    
    });
});