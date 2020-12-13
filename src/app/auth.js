const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
});


