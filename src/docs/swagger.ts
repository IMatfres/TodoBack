import swaggerJSDoc, { OAS3Definition, OAS3Options } from 'swagger-jsdoc'

const swaggerDefinition: OAS3Definition = {
    openapi: "3.0.0",
    info: {
        title: "API de lista de tareas",
        version: "1.0.0",
        termsOfService: "http://localhost:3000/terms",
        contact: {
            "email": "mati.estunlp@gmail.com"
        }
    },
    servers: [
        {
            url: "https://app-todo-.up.railway.app/api",
            description: "dev"
        },
        {
            url: "http://localhost:3000/api",
            description: "dev"
        }
    ],
    paths: {
        "/users/login": {
            "post": {
                "summary": "Logueo de un usuario",
                "description": "Esta ruta es responsable de loguear un usuario",
                "tags": ["athentication"],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref":"#/components/schemas/login"
                            },
                            "examples": {
                                "login": {
                                    "value": {
                                        "email": "alvaro.unlp@gmail.com",
                                        "password": "ale123"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "logueado correctamente",
                    },
                    "404": {
                        "description": "error password or email not found"
                    }
                }
            }
        },
        "/users/register": {
            "post": {
                "summary": "Registro de un usuario",
                "description": "Esta ruta es responsable de registrar un usuario",
                "tags": ["athentication"],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/register"
                            },
                            examples: {
                                "register": {
                                    "value": {
                                        "email": "test@gmail.com",
                                        "password": "test123",
                                        "username": "test312"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": " registrado correctamente",
                    },
                    "409": {
                        "description": "email already exists"
                    }
                }
            }
        },
        "/users/{id}": {
            "get": {
                "description": "Busca un usuario por id",
                "summary": "Busca un usuario por id",
                "tags": ["users"],
                "security": [{ "bearerAuth": [] }],
                "parameters": [
                    {
                        "name":"id",
                        "in":"path",
                        "description": "id de usuario para la busqueda",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "ok",
                    },
                    "400": {
                        "description": "you are not authorized to perform this operation"
                    },
                    "404": {
                        "description": "id does not exist"
                    }
                }

            },
            "delete": {
                "description": "elimina un usuario por el id",
                "summary": "eliminar usuario",
                "tags": ["users"],
                "security": [{ "bearerAuth": [] }],
                "parameters": [
                    {
                        "name":"id",
                        "in":"path",
                        "description": "id de usuario para la busqueda",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "ok",
                    },
                    "400": {
                        "description": "you are not authorized to perform this operation"
                    },
                    "404": {
                        "description": "id does not exist"
                    }
                }
            },
            "put": {
                "description": "actuliza la informacion de un usuario por id",
                "summary": "actualizar usuario",
                "tags": ["users"],
                "security": [{ "bearerAuth": [] }],
                "parameters": [
                    {
                        "name":"id",
                        "in":"path",
                        "description": "id de usuario para la busqueda",
                        "required": true
                    }
                ],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/register"
                            },
                            examples: {
                                "update": {
                                    "value": {
                                        "email": "update@gmail.com",
                                        "password": "update123",
                                        "username": "update312"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "200": {
                        "description": "ok",
                    },
                    "400": {
                        "description": "you are not authorized"
                    },
                    "404": {
                        "description": "id does not exist"
                    }
                }
            }
        },
        "/tasks": {
            "post": {
                "summary": "Registro de una tarea ",
                "description": "Esta ruta es responsable de registrar la tarea de un usuario",
                "tags": ["tasks"],
                "security": [{ "bearerAuth": [] }],
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "$ref": "#/components/schemas/tarea"
                            },
                            examples: {
                                "tarea example": {
                                    "value": {
                                        "titulo": "nombre de la tarea a cargar",
                                        "descripcion": "una descripcion",
                                        "estado": "el estado de la misma"
                                    }
                                }
                            }
                        }
                    }
                },
                "responses": {
                    "201": {
                        "description": "ok",
                    },
                    "400": {
                        "description": "you are not authorized"
                        
                    },
                    "409": {
                        "description": "task already exists"
                    }
                }
            },
            "get": {
                "summary": "Lista de tareas de un usuario",
                "description": "Esta ruta es responsable de mostrar todas las tareas del usuario logueado",
                "tags": ["tasks"],
                "security": [{ "bearerAuth": [] }],
                "responses": {
                    "200": {
                        "description": "lista de tareas",
                    },
                    "400": {
                        "description": "you are not authorized to perform this operation"
                    }
                }
                
            }
        }
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            }
        },
        schemas: {
            login: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    }
                }
            },
            register: {
                type: "object",
                required: ["email", "password", "username"],
                properties: {
                    email: {
                        type: "string"
                    },
                    password: {
                        type: "string"
                    },
                    username: {
                        type: "string"
                    }
                }
            },
            tarea: {
                type: "object",
                required: ["titulo", "descripcion", "estado"],
                properties: {
                    titulo: {
                        type: "string"
                    },
                    descripcion: {
                        type: "string"
                    },
                    estado: {
                        type: "string"
                    }
                }
            }
        }
    }
}

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["../app/application/backoffice/routes/*.ts"]
}

export default swaggerJSDoc(swaggerOptions);