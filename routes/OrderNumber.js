const exppress=require('express');
const numbers=exppress.Router();
const OrderNumberController=require('../controller/OrderNumber');

numbers.post('/order-numbers',OrderNumberController.OrderNumbers);

module.exports=numbers;