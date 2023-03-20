const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if(req.url === '/cleo'){

        const imagePath = './public/images/cleo.jpeg';
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        const stream = fs.createReadStream(imagePath);
        stream.pipe(res);
      }else if(req.url === '/feli'){
        const imagePath = './public/images/feli.jpeg';
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        const stream = fs.createReadStream(imagePath);
        stream.pipe(res);
      }else if(req.url === '/nita'){
        const imagePath = './public/images/nita.jpeg';
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        const stream = fs.createReadStream(imagePath);
        stream.pipe(res);
      }else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not found');
      }

})

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
  });

 

 