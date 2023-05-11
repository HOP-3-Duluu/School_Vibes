import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { v4 as uuidv4 } from "uuid"
import { CreateUser, DeleteUser, GetUser, UpdateUser } from "../models/User"

export const createUser = async (
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

    const User = {
      name,
      id: uuidv4(),
      image,
      description,
    }

    const message = await CreateUser(User)

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

export const deleteUser = async (
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

    const message = await DeleteUser(id)

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

    const message = GetUser(id)

    if (!message) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "User not found" }),
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

export const updateUser = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { id } = event.pathParameters || {}
  const { name } = JSON.parse(event.body || "{}")

  try {
    const message = UpdateUser(id, name)
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
