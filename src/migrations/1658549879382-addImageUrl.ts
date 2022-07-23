import { MigrationInterface, QueryRunner } from "typeorm";

export class addImageUrl1658549879382 implements MigrationInterface {
    name = 'addImageUrl1658549879382'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "peoples" ADD "image_url" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "peoples" DROP COLUMN "image_url"`);
    }

}
