const express = require('express');
const router = express.Router();
const userController = require('../Controllers/user')

// router.get('/dashboard', userController.showDashboard)

/**
 * @swagger
 * /user/login:
 *  post:
 *      tags:
 *          - developers
 *      summary: Checks the credentials provided by the user
 *      responses:
 *          200:
 *              description: Successfully got a response from the server (The credentials can be correct or incorrect)
 *              content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             success:
 *                                 type: boolean
 *                             message:
 *                                 type: string
 *          500:
 *              description: In case of any errors or the data not found (Not for the wrong password case, In that case 200 will be given)
 *              content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             success:
 *                                 type: boolean
 *                             message:
 *                                 type: string
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 */
router.post("/login" , userController.login)

/**
 * @swagger
 * /user/register:
 *  post:
 *      tags:
 *          - developers
 *      summary: Register the user
 *      responses:
 *          200:
 *              description: Successfully added new admin to the database
 *              content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             success:
 *                                 type: boolean
 *                             message:
 *                                 type: string
 *          500:
 *              description: In case of any errors or the data not found (Not for the wrong password case, In that case 200 will be given)
 *              content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             success:
 *                                 type: boolean
 *                             message:
 *                                 type: string
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                          full_name:
 *                              type: string
 *                          roll_number:
 *                              type: string
 *                          user_type:
 *                              type: string
 */
router.post("/register",userController.register)
router.get("/logout",userController.logout)
router.post("/update",userController.updateUser)

module.exports = router