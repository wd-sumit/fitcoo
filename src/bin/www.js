process.on('uncaughtException', (err) => {
  console.log('###############################');
  console.log(err);
  console.log('###############################');
  console.log('Uncaught Exception! Shutting down...');
  process.exit(1);
});

require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const Server = require('../server');

const { server } = Server.new(express());

server.globalMiddlewares([express.json(), morgan('dev')]);

server.init();

server.boot();

process.on('unhandledRejection', (err) => {
  console.log('###############################');
  console.log('Error:', err);
  console.log('###############################');
  console.log('Unhandled Rejection! Shutting down...');
  server.close();
});
