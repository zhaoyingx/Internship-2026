Key points this week

# Frontend

1. A shared low-level HTTP helper
2. API design (write a markdown doc)
3. Turn the API design into matching frontend request methods
4. Replace the current HTTP requests in the frontend — e.g. loading history in the sidebar, use `getRecords`

# Backend

1. Backend project-structure design (markdown doc, with an architecture diagram)
2. Database schema design (markdown doc)
3. Create the corresponding files
4. Implement the endpoints
5. ...

# Day 1

## To-Do list

1. Wrap the HTTP request layer on the frontend — put it in its own file, supporting GET and POST. Goal: understand the concept of encapsulation.
2. Frontend–backend integration: add two API methods on the backend that return the GET and POST content respectively. Goal: learn how the frontend and backend talk to each other.
3. Connect the local model.

### API design

### /api/record

| Method | Params |
| --- | --- |
| GET | none |

Request example:

```
GET /api/record
```

Response:

```json
[
  { "id": 1, "content": "First record" },
  { "id": 2, "content": "Second record" }
]
```

### /api/record?id={id}

| Method | Params |
| --- | --- |
| GET | `id` |

Request example:

```
GET /api/record?id=1
```

Response:

```json
{ "id": 1, "content": "First record" }
```

### /api/add

| Method | Params |
| --- | --- |
| POST | `content: xx` |

Request example:

```json
POST /api/add

{ "content": "a piece of text" }
```

Response:

```json
{ "id": 3, "content": "a piece of text" }
```

### /api/delete?id={id}

| Method | Params |
| --- | --- |
| DELETE | `id` |

Request example:

```
DELETE /api/delete?id=3
```

Response:

```json
{ "ok": true }
```

# Day 2

## To-Do list

1. Add the network layer — create a new `handler.go` and put the network-layer methods there.
2. Install Apifox, learn how to debug backend endpoints and inspect their responses.
3. Frontend–backend integration.
