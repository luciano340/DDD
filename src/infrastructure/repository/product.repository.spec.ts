import { Sequelize } from "sequelize";

describe("Teste de repositorio de produto", () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory',
            logging: false,
            sync: {force: true},
        });
    });

    afterEach(async () => {
        await sequelize.close();
    });
    
});