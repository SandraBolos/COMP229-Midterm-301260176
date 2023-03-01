/* Sandra Bolos
301260176
COMP229-Midterm exam*/

import { Router } from 'express';

const router = Router();

import {DisplayHomePage} from '../controllers/index.js';

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

export default router;