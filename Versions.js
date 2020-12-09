/**
 * @api {post} /version/sendRevisionAll Enviar a Revision Todas
 * @apiVersion 1.0.0
 * @apiName Enviar a Revision 
 * @apiGroup Versiones
 * @apiPermission admin
 *
 * @apiDescription Se envian a revisión todas las versiones abiertas que el usuario que realiza la petición tenga.Los estados de todas las versiones cambian a 'En revision', los cambios que se realizen posteriormente de usar esta API se guardaran en una nueva version
 *
 * @apiParam {Integer} usuario_id    Id del adminsitrador que envia sus versiones a revision
 *
 * @apiExample Ejemplo de uso:
 * {
	"usuario_id":7
 *  }
 *
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success Version in revision ",
    "data": {
       [
           "Se mando a revision una version de Canal Claro landing",
           "Se mando a revision una version de Canal Claro programacion",
           "Se mando a revision una version de Home landing"
       ]
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
 * @api {post} /version/sendRevisionLanding Enviar a Revision Landing
 * @apiVersion 1.0.0
 * @apiName Enviar a Landing 
 * @apiGroup Versiones
 * @apiPermission admin
 *
 * @apiDescription Se envia a revisión la version abierta del landing indicado.
 *
 * @apiParam {Integer} usuario_id    Id del adminsitrador que envia sus versiones a revision
 * @apiParam {Integer} landing_id    id del landing 
 *
 * @apiExample Ejemplo de uso:
 * {
	"usuario_id":7,
	"landing_id":1
 *  }
 *
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success Version in revision ",
    "data": {
           "Se mando a revision una version de Home landing"
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
 * @api {post} /version/aprobarVersion Aprobar versión 
 * @apiVersion 1.0.0
 * @apiName Aprobar versión 
 * @apiGroup Versiones
 * @apiPermission admin-approver
 *
 * @apiDescription Este metódo aprueba la versión indicada e integra los cambios a la versión maestra para que el publico vea los cambios.
 *
 * @apiParam {Integer} usuario_id    Id del adminsitrador que aprobará la version
 * @apiParam {Integer} version_id    id de la version a aprobar 
 *
 * @apiExample Ejemplo de uso:
 * {
	"usuario_id":1,
	"version_id":50
 *  }
 *
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success Version approved and changes now in master version ",
    "data": {
           "Se aprobó una version de Canal Claro Programacion"
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
 * @api {get} /version/history/{id} Obtener Historial de versiones
 * @apiVersion 1.0.0
 * @apiName Historial
 * @apiGroup Versiones
 * @apiPermission admin
 *
 * @apiParam {Integer} usuario_id    Id del adminsitrador que aprobará la version
 * @apiDescription Muestra todas las versiones con sus estatus y comentarios de lo que se hizo en dicha version.Si el id del administrador pertenece a un super usuario o a un aprobador se mostrará el historial de todos los usuarios, pero si es un usuario editor o con permisos inferiores se mostrarán solo sus versiones
 *
 *
 * @apiExample Ejemplo de uso:
 * http://www.claronetworks.openofficedospuntocero.info/Claro_Networks_API/public/version/history/1
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success Version History founded",
    "data": {
           [
               {
                   "id":23,
                   "section_id":7,
                   "section":"Canal Claro",
                   "programing":1,
                   "status_id":1,
                   "status_id":"abierta",
                   "commits":[
                       "Se agrego un capitulo",
                       "Se elimino un capitulo",
                       "Se agregaron imagenes al capitulo",
                       "agrego la progrmacion del 00-00-00"
                   ],

               }
           ]
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
 * @api {post} /version/declineVersion Rechazar Version
 * @apiVersion 1.0.0
 * @apiName Rechazar
 * @apiGroup Versiones
 * @apiPermission admin-approver
 *
 * @apiDescription Despues de que un editor mande a revisión, algún aprobador debe realizar la revision para integrar los cambios, en el caso en que dichos cambios tengan alguna situación el aprobador rechaza la versión para que el editor corrija o realice los cambios necesarios.
 * @apiParam {Integer} usuario_id    Id del adminsitrador que aprobará la version
 * @apiParam {Integer} version_id    Id de la versión que se rechaza
 * @apiParam {Text} comments    Comentarios o motivos del rechazo
 *
 *
 * @apiExample Ejemplo de uso:
 * {
 *  "usuario_id":1,
 *  "version_id":30,
 *  "comments":"Las imagenes no corresponden a un capitulo y hhay un emplame en en Concert channel el dia 17-Dic a las 20:30",
 * }
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success Version Declined",
    "data": {
    }
 * }
 * @apiError NotFound   No se encontro al administrador.
 * @apiError BadRequest  Error en validación de parametros.
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
 * @api {post} /version/deleteVersion Eliminar Version
 * @apiVersion 1.0.0
 * @apiName Rechazar
 * @apiGroup Versiones
 * @apiPermission admin-approver
 *
 * @apiDescription Eliminar una version, solo se puede eliminar una version propia no de otros usuarios 
 * @apiParam {Integer} usuario_id    Id del adminsitrador que aprobará la version
 * @apiParam {Integer} version_id    Id de la versión que se rechaza
 *
 *
 * @apiExample Ejemplo de uso:
 * {
 *  "usuario_id":7,
 *  "version_id":30,
 * }
 * @apiSuccessExample {json} Success-Response :
 * {
    "code": 200,
    "meessage": "Success Version Deleted",
    "data": {
    }
 * }
 * @apiError NotFound   No se encontro al administrador.
 * @apiError BadRequest  Error en validación de parametros.
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
