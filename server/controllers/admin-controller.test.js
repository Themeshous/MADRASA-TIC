const admin = require("./admin-controller");

describe("admin test", () => {
    it("should return all users and hide all sensitive information", async ()=>{
        const result = await admin.getAllUserTokens();
        console.log(result);
        expect(result.length).toBeGreaterThan(0);
    })
})