import { marshall } from "@aws-sdk/util-dynamodb"
import { db } from "../lib/database"
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"

export const getUser = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { id } = event.pathParameters || {}
    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid ID" }),
      }
    }

    const { Item: item } = await db.getItem({
      TableName: "groups",
      Key: marshall({ id }),
    })

    if (!item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Group not found" }),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(item),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  }
}
