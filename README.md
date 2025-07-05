# REST API with Express.js

A simple REST API built using Express.js  that supports full CRUD operations using an in-memory data store. 
---

## Features

◼ Create, Retrieve, Update, and Delete items 

◼ Simple in-memory data store 

◼ Proper error handling (400, 404, 500) 

◼ Middleware for JSON parsing and custom error handler 


❗ Error Handling
◼ 400 Bad Request: Missing or invalid data

◼ 404 Not Found: Item or route not found

◼ 500 Internal Server Error: General server error with details


##  📃Project Structure

##### Clone the repository
 https://github.com/Oluloba/express-RestAPI
 
 ##### Install dependencies
  npm install

Start the deployment server:
  npm run dev


*Postman was used to test all API endpoints of the Express.js REST API.* 
#### How Postman Was Used
◾ GET /items — To retrieve a list of all items

◾ GET /items/:id — To fetch a specific item by its ID

◾ GET /items/:id — To fetch a specific item by its ID

◾ POST /items — To create new items by sending a JSON request body

◾ PUT /items/:id — To update an existing item's name and description

◾ DELETE /items/:id — To remove an item from the list

DELETE /items/:id — To remove an item from the list


### Example Item Structure
Create an Item and add a body

body:
{
		"id": 1,
		"name": "Sample Item"
		"description": "This is a test item." 
		}
		
** Postman Collection
✅ Download the postman collection : https://www.postman.com/downloads/ and import this file into Postman for testing .../postman_collection.json
 


## Sample Request/Response

### POST /items
Request:
```json
{
  "name": "Pen color",
  "description": "Color Blue"
}

Response 
{
  "id": 1,
  "name": "Pen color",
  "description": "Color Blue"
}
 ##GET /items
 Response
 [
  {
    "id": 1,
    name": "Pen color",
    "description": "Color Blue"
  }
]


