let db = [
  { id: 1, Nome: "Cliente 1", Idade: "20" },
  { id: 2, Nome: "Cliente 2", Idade: "20" },
  { id: 3, Nome: "Cliente 3", Idade: "200" },
];

const getAll = () => {
  return db;
};

module.exports = {
  getAll,
};
