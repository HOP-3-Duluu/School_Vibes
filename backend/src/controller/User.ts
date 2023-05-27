import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { v4 as uuidv4 } from "uuid"
import {
  CreateUser,
  DeleteUser,
  GetUser,
  LoginUser,
  UpdateUser,
} from "../models/User"

export const createUser = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { name, gmail, password } = JSON.parse(event.body || "{}")

    if (!name || !gmail || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      }
    }

    const User = {
      name,
      id: uuidv4(),
      gmail,
      password,
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

export const Login = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { gmail, password } = JSON.parse(event.body || "{}")
    const message: any = await LoginUser(gmail)
    if (!message) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "User not found" }),
      }
    }
    if (message[0].password.S != password) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Нууц үг буруу байна" }),
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    }
  } catch (err) {
    console.log(err)
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
        body: JSON.stringify({ message: "Invalid user ID" }),
      }
    }

    const message = await GetUser(id)
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
  try {
    const message = UpdateUser(JSON.parse(event.body || "{}"))
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
