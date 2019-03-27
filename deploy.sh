#!/bin/bash
echo $PATH
node -v
npm -v
pm2 -v
npm install express http-proxy-middleware
pm2 delete all
pm2 start server.js --name demo