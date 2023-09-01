/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const itemId = event.pathParameters.itemId;
    const item = {'itemId': itemId, 'itemName': "Item " + itemId };
    const response = {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
          headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "*"
          },
            body: JSON.stringify(item),
    };
    return response;
};
