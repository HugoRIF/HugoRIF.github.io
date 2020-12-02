/**
 * @api {post} /admin_user/login Inicio de sesion de administrador
 * @apiVersion 1.0.0
 * @apiName Iniciar Sesion
 * @apiGroup Programacion
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

