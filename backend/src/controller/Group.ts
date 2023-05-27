import { marshall } from "@aws-sdk/util-dynamodb"
import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { v4 as uuidv4 } from "uuid"
import { db } from "../lib/database"
import {
  CreateGroup,
  DeleteGroup,
  GetGroup,
  GetUserGroup,
  UpdateGroup,
} from "../models/group"
import { GetUser, UpdateUser } from "../models/User"
import { getUser, updateUser } from "./User"

export const createGroup = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { name, detail } = JSON.parse(event.body || "{}")

    if (!name || !detail) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      }
    }

    const group = {
      id: uuidv4(),
      name,
      detail,
      tasks: [],
      members: [],
      color: "green",
    }

    const message = await CreateGroup(group)

    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  }
}

export const joinGroup = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { groupId, userId } = JSON.parse(event.body || "{}")

    if (!groupId || !userId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      }
    }

    const group = await db.updateItem({
      TableName: "Groups",
      Key: marshall({ id: groupId }),
      UpdateExpression:
        "set #members = list_append(if_not_exists(#members, :emptyList), :userId)",
      ExpressionAttributeNames: {
        "#members": "members",
      },
      ExpressionAttributeValues: marshall({
        ":userId": [userId],
        ":emptyList": [],
      }),
      ReturnValues: "UPDATED_NEW",
    })
    const user = await db.updateItem({
      TableName: "Users",
      Key: marshall({ id: userId }),
      UpdateExpression:
        "set #groups = list_append(if_not_exists(#groups, :emptyList), :groupId)",
      ExpressionAttributeNames: {
        "#groups": "groups",
      },
      ExpressionAttributeValues: marshall({
        ":groupId": [groupId],
        ":emptyList": [],
      }),
      ReturnValues: "UPDATED_NEW",
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ message: { group, user } }),
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  }
}
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

    const message = await DeleteGroup(id)

    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  }
}

export const getGroup = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { id } = event.pathParameters || {}
    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid group ID" }),
      }
    }

    const message = await GetGroup(id)

    if (!message) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Group not found" }),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  }
}

export const updateGroup = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const message = UpdateGroup(JSON.parse(event.body || "{}"))
    return {
      body: JSON.stringify({ message }),
      statusCode: 200,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  }
}

export const getUserGroup = async (
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

    const message = await GetUserGroup(id)

    if (!message) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Group not found" }),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal server error" }),
    }
  }
}
