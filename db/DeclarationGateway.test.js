const Gateway = require('./DeclarationGateway');

describe('Declaration Gateway test', () => {
    const declaration = {
        date: "12/12/1212",
        titre: "titre",
        description: "mkljsdlkj",
        image: "null",
        emetteur: "a.chdqer@esi-sba.dz",
        localisation: "S1",
        type: "type",
        etat: "etat"
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
        const result = await Gateway.getDeclarationsOfTheEmail("a.cjmkd@esi-sba.dz");
        expect(result.length).toBeGreaterThan(0);
    });

    it('should return declarations not found when email sender does not exists', async function () {
        const unexistedEmail = "a.notExists@esi-sba.dz";
        const {declarationsFound} = await Gateway.getDeclarationsOfTheEmail(unexistedEmail);
        expect(declarationsFound).toBe(false);
    });

    it('should get a declaration by id', async () => {
        const id = 1;
        const result = await Gateway.getDeclarationById(id);
        expect(result.id_dec).toBe(id);
    });

    it('should modify the state of declaration', async function () {
        const id = 1;
        const newState = "new state";
        const [result] = await Gateway.changeDeclarationState(id, newState);
        expect(result.affectedRows).toBe(1);

    });

    it('should modify the service of declaration', async function () {
        const id = 1;
        const service = "new service";
        const [result] = await Gateway.changeDeclarationService(id, service);
        expect(result.affectedRows).toBe(1);

    });

    it('should get declarations by service', async function () {
        const service = "security";
        const result = await Gateway.getNonRejectedDeclarationsByService(service);
        expect(result.length).toBeGreaterThan(0);
    });
});