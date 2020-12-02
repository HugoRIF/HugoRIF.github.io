define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "/Applications/mampstack-7.3.13-0/apache2/htdocs/apiCNdoc/doc/main.js",
    "groupTitle": "/Applications/mampstack-7.3.13-0/apache2/htdocs/apiCNdoc/doc/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/admin_user/login",
    "title": "Inicio de sesion de administrador",
    "version": "1.0.0",
    "name": "Iniciar_Sesion",
    "group": "Notificaciones_Front",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método POST para inciar sesión</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Email del administrador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifrada en sha1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n    \"password\":\"7c222fb2927d828af22f592134e8932480637c0d\"\n }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rol",
            "description": "<p>Arreglo con la informacion del rol.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success User Found \",\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"Nombre\",\n        \"email\": \"correo@gmail.com\",\n        \"gender\": \"Male\",\n        \"birthday\": \"01-01-1970\",\n        \"rol\": {\n            \"id\": 1,\n            \"name\": \"root\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No se encontro al administrador.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Error en validación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":422,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Notificacions.js",
    "groupTitle": "Notificaciones_Front"
  },
  {
    "type": "post",
    "url": "/admin_user/login",
    "title": "Inicio de sesion de administrador",
    "version": "1.0.0",
    "name": "Iniciar_Sesion",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método POST para inciar sesión</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Email del administrador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifrada en sha1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n    \"password\":\"7c222fb2927d828af22f592134e8932480637c0d\"\n }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rol",
            "description": "<p>Arreglo con la informacion del rol.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success User Found \",\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"Nombre\",\n        \"email\": \"correo@gmail.com\",\n        \"gender\": \"Male\",\n        \"birthday\": \"01-01-1970\",\n        \"rol\": {\n            \"id\": 1,\n            \"name\": \"root\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No se encontro al administrador.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Error en validación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":422,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Program.js",
    "groupTitle": "Programa"
  },
  {
    "type": "post",
    "url": "/admin_user/login",
    "title": "Inicio de sesion de administrador",
    "version": "1.0.0",
    "name": "Iniciar_Sesion",
    "group": "Programacion",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método POST para inciar sesión</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Email del administrador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifrada en sha1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n    \"password\":\"7c222fb2927d828af22f592134e8932480637c0d\"\n }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rol",
            "description": "<p>Arreglo con la informacion del rol.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success User Found \",\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"Nombre\",\n        \"email\": \"correo@gmail.com\",\n        \"gender\": \"Male\",\n        \"birthday\": \"01-01-1970\",\n        \"rol\": {\n            \"id\": 1,\n            \"name\": \"root\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No se encontro al administrador.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Error en validación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":422,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Programacion.js",
    "groupTitle": "Programacion"
  },
  {
    "type": "post",
    "url": "/admin_user/login",
    "title": "Inicio de sesion de administrador",
    "version": "1.0.0",
    "name": "Iniciar_Sesion",
    "group": "Seccion",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método POST para inciar sesión</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Email del administrador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifrada en sha1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n    \"password\":\"7c222fb2927d828af22f592134e8932480637c0d\"\n }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rol",
            "description": "<p>Arreglo con la informacion del rol.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success User Found \",\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"Nombre\",\n        \"email\": \"correo@gmail.com\",\n        \"gender\": \"Male\",\n        \"birthday\": \"01-01-1970\",\n        \"rol\": {\n            \"id\": 1,\n            \"name\": \"root\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No se encontro al administrador.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Error en validación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":422,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Section.js",
    "groupTitle": "Seccion"
  },
  {
    "type": "post",
    "url": "/user/reset_verify/{token}",
    "title": "Abre el formulario para reestablecer contraseña",
    "version": "1.0.0",
    "name": "Abrir_formulario_para_rrestablecer_contraseña",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>En el correo de recuperación de contraseña se envia un token, este metodo valida el token, si es valido se muestra el formulario para cambiar la contraseña</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifra en sha1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n\t\"password\":\"25d55ad283aa400af464c76d713c07ad\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Compleañus del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "country",
            "description": "<p>Informacion del pais del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>URL de la imagen del Avatar del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "config",
            "description": "<p>Informacin de la configuración de notificaciones</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Favorites",
            "description": "<p>Lista de favoritos del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Genres",
            "description": "<p>Generos de los programas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success User Found\"\n \"data\" : {\n    \"id\": 10,\n        \"name\": \"Becarios\",\n        \"email\": \"claronetworks.media@gmail.com\",\n        \"gender\": \"M\",\n        \"birthday\": \"1985-01-02\",\n        \"avatar\": \"http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg\",\n        \"country\": {\n            \"id\": 4,\n            \"name\": \"Chile\",\n            \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg\"\n        },\n        \"config\": {\n            \"beginning\": 0,\n            \"minutes\": 0,\n            \"email\": 0,\n            \"web\": 0\n        },\n        \"favorites\":[\n            {\n                \"id_section\": 1,\n                \"section\": \"Canal Claro\",\n                \"programs\": [\n                    {\n                        \"program_id\": 2,\n                        \"chapter_id\": 161,\n                        \"program_title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"chapter_title\": \"SAGA DEL SANTUARIO\",\n                        \"time\": \"8:30\",\n                        \"rating\": \"PG\",\n                        \"active\": 1,\n                        \"sinopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                        \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                        \"channel\": \"Canal Claro\"\n                    }\n                ]\n            }\n        ],\n        \"genres\":[\n             {\n                \"id\": 1,\n                \"title\": \"Kids\"\n            },\n        ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reset_verify/{token}",
    "title": "Abre el formulario para reestablecer contraseña",
    "version": "1.0.0",
    "name": "Abrir_formulario_para_rrestablecer_contraseña",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>En el correo de recuperación de contraseña se envia un token, este metodo valida el token, si es valido se muestra el formulario para cambiar la contraseña</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifra en sha1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n\t\"password\":\"25d55ad283aa400af464c76d713c07ad\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Compleañus del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "country",
            "description": "<p>Informacion del pais del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>URL de la imagen del Avatar del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "config",
            "description": "<p>Informacin de la configuración de notificaciones</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Favorites",
            "description": "<p>Lista de favoritos del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Genres",
            "description": "<p>Generos de los programas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success User Found\"\n \"data\" : {\n    \"id\": 10,\n        \"name\": \"Becarios\",\n        \"email\": \"claronetworks.media@gmail.com\",\n        \"gender\": \"M\",\n        \"birthday\": \"1985-01-02\",\n        \"avatar\": \"http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg\",\n        \"country\": {\n            \"id\": 4,\n            \"name\": \"Chile\",\n            \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg\"\n        },\n        \"config\": {\n            \"beginning\": 0,\n            \"minutes\": 0,\n            \"email\": 0,\n            \"web\": 0\n        },\n        \"favorites\":[\n            {\n                \"id_section\": 1,\n                \"section\": \"Canal Claro\",\n                \"programs\": [\n                    {\n                        \"program_id\": 2,\n                        \"chapter_id\": 161,\n                        \"program_title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"chapter_title\": \"SAGA DEL SANTUARIO\",\n                        \"time\": \"8:30\",\n                        \"rating\": \"PG\",\n                        \"active\": 1,\n                        \"sinopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                        \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                        \"channel\": \"Canal Claro\"\n                    }\n                ]\n            }\n        ],\n        \"genres\":[\n             {\n                \"id\": 1,\n                \"title\": \"Kids\"\n            },\n        ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/user/{id_user}",
    "title": "Eliminar un usuario de front.",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "description": "<p>DELETE Method, only logic delete</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_admin",
            "description": "<p>Id of the user who made the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_user",
            "description": "<p>Id of the user to delete.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "curl -X DELETE http://ClaroNetworks.com/api/user/?id_admin=1&user=2&key=123abc&id=1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Delete\"\n \"data\" : \n     {\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key or Unathorized User\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/mail",
    "title": "Correo que de verificación",
    "version": "1.0.0",
    "name": "Enviar_correo_de_verificacion",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Este método se usa internamente al momento de que el usuario se registra, se envia un correo apra que el usuario verifique su cuenta.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifra en sha1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n\t\"password\":\"25d55ad283aa400af464c76d713c07ad\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Compleañus del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "country",
            "description": "<p>Informacion del pais del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>URL de la imagen del Avatar del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "config",
            "description": "<p>Informacin de la configuración de notificaciones</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Favorites",
            "description": "<p>Lista de favoritos del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Genres",
            "description": "<p>Generos de los programas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success User Found\"\n \"data\" : {\n    \"id\": 10,\n        \"name\": \"Becarios\",\n        \"email\": \"claronetworks.media@gmail.com\",\n        \"gender\": \"M\",\n        \"birthday\": \"1985-01-02\",\n        \"avatar\": \"http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg\",\n        \"country\": {\n            \"id\": 4,\n            \"name\": \"Chile\",\n            \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg\"\n        },\n        \"config\": {\n            \"beginning\": 0,\n            \"minutes\": 0,\n            \"email\": 0,\n            \"web\": 0\n        },\n        \"favorites\":[\n            {\n                \"id_section\": 1,\n                \"section\": \"Canal Claro\",\n                \"programs\": [\n                    {\n                        \"program_id\": 2,\n                        \"chapter_id\": 161,\n                        \"program_title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"chapter_title\": \"SAGA DEL SANTUARIO\",\n                        \"time\": \"8:30\",\n                        \"rating\": \"PG\",\n                        \"active\": 1,\n                        \"sinopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                        \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                        \"channel\": \"Canal Claro\"\n                    }\n                ]\n            }\n        ],\n        \"genres\":[\n             {\n                \"id\": 1,\n                \"title\": \"Kids\"\n            },\n        ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/verify",
    "title": "Verificacion del usuario",
    "version": "1.0.0",
    "name": "Enviar_correo_de_verificacion",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Este metodo verifica el corredo del usuario del front y activa su cuenta</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifra en sha1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n\t\"password\":\"25d55ad283aa400af464c76d713c07ad\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Compleañus del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "country",
            "description": "<p>Informacion del pais del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>URL de la imagen del Avatar del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "config",
            "description": "<p>Informacin de la configuración de notificaciones</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Favorites",
            "description": "<p>Lista de favoritos del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Genres",
            "description": "<p>Generos de los programas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success User Found\"\n \"data\" : {\n    \"id\": 10,\n        \"name\": \"Becarios\",\n        \"email\": \"claronetworks.media@gmail.com\",\n        \"gender\": \"M\",\n        \"birthday\": \"1985-01-02\",\n        \"avatar\": \"http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg\",\n        \"country\": {\n            \"id\": 4,\n            \"name\": \"Chile\",\n            \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg\"\n        },\n        \"config\": {\n            \"beginning\": 0,\n            \"minutes\": 0,\n            \"email\": 0,\n            \"web\": 0\n        },\n        \"favorites\":[\n            {\n                \"id_section\": 1,\n                \"section\": \"Canal Claro\",\n                \"programs\": [\n                    {\n                        \"program_id\": 2,\n                        \"chapter_id\": 161,\n                        \"program_title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"chapter_title\": \"SAGA DEL SANTUARIO\",\n                        \"time\": \"8:30\",\n                        \"rating\": \"PG\",\n                        \"active\": 1,\n                        \"sinopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                        \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                        \"channel\": \"Canal Claro\"\n                    }\n                ]\n            }\n        ],\n        \"genres\":[\n             {\n                \"id\": 1,\n                \"title\": \"Kids\"\n            },\n        ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reset_send",
    "title": "Enviar correo recuperar contraseña",
    "version": "1.0.0",
    "name": "Enviar_correo_recuperar_contraseña",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Se envia un correo con las instruccciones para recueprar la contraseña del usuario</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifra en sha1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n\t\"password\":\"25d55ad283aa400af464c76d713c07ad\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Compleañus del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "country",
            "description": "<p>Informacion del pais del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>URL de la imagen del Avatar del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "config",
            "description": "<p>Informacin de la configuración de notificaciones</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Favorites",
            "description": "<p>Lista de favoritos del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Genres",
            "description": "<p>Generos de los programas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success User Found\"\n \"data\" : {\n    \"id\": 10,\n        \"name\": \"Becarios\",\n        \"email\": \"claronetworks.media@gmail.com\",\n        \"gender\": \"M\",\n        \"birthday\": \"1985-01-02\",\n        \"avatar\": \"http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg\",\n        \"country\": {\n            \"id\": 4,\n            \"name\": \"Chile\",\n            \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg\"\n        },\n        \"config\": {\n            \"beginning\": 0,\n            \"minutes\": 0,\n            \"email\": 0,\n            \"web\": 0\n        },\n        \"favorites\":[\n            {\n                \"id_section\": 1,\n                \"section\": \"Canal Claro\",\n                \"programs\": [\n                    {\n                        \"program_id\": 2,\n                        \"chapter_id\": 161,\n                        \"program_title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"chapter_title\": \"SAGA DEL SANTUARIO\",\n                        \"time\": \"8:30\",\n                        \"rating\": \"PG\",\n                        \"active\": 1,\n                        \"sinopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                        \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                        \"channel\": \"Canal Claro\"\n                    }\n                ]\n            }\n        ],\n        \"genres\":[\n             {\n                \"id\": 1,\n                \"title\": \"Kids\"\n            },\n        ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Obetner lista de todos los usuarios del front.",
    "version": "1.0.0",
    "name": "GetAll",
    "group": "User",
    "description": "<p>Método GET para obtner la lista de todos los usuarios activos en el Front.</p>",
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/user",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "users",
            "description": "<p>Array with the information od the  users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Found\"\n \"data\" : [\n     {\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n         \"active\": 0,\n         \"created_at\": 0,\n         \"updated_at\": 0\n     },\n     {\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n         \"active\": 0,\n         \"created_at\": 0,\n         \"updated_at\": 0,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/{id}",
    "title": "Obetenr la informacion de usuario especifico",
    "version": "1.0.0",
    "name": "GetEspecific",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método GEt que regresa toda la infromacion relacionada con el usuario solicitado</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user for whom the information is wanted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "curl -i http://ClaroNetworks.com/api/user/?key=123abc&id=1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Found\"\n \"data\" : \n     {\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n         \"active\": 0,\n         \"created_at\": 0,\n         \"updated_at\": 0\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given id. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Iniciar sesion usuario front",
    "version": "1.0.0",
    "name": "Iniciar_sesion",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método POST para que un usuario incie sesión</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifra en sha1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n\t\"password\":\"25d55ad283aa400af464c76d713c07ad\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Compleañus del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "country",
            "description": "<p>Informacion del pais del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>URL de la imagen del Avatar del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "config",
            "description": "<p>Informacin de la configuración de notificaciones</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Favorites",
            "description": "<p>Lista de favoritos del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Genres",
            "description": "<p>Generos de los programas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success User Found\"\n \"data\" : {\n    \"id\": 10,\n        \"name\": \"Becarios\",\n        \"email\": \"claronetworks.media@gmail.com\",\n        \"gender\": \"M\",\n        \"birthday\": \"1985-01-02\",\n        \"avatar\": \"http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg\",\n        \"country\": {\n            \"id\": 4,\n            \"name\": \"Chile\",\n            \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg\"\n        },\n        \"config\": {\n            \"beginning\": 0,\n            \"minutes\": 0,\n            \"email\": 0,\n            \"web\": 0\n        },\n        \"favorites\":[\n            {\n                \"id_section\": 1,\n                \"section\": \"Canal Claro\",\n                \"programs\": [\n                    {\n                        \"program_id\": 2,\n                        \"chapter_id\": 161,\n                        \"program_title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"chapter_title\": \"SAGA DEL SANTUARIO\",\n                        \"time\": \"8:30\",\n                        \"rating\": \"PG\",\n                        \"active\": 1,\n                        \"sinopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                        \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                        \"channel\": \"Canal Claro\"\n                    }\n                ]\n            }\n        ],\n        \"genres\":[\n             {\n                \"id\": 1,\n                \"title\": \"Kids\"\n            },\n        ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Crear un usuario Nuevo",
    "version": "1.0.0",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>POST Method to Create a new User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the   User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the user Male o Female</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "curl --data \"key=value1&name=value2&mail=value3...\" http://ClaroNetworks.com/api/user",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":201,\n \"message\":\"Success User Created\"\n \"data\" : {\n     \"id\" : 1\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change an User",
    "version": "1.0.0",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Method to change the infomation of an user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the admin who made the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the   User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the user Male o Female</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>URL from the image if the avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "$ curl -X PUT -d \"key=value1&name=value2&mail=value3...\" http://ClaroNetworks.com/api/user",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":201,\n \"message\":\"Success User Changed\"\n \"data\" : {\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key or the User is unathorized for this method\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/reset_password/",
    "title": "Reestablece la contraseña",
    "version": "1.0.0",
    "name": "Reestablecer_la_contraseña",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Una vez mostrado el formulario para reestablecer contraseña este metodo cambia segun los datos proporcianados</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifra en sha1.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n\t\"password\":\"25d55ad283aa400af464c76d713c07ad\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Compleañus del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "country",
            "description": "<p>Informacion del pais del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>URL de la imagen del Avatar del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "config",
            "description": "<p>Informacin de la configuración de notificaciones</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Favorites",
            "description": "<p>Lista de favoritos del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "Genres",
            "description": "<p>Generos de los programas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "respuesta exitosa :",
          "content": "{\n \"code\":200,\n \"message\":\"Success User Found\"\n \"data\" : {\n    \"id\": 10,\n        \"name\": \"Becarios\",\n        \"email\": \"claronetworks.media@gmail.com\",\n        \"gender\": \"M\",\n        \"birthday\": \"1985-01-02\",\n        \"avatar\": \"http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg\",\n        \"country\": {\n            \"id\": 4,\n            \"name\": \"Chile\",\n            \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg\"\n        },\n        \"config\": {\n            \"beginning\": 0,\n            \"minutes\": 0,\n            \"email\": 0,\n            \"web\": 0\n        },\n        \"favorites\":[\n            {\n                \"id_section\": 1,\n                \"section\": \"Canal Claro\",\n                \"programs\": [\n                    {\n                        \"program_id\": 2,\n                        \"chapter_id\": 161,\n                        \"program_title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"chapter_title\": \"SAGA DEL SANTUARIO\",\n                        \"time\": \"8:30\",\n                        \"rating\": \"PG\",\n                        \"active\": 1,\n                        \"sinopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                        \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                        \"channel\": \"Canal Claro\"\n                    }\n                ]\n            }\n        ],\n        \"genres\":[\n             {\n                \"id\": 1,\n                \"title\": \"Kids\"\n            },\n        ]\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/admin_user/{key}{id_admin}{id_user}",
    "title": "Logic delete the specific user.",
    "version": "1.0.0",
    "name": "DeleteUser",
    "group": "Usuario_Administrador",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "description": "<p>DELETE Method, only logic delete</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_admin",
            "description": "<p>Id of the user who made the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_user",
            "description": "<p>Id of the user to delete.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -X DELETE http://ClaroNetworks.com/api/admin_user/?id_admin=1&admin_user=2&key=123abc&id=1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Delete\"\n \"data\" : \n     {\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key or Unathorized Admin user\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Usuario_Administrador"
  },
  {
    "type": "post",
    "url": "/admin_user/AdminEdition",
    "title": "Editar datos del Administrador",
    "version": "1.0.0",
    "name": "EditUser",
    "group": "Usuario_Administrador",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Método POST para editar la infromacion de un administrador, se deben mandar todos los parametros, si uno no se quiere editar se debe mandar en NULL</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the admin who made the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the   User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the user Male o Female</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rol",
            "description": "<p>The id of the user´s rol.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "{\n    \"id_root\":1,\n    \"id_admin_user\":3,\n    \"name\":\"Nombre Editar\",\n    \"email\":\"correo@editar.com\",\n    \"password\":null,\n    \"password_confirm\":null,\n    \"rol_id\":null\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":201,\n \"message\":\"Success Admin User Changed\"\n \"data\" : {\n    \"id_root\":1,\n    \"id_admin_user\":3,\n    \"name\":\"Nombre Editar\",\n    \"email\":\"correo@editar.com\",\n    \"password\":null,\n    \"password_confirm\":null,\n    \"rol_id\":null\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Usuario_Administrador"
  },
  {
    "type": "get",
    "url": "/admin_user/all/{id}",
    "title": "Obtener la lista de todos los administradores",
    "version": "1.0.0",
    "name": "GetAll",
    "group": "Usuario_Administrador",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "description": "<p>Método par obtener la lista de todos los usuarios administradoes</p>",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/admin_user/all/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "Arreglo",
            "description": "<p>con la lista de todos los usuarios</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\": 200,\n    \"meessage\": \"Success Admin Users Found\",\n    \"data\": [\n        {\n            \"id\": 1,\n            \"created_at\": \"2020-01-01\",\n            \"updated_at\": 2020-01-01,\n            \"name\": \"Nombre\",\n            \"email\": \"correo@gmail.com\"\n            \"gender\": null,\n            \"birthday\": null,\n            \"active\": 1,\n            \"rol_id\": 1\n        }\n ]\n}\n\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Usuario_Administrador"
  },
  {
    "type": "get",
    "url": "/admin_user/{id}",
    "title": "Obtener información de un administrador en especifico.",
    "version": "1.0.0",
    "name": "GetEspecific",
    "group": "Usuario_Administrador",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método GEt para obtener la información de un administrador especifico</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del usuario que queremos obtener</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "curl -i http://ClaroNetworks.com/api/admin_user/?key=123abc&id=1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\": 200,\n    \"meessage\": \"Success User Found\",\n    \"data\": {\n        \"id\": 1,\n        \"created_at\": null,\n        \"updated_at\": \"2020-11-18 20:15:35\",\n        \"name\": \"Nombre\",\n        \"email\": \"correo@gmail.com\",\n        \"gender\": null,\n        \"birthday\": null,\n        \"active\": 1,\n        \"rol_id\": 1,\n        \"rol\": {\n            \"id\": 1,\n            \"name\": \"root\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given id. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Usuario_Administrador"
  },
  {
    "type": "post",
    "url": "/admin_user/login",
    "title": "Inicio de sesion de administrador",
    "version": "1.0.0",
    "name": "Iniciar_Sesion",
    "group": "Usuario_Administrador",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método POST para inciar sesión</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Email del administrador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifrada en sha1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n    \"password\":\"7c222fb2927d828af22f592134e8932480637c0d\"\n }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rol",
            "description": "<p>Arreglo con la informacion del rol.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success User Found \",\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"Nombre\",\n        \"email\": \"correo@gmail.com\",\n        \"gender\": \"Male\",\n        \"birthday\": \"01-01-1970\",\n        \"rol\": {\n            \"id\": 1,\n            \"name\": \"root\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No se encontro al administrador.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Error en validación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":422,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Usuario_Administrador"
  },
  {
    "type": "post",
    "url": "/admin_user",
    "title": "Crear un usuario administrador",
    "version": "1.0.0",
    "name": "PostUser",
    "group": "Usuario_Administrador",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Método POST para crear un nuevo usuario administrador</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rol_id",
            "description": "<p>id del rol que tendra el usuario.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "admin_user_id",
            "description": "<p>id del administrador que crea el usuario nuevo.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de petición:",
        "content": "{\n \"name\":\"Nombre De usuario\",\n \"email\":\"ejemplo@correo.com\",\n \"rol_id\":1,\n \"admin_user_id\":1\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Respuesta exitosa :",
          "content": "{\n \"code\":201,\n \"message\":\"Success Admin User Created\"\n \"data\" : {\n     \"id\" : 1\n     \"name\" : \"Nombre\"\n     \"mail\" : \"correo@gmail.com\"\n     \"gender\" : \"Male\"\n     \"Date\"  : \"01/01/2000\"\n     \"rol\" : 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>The admin user is not root</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":422,\n \"message\":\"Validation Error\"\n \"data\" : {\n    \"name\": [\n            \"The name field is required.\"\n        ]\n }\n}",
          "type": "json"
        },
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":400,\n \"message\":\"NO se tienen los permisos para hacer esta accion\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Usuario_Administrador"
  },
  {
    "type": "post",
    "url": "/admin_user/login",
    "title": "Inicio de sesion de administrador",
    "version": "1.0.0",
    "name": "Iniciar_Sesion",
    "group": "Versiones",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método POST para inciar sesión</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Email del administrador</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña cifrada en sha1</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "{\n\t\"email\":\"correo@gmail.com\",\n    \"password\":\"7c222fb2927d828af22f592134e8932480637c0d\"\n }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Correo del administrador.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Genero del administrador</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Fecha de nacimiento.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "rol",
            "description": "<p>Arreglo con la informacion del rol.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success User Found \",\n    \"data\": {\n        \"id\": 1,\n        \"name\": \"Nombre\",\n        \"email\": \"correo@gmail.com\",\n        \"gender\": \"Male\",\n        \"birthday\": \"01-01-1970\",\n        \"rol\": {\n            \"id\": 1,\n            \"name\": \"root\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No se encontro al administrador.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Error en validación del usuario.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":422,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Versions.js",
    "groupTitle": "Versiones"
  }
] });
