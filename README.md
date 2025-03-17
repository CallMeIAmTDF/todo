## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. For development with auto-restart: `npm run dev`

## API Endpoints

- GET /api/todos - Get all todos
- GET /api/todos/:id - Get a specific todo
- POST /api/todos - Create a new todo----
``` 
body: {
  "description": "hello IAMTDF",
}
```
- PUT /api/todos/:id - Update a todo
``` 
body: {
  "description": "hello IAMTDF",
  "completed": true
}
```
- DELETE /api/todos/:id - Delete a todo