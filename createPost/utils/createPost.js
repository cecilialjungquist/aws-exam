import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: 'eu-north-1' });

async function createPost(id, title, content) {
    const params = {
        "TableName": "BlogPosts",
        "Item": {
            "id": { S: id },
            "title": { S: title },
            "content": { S: content }
        }
    }
    const command = new PutItemCommand(params);

    try {
        const data = await client.send(command);
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export { createPost };