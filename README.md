# REST API with Express.js

A simple REST API built using Express.js to perform CRUD operations on an in-memory data store.

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

### Clone the repository

```bash
git clone https://github.com/Oluloba/express-RestAPI '''

### Postman was used to test all API endpoints of the Express.js REST API.

## How Postman Was Used
GET /items — To retrieve a list of all items

GET /items/:id — To fetch a specific item by its ID

POST /items — To create new items by sending a JSON request body

PUT /items/:id — To update an existing item's name and description

DELETE /items/:id — To remove an item from the list
