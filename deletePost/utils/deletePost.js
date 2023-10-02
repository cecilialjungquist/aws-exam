import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: 'eu-north-1' });

async function deletePost(id) {
    const params = {
        TableName: "BlogPosts",
        Key: { id: { S: id }}
    };
  
    const command = new DeleteItemCommand(params);
  
    try {
        await client.send(command);
    } catch (err) {
        console.error(err);
        throw err;
    } 
}

export { deletePost };