import { MigrationInterface, QueryRunner } from "typeorm";

export class createtables1663516240988 implements MigrationInterface {
    name = 'createtables1663516240988'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`task_entity\` (\`id\` varchar(255) NOT NULL, \`titulo\` varchar(255) NOT NULL, \`completada\` tinyint NOT NULL DEFAULT 0, \`descripcion\` varchar(255) NOT NULL, \`estado\` varchar(255) NOT NULL, \`userid\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`username\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`task_entity\``);
    }

}
