DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

CREATE TABLE products(
	itemid INTEGER(11) AUTO_INCREMENT NOT NULL,
	productname VARCHAR(30) NOT NULL,
	departmentname VARCHAR(30) NOT NULL,
	pricedollars INTEGER(11) NOT NULL,
	stockquantity INTEGER(11) NOT NULL,
	PRIMARY KEY (itemid)
);

USE bamazon_db;

INSERT INTO products (itemid, productname, departmentname, pricedollars, stockquantity)

VALUES
("Apple", "Food", 1, 2000),
("Banana", "Food", 2, 2000),
("iPhone", "Technology", 750, 300),
("MacBook", "Technology", 900, 500),
("Full House Season 2", "Movies and TV", 25, 43),
("House MD Season 2", "Movies and TV", 30, 41),
("Eli Manning Jersey", "Clothing", 100, 500),
("Peyton Manning Jersey", "Clothing", 150, 500),
("Hamlet", "Books", 12, 1499),
("Rosencrantz and Guildenstern Are Dead", "Books", 11, 997)
