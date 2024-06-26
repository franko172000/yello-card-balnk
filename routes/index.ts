import {Router} from 'express';
import AppController from "../app/controllers/AppController";

const router = Router();
const { validate} = require('express-validation')

//auth routes
router.get('/', AppController.sayHello.bind(AppController));

export default router;
