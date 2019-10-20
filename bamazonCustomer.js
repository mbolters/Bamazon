var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: config.password,
  database: "products_DB"
});

connection.connect(function(err) {
    if (err) console.log (err);
    readProducts();
    });
    
    function readProducts() {
        connection.query("SELECT * FROM products", function(err, res) {
            for (var i = 0; i < res.length; i++) {
                console.log(
                    "Item ID: " +
                    res[i].item_id +
                    " \n Product: " +
                    res[i].product_name +
                    " \n Department: " +
                    res[i].department_name +
                    " \n Price: $" +
                    res[i].price +
                    " \n Stock: " +
                    res[i].stock_quantity+
                    "\n *******************************************"
                );
            }
            chooseProduct();
        })
    };
