# ReceiptIt API Service

API Service

## Build and Run
#### 1. Clone Repository
    git clone https://github.com/ReceiptIt/receiptit-api-service.git
#### 2. Go to service folder
    cd receiptit-api-service
#### 3. Install npm package
    npm install
#### 4. Database migrate
    npm run db:migration
#### 5. Database seed
    npm run db:seeder
#### 6. Run server
    npm start
    
## API Endpoints    
#### User API

- GET https://receipit-rest-api.herokuapp.com/user/:userID
```$xslt
Retrieve user information given userID: 

GET https://receipit-rest-api.herokuapp.com/user/1

Response:
{
    "result": "success",
    "message": "User info is retrieved successfully",
    "userInfo": {
        "user_id": 1,
        "password": "9ff7b641722c30acdc058f2499d97dd8",
        "email": "test1@test1.com",
        "first_name": "David",
        "last_name": "Zhang",
        "createdAt": "2019-07-14T17:57:04.000Z",
        "updatedAt": "2019-07-14T17:57:04.000Z"
    }
}
```

- POST https://receipit-rest-api.herokuapp.com/user

Mandatory request body field: `password`, `email`, `first_name`, `last_name`
```$xslt
Create user

POST https://receipit-rest-api.herokuapp.com/user

Payload:
{
        "password": "abcdefg",
        "email": "test8@test1.com",
        "first_name": "David",
        "last_name": "Zhang"
}

Response:
{
    "result": "success",
    "message": "User is created successfully",
    "userInfo": {
        "user_id": 12,
        "first_name": "David",
        "last_name": "Zhang",
        "password": "$2b$10$X8PpZz1hnwjf.kJlg5q5ZOR4KlFBYd95d4axDRGRqNZyjjFFHmn9m",
        "email": "test8@test1.com",
        "updatedAt": "2019-07-14T20:09:41.730Z",
        "createdAt": "2019-07-14T20:09:41.730Z"
    }
}
```

- PUT https://receipit-rest-api.herokuapp.com/user/:userID

Optional request body field: `password`, `email`, `first_name`, `last_name`
```$xslt
Update user

PUT https://receipit-rest-api.herokuapp.com/user/12

Payload:
{
     "last_name": "test"
}

Response:
{
    "result": "success",
    "message": "User info is updated successfully"
}
```

#### Receipt API

- POST https://receipit-rest-api.herokuapp.com/receipt

Mandatory request body field: `user_id`, `purchase_date`, `total_amount`, `merchant`,`postcode`

Optional request body field: `comment`
```
Create a new receipt

POST https://receipit-rest-api.herokuapp.com/receipt

Payload:
{
    "user_id": 2,
    "purchase_date": "2019-07-14T17:58:21+00:00",
    "total_amount": "88.66",
    "merchant": "Walmart",
    "postcode": "N2L 5L4",
    "comment": "yes"
}

Response:
{
    "result": "success",
    "message": "Receipt is created successfully",
    "receiptInfo": {
        "receipt_id": 12,
        "user_id": 2,
        "purchase_date": "2019-07-14T17:58:21.000Z",
        "total_amount": "88.66",
        "merchant": "Walmart",
        "postcode": "N2L 5L4",
        "updatedAt": "2019-07-14T20:17:26.645Z",
        "createdAt": "2019-07-14T20:17:26.645Z"
    }
}
```

- GET https://receipit-rest-api.herokuapp.com/receipt?userId=:userID
```$xslt
Get all receipts belonging to one user

GET https://receipit-rest-api.herokuapp.com/receipt?userId=2

Response:
{
    "receipts": [
        {
            "receipt_id": 2,
            "user_id": 2,
            "purchase_date": "2019-07-14T17:58:21+00:00",
            "total_amount": "66.66",
            "merchant": "Walmart",
            "postcode": "N2J 2J9",
            "comment": "test2",
            "createdAt": "2019-07-14T17:57:04.000Z",
            "updatedAt": "2019-07-14T17:57:04.000Z"
        },
        {
            "receipt_id": 12,
            "user_id": 2,
            "purchase_date": "2019-07-14T17:58:21+00:00",
            "total_amount": "88.66",
            "merchant": "Walmart",
            "postcode": "N2L 5L4",
            "comment": null,
            "createdAt": "2019-07-14T20:17:26.000Z",
            "updatedAt": "2019-07-14T20:17:26.000Z"
        }
    ]
}
```

- DELETE https://receipit-rest-api.herokuapp.com/receipt/:receiptID
```$xslt
Delete a receipt and all products under it

DELETE https://receipit-rest-api.herokuapp.com/receipt/12

Response:
{
    "result": "success",
    "message": "Receipt and associated products are deleted successfully"
}
```

- GET https://receipit-rest-api.herokuapp.com/receipt/:receiptID
```$xslt
Get a particular receipt and its products given ID

GET https://receipit-rest-api.herokuapp.com/receipt/2

Response:
{
    "receipt_id": 2,
    "user_id": 2,
    "purchase_date": "2019-07-14T17:58:21+00:00",
    "total_amount": "66.66",
    "merchant": "Walmart",
    "postcode": "N2J 2J9",
    "comment": "test2",
    "createdAt": "2019-07-14T17:57:04.000Z",
    "updatedAt": "2019-07-14T17:57:04.000Z",
    "products": [
        {
            "product_id": 2,
            "receipt_id": 2,
            "name": "Peach",
            "description": "Test_Description",
            "quantity": 5,
            "currency_code": "USD",
            "price": "10.20",
            "createdAt": "2019-07-14T17:57:04.000Z",
            "updatedAt": "2019-07-14T17:57:04.000Z"
        }
    ]
}
```

- PUT https://receipit-rest-api.herokuapp.com/receipt/:receiptID

Optional request body field: `purchase_date`, `total_amount`, `merchant`,`postcode`, `comment`

```$xslt
Update an existing receipt

PUT https://receipit-rest-api.herokuapp.com/receipt/2

Payload:
{
	"total_amount": "123"
}

Response:
{
    "result": "success",
    "message": "Receipt info is updated successfully"
}
```

#### Product API
- GET https://receipit-rest-api.herokuapp.com/product/:productID

```$xslt
Get an existing product by ID

GET https://receipit-rest-api.herokuapp.com/product/2

Response:
{
    "product_id": 2,
    "receipt_id": 2,
    "name": "Peach",
    "description": "Test_Description",
    "quantity": 5,
    "currency_code": "USD",
    "price": "10.20",
    "createdAt": "2019-07-14T17:57:04.000Z",
    "updatedAt": "2019-07-14T17:57:04.000Z"
}
```
- GET https://receipit-rest-api.herokuapp.com/product?receiptId=:receiptID

```$xslt
Get all products within one receipt

GET https://receipit-rest-api.herokuapp.com/product?receiptId=1

Response:
{
    "products": [
        {
            "product_id": 1,
            "receipt_id": 1,
            "name": "Apple",
            "description": "Test_Description",
            "quantity": 5,
            "currency_code": "USD",
            "price": "10.03",
            "createdAt": "2019-07-14T17:57:04.000Z",
            "updatedAt": "2019-07-14T17:57:04.000Z"
        }
    ]
}
```

- POST https://receipit-rest-api.herokuapp.com/product


Mandatory request body field: `receipt_id`, `name`, `quantity`, `price`

Optional request body field: `description`, `currency_code`

```$xslt
Create a new product.

POST https://receipit-rest-api.herokuapp.com/product

Payload:
{
            "receipt_id": 2,
            "name": "test fake product",
            "description": "Test_Description",
            "quantity": 1,
            "currency_code": "AUD",
            "price": "18"
}

Response:
{
    "result": "success",
    "message": "Product is created successfully",
    "productInfo": {
        "product_id": 12,
        "receipt_id": 2,
        "name": "test fake product",
        "price": 18,
        "quantity": 1,
        "currency_code": "AUD",
        "description": "Test_Description",
        "updatedAt": "2019-07-14T20:36:49.648Z",
        "createdAt": "2019-07-14T20:36:49.648Z"
    }
}
```

- PUT https://receipit-rest-api.herokuapp.com/product

Mandatory request body field: `receipt_id`, `product_id`

Optional request body field: `description`, `currency_code`, `name`, `quantity`, `price`

```$xslt
Update an existing product

PUT https://receipit-rest-api.herokuapp.com/product

Payload: 
{
            "receipt_id": 2,
            "product_id": 12,
            "name": "new test fake product"
}

Response:
{
    "result": "success",
    "message": "Product is updated successfully"
}
```

- DELETE https://receipit-rest-api.herokuapp.com/product/:productID

```$xslt
Delete an existing product

DELETE https://receipit-rest-api.herokuapp.com/product/2

Response:
{
    "result": "success",
    "message": "Product is deleted successfully"
}
```