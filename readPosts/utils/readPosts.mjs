import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient({ region: 'eu-north-1' });

async function readPosts() {
    const params = {
        TableName: "BlogPosts"
    }
    const command = new ScanCommand(params);

    try {
        const data = await client.send(command);
        return data.Items;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export { readPosts };