import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({ region: 'eu-north-1' });

async function updatePost(post, valuesToUpdate) {
    let { id, title, content } = post;

    if (valuesToUpdate.title) {
        title = valuesToUpdate.title;
    }

    if (valuesToUpdate.content) {
        content = valuesToUpdate.content;
    }


    const params = {
        TableName: "BlogPosts",
        Item: {
            id: id,
            title: { S: title },
            content: { S: content }
        }
    };

    const command = new PutItemCommand(params);

    try {
        await client.send(command);
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export { updatePost };