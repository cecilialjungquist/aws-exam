import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: 'eu-north-1' });

async function getPost(id) {

    const params = {
        TableName: "BlogPosts",
        Key: {
            id: { S: id }
        }
    };

    const command = new GetItemCommand(params);

    try {
        const data = await client.send(command);
        return data.Item;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { getPost };