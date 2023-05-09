import { marshall } from "@aws-sdk/util-dynamodb"
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { db } from "../lib/database"

export const updateGroup = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { id } = event.pathParameters || {}
  const { name } = JSON.parse(event.body || "{}")

  try {
    await db.updateItem({
      TableName: "users",
      Key: marshall({ id, name }),
    })
    return {
      body: JSON.stringify("Succes to update group"),
      statusCode: 200,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  }
}
