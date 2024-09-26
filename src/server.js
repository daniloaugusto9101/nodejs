const app = require("./app");
const port = 3333;

app.listen(port, () => {
  console.log(`Api iniciada em http://localhost:${port}`);
});
