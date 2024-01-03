const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "1a716339-c76a-4d54-8ff8-cb51debb5e41" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return console.log("ERROR IN BACKEND", e);
  }
});

app.listen(3001);
