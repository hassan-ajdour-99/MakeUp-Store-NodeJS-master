const path = require("path");
const express = require("express");

const router = express.Router();

const shopController = require("../controller/shop");

router.get("/", shopController.getIndex);

router.get("/products", shopController.getAllProducts);

router.get("/cart", shopController.getCart);

router.get("/orders", shopController.getOrders);

router.get("/checkout", shopController.getCheckout);

module.exports = router;