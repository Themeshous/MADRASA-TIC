const userController = require("./user-controller");

// run it if you kwon what are you doing ;-)
describe("user test", () => {
    it('should be able to post declarations', async () => {
        const declaration = {
            date: "12/12/1212",
            titre: "titre",
            description: "mkljsdlkj",
            image: null,
            emetteur: "a.chdqer@esi-sba.dz",
            localisation: "S1",
            etat: null
        };
        const request = {body: {...declaration}};
        const result = await userController.saveDeclarationToDB(request);

        expect(result.declarationSaved).toBe(true);
    });

})