import 'reflect-metadata'
import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
dotenv.config()
export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [process.env.ENTITIES_PATH_FOR_BACKOFFICE!],
  migrations: [process.env.MIGRATIONS_PATH_FOR_BACKOFFICE!],
  synchronize: false,
  logging: false,
  ssl: {
    require: false
  },
  migrationsTableName: 'migrations'
})
