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

            }
        },
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
            }
        }
    }
}

const swaggerOptions: OAS3Options = {
    swaggerDefinition,
    apis: ["../app/application/backoffice/routes/*.ts"]
}

export default swaggerJSDoc(swaggerOptions);