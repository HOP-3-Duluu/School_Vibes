import { marshall } from "@aws-sdk/util-dynamodb"
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { v4 } from "uuid"
import { db } from "../lib/database"

export const createGroup = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { name, image, description } = JSON.parse(event.body || "{}")

    const data = await db.putItem({
      TableName: "groups",
      Item: marshall({
        name,
        id: v4(),
        image,
        description
      }),
    })

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    }
  }
}
