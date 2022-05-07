const Gateway = require('./DeclarationGateway');

describe('Declaration Gateway test', () => {
    describe('adding data to DB', () => {
        const declaration = {
            date: "12/12/1212",
            titre: "titre",
            description: "mkljsdlkj",
            image: null,
            emetteur: "a.chdqer@esi-sba.dz",
            localisation: "S1",
            etat: null
        };

        it('should register a declaration into the DB', async function () {
            const result = await Gateway.saveDeclaration(declaration)
            expect(result.declarationSaved).toBe(true);
        });

        describe('getting data from DB', () => {
            it('should get all declarations from DB', async function () {
                const result = await Gateway.getAllDeclaration();
                console.log(result)
                expect(result.length).toBeGreaterThan(0);
            });
        })
    })
});