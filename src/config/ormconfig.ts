import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
import { join } from 'path'
dotenv.config()
export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [join(__dirname, '/../**/**.entity{.ts,.js}')],
  migrations: [join(__dirname, '/../**/databases/**/**{.ts,.js}')],
  synchronize: false,
  logging: false,
  ssl: {
    require: false
  },
  migrationsTableName: 'migrations'
})
