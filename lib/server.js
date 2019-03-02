// external dependencies
import Express from 'express';

// internal dependencies
import * as endpoints from './endpoints/index';

class Server {
  constructor() {
    this.config = new Express();

    // iterate through endpoint imports and append to express config
    Object.keys(endpoints).forEach((endpoint) => {
      endpoints[endpoint]({
        app: this.config,
        callback: (data) => { this.onRequest(data); },
      });
    });

    this.instance = this.config.listen(8080);
  }

  onRequest(data) {
    console.log(data.data);

    data.response.sendStatus(200);
  }
}

export default Server;
