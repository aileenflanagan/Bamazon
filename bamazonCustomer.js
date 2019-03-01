var inquirer = require('inquirer');

var mysql = require("mysql");

var connection = mysql.createConnection({
   host: "localHost",

//port name
port: 3306,

//username:
user: "root",

//Your password:
password: "root",
database: "bamazon_db"

});

connection.connect(function(err) {
   if (err) throw (err)
//    console.log("Connected as id")
});

function displayProd(){

        var query=connection.query("SELECT * FROM products", function(err, res){
            if(err) throw err;
            
            console.log("\nHere are the current products in stock")
            
            for(let i=0; i<res.length; i++){
                console.log("\nid: "+ res[i].id 
                +"\nProduct: "+ res[i].product_name
                +"\nDepartment: "+ res[i].department_name
                +"\nPrice: $"+ res[i].price
                );
                let stock=res[i].stock_quantity;
                if(stock<10){
                    console.log("\nOnly "+ stock+ " left!");
                }
            }
})
    selectProduct();
};

function placeOrder(item,orderQuantity, currentStock){
    // console.log("updating quantities");
    let numLeftInStock= currentStock-orderQuantity;
    // console.log("there will be "+ numLeftInStock+ " left");
    var query= connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: numLeftInStock
            },
            {
                id: item.id
            }
        ]
    )
    let purchaseTotal=item.price*orderQuantity
    console.log("You have ordered "+ orderQuantity+ " of the "+ item.product_name);
    console.log("The total cost of your order is $"+purchaseTotal.toFixed(2));
    connection.end();
}

displayProd();

function selectProduct(){
    let doneShopping=false;

inquirer
  .prompt([
    {
    type: "input",
    message: "Please enter the id of the item you would like to purchase: ",
    name: "enterID"
    },
    {
    type: "input", 
    message: "Enter the quantity you would like to order: ",
    name: "numItems"
    }
  ])
  .then(function(inquirerResp){
    var query=connection.query("SELECT * FROM products", function(err, res){
        if(err) throw err;

        let selectedItem;
        for(let i=0;i<res.length;i++){
            
            //check to see if that id exists
            if(inquirerResp.enterID== res[i].id){
                // console.log(res[i]);
                selectedItem=res[i];
                // console.log("amt requested: "+inquirerResp.numItems);
                // console.log("num of this prod: "+ selectedItem.stock_quantity);
                let orderQuantity= inquirerResp.numItems;
                let currentStock=selectedItem.stock_quantity;

                //check to see if enough in stock
                if(orderQuantity<currentStock&&orderQuantity>0){
                    console.log("okay order "+ orderQuantity+ " of "+ selectedItem.product_name);
                    
                    placeOrder(selectedItem, orderQuantity, currentStock);
                    connection.end();
                }
                else if(orderQuantity<0){
                    console.log("Please enter a valid number")
                }
                else 
                    console.log("sorry not enough "+ selectedItem.product_name + " in stock");
                    selectProduct();
                    
            }
        }
        if (selectedItem==null){
        console.log("sorry that id doesn't exist");
        selectProduct();

        }


       
}
  );
}

);
}