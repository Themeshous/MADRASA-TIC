const admin = require("./admin-controller");

describe("admin test", () => {
    it("should return all users and hide all sensitive information", async ()=>{
        const result = await admin.getAllUserTokens();
        console.log(result);
        expect(result.length).toBeGreaterThan(0);
    })

    it('should activate and desativate users', async () => {
        const email = "a.chdqer@esi-sba.dz";
        const request = {body: {email: email, isActive: false}};
        await admin.activateOrDeactivateUser(request);
        const result = await admin.getAllUserTokens();
        expect(result[0].email).toBe(email);
        expect(result[0].isActive).toBe(0);
    });
})