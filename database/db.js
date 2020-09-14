var Datastore = require("nedb");

db = {};
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