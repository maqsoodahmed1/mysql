module.exports = app => {
  const merchant = require("../controllers/customer.controller.js");

  // Create a new Customer
  app.post("/merchant", merchant.create);

  // Retrieve all Customers
  // app.get("/customers", customers.findAll);

  // // Retrieve a single Customer with customerId
  // app.get("/customers/:customerId", customers.findOne);

  // // Update a Customer with customerId
  // app.put("/customers/:customerId", customers.update);

  // // Delete a Customer with customerId
  // app.delete("/customers/:customerId", customers.delete);

  // // Create a new Customer
  // app.delete("/customers", customers.deleteAll);
};
