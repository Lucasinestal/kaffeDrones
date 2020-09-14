var Datastore = require("nedb");

db = {};
switch (process.env.ENVIRONMENT) {
  case "development":
    db.users = new Datastore({
      filename: __dirname + "/development/users.db",
      autoload: true,
    });
    db.products = new Datastore({
      filename: __dirname + "/development/products.db",
      autoload: true,
    });
    db.carts = new Datastore({
      filename: __dirname + "/development/carts.db",
      autoload: true,
    });
    db.orders = new Datastore({
        filename: __dirname + "/development/orders.db",
        autoload: true,
      });
    break;
  case "test":
    db.users = new Datastore({
        filename: __dirname + "/test/users.db",
        autoload: true,
      });
      db.products = new Datastore({
        filename: __dirname + "/test/products.db",
        autoload: true,
      });
      db.carts = new Datastore({
        filename: __dirname + "/test/carts.db",
        autoload: true,
      });
      db.orders = new Datastore({
          filename: __dirname + "/test/orders.db",
          autoload: true,
        });
    break;
}

module.exports = db;