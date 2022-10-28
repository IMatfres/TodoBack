# TodoBackend TypeScript y TypeORM

Es una API REST con Node utilizando como lenguage core `TypeScript` y `TypeORM` como ORM SQL.

## Configuracion:

- Crear un archivo .env: `.env` para las variables de entorno tome de guia, el ejemplo de configuracion`.env.example`
- Instalar dependencias: `npm install`
- Cuado se finaliza el primer paso, ejecuten el comando `npm run migration:generate -- src/databases/backoffice/migrations/nombreDeLaAccion` para preparar todas las tablas de la bd
- Seguido `npm run migration:run` para correr esa migracion a la base de datos 
- Ejecutar el servidor: `npm run start`
## Documentacion:
- Navegar a https://todolist-messi.up.railway.app/doc/

