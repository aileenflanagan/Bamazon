DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(
	id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255),
    department_name VARCHAR(255),
    price FLOAT, 
    stock_quantity INTEGER
    
);

INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("t-shirt", "clothing", 5.10, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("coffee mug", "kitchen", 7.25, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("lamp", "furniture", 25.07, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("hair brush", "hair products", 6.52, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("silly string", "kids", 2.00, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("frying pan", "kitchen", 20.01, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("skinny jeans", "clothing", 15.99, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("garden gnome", "outdoors", 2.59, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("pool floatie", "outdoors", 2.21, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) 
VALUES("notebook", "school & office", 3.37, 22);