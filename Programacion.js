/**
 * @api {post} /programation/setImageSlider Agregar Imagenes al Carrusel principal
 * @apiVersion 1.0.0
 * @apiName Agregar Imagenes
 * @apiGroup Programacion
 * @apiPermission admin
 *
 * @apiDescription Método para subir las iamgenes al carrusel principal del landing de programación, solo los adminsitradores puede usar este metodo, se pueden eviar varias imagenes a a vez,las iamgenes se posicionaran en el orden indicado. EL método tiene dos funciones, actualizar la iamgen de una posicion especifica o agregar una nueva, se debe saber cual es la ultima psosicion, si se encuentra que la posición indicada no existe se crea la posicion y se agrega la imagen 
 *
 * @apiParam {Integer} usuario_id     Id del administrador que hace la solicitud
 * @apiParam {Array} value URLs de las imagenes que se agregaran
 * @apiParam {Array} postions posiciones en que las imagenes se agregarán
 *
 * @apiExample Ejemplo de uso:
 * {
	"usuario_id":1,
    "value":["http://www.claronetworks.openofficedospuntocero.info/images/programacion/banner/canal-claro/pc/CANAL-CLARO-05-A.jpg","http://www.claronetworks.openofficedospuntocero.info/images/programacion/banner/canal-claro/pc/CANAL-CLARO-05-A.jpg"],
    "positions":[1,11]
 *  }
 * @apiSuccess {Integer}   posicion      la posicion en la que se agrega la iamgen
 * @apiSuccess {String}    operacion      Descripcion de la operacion creada/actualizada
 *
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Operación en el Slider exitosa",
    "data": [
        {
            "posicion": 1,
            "operación": "actualizada http://www.claronetworks.openofficedospuntocero.info/images/programacion/banner/canal-claro/pc/CANAL-CLARO-05-A.jpg"
        },
        {
            "posicion": 11,
            "operación": "creada http://www.claronetworks.openofficedospuntocero.info/images/programacion/banner/canal-claro/pc/CANAL-CLARO-05-A.jpg"
        }
    ]
 * }
 * @apiError NotFound   No se encontro al administrador.
 * @apiError BadRequest  Error en validación del usuario.
 * @apiError BadRequest-Server  Error en tamaños de arreglos.
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
 * * @apiErrorExample Response (BadRequest-Server):
 * {
 *  "code":500,
 *  "message":"The legth of value and positions are not the same"
 *  "data" : {
 *     
 *  }
 * }
 */
/**
 * @api {post} /programation/setIconChannel Cambiar Iconos de Canales
 * @apiVersion 1.0.0
 * @apiName Cambiar Iconos
 * @apiGroup Programacion
 * @apiPermission admin
 *
 * @apiDescription Método para cabiar los iconos de los canales en el landing de programación, si no se queire cambiar algun icono se debe poner el parametro del canal en null
 *
 * @apiParam {Integer} usuario_id     Id del administrador que hace la solicitud
 * @apiParam {Array} canal_claro URLs del icono para canal claro
 * @apiParam {Array} concert_channel URLs del icono para concert channel
 * @apiParam {Array} claro_cinema URLs del icono para claro cinema
 * @apiParam {String} icon url para el icono
 * @apiParam {String} url url para redirecionar
 *
 * @apiExample Ejemplo de uso:
 * {
	"usuario_id":1,
    "canal_claro":[
                    "icon":"icono-canal_claro",
                    "url":"icono-canal_claro"
                ],
    "concet_channel":null,
    "claro_cinema":null,
 *  }
 * @apiSuccess {Integer}   posicion      la posicion en la que se agrega la iamgen
 * @apiSuccess {String}    operacion      Descripcion de la operacion creada/actualizada
 *
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Se actualizo correctamente:",
    "data": [
        
        "canal_claro": icono y url actulizados
    
        
    ]
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
 * @api {post} /programation/getChapter/{id}' Obtner informacion Programa (Termometro)
 * @apiVersion 1.0.0
 * @apiName Termometro
 * @apiGroup Programacion
 * @apiPermission none
 *
 * @apiDescription Este metodo trae la información de un capitulo especifico, incluye el termometro para saber el estatus de los horarios en el dia del programa
 *
 * @apiParam {Integer} id     Id del capitulo
 *http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/programation/getChapter/997
 * @apiExample Ejemplo de uso:
 * 
 * @apiSuccess {Integer}   id_status      estatus del capitulo
 * @apiSuccess {String}    status      Descripcion del estatus en el que se encuentra el programa
 * @apiSuccess {Inetger}   id_alert    tipo de alerta que manda el capitulo
 * @apiSuccess {String}   alert    Descripcion de la alerta
 * @apiSuccess {Array}   program   Atributos del capitulo y del programa al que pertenece
 * @apiSuccess {Array}   program_catalogue   Catalogo de los programas diponibles
 * @apiSuccess {Array}   thermometer  Informacion relevante para el termometro
 * @apiSuccess {Array}   thermometer.duracion  Duración en float del capitulo actual
 * @apiSuccess {Array}   thermometer.thermometer  listado por periodos para realizar el pintado del termometro, se muestran tres posibles estados, ocupado/actual/disponible. 
 * @apiSuccess {String}  image_program  url de la imagen del programa
 * @apiSuccess {Array}  genres  catalogo de los generos disponibles
 *
 * @apiSuccessExample {json} Success-Response :
 *{
	 "code": 200,
    "meessage": "Información del capitulo encontrada",
    "data": {
        "id_status": 1,
        "status": "En edicion",
        "id_alert": 1,
        "alert": "Información completa",
        "program": {
            "id": 997,
            "title": "Mansionair: Live in Concert",
            "day": "2020-11-17",
            "programing": 1,
            "season": 0,
            "episode_number": 0,
            "in_home": 0,
            "in_home_begin": null,
            "in_home_expiration": "1970-01-01 00:00:00",
            "in_landing": 0,
            "in_landing_begin": null,
            "in_landing_expiration": "1970-01-01 00:00:00",
            "thumbnail_list_horizontal": null,
            "thumbnail_list_vertical": null,
            "image_synopsis": null,
            "image_synopsis_frame_1": null,
            "image_synopsis_frame_2": null,
            "image_synopsis_frame_3": null,
            "synopsis": "Mansionair te seducirá con sus relajadas vibraciones de synth-pop australiano.",
            "landing_synopsis": 0,
            "short_synopsis": "sinopsis corta de Mansionair: Live in Concert",
            "program_episode_number": 0,
            "duration": "00:30:00",
            "image_background_1": null,
            "image_background_2": null,
            "image_background_3": null,
            "subbed": "0",
            "dubbed": "0",
            "audio5": "0",
            "section_id": 2,
            "version_id": 3,
            "program_id": 120,
            "copy_of": null,
            "created_at": "2020-11-09 10:20:02",
            "updated_at": "2020-11-09 10:20:02",
            "subtitle": "Mansionair: Live in Concert",
            "chapter_id": 997,
            "hour": "1:00:00",
            "program": {
                "id": 120,
                "title": "Mansionair: Live in Concert",
                "synopsis": "Mansionair te seducirá con sus relajadas vibraciones de synth-pop australiano.",
                "genre": "Concierto",
                "rating": "PG-13",
                "image_background_3": null,
                "image_background_2": null,
                "image_background_1": null,
                "duration": "-990 minutos",
                "seasons": 0,
                "year": 2018,
                "periodicity": 0,
                "image_synopsis_frame_1": null,
                "image_synopsis_frame_2": null,
                "image_synopsis_frame_3": null,
                "image_synopsis": null,
                "thumbnail_list_horizontal": null,
                "thumbnail_list_vertical": null,
                "section_id": 2,
                "copy_of": null,
                "provider_identifer": null,
                "created_at": null,
                "updated_at": "2020-11-09 10:20:02"
            }
        },
        "program_catalogue": [...],
         "thermometer": {
               "duracion": "0.5",
        "thermometer": {
            "0:00": {
                "color": "#FF8200",
                "status": "Ocupado",
                "chapter_id": 996,
                "duration": "1.0",
                "viene_de": "dura mas de un periodo,2"
            },
            "0:30": {
                "color": "#FF8200",
                "status": "Ocupado",
                "chapter_id": 996,
                "duration": "1.0",
                "viene_de": "dura mas de un periodo,2"
            },
            "1:00": {
                "color": "#0097A9",
                "status": "Programación Actual",
                "chapter_id": 997,
                "duration": "0.5",
                "viene_de": "solo dura un periodo, es el actual"
            },
            "1:30": {
                "color": "#FF8200",
                "status": "Ocupado",
                "chapter_id": 998,
                "duration": "0.5",
                "viene_de": "solo dura un periodo, no es el actual"
            },
            "2:00": {
                "color": "#FF8200",
                "status": "Ocupado",
                "chapter_id": 999,
                "duration": "1.0",
                "viene_de": "dura mas de un periodo,2"
            },...
        },
        "image_program": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/14_JohnMayer.jpg",
        "genres": [...]
 *  }
 * @apiError BadRequest  Error en validación de capitulo
 *
 *  * @apiErrorExample Response (BadRequest):
 * {
 *  "code":422,
 *  "message":"No hay ningun capitulo con ese id"
 *  "data" : {
 *     
 *  }
 * }
 */
/**
 * @api {post} /programation/getChapterByDate/{day}&{hour}&{channel} Obtner informacion Programa (Termometro) Por fecha
 * @apiVersion 1.0.0
 * @apiName Termometro
 * @apiGroup Programacion
 * @apiPermission none
 *
 * @apiDescription Este metodo trae la información de un capitulo especifico, funciona al darle click en el calendario interno del modal donde apaerece el termometro, incluye el termometro para saber el estatus de los horarios en el dia del programa
 *
 * @apiParam {String} day     Dia del capitulo
 * @apiParam {String} hour     Hora del capitulo 
 * @apiParam {String} channel    Canal al que pertenece 
 *http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/programation/getChapter/997
 * @apiExample Ejemplo de uso:
 * 
 * @apiSuccess {Integer}   id_status      estatus del capitulo
 * @apiSuccess {String}    status      Descripcion del estatus en el que se encuentra el programa
 * @apiSuccess {Inetger}   id_alert    tipo de alerta que manda el capitulo
 * @apiSuccess {String}   alert    Descripcion de la alerta
 * @apiSuccess {Array}   program   Atributos del capitulo y del programa al que pertenece
 * @apiSuccess {Array}   program_catalogue   Catalogo de los programas diponibles
 * @apiSuccess {Array}   thermometer  Informacion relevante para el termometro
 * @apiSuccess {Array}   thermometer.duracion  Duración en float del capitulo actual
 * @apiSuccess {Array}   thermometer.thermometer  listado por periodos para realizar el pintado del termometro, se muestran tres posibles estados, ocupado/actual/disponible. 
 * @apiSuccess {String}  image_program  url de la imagen del programa
 * @apiSuccess {Array}  genres  catalogo de los generos disponibles
 *
 * @apiSuccessExample {json} Success-Response :
 *{
	 "code": 200,
    "meessage": "Información del capitulo encontrada",
    "data": {
        "id_status": 1,
        "status": "En edicion",
        "id_alert": 1,
        "alert": "Información completa",
        "program": {
            "id": 997,
            "title": "Mansionair: Live in Concert",
            "day": "2020-11-17",
            "programing": 1,
            "season": 0,
            "episode_number": 0,
            "in_home": 0,
            "in_home_begin": null,
            "in_home_expiration": "1970-01-01 00:00:00",
            "in_landing": 0,
            "in_landing_begin": null,
            "in_landing_expiration": "1970-01-01 00:00:00",
            "thumbnail_list_horizontal": null,
            "thumbnail_list_vertical": null,
            "image_synopsis": null,
            "image_synopsis_frame_1": null,
            "image_synopsis_frame_2": null,
            "image_synopsis_frame_3": null,
            "synopsis": "Mansionair te seducirá con sus relajadas vibraciones de synth-pop australiano.",
            "landing_synopsis": 0,
            "short_synopsis": "sinopsis corta de Mansionair: Live in Concert",
            "program_episode_number": 0,
            "duration": "00:30:00",
            "image_background_1": null,
            "image_background_2": null,
            "image_background_3": null,
            "subbed": "0",
            "dubbed": "0",
            "audio5": "0",
            "section_id": 2,
            "version_id": 3,
            "program_id": 120,
            "copy_of": null,
            "created_at": "2020-11-09 10:20:02",
            "updated_at": "2020-11-09 10:20:02",
            "subtitle": "Mansionair: Live in Concert",
            "chapter_id": 997,
            "hour": "1:00:00",
            "program": {
                "id": 120,
                "title": "Mansionair: Live in Concert",
                "synopsis": "Mansionair te seducirá con sus relajadas vibraciones de synth-pop australiano.",
                "genre": "Concierto",
                "rating": "PG-13",
                "image_background_3": null,
                "image_background_2": null,
                "image_background_1": null,
                "duration": "-990 minutos",
                "seasons": 0,
                "year": 2018,
                "periodicity": 0,
                "image_synopsis_frame_1": null,
                "image_synopsis_frame_2": null,
                "image_synopsis_frame_3": null,
                "image_synopsis": null,
                "thumbnail_list_horizontal": null,
                "thumbnail_list_vertical": null,
                "section_id": 2,
                "copy_of": null,
                "provider_identifer": null,
                "created_at": null,
                "updated_at": "2020-11-09 10:20:02"
            }
        },
        "program_catalogue": [...],
         "thermometer": {
               "duracion": "0.5",
        "thermometer": {
            "0:00": {
                "color": "#FF8200",
                "status": "Ocupado",
                "chapter_id": 996,
                "duration": "1.0",
                "viene_de": "dura mas de un periodo,2"
            },
            "0:30": {
                "color": "#FF8200",
                "status": "Ocupado",
                "chapter_id": 996,
                "duration": "1.0",
                "viene_de": "dura mas de un periodo,2"
            },
            "1:00": {
                "color": "#0097A9",
                "status": "Programación Actual",
                "chapter_id": 997,
                "duration": "0.5",
                "viene_de": "solo dura un periodo, es el actual"
            },
            "1:30": {
                "color": "#FF8200",
                "status": "Ocupado",
                "chapter_id": 998,
                "duration": "0.5",
                "viene_de": "solo dura un periodo, no es el actual"
            },
            "2:00": {
                "color": "#FF8200",
                "status": "Ocupado",
                "chapter_id": 999,
                "duration": "1.0",
                "viene_de": "dura mas de un periodo,2"
            },...
        },
        "image_program": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/14_JohnMayer.jpg",
        "genres": [...]
 *  }
 * @apiError BadRequest  Error en validación de capitulo
 *
 *  * @apiErrorExample Response (BadRequest):
 * {
 *  "code":422,
 *  "message":"No hay ningun capitulo con ese id"
 *  "data" : {
 *     
 *  }
 * }
 */

