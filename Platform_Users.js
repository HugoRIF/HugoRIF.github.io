/**
 * @api {post} /user/login Iniciar sesion usuario front
 * @apiVersion 1.0.0
 * @apiName Iniciar sesion
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription Método POST para que un usuario incie sesión
 *
 * @apiParam {String} mail     Correo del usuario.
 * @apiParam {String} password Contraseña cifra en sha1.
 *
 * @apiExample Ejemplo:
 * {
	"email":"correo@gmail.com",
	"password":"25d55ad283aa400af464c76d713c07ad"
*}
 * @apiSuccess {Integer}   id            Id del usuario.
 * @apiSuccess {String}    name          Nombre del usuario.
 * @apiSuccess {String}    mail          Correo del usuario
 * @apiSuccess {String}    gender       Genero del usuario
 * @apiSuccess {Date}      birthday     Compleañus del usuario.
 * @apiSuccess {Array}   country       Informacion del pais del usuario.
 * @apiSuccess {String}    avatar       URL de la imagen del Avatar del usuario
 * @apiSuccess {Array}    config       Informacin de la configuración de notificaciones
 * @apiSuccess {Array}    Favorites     Lista de favoritos del usuario
 * @apiSuccess {Array}    Genres    Generos de los programas
 *
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success User Found"
 *  "data" : {
 *     "id": 10,
        "name": "Becarios",
        "email": "claronetworks.media@gmail.com",
        "gender": "M",
        "birthday": "1985-01-02",
        "avatar": "http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg",
        "country": {
            "id": 4,
            "name": "Chile",
            "image": "http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg"
        },
        "config": {
            "beginning": 0,
            "minutes": 0,
            "email": 0,
            "web": 0
        },
        "favorites":[
            {
                "id_section": 1,
                "section": "Canal Claro",
                "programs": [
                    {
                        "program_id": 2,
                        "chapter_id": 161,
                        "program_title": "Los Caballeros del Zodiaco (Saint Seiya)",
                        "chapter_title": "SAGA DEL SANTUARIO",
                        "time": "8:30",
                        "rating": "PG",
                        "active": 1,
                        "sinopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                        "image": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                        "channel": "Canal Claro"
                    }
                ]
            }
        ],
        "genres":[
             {
                "id": 1,
                "title": "Kids"
            },
        ]
 *  }
 * }
 * @apiError NotFound   User not found with the given information.
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error User not found with the given information. "
 *  "data" : {
 *     
 *  }
 * }
 *  * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"Some params can´t be found"
 *  "data" : {
 *     
 *  }
 * }
*/

/**
 * @api {post} /user Crear un usuario Nuevo
 * @apiVersion 1.0.0
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission admin 
 *
 * @apiDescription  POST Method to Create a new User
 *
 * @apiParam {String}    key API athorization key.
 * @apiParam {String}    name          Fullname of the User.
 * @apiParam {String}    mail          email of the   User
 * @apiParam {String}    gender       Gender of the user Male o Female
 * @apiParam {Date}      birthday      Birthday of the user.
 * 
 * @apiExample Ejemplo:
 * curl --data "key=value1&name=value2&mail=value3..." http://ClaroNetworks.com/api/user
 *
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":201,
 *  "message":"Success User Created"
 *  "data" : {
 *      "id" : 1
*      "id" : 1,
 *      "name" : "Nombre",
 *      "mail" : "correo@gmail.com",
 *      "gender" : "Male",
 *      "Date"  : "01/01/2000",
 *      "country" : 1,
 *      "avatar" : ".../avatar1.jpg"
 *  }
 * }
 * 
 * @apiError Forbiden  Invalid API key.
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"The parman <param> have a bad format or is invalid"
 *  "data" : {
 *     
 *  }
 * }
 * @apiErrorExample Response (Forbiden):
 * {
 *  "code":403,
 *  "message":"Invalid API key."
 *  "data" : {
 *     
 *  }
 * }
*/

/**
 * @api {get} /user/ Obetner lista de todos los usuarios del front.
 * @apiVersion 1.0.0
 * @apiName GetAll
 * @apiGroup User
 *
 * @apiDescription Método GET para obtner la lista de todos los usuarios activos en el Front.
 *
 * @apiExample Ejemplo:
 * http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/user
 *
 * @apiSuccess {array}   users Array with the information od the  users
 * 
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success Users Found"
 *  "data" : [
 *      {
*      "id" : 1,
 *      "name" : "Nombre",
 *      "mail" : "correo@gmail.com",
 *      "gender" : "Male",
 *      "Date"  : "01/01/2000",
 *      "country" : 1,
 *      "avatar" : ".../avatar1.jpg"
 *          "active": 0,
 *          "created_at": 0,
 *          "updated_at": 0
 *      },
 *      {
 *      "id" : 1,
 *      "name" : "Nombre",
 *      "mail" : "correo@gmail.com",
 *      "gender" : "Male",
 *      "Date"  : "01/01/2000",
 *      "country" : 1,
 *      "avatar" : ".../avatar1.jpg"
 *          "active": 0,
 *          "created_at": 0,
 *          "updated_at": 0,
 *      }
 *  ]
 * }
 * @apiError Forbiden  Invalid API key.
 *
 * @apiErrorExample Response (Forbiden):
 * {
 *  "code":403,
 *  "message":"Invalid API key."
 *  "data" : {
 *     
 *  }
 * }
*/

 /**
 * @api {get} /user/{id} Obetenr la informacion de usuario especifico
 * @apiVersion 1.0.0
 * @apiName GetEspecific
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription Método GEt que regresa toda la infromacion relacionada con el usuario solicitado
 * @apiParam {String} key      API athorization key.
 * @apiParam {Integer} id      Id of the user for whom the information is wanted.
 *
 * @apiExample Ejemplo:
 * curl -i http://ClaroNetworks.com/api/user/?key=123abc&id=1
 *
 * @apiSuccess {Object}   User information
 * 
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success Users Found"
 *  "data" : 
 *      {
*      "id" : 1,
 *      "name" : "Nombre",
 *      "mail" : "correo@gmail.com",
 *      "gender" : "Male",
 *      "Date"  : "01/01/2000",
 *      "country" : 1,
 *      "avatar" : ".../avatar1.jpg"
 *          "active": 0,
 *          "created_at": 0,
 *          "updated_at": 0
 *      }
 * }
 * @apiError NotFound   User not found with the given id.
 * 
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error User not found with the given id. "
 *  "data" : {
 *     
 *  }
 * }
 */
/**
 * @api {put} /user/:id Change an User
 * @apiVersion 1.0.0
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission admin
 *
 * @apiDescription Method to change the infomation of an user
 *
 *
 * @apiParam {String} key API athorization key.
 * @apiParam {Integer} id Id of the admin who made the request.
 * @apiParam {String}    name          Fullname of the User.
 * @apiParam {String}    password      Password of the User.
 * @apiParam {String}    mail          email of the   User
 * @apiParam {String}    gender       Gender of the user Male o Female
 * @apiParam {String}    avatar       URL from the image if the avatar
 * @apiParam {Date}      birthday      Birthday of the user.
 * 
 * @apiExample Ejemplo:
 * $ curl -X PUT -d "key=value1&name=value2&mail=value3..." http://ClaroNetworks.com/api/user
 *
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":201,
 *  "message":"Success User Changed"
 *  "data" : {
*      "id" : 1,
 *      "name" : "Nombre",
 *      "mail" : "correo@gmail.com",
 *      "gender" : "Male",
 *      "Date"  : "01/01/2000",
 *      "country" : 1,
 *      "avatar" : ".../avatar1.jpg"
 *  }
 * }
 * 
 * @apiError Forbiden  Invalid API key.
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"The parman <param> have a bad format or is invalid"
 *  "data" : {
 *     
 *  }
 * }
 * @apiErrorExample Response (Forbiden):
 * {
 *  "code":403,
 *  "message":"Invalid API key or the User is unathorized for this method"
 *  "data" : {
 *     
 *  }
 * }
 *
 */

/**
 * @api {delete} /user/{id_user} Eliminar un usuario de front.
 * @apiVersion 1.0.0
 * @apiName DeleteUser
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiDescription DELETE Method, only logic delete
 * @apiParam {Integer} id_admin     Id of the user who made the request.
 * @apiParam {Integer} id_user      Id of the user to delete.
 *
 * @apiExample Ejemplo:
 *  curl -X DELETE http://ClaroNetworks.com/api/user/?id_admin=1&user=2&key=123abc&id=1
 *
 * 
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success Users Delete"
 *  "data" : 
 *      {
 *      }
 * }
 * @apiError Forbiden  Invalid API key.
 * @apiError BadRequest  Some params can´t be found.
 * 
 *
 * @apiErrorExample Response (Forbiden):
 * {
 *  "code":403,
 *  "message":"Invalid API key or Unathorized User"
 *  "data" : {
 *     
 *  }
 * }
 * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"The parman <param> have a bad format or is invalid"
 *  "data" : {
 *     
 *  }
 * }
 */

/**
 * @api {get} /user/mail Correo que de verificación
 * @apiVersion 1.0.0
 * @apiName Enviar correo de verificacion
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription Este método se usa internamente al momento de que el usuario se registra, se envia un correo apra que el usuario verifique su cuenta.
 *
 * @apiParam {String} mail     Correo del usuario.
 * @apiParam {String} password Contraseña cifra en sha1.
 *
 * @apiExample Ejemplo:
 * {
	"email":"correo@gmail.com",
	"password":"25d55ad283aa400af464c76d713c07ad"
 *}
 * @apiSuccess {Integer}   id            Id del usuario.
 * @apiSuccess {String}    name          Nombre del usuario.
 * @apiSuccess {String}    mail          Correo del usuario
 * @apiSuccess {String}    gender       Genero del usuario
 * @apiSuccess {Date}      birthday     Compleañus del usuario.
 * @apiSuccess {Array}   country       Informacion del pais del usuario.
 * @apiSuccess {String}    avatar       URL de la imagen del Avatar del usuario
 * @apiSuccess {Array}    config       Informacin de la configuración de notificaciones
 * @apiSuccess {Array}    Favorites     Lista de favoritos del usuario
 * @apiSuccess {Array}    Genres    Generos de los programas
 *
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success User Found"
 *  "data" : {
 *     "id": 10,
        "name": "Becarios",
        "email": "claronetworks.media@gmail.com",
        "gender": "M",
        "birthday": "1985-01-02",
        "avatar": "http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg",
        "country": {
            "id": 4,
            "name": "Chile",
            "image": "http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg"
        },
        "config": {
            "beginning": 0,
            "minutes": 0,
            "email": 0,
            "web": 0
        },
        "favorites":[
            {
                "id_section": 1,
                "section": "Canal Claro",
                "programs": [
                    {
                        "program_id": 2,
                        "chapter_id": 161,
                        "program_title": "Los Caballeros del Zodiaco (Saint Seiya)",
                        "chapter_title": "SAGA DEL SANTUARIO",
                        "time": "8:30",
                        "rating": "PG",
                        "active": 1,
                        "sinopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                        "image": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                        "channel": "Canal Claro"
                    }
                ]
            }
        ],
        "genres":[
             {
                "id": 1,
                "title": "Kids"
            },
        ]
 *  }
 * }
 * @apiError NotFound   User not found with the given information.
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error User not found with the given information. "
 *  "data" : {
 *     
 *  }
 * }
 *  * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"Some params can´t be found"
 *  "data" : {
 *     
 *  }
 * }
*/

/**
 * @api {post} /user/verify Verificacion del usuario
 * @apiVersion 1.0.0
 * @apiName Enviar correo de verificacion
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription Este metodo verifica el corredo del usuario del front y activa su cuenta
 *
 * @apiParam {String} mail     Correo del usuario.
 * @apiParam {String} password Contraseña cifra en sha1.
 *
 * @apiExample Ejemplo:
 * {
	"email":"correo@gmail.com",
	"password":"25d55ad283aa400af464c76d713c07ad"
 *}
 * @apiSuccess {Integer}   id            Id del usuario.
 * @apiSuccess {String}    name          Nombre del usuario.
 * @apiSuccess {String}    mail          Correo del usuario
 * @apiSuccess {String}    gender       Genero del usuario
 * @apiSuccess {Date}      birthday     Compleañus del usuario.
 * @apiSuccess {Array}   country       Informacion del pais del usuario.
 * @apiSuccess {String}    avatar       URL de la imagen del Avatar del usuario
 * @apiSuccess {Array}    config       Informacin de la configuración de notificaciones
 * @apiSuccess {Array}    Favorites     Lista de favoritos del usuario
 * @apiSuccess {Array}    Genres    Generos de los programas
 *
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success User Found"
 *  "data" : {
 *     "id": 10,
        "name": "Becarios",
        "email": "claronetworks.media@gmail.com",
        "gender": "M",
        "birthday": "1985-01-02",
        "avatar": "http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg",
        "country": {
            "id": 4,
            "name": "Chile",
            "image": "http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg"
        },
        "config": {
            "beginning": 0,
            "minutes": 0,
            "email": 0,
            "web": 0
        },
        "favorites":[
            {
                "id_section": 1,
                "section": "Canal Claro",
                "programs": [
                    {
                        "program_id": 2,
                        "chapter_id": 161,
                        "program_title": "Los Caballeros del Zodiaco (Saint Seiya)",
                        "chapter_title": "SAGA DEL SANTUARIO",
                        "time": "8:30",
                        "rating": "PG",
                        "active": 1,
                        "sinopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                        "image": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                        "channel": "Canal Claro"
                    }
                ]
            }
        ],
        "genres":[
             {
                "id": 1,
                "title": "Kids"
            },
        ]
 *  }
 * }
 * @apiError NotFound   User not found with the given information.
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error User not found with the given information. "
 *  "data" : {
 *     
 *  }
 * }
 *  * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"Some params can´t be found"
 *  "data" : {
 *     
 *  }
 * }
*/
/**
 * @api {post} /user/reset_send Enviar correo recuperar contraseña
 * @apiVersion 1.0.0
 * @apiName Enviar correo recuperar contraseña
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription Se envia un correo con las instruccciones para recueprar la contraseña del usuario
 *
 * @apiParam {String} mail     Correo del usuario.
 * @apiParam {String} password Contraseña cifra en sha1.
 *
 * @apiExample Ejemplo:
 * {
	"email":"correo@gmail.com",
	"password":"25d55ad283aa400af464c76d713c07ad"
 *}
 * @apiSuccess {Integer}   id            Id del usuario.
 * @apiSuccess {String}    name          Nombre del usuario.
 * @apiSuccess {String}    mail          Correo del usuario
 * @apiSuccess {String}    gender       Genero del usuario
 * @apiSuccess {Date}      birthday     Compleañus del usuario.
 * @apiSuccess {Array}   country       Informacion del pais del usuario.
 * @apiSuccess {String}    avatar       URL de la imagen del Avatar del usuario
 * @apiSuccess {Array}    config       Informacin de la configuración de notificaciones
 * @apiSuccess {Array}    Favorites     Lista de favoritos del usuario
 * @apiSuccess {Array}    Genres    Generos de los programas
 *
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success User Found"
 *  "data" : {
 *     "id": 10,
        "name": "Becarios",
        "email": "claronetworks.media@gmail.com",
        "gender": "M",
        "birthday": "1985-01-02",
        "avatar": "http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg",
        "country": {
            "id": 4,
            "name": "Chile",
            "image": "http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg"
        },
        "config": {
            "beginning": 0,
            "minutes": 0,
            "email": 0,
            "web": 0
        },
        "favorites":[
            {
                "id_section": 1,
                "section": "Canal Claro",
                "programs": [
                    {
                        "program_id": 2,
                        "chapter_id": 161,
                        "program_title": "Los Caballeros del Zodiaco (Saint Seiya)",
                        "chapter_title": "SAGA DEL SANTUARIO",
                        "time": "8:30",
                        "rating": "PG",
                        "active": 1,
                        "sinopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                        "image": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                        "channel": "Canal Claro"
                    }
                ]
            }
        ],
        "genres":[
             {
                "id": 1,
                "title": "Kids"
            },
        ]
 *  }
 * }
 * @apiError NotFound   User not found with the given information.
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error User not found with the given information. "
 *  "data" : {
 *     
 *  }
 * }
 *  * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"Some params can´t be found"
 *  "data" : {
 *     
 *  }
 * }
*/
/**
 * @api {post} /user/reset_verify/{token} Abre el formulario para reestablecer contraseña
 * @apiVersion 1.0.0
 * @apiName Abrir formulario para rrestablecer contraseña
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription En el correo de recuperación de contraseña se envia un token, este metodo valida el token, si es valido se muestra el formulario para cambiar la contraseña
 *
 * @apiParam {String} mail     Correo del usuario.
 * @apiParam {String} password Contraseña cifra en sha1.
 *
 * @apiExample Ejemplo:
 * {
	"email":"correo@gmail.com",
	"password":"25d55ad283aa400af464c76d713c07ad"
 *}
 * @apiSuccess {Integer}   id            Id del usuario.
 * @apiSuccess {String}    name          Nombre del usuario.
 * @apiSuccess {String}    mail          Correo del usuario
 * @apiSuccess {String}    gender       Genero del usuario
 * @apiSuccess {Date}      birthday     Compleañus del usuario.
 * @apiSuccess {Array}   country       Informacion del pais del usuario.
 * @apiSuccess {String}    avatar       URL de la imagen del Avatar del usuario
 * @apiSuccess {Array}    config       Informacin de la configuración de notificaciones
 * @apiSuccess {Array}    Favorites     Lista de favoritos del usuario
 * @apiSuccess {Array}    Genres    Generos de los programas
 *
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success User Found"
 *  "data" : {
 *     "id": 10,
        "name": "Becarios",
        "email": "claronetworks.media@gmail.com",
        "gender": "M",
        "birthday": "1985-01-02",
        "avatar": "http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg",
        "country": {
            "id": 4,
            "name": "Chile",
            "image": "http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg"
        },
        "config": {
            "beginning": 0,
            "minutes": 0,
            "email": 0,
            "web": 0
        },
        "favorites":[
            {
                "id_section": 1,
                "section": "Canal Claro",
                "programs": [
                    {
                        "program_id": 2,
                        "chapter_id": 161,
                        "program_title": "Los Caballeros del Zodiaco (Saint Seiya)",
                        "chapter_title": "SAGA DEL SANTUARIO",
                        "time": "8:30",
                        "rating": "PG",
                        "active": 1,
                        "sinopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                        "image": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                        "channel": "Canal Claro"
                    }
                ]
            }
        ],
        "genres":[
             {
                "id": 1,
                "title": "Kids"
            },
        ]
 *  }
 * }
 * @apiError NotFound   User not found with the given information.
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error User not found with the given information. "
 *  "data" : {
 *     
 *  }
 * }
 *  * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"Some params can´t be found"
 *  "data" : {
 *     
 *  }
 * }
*/
/**
 * @api {post} /user/reset_verify/{token} Abre el formulario para reestablecer contraseña
 * @apiVersion 1.0.0
 * @apiName Abrir formulario para rrestablecer contraseña
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription En el correo de recuperación de contraseña se envia un token, este metodo valida el token, si es valido se muestra el formulario para cambiar la contraseña
 *
 * @apiParam {String} mail     Correo del usuario.
 * @apiParam {String} password Contraseña cifra en sha1.
 *
 * @apiExample Ejemplo:
 * {
	"email":"correo@gmail.com",
	"password":"25d55ad283aa400af464c76d713c07ad"
 *}
 * @apiSuccess {Integer}   id            Id del usuario.
 * @apiSuccess {String}    name          Nombre del usuario.
 * @apiSuccess {String}    mail          Correo del usuario
 * @apiSuccess {String}    gender       Genero del usuario
 * @apiSuccess {Date}      birthday     Compleañus del usuario.
 * @apiSuccess {Array}   country       Informacion del pais del usuario.
 * @apiSuccess {String}    avatar       URL de la imagen del Avatar del usuario
 * @apiSuccess {Array}    config       Informacin de la configuración de notificaciones
 * @apiSuccess {Array}    Favorites     Lista de favoritos del usuario
 * @apiSuccess {Array}    Genres    Generos de los programas
 *
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success User Found"
 *  "data" : {
 *     "id": 10,
        "name": "Becarios",
        "email": "claronetworks.media@gmail.com",
        "gender": "M",
        "birthday": "1985-01-02",
        "avatar": "http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg",
        "country": {
            "id": 4,
            "name": "Chile",
            "image": "http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg"
        },
        "config": {
            "beginning": 0,
            "minutes": 0,
            "email": 0,
            "web": 0
        },
        "favorites":[
            {
                "id_section": 1,
                "section": "Canal Claro",
                "programs": [
                    {
                        "program_id": 2,
                        "chapter_id": 161,
                        "program_title": "Los Caballeros del Zodiaco (Saint Seiya)",
                        "chapter_title": "SAGA DEL SANTUARIO",
                        "time": "8:30",
                        "rating": "PG",
                        "active": 1,
                        "sinopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                        "image": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                        "channel": "Canal Claro"
                    }
                ]
            }
        ],
        "genres":[
             {
                "id": 1,
                "title": "Kids"
            },
        ]
 *  }
 * }
 * @apiError NotFound   User not found with the given information.
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error User not found with the given information. "
 *  "data" : {
 *     
 *  }
 * }
 *  * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"Some params can´t be found"
 *  "data" : {
 *     
 *  }
 * }
*/
/**
 * @api {post} /user/reset_password/ Reestablece la contraseña 
 * @apiVersion 1.0.0
 * @apiName Reestablecer la contraseña 
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription Una vez mostrado el formulario para reestablecer contraseña este metodo cambia segun los datos proporcianados
 *
 * @apiParam {String} mail     Correo del usuario.
 * @apiParam {String} password Contraseña cifra en sha1.
 *
 * @apiExample Ejemplo:
 * {
	"email":"correo@gmail.com",
	"password":"25d55ad283aa400af464c76d713c07ad"
 *}
 * @apiSuccess {Integer}   id            Id del usuario.
 * @apiSuccess {String}    name          Nombre del usuario.
 * @apiSuccess {String}    mail          Correo del usuario
 * @apiSuccess {String}    gender       Genero del usuario
 * @apiSuccess {Date}      birthday     Compleañus del usuario.
 * @apiSuccess {Array}   country       Informacion del pais del usuario.
 * @apiSuccess {String}    avatar       URL de la imagen del Avatar del usuario
 * @apiSuccess {Array}    config       Informacin de la configuración de notificaciones
 * @apiSuccess {Array}    Favorites     Lista de favoritos del usuario
 * @apiSuccess {Array}    Genres    Generos de los programas
 *
 * @apiSuccessExample {json} respuesta exitosa :
 * {
 *  "code":200,
 *  "message":"Success User Found"
 *  "data" : {
 *     "id": 10,
        "name": "Becarios",
        "email": "claronetworks.media@gmail.com",
        "gender": "M",
        "birthday": "1985-01-02",
        "avatar": "http://www.claronetworks.openofficedospuntocero.info/images/home/user-login.svg",
        "country": {
            "id": 4,
            "name": "Chile",
            "image": "http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg"
        },
        "config": {
            "beginning": 0,
            "minutes": 0,
            "email": 0,
            "web": 0
        },
        "favorites":[
            {
                "id_section": 1,
                "section": "Canal Claro",
                "programs": [
                    {
                        "program_id": 2,
                        "chapter_id": 161,
                        "program_title": "Los Caballeros del Zodiaco (Saint Seiya)",
                        "chapter_title": "SAGA DEL SANTUARIO",
                        "time": "8:30",
                        "rating": "PG",
                        "active": 1,
                        "sinopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                        "image": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                        "channel": "Canal Claro"
                    }
                ]
            }
        ],
        "genres":[
             {
                "id": 1,
                "title": "Kids"
            },
        ]
 *  }
 * }
 * @apiError NotFound   User not found with the given information.
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error User not found with the given information. "
 *  "data" : {
 *     
 *  }
 * }
 *  * @apiErrorExample Response (BadRequest):
 * {
 *  "code":400,
 *  "message":"Some params can´t be found"
 *  "data" : {
 *     
 *  }
 * }
*/