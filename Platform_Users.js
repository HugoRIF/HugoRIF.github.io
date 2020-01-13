/**
 * @api {get} /user/login/{mail}{password}{key} log in an User
 * @apiVersion 0.0.1
 * @apiName Login
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription GET Method to validate the information of an user to log in
 *
 * @apiParam {String} mail     The Users-mail.
 * @apiParam {String} password The Users-paswword.
 * @apiParam {String} key      API athorization key.
 *
 * @apiExample Example usage:
 * curl -i http://ClaroNetworks.com/api/user/login/?mail=axample@gmail.com&password=1a2b&key=123abc
 *
 * @apiSuccess {Integer}   id            The Users-ID.
 * @apiSuccess {String}    name          Fullname of the User.
 * @apiSuccess {String}    mail          email of the   User
 * @apiSuccess {String}    gender       Gender of the user Male o Female
 * @apiSuccess {Date}      birthday      Birthday of the user.
 * @apiSuccess {Integer}   country       The id of the user´s country.
 * @apiSuccess {String}    avatar       Direction of the image for the user´s avatar
 *
 * @apiSuccessExample {json} Success-Response :
 * {
 *  "code":200,
 *  "message":"Success User Found"
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
 * @api {post} /user Create a new User
 * @apiVersion 0.0.1
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
 * @apiExample Example usage:
 * curl --data "key=value1&name=value2&mail=value3..." http://ClaroNetworks.com/api/user
 *
 * @apiSuccessExample {json} Success-Response :
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
 * @api {get} /user/{key} Get the records of all users.
 * @apiVersion 0.0.1
 * @apiName GetAll
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiDescription GET Method for all the records of users
 * @apiParam {String} key      API athorization key.
 *
 * @apiExample Example usage:
 * curl -i http://ClaroNetworks.com/api/user/?key=123abc
 *
 * @apiSuccess {array}   users Array with the information od the  users
 * 
 * @apiSuccessExample {json} Success-Response :
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
 * @api {get} /user/{key}{id} Get the specific user.
 * @apiVersion 0.0.1
 * @apiName GetEspecific
 * @apiGroup User
 * @apiPermission none
 *
 * @apiDescription GET Method for all the records of users
 * @apiParam {String} key      API athorization key.
 * @apiParam {Integer} id      Id of the user for whom the information is wanted.
 *
 * @apiExample Example usage:
 * curl -i http://ClaroNetworks.com/api/user/?key=123abc&id=1
 *
 * @apiSuccess {Object}   User information
 * 
 * @apiSuccessExample {json} Success-Response :
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
 * @api {put} /user/:id Change an User
 * @apiVersion 0.0.1
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
 * @apiExample Example usage:
 * $ curl -X PUT -d "key=value1&name=value2&mail=value3..." http://ClaroNetworks.com/api/user
 *
 * @apiSuccessExample {json} Success-Response :
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
 * @api {delete} /user/{key}{id_admin}{id_user} Logic delete the specific user.
 * @apiVersion 0.0.1
 * @apiName DeleteUser
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiDescription DELETE Method, only logic delete
 * @apiParam {String} key      API athorization key.
 * @apiParam {Integer} id_admin     Id of the user who made the request.
 * @apiParam {Integer} id_user      Id of the user to delete.
 *
 * @apiExample Example usage:
 *  curl -X DELETE http://ClaroNetworks.com/api/user/?id_admin=1&user=2&key=123abc&id=1
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