/**
 * @api {post} /admin_user/login Inicio de sesion de administrador
 * @apiVersion 1.0.0
 * @apiName Iniciar Sesion
 * @apiGroup Usuario Administrador
 * @apiPermission none
 *
 * @apiDescription Método POST para inciar sesión 
 *
 * @apiParam {String} mail     Email del administrador
 * @apiParam {String} password Contraseña cifrada en sha1
 *
 * @apiExample Ejemplo de uso:
 * {
	"email":"correo@gmail.com",
    "password":"7c222fb2927d828af22f592134e8932480637c0d"
 *  }
 * @apiSuccess {Integer}   id            Id del administrador
 * @apiSuccess {String}    name          Nombre del administrador.
 * @apiSuccess {String}    mail          Correo del administrador.
 * @apiSuccess {String}    gender       Genero del administrador
 * @apiSuccess {Date}      birthday      Fecha de nacimiento.
 * @apiSuccess {Array}   rol           Arreglo con la informacion del rol.
 *
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success User Found ",
    "data": {
        "id": 1,
        "name": "Nombre",
        "email": "correo@gmail.com",
        "gender": "Male",
        "birthday": "01-01-1970",
        "rol": {
            "id": 1,
            "name": "root"
        }
    }
 * }
 * @apiError NotFound   No se encontro al administrador.
 * @apiError BadRequest  Error en validación del usuario.
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
 *  "code":422,
 *  "message":"Some params can´t be found"
 *  "data" : {
 *     
 *  }
 * }
 */

/**
 * @api {post} /admin_user Crear un usuario administrador
 * @apiVersion 1.0.0
 * @apiName PostUser
 * @apiGroup Usuario Administrador
 * @apiPermission admin 
 *
 * @apiDescription  Método POST para crear un nuevo usuario administrador
 *
 * @apiParam {String}    name          Nombre del usuario.
 * @apiParam {String}    mail          Correo del usuario
 * @apiParam {Integer}   rol_id        id del rol que tendra el usuario.
 * @apiParam {Integer}   admin_user_id        id del administrador que crea el usuario nuevo.
 * 
 * @apiExample Ejemplo de petición:
 * {
 *  "name":"Nombre De usuario",
 *  "email":"ejemplo@correo.com",
 *  "rol_id":1,
 *  "admin_user_id":1
 * }
 *
 * @apiSuccessExample {json} Respuesta exitosa :
 * {
 *  "code":201,
 *  "message":"Success Admin User Created"
 *  "data" : {
 *      "id" : 1
 *      "name" : "Nombre"
 *      "mail" : "correo@gmail.com"
 *      "gender" : "Male"
 *      "Date"  : "01/01/2000"
 *      "rol" : 1
 *  }
 * }
 * 
 * @apiError Forbiden The admin user is not root
 * @apiError BadRequest  Some params can´t be found.
 *
 * @apiErrorExample Response (BadRequest):
 * {
 *  "code":422,
 *  "message":"Validation Error"
 *  "data" : {
 *     "name": [
            "The name field is required."
        ]
 *  }
 * }
 * @apiErrorExample Response (Forbiden):
 * {
 *  "code":400,
 *  "message":"NO se tienen los permisos para hacer esta accion"
 *  "data" : {
 *     
 *  }
 * }
 */

 /**
 * @api {get} /admin_user/all/{id} Obtener la lista de todos los administradores
 * @apiVersion 1.0.0
 * @apiName GetAll
 * @apiGroup Usuario Administrador
 * @apiPermission Admin
 *
 * @apiDescription Método par obtener la lista de todos los usuarios administradoes
 *
 * @apiExample Ejemplo de uso:
 * http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/admin_user/all/1
 *
 * @apiSuccess {array}   Arreglo con la lista de todos los usuarios
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
 *  "code": 200,
    "meessage": "Success Admin Users Found",
    "data": [
        {
            "id": 1,
            "created_at": "2020-01-01",
            "updated_at": 2020-01-01,
            "name": "Nombre",
            "email": "correo@gmail.com"
            "gender": null,
            "birthday": null,
            "active": 1,
            "rol_id": 1
        }
 *  ]
 * }
 *
 * }
 */

 /**
 * @api {get} /admin_user/{id} Obtener información de un administrador en especifico.
 * @apiVersion 1.0.0
 * @apiName GetEspecific
 * @apiGroup Usuario Administrador
 * @apiPermission none
 *
 * @apiDescription Método GEt para obtener la información de un administrador especifico
 * @apiParam {Integer} id      Id del usuario que queremos obtener
 *
 * @apiExample Ejemplo de uso:
 * curl -i http://ClaroNetworks.com/api/admin_user/?key=123abc&id=1
 *
 * @apiSuccess {Object}   User information
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
 *  "code": 200,
    "meessage": "Success User Found",
    "data": {
        "id": 1,
        "created_at": null,
        "updated_at": "2020-11-18 20:15:35",
        "name": "Nombre",
        "email": "correo@gmail.com",
        "gender": null,
        "birthday": null,
        "active": 1,
        "rol_id": 1,
        "rol": {
            "id": 1,
            "name": "root"
        }
    }
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
 * @api {post} /admin_user/AdminEdition Editar datos del Administrador
 * @apiVersion 1.0.0
 * @apiName EditUser
 * @apiGroup Usuario Administrador
 * @apiPermission admin
 *
 * @apiDescription Método POST para editar la infromacion de un administrador, se deben mandar todos los parametros, si uno no se quiere editar se debe mandar en NULL
 *
 *
 * @apiParam {Integer} id Id of the admin who made the request.
 * @apiParam {Integer} id Id of the admin who made the request.
 * @apiParam {String}    name          Fullname of the User.
 * @apiParam {String}    password      Password of the User.
 * @apiParam {String}    mail          email of the   User
 * @apiParam {String}    gender       Gender of the user Male o Female
 * @apiParam {Date}      birthday      Birthday of the user.
 * @apiParam {Integer}   rol           The id of the user´s rol.
 * 
 * @apiExample Ejemplo de uso:
 *{
    "id_root":1,
    "id_admin_user":3,
    "name":"Nombre Editar",
    "email":"correo@editar.com",
    "password":null,
    "password_confirm":null,
    "rol_id":null
*}
 * @apiSuccessExample {json} Success-Response :
 * {
 *  "code":201,
 *  "message":"Success Admin User Changed"
 *  "data" : {
    "id_root":1,
    "id_admin_user":3,
    "name":"Nombre Editar",
    "email":"correo@editar.com",
    "password":null,
    "password_confirm":null,
    "rol_id":null
 *  }
 * }
 * 
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

 *
 */

  /**
 * @api {delete} /admin_user/{key}{id_admin}{id_user} Logic delete the specific user.
 * @apiVersion 1.0.0
 * @apiName DeleteUser
 * @apiGroup Usuario Administrador
 * @apiPermission Admin
 *
 * @apiDescription DELETE Method, only logic delete
 * @apiParam {String} key      API athorization key.
 * @apiParam {Integer} id_admin     Id of the user who made the request.
 * @apiParam {Integer} id_user      Id of the user to delete.
 *
 * @apiExample Ejemplo de uso:
 *  curl -X DELETE http://ClaroNetworks.com/api/admin_user/?id_admin=1&admin_user=2&key=123abc&id=1
 *
 * 
 * @apiSuccessExample {json} Success-Response :
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
 *  "message":"Invalid API key or Unathorized Admin user"
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