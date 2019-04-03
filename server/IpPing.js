const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');

  const {exec} = require('child_process');

  const env = {PING_COUNT: 1, ...process.env};
  const cmd = 'ping -c $PING_COUNT 127.0.0.1';

  exec(cmd, {env}, (error, stdout) => {
    return error
      ? console.error(error)
      : ReturnPing(stdout);
  });

  function ReturnPing(value)
  {
      var result = /\d+(?:.\d+)?\s?ms/.exec(value);

      result
          ? console.log(result[0])
          : console.log('null')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
