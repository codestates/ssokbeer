import "dotenv/config";
// import "regenerator-runtime";

import app from "./app";
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = app;
