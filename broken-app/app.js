const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json())


app.post('/', async function(req, res, next) {
  try {

    let promises = req.body.developers.map(d => {
      return axios.get(`https://api.github.com/users/${d}`);
    });

    const results = await Promise.all(promises)
    
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));
    return res.json(out);
    
  } catch(err) {
    next(err);
  }
});

app.listen(3000);
