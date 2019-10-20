var mysql = require("mysql");
var inquirer = require("inquirer");

const myConfig = require('./config');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: myConfig.config.password,
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

    function chooseProduct() {
        inquirer
          .prompt([{
            name: "productID",
            type: "input",
            message: "What is the product ID of the item you would like to purchase?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }, {
            name: "stock",
            type: "input",
            message: "How many would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }]).then(function(answer){
                var query = "Select product_name, stock_quantity, price, department_name FROM products WHERE ?";
                connection.query(query, { item_id: answer.productID}, function(err, res) {
                    if (err) console.log(err);

                    var available_stock = res[0].stock_quantity;
                    var price_per_unit = res[0].price;
                    var productDepartment = res[0].department_name;

                    if (available_stock >= answer.stock) {
                        completePurchase(available_stock, price_per_unit, productDepartment, answer.productID, answer.stock);
                    } else {
                        console.log("Insufficient stock!");
                        chooseProduct();
                    }
                });
            });
    };

    var completePurchase = function(availableStock, price, selectedProductID, selectedStock) {

	var updatedStockQuantity = availableStock - selectedStock;
	var totalPrice = price * selectedStock;

    console.log("Remaining stock is now: " + updatedStockQuantity);

	var query = "UPDATE products SET ? WHERE ?";
    
    connection.query(query, [{
		stock_quantity: updatedStockQuantity,
	}, {
		item_id: selectedProductID
	}], function(err, res) {
		 if (err) console.log (err);
        console.log("Yay, your purchase is complete.");
        console.log("You're mythical payment has been received in the amount of : $" + parseInt(totalPrice));
	});
};