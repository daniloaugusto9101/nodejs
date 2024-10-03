const express = require("express");
const useController = require("../controllers/userController");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Home | Bem vindo a API");
});

router.get("/clientes", useController.getAll);

router.post("/clientes", useController.getClient);

router.delete("/clientes/:id", useController.delClient);

router.put("/clientes/:id", useController.putClient);

module.exports = router;
