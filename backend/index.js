const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(        //put request to get or create users
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },  //syntax from rest.chatengine.io
      { headers: { "Private-Key": "7c2bc313-b5a8-4309-a96a-cb00ff95110d" } }  //private-key from chatengine project used to create and destroy users
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
