const request = require("supertest")
const { expect }= require("chai")

describe("login", () =>{
    it("Response status is 201", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/authentications")
        .send({
                "email": "sample@ex.com",
                "password": "123adsfadf@"
        })
        // .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxNjgwYmFhLWY2NDYtNDA0MC1iMTEwLTVlNzBhNmZlYzM5NCIsImNvbXBhbnlJZCI6IjY2ZDllMTQ3LTk3N2ItNDEzNS04YWVjLWE4NjI0MjkyNWExNSIsImlhdCI6MTY5NzM1MjYwNn0.pYIIu6JuysNHkmkr8XecS6C8FIfwzLlEPtxxJKBx7Z0')
    console.log(JSON.stringify(await response))
    expect(await response.status).equal(201)

    })
})


// describe("Add Unit", () =>{
//     it("Response status is 201", async () => {
//         const response = await request("https://kasir-api.belajarqa.com")
//             .post("/unit")
//             .send({
//                 "name": "kg-1",
//                 "description": "weight measurement"
//              })
//              .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxNjgwYmFhLWY2NDYtNDA0MC1iMTEwLTVlNzBhNmZlYzM5NCIsImNvbXBhbnlJZCI6IjY2ZDllMTQ3LTk3N2ItNDEzNS04YWVjLWE4NjI0MjkyNWExNSIsImlhdCI6MTY5NzM1MjYwNn0.pYIIu6JuysNHkmkr8XecS6C8FIfwzLlEPtxxJKBx7Z0')
//         console.log(JSON.stringify(await response))
//         expect(await response.status).equal(201)


//     })

// })