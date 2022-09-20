import { MigrationInterface, QueryRunner } from "typeorm";

export class createtabd1663516356533 implements MigrationInterface {
    name = 'createtabd1663516356533'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tasks\` (\`id\` varchar(255) NOT NULL, \`titulo\` varchar(255) NOT NULL, \`completada\` tinyint NOT NULL DEFAULT 0, \`descripcion\` varchar(255) NOT NULL, \`estado\` varchar(255) NOT NULL, \`userid\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`tasks\``);
    }

}
