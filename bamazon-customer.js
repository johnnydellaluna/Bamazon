// Require our npms

var mysql = require("mysql");
var inquirer = require("inquirer");

// Create database connection

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_db"
});

// And then connect to the database
connection.connect(function(err) {
  if (err) throw err;

  startBamazon();
});

// Show all of the products available in the store.
function startBamazon() {
	connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    for (var i = 0; i < results.length; i++) {
    	console.log("\nID Number: " + results[i].itemid + "\nProduct: " + results[i].productname + "\nDepartment: " + results[i].departmentname + "\nPrice in $: " + results[i].pricedollars + "\nQuantity in Stock: " + results[i].stockquantity);

	};
	askID(results);
});

	
};

// The first should ask them the ID of the product they would like to buy.

function askID(results) {
	inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Welcome to Bamazon! What product would you like to buy? Enter the ID number.",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },

    ])

    .then(function(answer) {
    	var selectedItem = [];
    	for (var i = 0; i < results.length; i++) {
    		if (answer.id == results[i].itemid) {
    			selectedItem = results[i];
    		}
    	}



    });

    askQuantity(selectedItem);

    
};

function askQuantity(selectedItem) {
	inquirer
	.prompt([
		      {
        name: "units",
        type: "input",
        message: "How many?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
		])

	.then(function(answer) {
    	var numberToBuy;
    	for (var i = 0; i < results.length; i++) {
    		numberToBuy == answer.id;
    		if (selectedItem.stockquantity > 0) {
    			subtractFromDatabase()
    		} else {
    			console.log("Insufficient Quantity!")
    		}
    	}




    })
};

function subtractFromDatabase() {
	connection.query(
"SELECT products"
// Need to have the numberToBuy be subtracted from selectedItem.stockquantity and update into the database.

// Then need to display purchase confirmation and updated storefront to user. Need help with this.

		)
}