DROP DATABASE IF EXISTS products_db;
CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products (
  item_id INTEGER(10) PRIMARY KEY AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(7,2) NOT NULL,
  stock_quantity INTEGER(100) NOT NULL
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flashlight", "Tools", 7.59, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blanket", "Home", 13.58, 93);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sheets", "Home", 16.91, 39);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Vitamins", "Health", 19.92, 77);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Scarf", "Accessories", 12.99, 85);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Earrings", "Jewlery", 5.93, 27);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ruler", "Tools", 8.08, 95);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hat", "Accessories", 9.04, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pillow", "Home", 5.95, 78);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cutting Board", "Kitchen", 8.01, 90);

SELECT * FROM products;


