const request = require("supertest");
const { expect } = require("chai");
const getAuthToken = require("./authHelper");

describe("addUnit", () => {
  it("Response status is 201", async function () {
    this.timeout(7000); // Set a longer timeout for the entire test case (if needed)

    const authToken = await getAuthToken();
    const responseAddUnitPromise = request("https://kasir-api.belajarqa.com")
      .post("/units")
      .send({
        name: "kg-2",
        description: "weight measurement"
      })
      .set('Authorization', `Bearer ${authToken}`);

    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Timeout exceeded for responseAddUnit.status'));
      }, 5000);
    });

    try {
      const responseAddUnit = await Promise.race([responseAddUnitPromise, timeoutPromise]);

      console.log(JSON.stringify(responseAddUnit));
      expect(responseAddUnit.status).to.equal(201);

      const unitId = responseAddUnit.body.data.unitId;
      console.log(unitId);

      // Return a Promise that resolves when the test is done
      return Promise.resolve();
    } catch (error) {
      // Handle the timeout error or other issues here
      console.error(error);
      throw error;
    }
  });
});