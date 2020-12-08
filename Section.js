/**
 * @api {get} /section/{landing} Obtener contenido
 * @apiVersion 1.0.0
 * @apiName Obtener contenido
 * @apiGroup Seccion
 * @apiPermission none
 *
 * @apiDescription Método GET para obener el contenido del landing especifico, se obitienen todos los attributos relacionados a este landing para pintarlos en el front, cabe señalar que los carruseles especiales de cada landign vienen definidos de dos fromas la primera es con el nombre de carrusel_1_X el cual es un arreglo que contiene los ids de los capitulo pertenecientes, posteriormente se encuentran parametros como carrusel_X_imageX los cuales son la informacion detallada necesaria para pintar el recuadro de cada carrusel
 *
 * @apiParam {String} landing     landing que se quiere obtner
 *
 * @apiExample Ejemplo de uso:
 * http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/section/programation
 *
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Content of Home",
    "data": {
        "block_1_title": "DESCUBRE CLARO",
        "block_1_subtitle": "networkS",
        "block_1_image_background_1": "http://www.claronetworks.openofficedospuntocero.info/images/home/banner/claro-home-background.jpg",
        "block_1_image_background_2": "http://www.claronetworks.openofficedospuntocero.info/images/home/banner/concert-home-background.jpg",
        "block_1_image_background_3": "http://www.claronetworks.openofficedospuntocero.info/images/home/banner/cinema-home-background.jpg",
        "block_1_image_background_4": "http://www.claronetworks.openofficedospuntocero.info/images/home/banner/nv-home-bg.jpg",
        "block_1_image_background_5": "http://www.claronetworks.openofficedospuntocero.info/images/home/banner/cs-home-bg.jpg",
        "block_1_video_name": "http://www.claronetworks.openofficedospuntocero.info/video/video.mp4",
        "block_2_title1": "AHORA",
        "block_2_title2": "AL AIRE",
        "block_2_channel1_icon": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-1.svg",
        "block_2_channel1_icon_hover": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-1.svg",
        "block_2_channel2_icon": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-2.svg",
        "block_2_channel2_icon_hover": "http://www.claronetworks.openofficedospuntocero.info/v1.2/images/home/concert-home-img.svg",
        "block_2_channel3_icon": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-3.svg",
        "block_2_channel3_icon_hover": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-3.svg",
        "block_2_channel4_icon": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-4.svg",
        "block_2_channel4_icon_hover": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-4.svg",
        "block_2_channel5_icon": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-5.svg",
        "block_2_channel5_icon_hover": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-5.svg",
        "block_3_title": "CANAL CLARO",
        "block_3_subtitle": "LO MEJOR DEL ENTRETENIMIENTO",
        "block_3_button1": "VER+",
        "block_3_button1_color": "#FF0007",
        "block_3_button1_color_hover": "#FF0007",
        "block_3_button1_url": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-1.svg",
        "block_3_carrusel": "[\"407\",\"218\",\"217\",9,29,1,24]",
        "block_3_icon_channel": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-1.svg",
        "block_3_icon_channel_hover": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-1.svg",
        "block_3_icon_channel_url": "http://www.claronetworks.openofficedospuntocero.info/images/home/tv-1.svg",
        "block_3_legend": "HORARIOS SUJETOS A CAMBIOS",
        "block_4_title": "CONCERT CHANNEL",
        "block_4_subtitle": "TUS BANDAS FAVORITAS EN PRIMERA FILA",
        "block_4_button1": "VER+",
        "block_4_button1_color": "#FF00D2",
        "block_4_button1_color_hover": "#FF00D2",
        "block_4_button1_url": "http://www.claronetworks.openofficedospuntocero.info/concert-channel.php",
        "block_4_carrusel": "[84,85,86,87]",
        "block_4_icon_channel": "http://www.claronetworks.openofficedospuntocero.info/v1.2/images/home/concert-home-img.svg",
        "block_4_icon_channel_hover": "http://www.claronetworks.openofficedospuntocero.info/v1.2/images/home/concert-home-img.svg",
        "block_4_icon_channel_url": "http://www.claronetworks.openofficedospuntocero.info/concert-channel.php",
        "block_4_legend": "HORARIOS SUJETOS A CAMBIOS",
        "block_5_bg_image": "http://www.claronetworks.openofficedospuntocero.info/images/home/claro-cinema-background.png",
        "block_5_title": "CLARO CINEMA",
        "block_5_subtitle": "LOS ÍDOLOS QUE MÉXICO LE DIO AL CINE",
        "block_5_button1": "VER+",
        "block_5_button1_color": "#FF0007",
        "block_5_button1_color_hover": "#FF0007",
        "block_5_button1_url": "http://www.claronetworks.openofficedospuntocero.info/v1.2/claro-cinema.php",
        "block_5_carrusel": "[\"1385\",47,48,49,50]",
        "block_5_icon_channel": "http://www.claronetworks.openofficedospuntocero.info/images/home/cinema-home-img.svg",
        "block_5_icon_channel_hover": "http://www.claronetworks.openofficedospuntocero.info/images/home/cinema-home-img.svg",
        "block_5_icon_channel_url": "http://www.claronetworks.openofficedospuntocero.info/concert-channel.php",
        "block_5_legend": "HORARIOS SUJETOS A CAMBIOS",
        "block_3_image1": {
            "program_id": 66,
            "chapter_id": 407,
            "title": "Marvel Anime: Wolverine",
            "subtitle": "Marvel Anime: Wolverine EP 02",
            "genre": "Animación, Series",
            "landing_synopsis": 0,
            "image_horizontal": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/default/claro-horizontal-slider.jpg",
            "image_vertical": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/storage/canal-claro/section-home-vertical/407.jpeg"
        },
        "block_3_image2": {
            "program_id": 70,
            "chapter_id": 218,
            "title": "Secret Life of Growing Up",
            "subtitle": "Secret Life of Growing Up ep 01",
            "genre": "Documental",
            "landing_synopsis": 0,
            "image_horizontal": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/default/claro-horizontal-slider.jpg",
            "image_vertical": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/storage/canal-claro/section-home-vertical/218.jpeg"
        },
        "block_3_image3": {
            "program_id": 69,
            "chapter_id": 217,
            "title": "Marvel Anime: X-MEN",
            "subtitle": "Marvel Anime X-MEN EP03",
            "genre": "Animación, Series",
            "landing_synopsis": 0,
            "image_horizontal": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/default/claro-horizontal-slider.jpg",
            "image_vertical": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/storage/canal-claro/section-home-vertical/217.jpeg"
        },
        "block_3_image4": {
            "program_id": 8,
            "chapter_id": 9,
            "title": "La Caja de Pandora",
            "subtitle": "Temporada 5 -  Ana Torroja",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/06_LaCajaDePandora.jpg",
            "image_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/concert-channel/section-home-vertical/Queen.jpg"
        },
        "block_3_image5": {
            "program_id": 19,
            "chapter_id": 29,
            "title": "Los Indestructibles 2",
            "subtitle": "Los Indestructibles 2",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/indestructibles.jpg",
            "image_vertical": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/storage/carrusel-home/vertical/SecretLifeofGrowingUp.jpeg"
        },
        "block_3_image6": {
            "program_id": 2,
            "chapter_id": 1,
            "title": "Los Caballeros del Zodiaco (Saint Seiya)",
            "subtitle": "Shiryū contra Máscara de la Muerte",
            "genre": "Accion, Anime",
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/01_Caballeros.jpg",
            "image_vertical": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/default/claro-vertical.jpg"
        },
        "block_3_image7": {
            "program_id": 17,
            "chapter_id": 24,
            "title": "Una Mujer Desconocida",
            "subtitle": "Una Mujer Desconocida",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-horizontal/15_UnaMujerDesconocida.jpg",
            "image_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/claro-canal/section-home-vertical/CC-MUJER-DESCONOCIDA.jpg"
        },
        "block_4_image1": {
            "program_id": 47,
            "chapter_id": 84,
            "title": "Concierto",
            "subtitle": "Billie Eillish",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/concert-channel/section-home-horizontal/billie-eillish.jpg",
            "image_vertical": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/storage/concert-channel/section-home-vertical/84.jpeg"
        },
        "block_4_image2": {
            "program_id": 47,
            "chapter_id": 85,
            "title": "Concierto",
            "subtitle": "Chica",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/concert-channel/section-home-horizontal/chica-concert.jpg",
            "image_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/concert-channel/section-home-vertical/Mary-J-Blige.jpg"
        },
        "block_4_image3": {
            "program_id": 47,
            "chapter_id": 86,
            "title": "Concierto",
            "subtitle": "Ed Sheeran",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/concert-channel/section-home-horizontal/billie-eillish.jpg",
            "image_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/concert-channel/section-home-vertical/Ed-Sheeran.jpg"
        },
        "block_4_image4": {
            "program_id": 47,
            "chapter_id": 87,
            "title": "Concierto",
            "subtitle": "Queen",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/concert-channel/section-home-horizontal/billie-eillish.jpg",
            "image_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/concert-channel/section-home-vertical/Queen.jpg"
        },
        "block_5_image1": {
            "program_id": 172,
            "chapter_id": 1385,
            "title": "EN LA BOCA DEL LOBO",
            "subtitle": "LA BOCA DEL LOBO",
            "genre": "Accion, Drama",
            "landing_synopsis": 0,
            "image_horizontal": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/images/default/cinema-horizontal-slider.jpg",
            "image_vertical": "http://back.claronetworks.openofficedospuntocero.info/backoffice/public/storage/claro-cinema/vertical/ENLABOCADELLOBO1385_vertical.jpeg"
        },
        "block_5_image2": {
            "program_id": 30,
            "chapter_id": 47,
            "title": "Cine de Oro",
            "subtitle": "CASA DE LOS ESPANTOS",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-cinema/section-home-horizontal/CINEMA-CASA-DELOS-ESPANTOS.jpg",
            "image_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/claro-cinema/section-home-vertical/CINEMA-CASA-DELOS-ESPANTOS.jpg"
        },
        "block_5_image3": {
            "program_id": 30,
            "chapter_id": 48,
            "title": "Cine de Oro",
            "subtitle": "EL VIZCONDE",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-cinema/section-home-horizontal/CINEMA-EL-VIZCONDE.jpg",
            "image_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/claro-cinema/section-home-vertical/CINEMA-EL-VIZCONDE.jpg"
        },
        "block_5_image4": {
            "program_id": 30,
            "chapter_id": 49,
            "title": "Cine de Oro",
            "subtitle": "LOS VALIENTES",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-cinema/section-home-horizontal/CINEMA-LOS-VALIENTES.jpg",
            "image_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/claro-cinema/section-home-vertical/CINEMA-LOS-VALIENTES.jpg"
        },
        "block_5_image5": {
            "program_id": 30,
            "chapter_id": 50,
            "title": "Cine de Oro",
            "subtitle": "TU HIJO DEBE NACER",
            "genre": null,
            "landing_synopsis": 0,
            "image_horizontal": "http://www.claronetworks.openofficedospuntocero.info/images/claro-cinema/section-home-horizontal/CINEMA-LOS-VALIENTES.jpg",
            "image_vertical": "http://www.claronetworks.openofficedospuntocero.info/images/claro-cinema/section-home-vertical/CINEMA-TU-HIJO-DEBE-NACER.jpg"
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
 */

/**
 * @api {post} /section/editBlockProgramingLanding Editar Bloque programación
 * @apiVersion 1.0.0
 * @apiName Editar Bloque de programación
 * @apiGroup Seccion
 * @apiPermission admin
 *
 * @apiDescription Metodo para editar el bloque en donde se ve la programacion de cada landing, si no se necesita editar alguno poner o null u omitirlo,
 *
 * @apiParam {String} usuario_id     id del administrador que hace la peticion
 * @apiParam {String} landing     landing del bloque a editar
 * @apiParam {String} icon_chanel     url del icono del landing
 * @apiParam {String} title_1    Pimera parte del titulo
 * @apiParam {String} title_2    Segunda parte del titulo
 * @apiParam {String} url_programation   url a la redirecionara el boton de ver programcion
 * 
 *
 * @apiExample Ejemplo de uso:
 * {
    "usuario_id":"1",
    "landing":"Canal Claro",
    "icon_chanel":null,
    "title_1":"HOY EN",
    "title_2":"CANAL CLARO",
    "url_programation":"programacion.php"
 * }
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
   
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
 */
/**
 * @api {post} /section/editElement Editar Elemento del landing
 * @apiVersion 1.0.0
 * @apiName Editar Elemento del landing
 * @apiGroup Seccion
 * @apiPermission admin
 *
 * @apiDescription Metodo para editar editar algun elemto en especifico del landing
 *
 * @apiParam {String} usuario_id    id del administrador que quiere editar
 * @apiParam {String} value    valor que se quiere guardar
 * @apiParam {String} key   palabra clave del elemento que se quiere editar
 * @apiParam {String} landing  id del landing que se quiere editar
 * 
 *
 * @apiExample Ejemplo de uso:
 * {
    "usuario_id": 1,
    "value" : "value",
    "key" => "key",
    "landing" => "Canal Claro"
 * }
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
   "code": 200,
    "meessage": "Se modifico el $key del $landing",
    "data": {
        "key":"landing"
    }
 * }
 * @apiError NotFound-User   No se encontro al administrador.
 * @apiError NotFound-landing   No se encontro el landing.
 *
 * @apiErrorExample Response (NotFound-User):
 * {
 *  "code":404,
 *  "message":"No tienes permiso para hacer esto"
 *  "data" : {
 *     
 *  }
 * }
 * @apiErrorExample Response (NotFound-landing):
 * {
 *  "code":404,
 *  "message":"El landing no se encontro"
 *  "data" : {
 *     
 *  }
 * }
 */
/**
 * @api {post} /section/setImageSlider Agregar Imagenes al Carrusel
 * @apiVersion 1.0.0
 * @apiName Agregar al carrusel
 * @apiGroup Seccion
 * @apiPermission admin
 *
 * @apiDescription Metodo para agregar imagenes al carrusel principal del landing indicado,las iamgenes se suben por un medio diferente, esta api solo recibe la url de la image que se agregara y la posicion en la que se agregara.
 *
 * @apiParam {String} usuario_id    id del administrador que quiere editar
 * @apiParam {Array} value    Arreglo con las urls de las imagenes
 * @apiParam {String} positions  Posiciones en la que estarán las imagenes
 * @apiParam {String} landing  Nombre del landing que se quiere editar
 * @apiParam {String} schedule_date  Hora en la que se empezara a mostrar (No desarrollado por complete, se muestran de inmediato)
 * @apiParam {String} expiration_date  Ultimo dia en el que aparecerán (No desarrollado por complete, se muestran de inmediato)
 * 
 * @apiExample Ejemplo de uso:
 * {
     "usuario_id":1,
    "value":["http://www.claronetworks.openofficedospuntocero.info/images/programacion/banner/canal-claro/pc/CANAL-CLARO-05-A.jpg"],
    "positions":[11],
    "landing":"Canal Claro",
    "schedule_date":"00:00:00",
    "expiration_date":"00:00:00"
 * }
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
   "code": 200,
    "meessage": "Operación en el Slider exitosa",
    "data": [
       
        {
            "posicion": 11,
            "operación": "creada http://www.claronetworks.openofficedospuntocero.info/images/programacion/banner/canal-claro/pc/CANAL-CLARO-05-A.jpg"
        }
    ]
 * }
 * @apiError NotFound-User   No se encontro al administrador.
 * @apiError NotFound-landing   No se encontro el landing.
 *
 * @apiErrorExample Response (NotFound-User):
 * {
 *  "code":404,
 *  "message":"No tienes permiso para hacer esto"
 *  "data" : {
 *     
 *  }
 * }
 * @apiErrorExample Response (NotFound-landing):
 * {
 *  "code":404,
 *  "message":"El landing no se encontro"
 *  "data" : {
 *     
 *  }
 * }
 */
/**
 * @api {post} /section/editBlock1Home Editar el Bloque 1 de programación
 * @apiVersion 1.0.0
 * @apiName Editar Bloque 1 progrmación
 * @apiGroup Seccion
 * @apiPermission admin
 *
 * @apiDescription Metodo para agregar imagenes al carrusel principal del landing indicado,las iamgenes se suben por un medio diferente, esta api solo recibe la url de la image que se agregara y la posicion en la que se agregara.
 *
 * @apiParam {String} usuario_id    id del administrador que quiere editar
 * @apiParam {String} title    Titulo principal del home (Color azul)
 * @apiParam {String} subtitle    Titulo secundario del home (Color negro)
 * @apiParam {String} video   URL del video promocional del home
 * @apiParam {Array} images   Imagenes para el carrusel del home en la version movil
 * @apiParam {Array} positions   Posiciones para las imagenes del carrusel en la version movil
 * @apiParam {String} inicio   Fecha de inicio en el que se mostrarán los cambios (No desarrollado aun, los cambios se mantienen hasta que se vuelca a editar)
 * @apiParam {String} fin   Fecha de fin en el que se muestrán los cambios (No desarrollado aun, los cambios se mantienen hasta que se vuelca a editar)
 * 
 * @apiExample Ejemplo de uso:
 * {
        "usuario_id"  : 1,
        "title": "Descubre Claro",
        "subtitle": "Networks",
        "video": URL,
        "images": [],
        "positions": [],
        "inicio": "00:00:00",
        "fin": "00:00:00"
 * }
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
   "code": 200,
    "meessage": "Se edito el block 1 del home ",
    "data": [
       
        {
            "block_1_title": "Se actualizo el title del home se puso  Descubre Claro",
            "block_1_subtitle": "Se actualizo el subtitle del home se puso  Networks",
        }
    ]
 * }
 * @apiError NotFound-User   No se encontro al administrador.
 *
 * @apiErrorExample Response (NotFound-User):
 * {
 *  "code":404,
 *  "message":"No tienes permiso para hacer esto"
 *  "data" : {
 *     
 *  }
 * }
 */
/**
 * @api {post} /section/editBlockChannelHome Editar el Bloque 1 de programación
 * @apiVersion 1.0.0
 * @apiName Editar Bloque 1 progrmación
 * @apiGroup Seccion
 * @apiPermission admin
 *
 * @apiDescription Metodo para agregar imagenes al carrusel principal del landing indicado,las iamgenes se suben por un medio diferente, esta api solo recibe la url de la image que se agregara y la posicion en la que se agregara.
 *
 * @apiParam {String} usuario_id    id del administrador que quiere editar
 * @apiParam {String} title    Titulo principal del home (Color azul)
 * @apiParam {String} subtitle    Titulo secundario del home (Color negro)
 * @apiParam {String} video   URL del video promocional del home
 * @apiParam {Array} images   Imagenes para el carrusel del home en la version movil
 * @apiParam {Array} positions   Posiciones para las imagenes del carrusel en la version movil
 * @apiParam {String} inicio   Fecha de inicio en el que se mostrarán los cambios (No desarrollado aun, los cambios se mantienen hasta que se vuelca a editar)
 * @apiParam {String} fin   Fecha de fin en el que se muestrán los cambios (No desarrollado aun, los cambios se mantienen hasta que se vuelca a editar)
 * 
 * @apiExample Ejemplo de uso:
 * {
        "usuario_id"  : 1,
        "title": "Descubre Claro",
        "subtitle": "Networks",
        "video": URL,
        "images": [],
        "positions": [],
        "inicio": "00:00:00",
        "fin": "00:00:00"
 * }
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
   "code": 200,
    "meessage": "Se edito el block 1 del home ",
    "data": [
       
        {
            "block_1_title": "Se actualizo el title del home se puso  Descubre Claro",
            "block_1_subtitle": "Se actualizo el subtitle del home se puso  Networks",
        }
    ]
 * }
 * @apiError NotFound-User   No se encontro al administrador.
 *
 * @apiErrorExample Response (NotFound-User):
 * {
 *  "code":404,
 *  "message":"No tienes permiso para hacer esto"
 *  "data" : {
 *     
 *  }
 * }
 */


