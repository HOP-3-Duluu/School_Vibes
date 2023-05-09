import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { db } from "../lib/database"
import { marshall } from "@aws-sdk/util-dynamodb"

export const deleteGroup = async (
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

    await db.deleteItem({
      TableName: "groups",
      Key: marshall({ id }),
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Group deleted successfully" }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  }
}
