import { MigrationInterface, QueryRunner } from "typeorm";

export class createPeople1658437951575 implements MigrationInterface {
    name = 'createPeople1658437951575'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "peoples" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying(128) NOT NULL, "cpf" character varying(11) NOT NULL, "surname" character varying(128) NOT NULL, "gender" character varying(1) NOT NULL, "cellphone" character varying(11) NOT NULL, "address" character varying(255) NOT NULL, "comments" character varying(255), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_a06cfec2fadb530a94eca778629" UNIQUE ("cpf"), CONSTRAINT "UQ_432570d67e9ab99ab9ca0023036" UNIQUE ("cellphone"), CONSTRAINT "PK_6e07258072dcc27e4935e1f075e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "peoples"`);
    }

}
