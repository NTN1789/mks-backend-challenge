import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Migrate1712769975816 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await  queryRunner.createTable(new Table ({
            name: 'users',
             columns:[{
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                    unsigned: true
             }, {
                     name: 'name',
                     type: 'varchar',
                     length: '255',
                     isNullable: false
        
             }, 
                {
                        name: 'email',
                        type: 'varchar',
                        length: '175',
                        isUnique: true
                },
                {
                        name: 'password',
                        type: 'varchar',
                        length: '127',
                        isNullable: false
                },

                {
                        name: 'birthAt',
                        type: 'date',
                        isNullable: false,
                      
                },

                    {
                        name: 'createdAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP'
                    },
                    {
                        name: 'updatedAt',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP'
                    }

                     
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

            await queryRunner.dropTable('users');
    }

}
