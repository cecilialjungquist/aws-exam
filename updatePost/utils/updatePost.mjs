import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: 'eu-north-1' });

async function updatePost(post, valuesToUpdate) {
    let { id, title, content } = post;

    if (valuesToUpdate.title) {
        title = { S: valuesToUpdate.title };
    }

    if (valuesToUpdate.content) {
        content = { S: valuesToUpdate.content };
    }


    const params = {
        TableName: "BlogPosts",
        Item: {
            id,
            title,
            content
        }
    };
    
    console.log(params.Item);

    const command = new PutItemCommand(params);

    try {
        await client.send(command);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { updatePost };