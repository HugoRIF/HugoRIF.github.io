/**
 * @api {get} /program/{id} Informacion de un programa especifico
 * @apiVersion 1.0.0
 * @apiName Ver Programa
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Método GET para obtener la infromacion de un programa en especifico
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
 * @api {get} /program/getSynopsis/{id} Obtner Sinopsis del programa
 * @apiVersion 1.0.0
 * @apiName Obtner Sinopsis
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Método GET para obtener la sinopsis de un programa
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
 * @api {get} /program/actual_programing/{country}&{day} Obtner la Programacion actual
 * @apiVersion 1.0.0
 * @apiName Obtner Progrmación actual
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Método GET para obtener la progrmacion en tiempo real segun el pais  y dia que indiquen, este metodo sirve para pintar el carrusel de progrmacion, se obtiene la programacion de los 3 canales. Por lo tanto se obtiene el dia solicitado y el dia siguiente 
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
 * @api {get} /program/actual_programing_programation/{country}&{day}&{actual} Obtner la Programacion actual para el landing
 * @apiVersion 1.0.0
 * @apiName Obtner Progrmación actual landing 
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Método GET para obtener la progrmacion en tiempo real segun el pais  y dia que indiquen,tambien se debe indicar si es el dia actual el cual se necesita ver. Este emtodo sirve para pintar los progrmas en el landing de progrmacion. Se regresa la lista de programas por cada canal hasta el fin del dia indicado
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
 * @api {get} /program/getProgramingGrillFirst/{inicio}&{landing}&{id} Obtener toda la programacion para la grilla 
 * @apiVersion 1.0.0
 * @apiName Obtner Programacion para la grilla
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Método GET para obtener la lsita de programas para poder pintar la grilla, se obtiene a apartir del dia indicado hasta el ultimo dia con programacion. Solo se regresan os programas pertenecientes al canal indicado
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