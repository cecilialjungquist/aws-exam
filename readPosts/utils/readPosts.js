import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
// import { ScanCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({ region: 'eu-north-1' });
// const docClient = DynamoDBDocumentClient.from(client);

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