const userModel = require("../models/userModels");
db = userModel.getAll();

const getAll = (req, res) => {
  return res.status(200).json(db);
};
const getClient = (req, res) => {
  const body = req.body;
  if (!body) res.status(400).end();
  db.push(body);
  return res.json(body);
};

const delClient = (req, res) => {
  const id = parseInt(req.params.id);
  let newDB = db.filter((item) => {
    return item.id !== id;
  });
  db = newDB;
  res.send(newDB);
};

const putClient = (req, res) => {
  const id = parseInt(req.params.id);
  const body = req.body;
  let newDB = db.map((item) => {
    if (item.id == id) {
      item = body;
    }
    return item;
  });
  db = newDB;
  res.send(db);
};

module.exports = {
  getAll,
  getClient,
  delClient,
  putClient,
};
