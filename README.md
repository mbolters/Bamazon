# Bamazon

This is bamazon. Bamazon, as it's name suggests, is a simple e-commerce app, or at least the backend for it. 

### Check out this video to see how it works: [bamazonVid](./bamazonVid.mov)

Bamazon uses some third-party node modules and connects to a mysql database to store and retrieve product and department information.

## Third-party Node Modules
Bamazon uses these node modules: ```inquirer``` and ```mysql```.

To install just run:

```npm init```
```npm i node```
```npm i inquirer```
```npm i mysql```

## Customer Module
The customer module lets users select a product to purchase, enter the number of items they wish to purchase, and then complete the purchase.

The complete purchase process shows how much the total cost is (based on number of items).

To run this module in the terminal:

```node bamazonCustomer.js```
