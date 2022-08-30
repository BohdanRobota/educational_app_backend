import { Router } from 'express';
import { NamedRouter } from '../../common/types/tuples';
import UserController from './user.controller';
const router = Router();

router.get('/list', UserController.getUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.delete('/:id', UserController.deleteUser);
router.put('/:id', UserController.updateUser);

export const UserRouter: NamedRouter = ['/user', router];