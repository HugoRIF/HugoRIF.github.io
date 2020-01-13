define({ "api": [
  {
    "type": "delete",
    "url": "/admin_user/{key}{id_admin}{id_user}",
    "title": "Logic delete the specific user.",
    "version": "0.0.1",
    "name": "DeleteUser",
    "group": "Admin_User",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "description": "<p>DELETE Method, only logic delete</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_admin",
            "description": "<p>Id of the user who made the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_user",
            "description": "<p>Id of the user to delete.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE http://ClaroNetworks.com/api/admin_user/?id_admin=1&admin_user=2&key=123abc&id=1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Delete\"\n \"data\" : \n     {\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key or Unathorized Admin user\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Admin_User"
  },
  {
    "type": "get",
    "url": "/admin_user/{key}",
    "title": "Get the records of all users.",
    "version": "0.0.1",
    "name": "GetAll",
    "group": "Admin_User",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "description": "<p>GET Method for all the records of users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ClaroNetworks.com/api/admin_user/?key=123abc",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "users",
            "description": "<p>Array with the information od the  users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Found\"\n \"data\" : [\n     {\n         \"id\" : 1\n         \"name\" : \"Nombre\"\n         \"mail\" : \"correo@gmail.com\"\n         \"gender\" : \"Male\"\n         \"Date\"  : \"01/01/2000\"\n         \"rol\" : 1,\n         \"active\": 0,\n         \"created_at\": 0,\n         \"updated_at\": 0\n     },\n     {\n         \"id\" : 2\n         \"name\" : \"Nombre2\"\n         \"mail\" : \"correo2@gmail.com\"\n         \"gender\" : \"Female\"\n         \"Date\"  : \"01/01/2000\"\n         \"rol\" : 2,\n         \"active\": 0,\n         \"created_at\": 0,\n         \"updated_at\": 0,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Admin_User"
  },
  {
    "type": "get",
    "url": "/admin_user/{key}{id}",
    "title": "Get the specific user.",
    "version": "0.0.1",
    "name": "GetEspecific",
    "group": "Admin_User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>GET Method for all the records of users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user for whom the information is wanted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ClaroNetworks.com/api/admin_user/?key=123abc&id=1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Found\"\n \"data\" : \n     {\n         \"id\" : 1\n         \"name\" : \"Nombre\"\n         \"mail\" : \"correo@gmail.com\"\n         \"gender\" : \"Male\"\n         \"Date\"  : \"01/01/2000\"\n         \"rol\" : 1,\n         \"active\": 0,\n         \"created_at\": 0,\n         \"updated_at\": 0\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given id. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Admin_User"
  },
  {
    "type": "get",
    "url": "/admin_user/login/{mail}{password}{key}",
    "title": "log in an admin user",
    "version": "0.0.1",
    "name": "Login",
    "group": "Admin_User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>GET Method to validate the information of an user to log in</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>The Users-mail.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The Users-paswword.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ClaroNetworks.com/api/admin_user/login/?mail=axample@gmail.com&password=1a2b&key=123abc",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the   User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the user Male o Female</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rol",
            "description": "<p>The id of the user´s rol.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":200,\n \"message\":\"Success User Found\"\n \"data\" : {\n     \"id\" : 1\n     \"name\" : \"Nombre\"\n     \"mail\" : \"correo@gmail.com\"\n     \"gender\" : \"Male\"\n     \"Date\"  : \"01/01/2000\"\n     \"rol\" : 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Admin_User"
  },
  {
    "type": "post",
    "url": "/admin_user",
    "title": "Create a new Admin User",
    "version": "0.0.1",
    "name": "PostUser",
    "group": "Admin_User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>POST Method to Create a new admin user, only admin users with root role can use this method</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the   User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the user Male o Female</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rol",
            "description": "<p>The id of the user´s rol.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --data \"key=value1&name=value2&mail=value3...\" http://ClaroNetworks.com/api/admin_user",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":201,\n \"message\":\"Success Admin User Created\"\n \"data\" : {\n     \"id\" : 1\n     \"name\" : \"Nombre\"\n     \"mail\" : \"correo@gmail.com\"\n     \"gender\" : \"Male\"\n     \"Date\"  : \"01/01/2000\"\n     \"rol\" : 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Admin_User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change an Admin User",
    "version": "0.0.1",
    "name": "PutUser",
    "group": "Admin_User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Method to change the infomation of an user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the admin who made the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the   User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the user Male o Female</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rol",
            "description": "<p>The id of the user´s rol.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "$ curl -X PUT -d \"key=value1&name=value2&mail=value3...\" http://ClaroNetworks.com/api/admin_user",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":201,\n \"message\":\"Success Admin User Changed\"\n \"data\" : {\n     \"id\" : 1\n     \"name\" : \"Nombre\"\n     \"mail\" : \"correo@gmail.com\"\n     \"gender\" : \"Male\"\n     \"Date\"  : \"01/01/2000\"\n     \"rol\" : 1\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key or the User is unathorized for this method\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Back_Office_Users.js",
    "groupTitle": "Admin_User"
  },
  {
    "type": "delete",
    "url": "/user/{key}{id_admin}{id_user}",
    "title": "Logic delete the specific user.",
    "version": "0.0.1",
    "name": "DeleteUser",
    "group": "User",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "description": "<p>DELETE Method, only logic delete</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_admin",
            "description": "<p>Id of the user who made the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id_user",
            "description": "<p>Id of the user to delete.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -X DELETE http://ClaroNetworks.com/api/user/?id_admin=1&user=2&key=123abc&id=1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Delete\"\n \"data\" : \n     {\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key or Unathorized User\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/{key}",
    "title": "Get the records of all users.",
    "version": "0.0.1",
    "name": "GetAll",
    "group": "User",
    "permission": [
      {
        "name": "Admin"
      }
    ],
    "description": "<p>GET Method for all the records of users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ClaroNetworks.com/api/user/?key=123abc",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "users",
            "description": "<p>Array with the information od the  users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Found\"\n \"data\" : [\n     {\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n         \"active\": 0,\n         \"created_at\": 0,\n         \"updated_at\": 0\n     },\n     {\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n         \"active\": 0,\n         \"created_at\": 0,\n         \"updated_at\": 0,\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/{key}{id}",
    "title": "Get the specific user.",
    "version": "0.0.1",
    "name": "GetEspecific",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>GET Method for all the records of users</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the user for whom the information is wanted.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ClaroNetworks.com/api/user/?key=123abc&id=1",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":200,\n \"message\":\"Success Users Found\"\n \"data\" : \n     {\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n         \"active\": 0,\n         \"created_at\": 0,\n         \"updated_at\": 0\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given id. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/user/login/{mail}{password}{key}",
    "title": "log in an User",
    "version": "0.0.1",
    "name": "Login",
    "group": "User",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>GET Method to validate the information of an user to log in</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>The Users-mail.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The Users-paswword.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://ClaroNetworks.com/api/user/login/?mail=axample@gmail.com&password=1a2b&key=123abc",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The Users-ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the   User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the user Male o Female</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "country",
            "description": "<p>The id of the user´s country.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>Direction of the image for the user´s avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":200,\n \"message\":\"Success User Found\"\n \"data\" : {\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>User not found with the given information.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (NotFound):",
          "content": "{\n \"code\":404,\n \"message\":\"Error User not found with the given information. \"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"Some params can´t be found\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "Create a new User",
    "version": "0.0.1",
    "name": "PostUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>POST Method to Create a new User</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the   User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the user Male o Female</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl --data \"key=value1&name=value2&mail=value3...\" http://ClaroNetworks.com/api/user",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":201,\n \"message\":\"Success User Created\"\n \"data\" : {\n     \"id\" : 1\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key.\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "Change an User",
    "version": "0.0.1",
    "name": "PutUser",
    "group": "User",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>Method to change the infomation of an user</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>API athorization key.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the admin who made the request.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Fullname of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>email of the   User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the user Male o Female</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>URL from the image if the avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the user.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "$ curl -X PUT -d \"key=value1&name=value2&mail=value3...\" http://ClaroNetworks.com/api/user",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response :",
          "content": "{\n \"code\":201,\n \"message\":\"Success User Changed\"\n \"data\" : {\n     \"id\" : 1,\n     \"name\" : \"Nombre\",\n     \"mail\" : \"correo@gmail.com\",\n     \"gender\" : \"Male\",\n     \"Date\"  : \"01/01/2000\",\n     \"country\" : 1,\n     \"avatar\" : \".../avatar1.jpg\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Forbiden",
            "description": "<p>Invalid API key.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>Some params can´t be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (BadRequest):",
          "content": "{\n \"code\":400,\n \"message\":\"The parman <param> have a bad format or is invalid\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        },
        {
          "title": "Response (Forbiden):",
          "content": "{\n \"code\":403,\n \"message\":\"Invalid API key or the User is unathorized for this method\"\n \"data\" : {\n    \n }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./Platform_Users.js",
    "groupTitle": "User"
  }
] });
