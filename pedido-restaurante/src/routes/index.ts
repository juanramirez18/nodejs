import * as express from 'express';

const router = express.Router();
router.get("/usuarios");
router.get("/productos");
router.get("/categorias");
router.get("/pedidos");
export default router