# Cats API
Built using nodejs with express

## Installation

Use the package manager npm to install Cats API.

```bash
npm install
```

Create .env file with sample values below
```bash
DB_NAME=cats_db
DB_USERNAME=root
DB_PASSWORD=admin
DB_HOST=127.0.0.1
NODE_PORT=3000
```

Create  database named "cats_db"

Run the app

```bash
npm start
```

## ROUTES

```
GET /v1/cats
List all cats
Parameters:
page:  1 <number>
pageSize: 10 <number>
sort: name,asc <id||name||breedGroup||weight,asc||desc>
search: egypt <string>
```

```
GET /v1/cats/:catId
Get specific cat by cat id
```

```
POST /v1/cats
Create new cat
Body
name:dog3 
weight:100
breedGroup: egypt
```

```
DELETE /v1/cats/:catId
Delete cat by catId
```
