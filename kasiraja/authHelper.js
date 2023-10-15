const request = require("supertest");

async function getAuthToken() {
  const response = await request("https://kasir-api.belajarqa.com")
    .post("/authentications")
    .send({
      email: "sample@ex.com",
      password: "123adsfadf@"
    });

  const authToken = response.body.data.accessToken;
  return authToken;
}

module.exports = getAuthToken;