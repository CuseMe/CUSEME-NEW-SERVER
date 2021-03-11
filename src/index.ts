import { Request, Response } from 'express';
import express = require('express');

let server = express();

server.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
    console.log(req);
});

server.listen(3000, () => {
    console.log('http server listen on :3000');
});