import * as express from 'express';
import usersRoutes from './usuarios'

const router = express.Router();
router.use("/usuarios", usersRoutes);
// router.use("/productos");
// router.use("/categorias");
// router.use("/pedidos");
export default router