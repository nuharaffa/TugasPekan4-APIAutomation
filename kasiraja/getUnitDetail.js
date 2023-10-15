const request = require("supertest")
const { expect }= require("chai")
const getAuthToken = require("./authHelper");
const unitId = require("./addUnit");

describe("getUnitDetail", () => {
    it("Response status is 200", async () => {
      const authToken = await getAuthToken();
      const responseGetUnitDetail = await request("https://kasir-api.belajarqa.com")
        .get(`/units/${unitId}`)
        .set('Authorization', `Bearer ${authToken}`);
  
      console.log(JSON.stringify(await responseGetUnitDetail));
      expect( await responseGetUnitDetail.status).equal(200);

    //   const unitId = responseAddUnit.body.data.unitId;
    //   console.log(unitId);
    //   return unitId;

    });
  });
//   module.exports = unitId;

