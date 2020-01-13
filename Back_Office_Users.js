/**
 * @api {get} /admin_user/login/{mail}{password}{key} log in an admin user
 * @apiVersion 0.0.1
 * @apiName Login
 * @apiGroup Admin User
 * @apiPermission none
 *
 * @apiDescription GET Method to validate the information of an user to log in
 *
 * @apiParam {String} mail     The Users-mail.
 * @apiParam {String} password The Users-paswword.
 * @apiParam {String} key      API athorization key.
 *
 * @apiExample Example usage:
 * curl -i http://ClaroNetworks.com/api/admin_user/login/?mail=axample@gmail.com&password=1a2b&key=123abc
 *
 * @apiSuccess {Integer}   id            The Users-ID.
 * @apiSuccess {String}    name          Fullname of the User.
 * @apiSuccess {String}    mail          email of the   User
 * @apiSuccess {String}    gender       Gender of the user Male o Female
 * @apiSuccess {Date}      birthday      Birthday of the user.
 * @apiSuccess {Integer}   rol           The id of the user´s rol.
 *
 * @apiSuccessExample {json} Success-Response :
 * {
 *  "code":200,
 *  "message":"Success User Found"
 *  "data" : {
 *      "id" : 1
 *      "name" : "Nombre"
 *      "mail" : "correo@gmail.com"
 *      "gender" : "Male"
 *      "Date"  : "01/01/2000"
 *      "rol" : 1
 *  }
 * }
 * @apiError Forbiden  Invalid API key.
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
 *  *  * @apiErrorExample Response (Forbiden):
 * {
 *  "code":403,
 *  "message":"Invalid API key."
 *  "data" : {
 *     
 *  }
 * }
 */

/**
 * @api {post} /admin_user Create a new Admin User
 * @apiVersion 0.0.1
 * @apiName PostUser
 * @apiGroup Admin User
 * @apiPermission admin 
 *
 * @apiDescription  POST Method to Create a new admin user, only admin users with root role can use this method
 *
 * @apiParam {String} key API athorization key.
 * @apiParam {String}    name          Fullname of the User.
 * @apiParam {String}    mail          email of the   User
 * @apiParam {String}    gender       Gender of the user Male o Female
 * @apiParam {Date}      birthday      Birthday of the user.
 * @apiParam {Integer}   rol           The id of the user´s rol.
 * 
 * @apiExample Example usage:
 * curl --data "key=value1&name=value2&mail=value3..." http://ClaroNetworks.com/api/admin_user
 *
 * @apiSuccessExample {json} Success-Response :
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
 * @api {get} /admin_user/{key} Get the records of all users.
 * @apiVersion 0.0.1
 * @apiName GetAll
 * @apiGroup Admin User
 * @apiPermission Admin
 *
 * @apiDescription GET Method for all the records of users
 * @apiParam {String} key      API athorization key.
 *
 * @apiExample Example usage:
 * curl -i http://ClaroNetworks.com/api/admin_user/?key=123abc
 *
 * @apiSuccess {array}   users Array with the information od the  users
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
 *  "code":200,
 *  "message":"Success Users Found"
 *  "data" : [
 *      {
 *          "id" : 1
 *          "name" : "Nombre"
 *          "mail" : "correo@gmail.com"
 *          "gender" : "Male"
 *          "Date"  : "01/01/2000"
 *          "rol" : 1,
 *          "active": 0,
 *          "created_at": 0,
 *          "updated_at": 0
 *      },
 *      {
 *          "id" : 2
 *          "name" : "Nombre2"
 *          "mail" : "correo2@gmail.com"
 *          "gender" : "Female"
 *          "Date"  : "01/01/2000"
 *          "rol" : 2,
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
 * @api {get} /admin_user/{key}{id} Get the specific user.
 * @apiVersion 0.0.1
 * @apiName GetEspecific
 * @apiGroup Admin User
 * @apiPermission none
 *
 * @apiDescription GET Method for all the records of users
 * @apiParam {String} key      API athorization key.
 * @apiParam {Integer} id      Id of the user for whom the information is wanted.
 *
 * @apiExample Example usage:
 * curl -i http://ClaroNetworks.com/api/admin_user/?key=123abc&id=1
 *
 * @apiSuccess {Object}   User information
 * 
 * @apiSuccessExample {json} Success-Response :
 * {
 *  "code":200,
 *  "message":"Success Users Found"
 *  "data" : 
 *      {
 *          "id" : 1
 *          "name" : "Nombre"
 *          "mail" : "correo@gmail.com"
 *          "gender" : "Male"
 *          "Date"  : "01/01/2000"
 *          "rol" : 1,
 *          "active": 0,
 *          "created_at": 0,
 *          "updated_at": 0
 *      }
 * }
 * @apiError Forbiden  Invalid API key.
 * @apiError NotFound   User not found with the given id.
 * 
 *
 * @apiErrorExample Response (Forbiden):
 * {
 *  "code":403,
 *  "message":"Invalid API key."
 *  "data" : {
 *     
 *  }
 * }
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
 * @api {put} /user/:id Change an Admin User
 * @apiVersion 0.0.1
 * @apiName PutUser
 * @apiGroup Admin User
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
 * @apiParam {Date}      birthday      Birthday of the user.
 * @apiParam {Integer}   rol           The id of the user´s rol.
 * 
 * @apiExample Example usage:
 * $ curl -X PUT -d "key=value1&name=value2&mail=value3..." http://ClaroNetworks.com/api/admin_user
 *
 * @apiSuccessExample {json} Success-Response :
 * {
 *  "code":201,
 *  "message":"Success Admin User Changed"
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
 * @api {delete} /admin_user/{key}{id_admin}{id_user} Logic delete the specific user.
 * @apiVersion 0.0.1
 * @apiName DeleteUser
 * @apiGroup Admin User
 * @apiPermission Admin
 *
 * @apiDescription DELETE Method, only logic delete
 * @apiParam {String} key      API athorization key.
 * @apiParam {Integer} id_admin     Id of the user who made the request.
 * @apiParam {Integer} id_user      Id of the user to delete.
 *
 * @apiExample Example usage:
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