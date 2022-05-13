const Gateway = require('./DeclarationGateway');

describe('Declaration Gateway test', () => {
    const declaration = {
        date: "12/12/1212",
        titre: "titre",
        description: "mkljsdlkj",
        image: null,
        emetteur: "a.chdqer@esi-sba.dz",
        localisation: "S1"
    };

    it('should register a declaration into the DB', async function () {
        const result = await Gateway.saveDeclaration(declaration)
        expect(result.declarationSaved).toBe(true);
    });

    it('should get all declarations from DB', async function () {
        const result = await Gateway.getAllDeclaration();
        expect(result.length).toBeGreaterThan(0);
    });

    it('should get all declaration for a specific sender', async function () {
        const result = await Gateway.getDeclarationsOfTheEmail("a.chdqer@esi-sba.dz");
        expect(result.length).toBeGreaterThan(0);
    });

    it('should return declarations not found when email sender does not exists', async function () {
        const unexistedEmail = "a.notExists@esi-sba.dz";
        const {declarationsFound} = await Gateway.getDeclarationsOfTheEmail(unexistedEmail);
        expect(declarationsFound).toBe(false);
    });
});