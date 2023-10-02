module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hey from serverless!',
        input: event,
      },
      null,
      2
    ),
  };
};
