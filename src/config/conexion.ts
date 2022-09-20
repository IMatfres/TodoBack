import database from './ormconfig'

const connecToDataBase = () => {
  database.initialize().then(() => console.log('Database Connected Successfuly.')).catch(console.error)
}
export default connecToDataBase
