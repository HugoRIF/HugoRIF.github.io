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
    "url": "/program/CaptureImagesForChapter",
    "title": "Agregar Imagenes a un programa",
    "version": "1.0.0",
    "name": "Agregar_imagenes_al_capitulo",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Este metodo sirve para agregar imagenes a un capitulo, si se detecta que el programa al que pertenece el capitulo no tiene imagenes (default) la iamgen subida es posicionada como tal y los posteriores capitulos tendran como imagen default la proporcinada en esta API, solo se ponene las  images que se requieren subir/cambair, si no se necesita alguna mandar null</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "usuario_id",
            "description": "<p>Id del administrador</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "chapter_id",
            "description": "<p>Id del capitulo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thumbnail_list_horizontal",
            "description": "<p>Imagen horizontal que aparece en los carruseles (imagen principal)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "thumbnail_list_vertical",
            "description": "<p>Imagen horizontal que aparece en los carruseles del Home</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_synopsis",
            "description": "<p>Imagen horizontal que aparece en el landing de sinopsis del capitulo(imagen principal sinopsis)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_background_x",
            "description": "<p>Imagen horizontal que aparece en el carrusel principal del landing de sinopsis</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "image_synopsis_frame_x",
            "description": "<p>Imagen horizontal de muestra para el landing de sinopsis, aprece al final</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "{\n\t\n    \"usuario_id\":1,\n    \"chapter_id\":9,\n    \"thumbnail_list_horizontal\":null,\n    \"thumbnail_list_vertical\":\"http://www.claronetworks.openofficedospuntocero.info/images/concert-channel/section-home-vertical/Queen.jpg\",\n    \"image_synopsis\":null,\n    \"image_background_1\":null,\n    \"image_background_2\":null,\n    \"image_background_3\":null,\n    \"image_synopsis_frame_1\":null,\n    \"image_synopsis_frame_2\":null,\n    \"image_synopsis_frame_3\":null\n }",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Se agregaron/actualizaron la imagenes solicitadas\",\n    \"data\": {\n        \"chapter\": 9,\n        \"accion\": \"SI se pudieron insertar imagenes default, si ya exisitan no se modificaron si no existian estan actualizadas\"\n    }\n}",
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
    "url": "/program/changePrograming",
    "title": "Cambiar Progrmacion",
    "version": "1.0.0",
    "name": "Cambiar_Progrmacion",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Cuando se usa la API capturePrograming, si se detecta que el dia que se sube ya cuenta con progrmacion, se le pregunta al usuario si se reemplaza esta infromación o se agrega a la que esta, este método POST permite cambiar/agregar la programación</p>",
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
    "url": "/program/CapturePrograming",
    "title": "capturar la programación",
    "version": "1.0.0",
    "name": "Capturar_Programación",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método POST para capturar la informacion directamente de la plantilla de excel procesada por el backoffice, no se recomienda hacar esta peticion fuera del algoritmo creado para subir la programacion con un excel</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "usuario_id",
            "description": "<p>id del usuario administrador que quiere subir programación</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "landing_id",
            "description": "<p>id del canal al que se le agregaran los programas</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "version_id",
            "description": "<p>id de la version a la que se le agregaran los programas, el 0 es para la version maestra, esto se calcula en automatico con el algoritmo creado</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "version_number",
            "description": "<p>numero de la version ( se eliminara en una version posterior)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "programs",
            "description": "<p>Lista de los programas que se agregaran, deben incluir forzosamente todos los atributos mostrados</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "{\n    \"usuario_id\":1,\n    \"landing_id\":1,\n    \"version_id\":0,\n    \"version_number\":0,\n    \"programs\":[{\n        \"Audio_5.1_avalieble\": 0,\n        \"Establecer_home\": 1,\n        \"Establecer_landing\":0,\n        \"Estimed_Schedule_Item_Duration\": \"06:30:00\",\n        \"Periodicidad\": 0,\n        \"Program_Episode_Number\": 21,\n        \"Program_Episode_Season\": 21,\n        \"Program_Genre_List\": \"Animación\",\n        \"Program_Title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n        \"Program_Title_Alternate\": \"Shiryū contra Máscara de la Muerte\",\n        \"Program_Year_Produced\": 1982,\n        \"Programar_publicacion\": 1,\n        \"Schedule_Item_Date_Time\": \"2020-11-09 06:00:00\",\n        \"Schedule_Item_Long_Date\": \"2020-11-09\",\n        \"Schedule_Item_Long_Time\": \"06:00:00\",\n        \"Schedule_Item_Rating_Code\": \"A\",\n        \"Scheduled_Version_DUBBED\": 0,\n        \"Scheduled_Version_SUBBED\": 0,\n        \"Synopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n        \"Vigencia_home\": \"2020-05-14\",\n        \"Vigencia_landing\": \"2020-05-14\"\n            }\n    ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success Programing captured\",\n    \"data\": []\n}",
          "type": "json"
        },
        {
          "title": "Success-Response-other :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success Programing captured\",\n    \"data\": [\"Nothing to do, empty programs\"]\n}",
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
            "description": "<p>Error en validación de la peticion.</p>"
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
    "url": "/program/editSinopsisLanding",
    "title": "Editar sinopsis en el landing",
    "version": "1.0.0",
    "name": "Editar_Sinopsis_landing",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Edita la sinopsis en el landing de sinopsis.</p>",
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
    "url": "/program/editBolckSinopsis",
    "title": "Editar bloque de sinopsis",
    "version": "1.0.0",
    "name": "Editar_bloque_de_sinopsis",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Edita el bloque inferior en el landing de sinopsis</p>",
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
    "url": "/program/editChapter",
    "title": "Editar capitulo",
    "version": "1.0.0",
    "name": "Editar_capitulo",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Este metodo edita alguna atributo del elemento (key), con el valor proporcionado (value)</p>",
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
    "url": "/program/deleteChapter",
    "title": "Eliminar capitulo",
    "version": "1.0.0",
    "name": "Eliminar_capitulo",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Este metodo Elimna por completo un el capitulo indicado</p>",
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
    "type": "get",
    "url": "/program/getProgramingGrill/{inicio}&{fin}&{landing}&{id}}",
    "title": "Obtener toda la programacion para la grilla",
    "version": "1.0.0",
    "name": "Filtrar_Programacion_para_la_grilla",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método GET para obtener la lista de programas para poder pintar la grilla, Se usa en el filtro de fecha regresa los progrmas en las fechas indicadas . Solo se regresan os programas pertenecientes al canal indicado</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "incio",
            "description": "<p>Dia de inicio para mostrar la grilla</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "fin",
            "description": "<p>Ultimo dia en el que se requiere la grilla</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landing",
            "description": "<p>Nombre del canal del que se requiere la grilla</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id del usuario que solicita la grilla</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/getProgramingGrillFirst/2020-11-10&Canal Claro&1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "grilla",
            "description": "<p>Informacion para la grilla</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "day",
            "description": "<p>Dia al que pertene la grila</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_origin",
            "description": "<p>version a la que pertenece la grilla master/user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_number",
            "description": "<p>Numero de la version ( se eliminara ya que no es necesario)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "version_id",
            "description": "<p>Id de la version de la grilla que se muestra</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_edition",
            "description": "<p>Fecha de la ultima edicion con el formato para pintarlo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "edited_for",
            "description": "<p>Nombre del usuario que hizo la ultima edicion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_rol",
            "description": "<p>Rol del usuario que hizo la ultima edición</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "section",
            "description": "<p>Nombre del canal al que pertenece la grilla</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "programs",
            "description": "<p>Lista de los prograsmas con la infromacion necesaria para pintar un row en la grilla</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n   \"code\": 200,\n    \"meessage\": \"Programing grill\",\n    \"data\": {\n        \"grilla\": [\n            {\n                \"day\": \"2020-11-10\",\n                \"version_origin\": \"master\",\n                \"version_number\": null,\n                \"version_id\": 1,\n                \"last_edition\": \"24 Noviembre, 2020 20:18:35 GMT\",\n                \"edited_for\": \"Hugoles\",\n                \"user_rol\": \"root\",\n                \"section\": \"Canal Claro\",\n                \"programs\": [\n                    {\n                        \"chapter_id\": 152,\n                        \"program_id\": 2,\n                        \"day\": \"2020-11-10\",\n                        \"title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"subtitle\": \"SAGA DEL SANTUARIO\",\n                        \"programing\": \"00:00\",\n                        \"in_home\": 0,\n                        \"in_home_begin\": null,\n                        \"in_home_expiration\": \"1970-01-01 00:00:00\",\n                        \"in_landing\": 0,\n                        \"in_landing_begin\": null,\n                        \"in_landing_expiration\": \"1970-01-01 00:00:00\",\n                        \"program_year_produced\": 1986,\n                        \"status\": 5,\n                        \"subbed\": \"0\",\n                        \"dubbed\": \"0\",\n                        \"audio5\": \"0\",\n                        \"year\": 1986,\n                        \"genre\": [\n                            \"Accion\",\n                            \" Anime\"\n                        ],\n                        \"synopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                        \"short_synopsis\": \"sinopsis corta de Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"program_episode_number\": 6,\n                        \"rating\": \"PG\",\n                        \"country_of_origin\": null,\n                        \"seasons\": 1,\n                        \"season\": 1,\n                        \"duration\": \"00:27:56\",\n                        \"images\": {\n                            \"thumbnail_list_horizontal\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                            \"thumbnail_list_vertical\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-vertical/saint-seiya.jpg\",\n                            \"image_synopsis\": null,\n                            \"image_synopsis_frame_1\": null,\n                            \"image_synopsis_frame_2\": null,\n                            \"image_synopsis_frame_3\": null,\n                            \"image_background_1\": null,\n                            \"image_background_2\": null,\n                            \"image_background_3\": null,\n                            \"cantity_images_uploaded_chapter\": 0,\n                            \"cantity_images_uploaded_program\": 2,\n                            \"cantity_images_uploaded\": 2\n                        }\n                    },\n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error Grill not found with the given information. \"\n \"data\" : {\n    \n }",
          "type": "json"
        }
      ]
    },
    "filename": "./Program.js",
    "groupTitle": "Programa"
  },
  {
    "type": "post",
    "url": "/program/newEntryGrill",
    "title": "Nuevo capitulo",
    "version": "1.0.0",
    "name": "Nuevo_capitulo",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Este metodo crea un nuevo capitulo en el dia actual, regresa el id del capitulo creado, se utiliza en la grilla al momento de dar click en nueva entrada</p>",
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
    "url": "/program/getImagesChapter/{id}",
    "title": "Obtener Imagenes del capitulo",
    "version": "1.0.0",
    "name": "Obtener_Imagenes_capitulo",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Este metodo regresa las imagenes del capitulo indicado, si el capitulo no tiene una imagen especifica se regresa la imagen default</p>",
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
    "type": "get",
    "url": "/program/getSinospsisTable/{day}",
    "title": "Regresa la tabla con informacion de sinopsis",
    "version": "1.0.0",
    "name": "Obtener_Tabla_Sinopsis",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Regresa la tabla de sinopsis en donde se muestra los carecteres totales de la sinopsis de cada porgrama</p>",
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
    "type": "get",
    "url": "/getAllPrograms/{id}",
    "title": "Obtener todos los programas",
    "version": "1.0.0",
    "name": "Obtener_todos_los_programas",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Obtienes todos los pogrmas registrados en la BD</p>",
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
    "type": "get",
    "url": "/program/getProgramingGrillFirst/{inicio}&{landing}&{id}",
    "title": "Obtener toda la programacion para la grilla",
    "version": "1.0.0",
    "name": "Obtner_Programacion_para_la_grilla",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método GET para obtener la lista de programas para poder pintar la grilla, se obtiene a apartir del dia indicado hasta el ultimo dia con programacion. Solo se regresan os programas pertenecientes al canal indicado</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "inicio",
            "description": "<p>Dia actual o apartir del que se requiere la grilla formato YYYY-MM-DD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "landing",
            "description": "<p>Canal del que se requiere la grilla &quot;Canal Claro&quot;, &quot;Claro Cinema&quot;,&quot;Concert Channel&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Inetger",
            "optional": false,
            "field": "id",
            "description": "<p>id del usuario que hace la peticion</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/getProgramingGrillFirst/2020-11-10&Canal Claro&1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "grilla",
            "description": "<p>Informacion para la grilla</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "day",
            "description": "<p>Dia al que pertene la grila</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_origin",
            "description": "<p>version a la que pertenece la grilla master/user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version_number",
            "description": "<p>Numero de la version ( se eliminara ya que no es necesario)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "version_id",
            "description": "<p>Id de la version de la grilla que se muestra</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_edition",
            "description": "<p>Fecha de la ultima edicion con el formato para pintarlo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "edited_for",
            "description": "<p>Nombre del usuario que hizo la ultima edicion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user_rol",
            "description": "<p>Rol del usuario que hizo la ultima edición</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "section",
            "description": "<p>Nombre del canal al que pertenece la grilla</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "programs",
            "description": "<p>Lista de los prograsmas con la infromacion necesaria para pintar un row en la grilla</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n   \"code\": 200,\n    \"meessage\": \"Programing grill\",\n    \"data\": {\n        \"grilla\": [\n            {\n                \"day\": \"2020-11-10\",\n                \"version_origin\": \"master\",\n                \"version_number\": null,\n                \"version_id\": 1,\n                \"last_edition\": \"24 Noviembre, 2020 20:18:35 GMT\",\n                \"edited_for\": \"Hugoles\",\n                \"user_rol\": \"root\",\n                \"section\": \"Canal Claro\",\n                \"programs\": [\n                    {\n                        \"chapter_id\": 152,\n                        \"program_id\": 2,\n                        \"day\": \"2020-11-10\",\n                        \"title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"subtitle\": \"SAGA DEL SANTUARIO\",\n                        \"programing\": \"00:00\",\n                        \"in_home\": 0,\n                        \"in_home_begin\": null,\n                        \"in_home_expiration\": \"1970-01-01 00:00:00\",\n                        \"in_landing\": 0,\n                        \"in_landing_begin\": null,\n                        \"in_landing_expiration\": \"1970-01-01 00:00:00\",\n                        \"program_year_produced\": 1986,\n                        \"status\": 5,\n                        \"subbed\": \"0\",\n                        \"dubbed\": \"0\",\n                        \"audio5\": \"0\",\n                        \"year\": 1986,\n                        \"genre\": [\n                            \"Accion\",\n                            \" Anime\"\n                        ],\n                        \"synopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                        \"short_synopsis\": \"sinopsis corta de Los Caballeros del Zodiaco (Saint Seiya)\",\n                        \"program_episode_number\": 6,\n                        \"rating\": \"PG\",\n                        \"country_of_origin\": null,\n                        \"seasons\": 1,\n                        \"season\": 1,\n                        \"duration\": \"00:27:56\",\n                        \"images\": {\n                            \"thumbnail_list_horizontal\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                            \"thumbnail_list_vertical\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-vertical/saint-seiya.jpg\",\n                            \"image_synopsis\": null,\n                            \"image_synopsis_frame_1\": null,\n                            \"image_synopsis_frame_2\": null,\n                            \"image_synopsis_frame_3\": null,\n                            \"image_background_1\": null,\n                            \"image_background_2\": null,\n                            \"image_background_3\": null,\n                            \"cantity_images_uploaded_chapter\": 0,\n                            \"cantity_images_uploaded_program\": 2,\n                            \"cantity_images_uploaded\": 2\n                        }\n                    },\n}",
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
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error Grill not found with the given information. \"\n \"data\" : {\n    \n }",
          "type": "json"
        }
      ]
    },
    "filename": "./Program.js",
    "groupTitle": "Programa"
  },
  {
    "type": "get",
    "url": "/program/actual_programing/{country}&{day}",
    "title": "Obtner la Programacion actual",
    "version": "1.0.0",
    "name": "Obtner_Progrmación_actual",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método GET para obtener la progrmacion en tiempo real segun el pais  y dia que indiquen, este metodo sirve para pintar el carrusel de progrmacion, se obtiene la programacion de los 3 canales. Por lo tanto se obtiene el dia solicitado y el dia siguiente</p>",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/actual_programing/colombia&2020-11-15",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>Indica en que metoo esta entrando la funcion, &quot;programing actual&quot; para el carrusel, &quot;programing landing&quot; para el landing, esto depende segun el país seleccioando</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id_section",
            "description": "<p>id del canal al que pertenece.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "section",
            "description": "<p>Nombre del canal al que pertenece.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_day",
            "description": "<p>ultimo dia con progrmacion encontrado en el canal</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "programing",
            "description": "<p>lista con la Programacion encontrada</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "programing.day",
            "description": "<p>Dia de la programcion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "programing.hour",
            "description": "<p>Hora actual del pais selecciona</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "programing.hour_GMT",
            "description": "<p>Flotante que representa la hora en GMT actual</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "programing.programs",
            "description": "<p>lista con los programas, y la informacion necearia para pintar el carrusel</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n     \"code\": 200,\n    \"meessage\": \"Success Programing for argentina\",\n    \"data\": [\n        {\n            \"method\": \"programing actual\",\n            \"id_section\": 1,\n            \"section\": \"Canal Claro\",\n            \"last_day\": \"2020-12-01\",\n            \"programing\":[\n                \"day\": \"2020-11-15\",\n                    \"hour\": \"17:10\",\n                    \"hour_GMT\": 20.166666666666668,\n                    \"programs\": [\n                        {\n                            \"chapter_id\": 299,\n                            \"version_id\": 1,\n                            \"program_id\": 65,\n                            \"Program_Title\": \"Devout; The\",\n                            \"chapter_title\": \"Devout; The\",\n                            \"sinopsis\": \"En una pequeña ciudad del cinturón de la Biblia, Darryl y Jan se enfrentan a lo impensable. Su hija de 4 años, Abigail, tiene cáncer terminal con solo semanas de vida. Mientras juega con su cohete de juguete, Abigail murmura intrincaciones arcanas sobre el traje espacial de un astronauta a su padre: terminología que ningún niño de 4 años debería saber.\",\n                            \"time\": \"17:00\",\n                            \"landing_synopsis\": 0,\n                            \"image\": \"http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/default/claro-horizontal-slider.jpg\",\n                            \"day\": \"2020-11-15\"\n                        },\n            ]\n        },\n        {\n            \"method\": \"programing actual\",\n            \"id_section\": 2,\n            \"section\": \"Concert Channel\",\n            \"last_day\": \"2020-11-30\",\n            \"programing\":[\n\n            ]\n        },\n        {\n            \"method\": \"programing actual\",\n            \"id_section\": 3,\n            \"section\": \"Claro Cinema\",\n            \"last_day\": \"2020-12-27\",\n            \"programing\":[\n                \n            ]\n        }\n    ]\n}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Program.js",
    "groupTitle": "Programa"
  },
  {
    "type": "get",
    "url": "/program/actual_programing_programation/{country}&{day}&{actual}",
    "title": "Obtner la Programacion actual para el landing",
    "version": "1.0.0",
    "name": "Obtner_Progrmación_actual_landing",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método GET para obtener la progrmacion en tiempo real segun el pais  y dia que indiquen,tambien se debe indicar si es el dia actual el cual se necesita ver. Este emtodo sirve para pintar los progrmas en el landing de progrmacion. Se regresa la lista de programas por cada canal hasta el fin del dia indicado</p>",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/actual_programing_programation/gmt&2020-11-17&1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "method",
            "description": "<p>Indica en que metoo esta entrando la funcion, &quot;programing actual&quot; para el carrusel, &quot;programing landing&quot; para el landing, esto depende segun el país seleccioando</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id_section",
            "description": "<p>id del canal al que pertenece.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "section",
            "description": "<p>Nombre del canal al que pertenece.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last_day",
            "description": "<p>ultimo dia con progrmacion encontrado en el canal</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "programing",
            "description": "<p>lista con la Programacion encontrada</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "programing.day",
            "description": "<p>Dia de la programcion</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "programing.hour",
            "description": "<p>Hora actual del pais selecciona</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "programing.hour_GMT",
            "description": "<p>Flotante que representa la hora en GMT actual</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "programing.programs",
            "description": "<p>lista con los programas, y la informacion necearia para pintar el carrusel</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success Programing for GMT\",\n    \"data\": [\n        {\n            \"method\": \"programation for landing\",\n            \"id_section\": 1,\n            \"section\": \"Canal Claro\",\n            \"last_day\": \"2020-12-01\",\n            \"programing\": [\n                {\n                    \"day\": \"2020-11-17\",\n                    \"hour\": \"00:00\",\n                    \"hour_GMT\": 0,\n                    \"programs\": [\n                        {\n                            \"chapter_id\": 374,\n                            \"version_id\": 1,\n                            \"program_id\": 2,\n                            \"Program_Title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n                            \"chapter_title\": \"SAGA DEL SANTUARIO\",\n                            \"sinopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n                            \"time\": \"0:00\",\n                            \"time_GMT\": \"0:00\",\n                            \"image\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n                            \"landing_synopsis\": 0,\n                            \"day\": \"2020-11-17\"\n                        },\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Program.js",
    "groupTitle": "Programa"
  },
  {
    "type": "get",
    "url": "/program/getSynopsis/{id}",
    "title": "Obtner Sinopsis del programa",
    "version": "1.0.0",
    "name": "Obtner_Sinopsis",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método GET para obtener los datos que se mostraran en el landing de sinopsis, vienen los horarios por dia que tiene el programa y las horas en el pasa dividido por regiones</p>",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/getSynopsis/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>datos encesarios para pintar el landing</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.time_regions",
            "description": "<p>Datos necesarios para pintar los horarios por regiones.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "data.time_regions.actual_day",
            "description": "<p>Numero del dia de la semana 1 -&gt; domingo 7 -&gt; sabado</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.time_regions.periodicity",
            "description": "<p>Arreglo con los dias de la semana en el que se repite el programa 1-7</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.time_regions.regions",
            "description": "<p>Arreglo con la informacion para pintar los horarios</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.time_regions.regions.countrires",
            "description": "<p>Arreglo agrupando los paises por regiones, dependiendo su zona horaria</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.time_regions.regions.times",
            "description": "<p>Arraglo con los horarios, divididos por regiones, solo se muestran los dias y las horas en las que se tiene hora</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n    \"code\": 200,\n    \"meessage\": \"Success Sinopsis Founded\",\n    \"data\": {\n        \"program_id\": 2,\n        \"chapter_id\": \"1\",\n        \"landing_id\": 1,\n        \"title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n        \"subtitle\": \"Shiryū contra Máscara de la Muerte\",\n        \"sinopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n        \"time\": \"00:00\",\n        \"image_background_1\": \"http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png\",\n        \"image_background_2\": \"http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png\",\n        \"image_background_3\": \"http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png\",\n        \"image_synopsis\": \"http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png\",\n        \"image_synopsis_frame_1\": \"http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png\",\n        \"image_synopsis_frame_2\": \"http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png\",\n        \"image_synopsis_frame_3\": \"http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png\",\n        \"day\": \"2020-07-03\",\n        \"program_episode_number\": 0,\n        \"seasons\": 1,\n        \"duration\": \"-573 minutos\",\n        \"year\": 1986,\n        \"rating\": \"PG\",\n        \"genre\": \"Accion, Anime\",\n        \"time_regions\": {\n            \"actual_day\": \"5\",\n            \"periodicity\": [\n                \"1\",\n                \"2\",\n                \"3\",\n                \"4\",\n                \"5\",\n                \"6\"\n            ],\n            \"regions\": {\n                \"countries\": {\n                    \"region_1\": [\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/argentina.svg\"\n                    ],\n                    \"region_2\": [\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/brazil.svg\"\n                    ],\n                    \"region_3\": [\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg\",\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/paraguay.svg\"\n                    ],\n                    \"region_4\": [\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/dominican-republic.svg\"\n                    ],\n                    \"region_5\": [\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/colombia.svg\",\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/peru.svg\",\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/panama.svg\",\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/ecuador.svg\"\n                    ],\n                    \"region_6\": [\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/el-salvador.svg\",\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/honduras.svg\",\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/nicaragua.svg\",\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/guatemala.svg\",\n                        \"http://www.claronetworks.openofficedospuntocero.info/images/paises/costa-rica.svg\"\n                    ]\n                },\n                \"times\": {\n                    \"region_1\": [\n                        [\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [\n                                    \"3:00\"\n                                ],\n                                \"PM\": [\n                                    \"13:00\",\n                                    \"15:00\",\n                                    \"20:00\"\n                                ]\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            }\n                        ]\n                    ],\n                    \"region_2\": [\n                        [\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [\n                                    \"4:00\"\n                                ],\n                                \"PM\": [\n                                    \"14:00\",\n                                    \"16:00\",\n                                    \"21:00\"\n                                ]\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            }\n                        ]\n                    ],\n                    \"region_3\": [\n                        [\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [\n                                    \"3:00\"\n                                ],\n                                \"PM\": [\n                                    \"13:00\",\n                                    \"15:00\",\n                                    \"20:00\"\n                                ]\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            }\n                        ]\n                    ],\n                    \"region_4\": [\n                        [\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [\n                                    \"6:00\"\n                                ],\n                                \"PM\": [\n                                    \"16:00\",\n                                    \"18:00\",\n                                    \"23:00\"\n                                ]\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            }\n                        ]\n                    ],\n                    \"region_5\": [\n                        [\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [\n                                    \"11:00\",\n                                    \"1:00\"\n                                ],\n                                \"PM\": [\n                                    \"13:00\",\n                                    \"18:00\"\n                                ]\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            }\n                        ]\n                    ],\n                    \"region_6\": [\n                        [\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [\n                                    \"6:00\"\n                                ],\n                                \"PM\": [\n                                    \"16:00\",\n                                    \"18:00\",\n                                    \"23:00\"\n                                ]\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            },\n                            {\n                                \"AM\": [],\n                                \"PM\": []\n                            }\n                        ]\n                    ]\n                }\n            }\n        }\n    }\n}",
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
            "description": "<p>No se encontro sinopsis.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error Sinopsis not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Program.js",
    "groupTitle": "Programa"
  },
  {
    "type": "post",
    "url": "/program/chekChapterExist",
    "title": "Revisa si existe programacion en un dia",
    "version": "1.0.0",
    "name": "Revisa_si_existe_progrmacion_en_un_dia",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Este metodo se llama durante la subida del excel revisa si existe por lo menos un programa en el primer dia indicado en la plantilla, si existe se regresa</p>",
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
    "type": "get",
    "url": "/program/{id}",
    "title": "Informacion de un programa especifico",
    "version": "1.0.0",
    "name": "Ver_Programa",
    "group": "Programa",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Método GET para obtener la infromacion de un programa en especifico</p>",
    "examples": [
      {
        "title": "Ejemplo de uso:",
        "content": "http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Son los atributos pertenencientes al capitulo</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data.program",
            "description": "<p>Atributos del programa al que pertenece el capitulo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n     \"code\": 200,\n    \"meessage\": \"Success Programing \",\n    \"data\": {\n        \"id\": 1,\n        \"title\": \"Shiryū contra Máscara de la Muerte\",\n        \"day\": \"2020-07-03\",\n        \"programing\": 6,\n        \"season\": 1,\n        \"episode_number\": 0,\n        \"in_home\": 1,\n        \"in_home_begin\": null,\n        \"in_home_expiration\": null,\n        \"in_landing\": 0,\n        \"in_landing_begin\": null,\n        \"in_landing_expiration\": null,\n        \"thumbnail_list_horizontal\": null,\n        \"thumbnail_list_vertical\": \"http://127.0.0.1:8000/storage/canal-claro/section-home-vertical/1.jpeg\",\n        \"image_synopsis\": null,\n        \"image_synopsis_frame_1\": null,\n        \"image_synopsis_frame_2\": null,\n        \"image_synopsis_frame_3\": null,\n        \"synopsis\": null,\n        \"landing_synopsis\": 0,\n        \"short_synopsis\": \"sinopsis corta\",\n        \"program_episode_number\": 0,\n        \"duration\": \"00:30\",\n        \"image_background_1\": null,\n        \"image_background_2\": null,\n        \"image_background_3\": null,\n        \"subbed\": \"0\",\n        \"dubbed\": \"0\",\n        \"audio5\": \"0\",\n        \"section_id\": 1,\n        \"version_id\": 1,\n        \"program_id\": 2,\n        \"copy_of\": null,\n        \"created_at\": null,\n        \"updated_at\": \"2020-11-12 06:33:14\",\n        \"program\": {\n            \"id\": 2,\n            \"title\": \"Los Caballeros del Zodiaco (Saint Seiya)\",\n            \"synopsis\": \"Los guerreros llamados \\\"Santos\\\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.\",\n            \"genre\": \"Accion, Anime\",\n            \"rating\": \"PG\",\n            \"image_background_3\": null,\n            \"image_background_2\": null,\n            \"image_background_1\": null,\n            \"duration\": \"-573 minutos\",\n            \"seasons\": 1,\n            \"year\": 1986,\n            \"periodicity\": 0,\n            \"image_synopsis_frame_1\": null,\n            \"image_synopsis_frame_2\": null,\n            \"image_synopsis_frame_3\": null,\n            \"image_synopsis\": null,\n            \"thumbnail_list_horizontal\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg\",\n            \"thumbnail_list_vertical\": \"http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-vertical/saint-seiya.jpg\",\n            \"section_id\": 1,\n            \"copy_of\": null,\n            \"provider_identifer\": null,\n            \"created_at\": null,\n            \"updated_at\": \"2020-11-26 19:27:50\"\n        }\n    }\n}",
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
            "description": "<p>No existe ningun capitulo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Program not found, or program not exist\"\n \"data\" : {\n    \n }\n}",
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
    "type": "get",
    "url": "/user/activeNotification",
    "title": "Activar notificacion de un programa",
    "version": "1.0.0",
    "name": "Activar_notificacion_de_un_programa",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Metodo para activar las notificaciones de un programa en especifico</p>",
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
    "url": "/user/add_favorites/",
    "title": "Agregar a favoritos",
    "version": "1.0.0",
    "name": "Agregar_a_favoritos",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Metodo que le permite a un usuario agregar un programa a favortios</p>",
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
    "url": "/user/config_notification/",
    "title": "Configurar notificaciones",
    "version": "1.0.0",
    "name": "Configurar_notificaciones",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Configuracion para las notificaciones tanto web como notificiaciones por correo, el tiempo en el que llegará y cuales llegarán</p>",
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
    "type": "post",
    "url": "/user/deactiveNotification",
    "title": "Desactivar notificacion de un programa",
    "version": "1.0.0",
    "name": "Desactivar_notificacion_de_un_programa",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Metodo para desactivar las notificaciones de un programa en especifico</p>",
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
    "type": "get",
    "url": "/user/favoritesList/{id}&{type}",
    "title": "Mostrar lista de favoritos",
    "version": "1.0.0",
    "name": "Mostrar_favoritos",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Metodo para ver la lista completa de los programas favoritos del usuario asi como su informacion necesaria para mostralos en el landing</p>",
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
    "url": "/user/remove_favorites/",
    "title": "Quitar de favoritos",
    "version": "1.0.0",
    "name": "Quitar_de_favoritos",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Metodo para quitar un programa de la lista de favoritos</p>",
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
