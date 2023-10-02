module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hi from serverless!',
        input: event,
      },
      null,
      2
    ),
  };
};
