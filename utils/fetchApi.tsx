import http from 'http';

export async function getData() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'https://hospital-w8r3.onrender.com/',
      path: '/data',
      method: 'GET',
    };

    const req = http.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(data));
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}