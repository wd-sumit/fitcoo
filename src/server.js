const http = require('http');
const v1Router = require('./routes');
class Server {
  static defaultConfig = {
    port: 4000,
  };
  server;
  constructor(app, config) {
    this.app = app;
    this.config = config;

    this.addGlobalMiddleware();
    this.addRoutes();
  }

  static new(app, config = Server.defaultConfig) {
    return { server: new Server(app, config), app };
  }

  addGlobalMiddleware() {}

  addRoutes() {
    this.app.use('/v1', v1Router);
    this.app.use('*', (req, res, next) => {
      
    })
  }

  boot() {
    const PORT = this.config.port;
    this.server = http.createServer(this.app);
    this.server.listen(PORT, () => {
      console.log('Listening on port', PORT);
    });
  }

  close() {
    this.server.close(() => {
      process.exit(1);
    });
  }
}

module.exports = Server;
