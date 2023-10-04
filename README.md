# Individuell examination AWS (Lambda, DynamoDB, API Gateway)

## CRUD
REST API med AWS API Gateway. Authorized med JWT genom AWS Lambda.

### Read
`path: /`
`method: GET`

### Create
`path: /create`
`method: POST`
`body: { "title": string, "content": string }`
Authorization with JWT.

### Update
`path: /update`
`method: PUT`
`body: { "id": string, "title": string || "content": string || ("title": string && "content": string) }`
Authorization with JWT.

### Delete
`path: /delete`
`method: DELETE`
`body: { "id": string }`
Authorization with JWT.

## JWT generate/verify (separata url:er)

### Generate JWT
`path: /`
`method: GET`
`body: { "user": string }`

### Verify JWT (Lambda authorizer)
`path: /`
`method: GET`
Authorization with JWT (in header).