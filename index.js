const express = require('express');
const server = express();

async function runServer() {
  server.use(express.json()); //Used to parse JSON bodies
  await require('./db').connect();
  server.use('/api/v1/portfolios', require('./routes/portfolios'));
server.use('/api/v1/blogs', require('./routes/blogs'));
   
  const PORT = parseInt(process.env.PORT, 10) || 3001;
  server.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log('Server ready on port:', PORT);
  })
}

runServer();
