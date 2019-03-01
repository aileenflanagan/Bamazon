# Bamazon

Bamazon is a CLI that mimicks the customer side of a store using node and mySQL. 

## How It Works
    * Displays the products available in the store with price, department, and id.   
    * Prompts user through inquirer to enter the ID of the wanted item, along with quantity of that item.
    * Checks if that ID exists and the quantity entered is a valid amount. 
    * If not valid, prompts user to re-enter information.
    * If valid information is entered, will display the item chosen and amount. Then will display the cost of the quantity the user chose. 
    * Then the program will update the stock quantity to reflect the purchase. 

## Installation
    npm install
    npm install mysql
    npm install inquirer

## Screenshots
### Running Program
![Alt text](https://github.com/aileenflanagan/Bamazon/blob/master/ReadMe_ScreenShots/node.JPG?raw=true)
### Displaying Products
![Alt text](https://github.com/aileenflanagan/Bamazon/blob/master/ReadMe_ScreenShots/displayProd.JPG?raw=true)
### Prompt for ID of chosen product and quantity
![Alt text](https://github.com/aileenflanagan/Bamazon/blob/master/ReadMe_ScreenShots/prompt.JPG?raw=true)
### Invalid ID Entered
![Alt text](https://github.com/aileenflanagan/Bamazon/blob/master/ReadMe_ScreenShots/incorrect_id.JPG?raw=true)
### Invalid Quantity Entered
![Alt text](https://github.com/aileenflanagan/Bamazon/blob/master/ReadMe_ScreenShots/negative_qty_entered.JPG?raw=true)
### When user enters a number larger than what is in stock
![Alt text](https://github.com/aileenflanagan/Bamazon/blob/master/ReadMe_ScreenShots/not_enough_in_stock.JPG?raw=true)
### Correct ID and quantity entered
![Alt text](C:\Users\ailee\Documents\codingBootcamp\homeworks\Bamazon\ReadMe_ScreenShots\valid_id_and_qty.JPG)

## Known Issues
    The program does prompt the user before displaying the products available, as well as after the user has completed a purchase. Additionally, the prompt does not show again until a key is pressed. 

## Authors
    * Aileen Flanagan