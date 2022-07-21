const http = require('http');
const v1Router = require('./routes');
const APIError = require('./utils/AppError');
const GlobalMiddlewares = require('./middlewares/global.middlewares');

class Server {
  static defaultConfig = {
    port: 4000,
  };
  server;
  constructor(app, config) {
    this.app = app;
    this.config = config;
  }

  static new(app, config = Server.defaultConfig) {
    return { server: new Server(app, config), app };
  }

  addRoutes() {
    this.app.use('/api/v1', v1Router);
  }

  handleNotFound() {
    this.app.use('*', (req, res, next) => {
      return next(new APIError('Not Found', 404));
    });
  }

  globalErrorHandler() {
    this.app.use(GlobalMiddlewares.handle);
  }

  globalMiddlewares(...middlewares) {
    for (let middleware of middlewares) {
      this.app.use(middleware);
    }
  }

  $beforeInit() {
    this.addRoutes();
    this.handleNotFound();
    this.globalErrorHandler();
  }

  $beforeBoot() {}

  init() {
    this.$beforeInit();
  }

  boot() {
    this.$beforeBoot();

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
