import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { v4 as uuidv4 } from "uuid"
import {
  CreateGroup,
  DeleteGroup,
  GetGroup,
  UpdateGroup,
} from "../models/group"

export const createGroup = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { name, image, description } = JSON.parse(event.body || "{}")

    if (!name || !image || !description) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      }
    }

    const group = {
      name,
      id: uuidv4(),
      image,
      description,
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
        body: JSON.stringify({ message: "Invalid ID" }),
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
  const { id } = event.pathParameters || {}
  const { name } = JSON.parse(event.body || "{}")

  try {
    const message = UpdateGroup(id, name)
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