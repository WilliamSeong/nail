import express from 'express';
import cors from 'cors';

const server = express();
const port = 3000;

server.use(cors({
  origin: 'http://localhost:5173',
}));

server.get('/', (req, res) => {
  res.send('Hello, World!');
  console.log("GET request received");
});

server.post('/api', (req, res) => {
  req.on('data', (data) => {
    console.log(data.toString());
  });
  res.send('POST request received');

})

server.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
