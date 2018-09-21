// var http = require('http');
// var fs = require('fs');

// const hostname = '127.0.0.1';
// const port = 3000;
 
const express = require('express');
const app = express();
var path = require('path');
const port = 3000;


//Controller
// app.get('/', (req, res) => res.send('Hello World!'))
app.use('/css', express.static(path.join(__dirname + '/../css')));
app.use('/js', express.static(path.join(__dirname + '/../js')));
app.use('/assets', express.static(path.join(__dirname + '/../assets')));
app.get(['/', '/index.html'], (req, res) => res.sendFile(path.join(__dirname + '/../index.html')))
// app.get('/about-us', (req, res) => res.sendFile(path.join(__dirname + '/../about-us.html')))

// app.get('/', (req, res) => res.render('/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// fs.readFile('../index.html', function (err, html) {
//     if (err) {
//         throw err
//     };
//     const server = http.createServer((req, res) => {
//         res.statusCode = 200;
//         res.setHeader('Content-type', 'text/html');
//         res.write(html)
//         res.end();
//     });
    
//     server.listen(port, hostname, () => {
//         console.log('Server started on '+port);

//     });
//   });


