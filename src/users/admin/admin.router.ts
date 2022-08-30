import { Router } from 'express';
import { NamedRouter } from '../../common/types/tuples';
import AdminController from './admin.controller';
const router = Router();

router.get('/list', AdminController.getAdmins);
router.get('/:id', AdminController.getAdminById);
router.put('/:id', AdminController.updateAdmin)

export const AdminRouter: NamedRouter = ['/admin', router];