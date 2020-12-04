/**
 * @api {get} /program/{id} Informacion de un programa especifico
 * @apiVersion 1.0.0
 * @apiName Ver Programa
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Método GET para obtener la infromacion de un programa en especifico
 *
 * @apiExample Ejemplo de uso:
 * http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/1
 * @apiSuccess {Array}   data           Son los atributos pertenencientes al capitulo
 * @apiSuccess {Array}   data.program   Atributos del programa al que pertenece el capitulo.
 *
 * @apiSuccessExample {json} Success-Response :
 * {
     "code": 200,
    "meessage": "Success Programing ",
    "data": {
        "id": 1,
        "title": "Shiryū contra Máscara de la Muerte",
        "day": "2020-07-03",
        "programing": 6,
        "season": 1,
        "episode_number": 0,
        "in_home": 1,
        "in_home_begin": null,
        "in_home_expiration": null,
        "in_landing": 0,
        "in_landing_begin": null,
        "in_landing_expiration": null,
        "thumbnail_list_horizontal": null,
        "thumbnail_list_vertical": "http://127.0.0.1:8000/storage/canal-claro/section-home-vertical/1.jpeg",
        "image_synopsis": null,
        "image_synopsis_frame_1": null,
        "image_synopsis_frame_2": null,
        "image_synopsis_frame_3": null,
        "synopsis": null,
        "landing_synopsis": 0,
        "short_synopsis": "sinopsis corta",
        "program_episode_number": 0,
        "duration": "00:30",
        "image_background_1": null,
        "image_background_2": null,
        "image_background_3": null,
        "subbed": "0",
        "dubbed": "0",
        "audio5": "0",
        "section_id": 1,
        "version_id": 1,
        "program_id": 2,
        "copy_of": null,
        "created_at": null,
        "updated_at": "2020-11-12 06:33:14",
        "program": {
            "id": 2,
            "title": "Los Caballeros del Zodiaco (Saint Seiya)",
            "synopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
            "genre": "Accion, Anime",
            "rating": "PG",
            "image_background_3": null,
            "image_background_2": null,
            "image_background_1": null,
            "duration": "-573 minutos",
            "seasons": 1,
            "year": 1986,
            "periodicity": 0,
            "image_synopsis_frame_1": null,
            "image_synopsis_frame_2": null,
            "image_synopsis_frame_3": null,
            "image_synopsis": null,
            "thumbnail_list_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
            "thumbnail_list_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-vertical/saint-seiya.jpg",
            "section_id": 1,
            "copy_of": null,
            "provider_identifer": null,
            "created_at": null,
            "updated_at": "2020-11-26 19:27:50"
        }
    }
 * }
 * @apiError NotFound   No existe ningun capitulo.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Program not found, or program not exist"
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
 * @apiDescription Método GET para obtener los datos que se mostraran en el landing de sinopsis, vienen los horarios por dia que tiene el programa y las horas en el pasa dividido por regiones
 *
 *
 * @apiExample Ejemplo de uso:
 * http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/getSynopsis/1
 * @apiSuccess {Array}   data    datos encesarios para pintar el landing
 * @apiSuccess {Array}   data.time_regions     Datos necesarios para pintar los horarios por regiones.
 * @apiSuccess {Integer} data.time_regions.actual_day         Numero del dia de la semana 1 -> domingo 7 -> sabado
 * @apiSuccess {Array}   data.time_regions.periodicity        Arreglo con los dias de la semana en el que se repite el programa 1-7
 * @apiSuccess {Array}   data.time_regions.regions  Arreglo con la informacion para pintar los horarios  
 * @apiSuccess {Array}   data.time_regions.regions.countrires           Arreglo agrupando los paises por regiones, dependiendo su zona horaria
 * @apiSuccess {Array}   data.time_regions.regions.times           Arraglo con los horarios, divididos por regiones, solo se muestran los dias y las horas en las que se tiene hora
 *
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success Sinopsis Founded",
    "data": {
        "program_id": 2,
        "chapter_id": "1",
        "landing_id": 1,
        "title": "Los Caballeros del Zodiaco (Saint Seiya)",
        "subtitle": "Shiryū contra Máscara de la Muerte",
        "sinopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
        "time": "00:00",
        "image_background_1": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png",
        "image_background_2": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png",
        "image_background_3": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png",
        "image_synopsis": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png",
        "image_synopsis_frame_1": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png",
        "image_synopsis_frame_2": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png",
        "image_synopsis_frame_3": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/synopsis/image-synopsis-horizontal.png",
        "day": "2020-07-03",
        "program_episode_number": 0,
        "seasons": 1,
        "duration": "-573 minutos",
        "year": 1986,
        "rating": "PG",
        "genre": "Accion, Anime",
        "time_regions": {
            "actual_day": "5",
            "periodicity": [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6"
            ],
            "regions": {
                "countries": {
                    "region_1": [
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/argentina.svg"
                    ],
                    "region_2": [
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/brazil.svg"
                    ],
                    "region_3": [
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/chile.svg",
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/paraguay.svg"
                    ],
                    "region_4": [
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/dominican-republic.svg"
                    ],
                    "region_5": [
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/colombia.svg",
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/peru.svg",
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/panama.svg",
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/ecuador.svg"
                    ],
                    "region_6": [
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/el-salvador.svg",
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/honduras.svg",
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/nicaragua.svg",
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/guatemala.svg",
                        "http://www.claronetworks.openofficedospuntocero.info/images/paises/costa-rica.svg"
                    ]
                },
                "times": {
                    "region_1": [
                        [
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [
                                    "3:00"
                                ],
                                "PM": [
                                    "13:00",
                                    "15:00",
                                    "20:00"
                                ]
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            }
                        ]
                    ],
                    "region_2": [
                        [
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [
                                    "4:00"
                                ],
                                "PM": [
                                    "14:00",
                                    "16:00",
                                    "21:00"
                                ]
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            }
                        ]
                    ],
                    "region_3": [
                        [
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [
                                    "3:00"
                                ],
                                "PM": [
                                    "13:00",
                                    "15:00",
                                    "20:00"
                                ]
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            }
                        ]
                    ],
                    "region_4": [
                        [
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [
                                    "6:00"
                                ],
                                "PM": [
                                    "16:00",
                                    "18:00",
                                    "23:00"
                                ]
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            }
                        ]
                    ],
                    "region_5": [
                        [
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [
                                    "11:00",
                                    "1:00"
                                ],
                                "PM": [
                                    "13:00",
                                    "18:00"
                                ]
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            }
                        ]
                    ],
                    "region_6": [
                        [
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [
                                    "6:00"
                                ],
                                "PM": [
                                    "16:00",
                                    "18:00",
                                    "23:00"
                                ]
                            },
                            {
                                "AM": [],
                                "PM": []
                            },
                            {
                                "AM": [],
                                "PM": []
                            }
                        ]
                    ]
                }
            }
        }
    }
 * }
 * @apiError NotFound  No se encontro sinopsis.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error Sinopsis not found with the given information. "
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
 *
 * @apiExample Ejemplo de uso:
 * http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/actual_programing/colombia&2020-11-15
 * @apiSuccess {String}   method          Indica en que metoo esta entrando la funcion, "programing actual" para el carrusel, "programing landing" para el landing, esto depende segun el país seleccioando
 * @apiSuccess {Integer}  id_section      id del canal al que pertenece.
 * @apiSuccess {String}   section         Nombre del canal al que pertenece.
 * @apiSuccess {String}   last_day       ultimo dia con progrmacion encontrado en el canal
 * @apiSuccess {Array}    programing     lista con la Programacion encontrada
 * @apiSuccess {String}   programing.day    Dia de la programcion
 * @apiSuccess {String}   programing.hour   Hora actual del pais selecciona
 * @apiSuccess {Float}   programing.hour_GMT    Flotante que representa la hora en GMT actual
 * @apiSuccess {Array}   programing.programs    lista con los programas, y la informacion necearia para pintar el carrusel
 *
 * @apiSuccessExample {json} Success-Response :
 * {
     "code": 200,
    "meessage": "Success Programing for argentina",
    "data": [
        {
            "method": "programing actual",
            "id_section": 1,
            "section": "Canal Claro",
            "last_day": "2020-12-01",
            "programing":[
                "day": "2020-11-15",
                    "hour": "17:10",
                    "hour_GMT": 20.166666666666668,
                    "programs": [
                        {
                            "chapter_id": 299,
                            "version_id": 1,
                            "program_id": 65,
                            "Program_Title": "Devout; The",
                            "chapter_title": "Devout; The",
                            "sinopsis": "En una pequeña ciudad del cinturón de la Biblia, Darryl y Jan se enfrentan a lo impensable. Su hija de 4 años, Abigail, tiene cáncer terminal con solo semanas de vida. Mientras juega con su cohete de juguete, Abigail murmura intrincaciones arcanas sobre el traje espacial de un astronauta a su padre: terminología que ningún niño de 4 años debería saber.",
                            "time": "17:00",
                            "landing_synopsis": 0,
                            "image": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/default/claro-horizontal-slider.jpg",
                            "day": "2020-11-15"
                        },
            ]
        },
        {
            "method": "programing actual",
            "id_section": 2,
            "section": "Concert Channel",
            "last_day": "2020-11-30",
            "programing":[

            ]
        },
        {
            "method": "programing actual",
            "id_section": 3,
            "section": "Claro Cinema",
            "last_day": "2020-12-27",
            "programing":[
                
            ]
        }
    ]
 * }
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
 * @apiExample Ejemplo de uso:
 * http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/actual_programing_programation/gmt&2020-11-17&1
 * @apiSuccess {String}   method          Indica en que metoo esta entrando la funcion, "programing actual" para el carrusel, "programing landing" para el landing, esto depende segun el país seleccioando
 * @apiSuccess {Integer}  id_section      id del canal al que pertenece.
 * @apiSuccess {String}   section         Nombre del canal al que pertenece.
 * @apiSuccess {String}   last_day       ultimo dia con progrmacion encontrado en el canal
 * @apiSuccess {Array}    programing     lista con la Programacion encontrada
 * @apiSuccess {String}   programing.day    Dia de la programcion
 * @apiSuccess {String}   programing.hour   Hora actual del pais selecciona
 * @apiSuccess {Float}   programing.hour_GMT    Flotante que representa la hora en GMT actual
 * @apiSuccess {Array}   programing.programs    lista con los programas, y la informacion necearia para pintar el carrusel
 *
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success Programing for GMT",
    "data": [
        {
            "method": "programation for landing",
            "id_section": 1,
            "section": "Canal Claro",
            "last_day": "2020-12-01",
            "programing": [
                {
                    "day": "2020-11-17",
                    "hour": "00:00",
                    "hour_GMT": 0,
                    "programs": [
                        {
                            "chapter_id": 374,
                            "version_id": 1,
                            "program_id": 2,
                            "Program_Title": "Los Caballeros del Zodiaco (Saint Seiya)",
                            "chapter_title": "SAGA DEL SANTUARIO",
                            "sinopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                            "time": "0:00",
                            "time_GMT": "0:00",
                            "image": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                            "landing_synopsis": 0,
                            "day": "2020-11-17"
                        },
 * }
 * 
 */
/**
 * @api {get} /program/getProgramingGrillFirst/{inicio}&{landing}&{id} Obtener toda la programacion para la grilla 
 * @apiVersion 1.0.0
 * @apiName Obtner Programacion para la grilla
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Método GET para obtener la lista de programas para poder pintar la grilla, se obtiene a apartir del dia indicado hasta el ultimo dia con programacion. Solo se regresan os programas pertenecientes al canal indicado
 *
 * @apiParam {String} inicio     Dia actual o apartir del que se requiere la grilla formato YYYY-MM-DD
 * @apiParam {String} landing     Canal del que se requiere la grilla "Canal Claro", "Claro Cinema","Concert Channel"
 * @apiParam {Inetger} id     id del usuario que hace la peticion
 *
 * @apiExample Ejemplo de uso:
 * http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/getProgramingGrillFirst/2020-11-10&Canal Claro&1
 * @apiSuccess {Array}   grilla         Informacion para la grilla
 * @apiSuccess {Date}    day          Dia al que pertene la grila
 * @apiSuccess {String}    version_origin  version a la que pertenece la grilla master/user
 * @apiSuccess {String}    version_number  Numero de la version ( se eliminara ya que no es necesario)
 * @apiSuccess {Integer}   version_id    Id de la version de la grilla que se muestra
 * @apiSuccess {String}   last_edition   Fecha de la ultima edicion con el formato para pintarlo 
 * @apiSuccess {String}   edited_for   Nombre del usuario que hizo la ultima edicion
 * @apiSuccess {String}   user_rol  Rol del usuario que hizo la ultima edición
 * @apiSuccess {String}   section Nombre del canal al que pertenece la grilla
 * @apiSuccess {Array}   programs Lista de los prograsmas con la infromacion necesaria para pintar un row en la grilla
 *
 * @apiSuccessExample {json} Success-Response :
 * {
   "code": 200,
    "meessage": "Programing grill",
    "data": {
        "grilla": [
            {
                "day": "2020-11-10",
                "version_origin": "master",
                "version_number": null,
                "version_id": 1,
                "last_edition": "24 Noviembre, 2020 20:18:35 GMT",
                "edited_for": "Hugoles",
                "user_rol": "root",
                "section": "Canal Claro",
                "programs": [
                    {
                        "chapter_id": 152,
                        "program_id": 2,
                        "day": "2020-11-10",
                        "title": "Los Caballeros del Zodiaco (Saint Seiya)",
                        "subtitle": "SAGA DEL SANTUARIO",
                        "programing": "00:00",
                        "in_home": 0,
                        "in_home_begin": null,
                        "in_home_expiration": "1970-01-01 00:00:00",
                        "in_landing": 0,
                        "in_landing_begin": null,
                        "in_landing_expiration": "1970-01-01 00:00:00",
                        "program_year_produced": 1986,
                        "status": 5,
                        "subbed": "0",
                        "dubbed": "0",
                        "audio5": "0",
                        "year": 1986,
                        "genre": [
                            "Accion",
                            " Anime"
                        ],
                        "synopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                        "short_synopsis": "sinopsis corta de Los Caballeros del Zodiaco (Saint Seiya)",
                        "program_episode_number": 6,
                        "rating": "PG",
                        "country_of_origin": null,
                        "seasons": 1,
                        "season": 1,
                        "duration": "00:27:56",
                        "images": {
                            "thumbnail_list_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                            "thumbnail_list_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-vertical/saint-seiya.jpg",
                            "image_synopsis": null,
                            "image_synopsis_frame_1": null,
                            "image_synopsis_frame_2": null,
                            "image_synopsis_frame_3": null,
                            "image_background_1": null,
                            "image_background_2": null,
                            "image_background_3": null,
                            "cantity_images_uploaded_chapter": 0,
                            "cantity_images_uploaded_program": 2,
                            "cantity_images_uploaded": 2
                        }
                    },
 * }
 * @apiError NotFound   No se encontro al administrador.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error Grill not found with the given information. "
 *  "data" : {
 *     
 *  }
 * 
 */
/**
 * @api {get} /program/getProgramingGrill/{inicio}&{fin}&{landing}&{id}} Obtener toda la programacion para la grilla 
 * @apiVersion 1.0.0
 * @apiName Filtrar Programacion para la grilla
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Método GET para obtener la lista de programas para poder pintar la grilla, Se usa en el filtro de fecha regresa los progrmas en las fechas indicadas . Solo se regresan os programas pertenecientes al canal indicado
 *
 * @apiParam {Date} incio     Dia de inicio para mostrar la grilla
 * @apiParam {Date} fin Ultimo dia en el que se requiere la grilla
 * @apiParam {String} landing Nombre del canal del que se requiere la grilla
 * @apiParam {Integer} id id del usuario que solicita la grilla
 *
 * @apiExample Ejemplo de uso:
 *http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/program/getProgramingGrillFirst/2020-11-10&Canal Claro&1
 * @apiSuccess {Array}   grilla         Informacion para la grilla
 * @apiSuccess {Date}    day          Dia al que pertene la grila
 * @apiSuccess {String}    version_origin  version a la que pertenece la grilla master/user
 * @apiSuccess {String}    version_number  Numero de la version ( se eliminara ya que no es necesario)
 * @apiSuccess {Integer}   version_id    Id de la version de la grilla que se muestra
 * @apiSuccess {String}   last_edition   Fecha de la ultima edicion con el formato para pintarlo 
 * @apiSuccess {String}   edited_for   Nombre del usuario que hizo la ultima edicion
 * @apiSuccess {String}   user_rol  Rol del usuario que hizo la ultima edición
 * @apiSuccess {String}   section Nombre del canal al que pertenece la grilla
 * @apiSuccess {Array}   programs Lista de los prograsmas con la infromacion necesaria para pintar un row en la grilla
 *
 * @apiSuccessExample {json} Success-Response :
 * {
   "code": 200,
    "meessage": "Programing grill",
    "data": {
        "grilla": [
            {
                "day": "2020-11-10",
                "version_origin": "master",
                "version_number": null,
                "version_id": 1,
                "last_edition": "24 Noviembre, 2020 20:18:35 GMT",
                "edited_for": "Hugoles",
                "user_rol": "root",
                "section": "Canal Claro",
                "programs": [
                    {
                        "chapter_id": 152,
                        "program_id": 2,
                        "day": "2020-11-10",
                        "title": "Los Caballeros del Zodiaco (Saint Seiya)",
                        "subtitle": "SAGA DEL SANTUARIO",
                        "programing": "00:00",
                        "in_home": 0,
                        "in_home_begin": null,
                        "in_home_expiration": "1970-01-01 00:00:00",
                        "in_landing": 0,
                        "in_landing_begin": null,
                        "in_landing_expiration": "1970-01-01 00:00:00",
                        "program_year_produced": 1986,
                        "status": 5,
                        "subbed": "0",
                        "dubbed": "0",
                        "audio5": "0",
                        "year": 1986,
                        "genre": [
                            "Accion",
                            " Anime"
                        ],
                        "synopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
                        "short_synopsis": "sinopsis corta de Los Caballeros del Zodiaco (Saint Seiya)",
                        "program_episode_number": 6,
                        "rating": "PG",
                        "country_of_origin": null,
                        "seasons": 1,
                        "season": 1,
                        "duration": "00:27:56",
                        "images": {
                            "thumbnail_list_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
                            "thumbnail_list_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-vertical/saint-seiya.jpg",
                            "image_synopsis": null,
                            "image_synopsis_frame_1": null,
                            "image_synopsis_frame_2": null,
                            "image_synopsis_frame_3": null,
                            "image_background_1": null,
                            "image_background_2": null,
                            "image_background_3": null,
                            "cantity_images_uploaded_chapter": 0,
                            "cantity_images_uploaded_program": 2,
                            "cantity_images_uploaded": 2
                        }
                    },
 * }
 * @apiError NotFound   No se encontro al administrador.
 *
 * @apiErrorExample Response (NotFound):
 * {
 *  "code":404,
 *  "message":"Error Grill not found with the given information. "
 *  "data" : {
 *     
 *  }
 * 
 */
/**
 * @api {post} /program/CapturePrograming capturar la programación
 * @apiVersion 1.0.0
 * @apiName Capturar Programación
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Método POST para capturar la informacion directamente de la plantilla de excel procesada por el backoffice, no se recomienda hacar esta peticion fuera del algoritmo creado para subir la programacion con un excel
 *
 * @apiParam {Integer} usuario_id     id del usuario administrador que quiere subir programación
 * @apiParam {Integer} landing_id     id del canal al que se le agregaran los programas
 * @apiParam {Integer} version_id     id de la version a la que se le agregaran los programas, el 0 es para la version maestra, esto se calcula en automatico con el algoritmo creado
 * @apiParam {Integer} version_number  numero de la version ( se eliminara en una version posterior)
 * @apiParam {Array} programs Lista de los programas que se agregaran, deben incluir forzosamente todos los atributos mostrados
 *
 * @apiExample Ejemplo de uso:
 * {
    "usuario_id":1,
    "landing_id":1,
    "version_id":0,
    "version_number":0,
    "programs":[{
        "Audio_5.1_avalieble": 0,
        "Establecer_home": 1,
        "Establecer_landing":0,
        "Estimed_Schedule_Item_Duration": "06:30:00",
        "Periodicidad": 0,
        "Program_Episode_Number": 21,
        "Program_Episode_Season": 21,
        "Program_Genre_List": "Animación",
        "Program_Title": "Los Caballeros del Zodiaco (Saint Seiya)",
        "Program_Title_Alternate": "Shiryū contra Máscara de la Muerte",
        "Program_Year_Produced": 1982,
        "Programar_publicacion": 1,
        "Schedule_Item_Date_Time": "2020-11-09 06:00:00",
        "Schedule_Item_Long_Date": "2020-11-09",
        "Schedule_Item_Long_Time": "06:00:00",
        "Schedule_Item_Rating_Code": "A",
        "Scheduled_Version_DUBBED": 0,
        "Scheduled_Version_SUBBED": 0,
        "Synopsis": "Los guerreros llamados \"Santos\" son campeones de la esperanza que aparecen cuando el mal amenaza al mundo.",
        "Vigencia_home": "2020-05-14",
        "Vigencia_landing": "2020-05-14"
            }
    ]
 *}
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success Programing captured",
    "data": []
 * }
 * @apiSuccessExample {json} Success-Response-other :
 * {
    "code": 200,
    "meessage": "Success Programing captured",
    "data": ["Nothing to do, empty programs"]
 * }
 * @apiError NotFound   No se encontro al administrador.
 * @apiError BadRequest  Error en validación de la peticion.
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
 * @api {post} /program/changePrograming Cambiar Progrmacion
 * @apiVersion 1.0.0
 * @apiName Cambiar Progrmacion
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Cuando se usa la API capturePrograming, si se detecta que el dia que se sube ya cuenta con progrmacion, se le pregunta al usuario si se reemplaza esta infromación o se agrega a la que esta, este método POST permite cambiar/agregar la programación 
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
 * @api {post} /program/CaptureImagesForChapter Agregar Imagenes a un programa
 * @apiVersion 1.0.0
 * @apiName Agregar imagenes al capitulo
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Este metodo sirve para agregar imagenes a un capitulo, si se detecta que el programa al que pertenece el capitulo no tiene imagenes (default) la iamgen subida es posicionada como tal y los posteriores capitulos tendran como imagen default la proporcinada en esta API
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
 * @api {post} /program/editChapter Editar capitulo
 * @apiVersion 1.0.0
 * @apiName Editar capitulo
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Este metodo edita alguna atributo del elemento (key), con el valor proporcionado (value)
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
 * @api {post} /program/deleteChapter Eliminar capitulo
 * @apiVersion 1.0.0
 * @apiName Eliminar capitulo
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Este metodo Elimna por completo un el capitulo indicado
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
 * @api {post} /program/newEntryGrill Nuevo capitulo
 * @apiVersion 1.0.0
 * @apiName Nuevo capitulo
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Este metodo crea un nuevo capitulo en el dia actual, regresa el id del capitulo creado, se utiliza en la grilla al momento de dar click en nueva entrada
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
 * @api {post} /program/getImagesChapter/{id} Obtener Imagenes del capitulo
 * @apiVersion 1.0.0
 * @apiName Obtener Imagenes capitulo
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Este metodo regresa las imagenes del capitulo indicado, si el capitulo no tiene una imagen especifica se regresa la imagen default
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
 * @api {post} /program/chekChapterExist Revisa si existe programacion en un dia
 * @apiVersion 1.0.0
 * @apiName Revisa si existe progrmacion en un dia
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Este metodo se llama durante la subida del excel revisa si existe por lo menos un programa en el primer dia indicado en la plantilla, si existe se regresa 
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
 * @api {get} /getAllPrograms/{id} Obtener todos los programas 
 * @apiVersion 1.0.0
 * @apiName Obtener todos los programas
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Obtienes todos los pogrmas registrados en la BD
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
 * @api {post} /program/editBolckSinopsis Editar bloque de sinopsis 
 * @apiVersion 1.0.0
 * @apiName Editar bloque de sinopsis
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Edita el bloque inferior en el landing de sinopsis
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
 * @api {post} /program/editSinopsisLanding Editar sinopsis en el landing
 * @apiVersion 1.0.0
 * @apiName Editar Sinopsis landing
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Edita la sinopsis en el landing de sinopsis.
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
 * @api {get} /program/getSinospsisTable/{day} Regresa la tabla con informacion de sinopsis
 * @apiVersion 1.0.0
 * @apiName Obtener Tabla Sinopsis
 * @apiGroup Programa
 * @apiPermission none
 *
 * @apiDescription Regresa la tabla de sinopsis en donde se muestra los carecteres totales de la sinopsis de cada porgrama
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