const { login } = require('./login');
const express = require('express');
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
require("dotenv").config();


const { DB_HOST } = process.env;

mongoose.set('strictQuery', true);


// const app = express();

app.post("/api/auth/login", login);

// 1) відповідь повина мати статус-код 200
// 2) у відповіді повинен повертатися токен
// 3) у відповіді повинен повертатися об'єкт user з 2 полями email и subscription з типом даних String


describe("test login function", () => {
    beforeAll(() => app.listen(3000));
   
    test("status code - 200", async () => {
        const response = await request(app).post("/api/auth/login");
        console.log(response.status)
        // expect(response.status).toBe(200);
    })
}
)