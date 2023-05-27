import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda"
import { v4 as uuidv4 } from "uuid"
import {
  CreateTask,
  DeleteTask,
  GetTask,
  GetTaskByDate,
  GetTodayTask,
  UpdateTask,
} from "../models/Task"

export const createTask = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { groupName, image, description, title, date, type } = JSON.parse(
      event.body || "{}"
    )

    if (!groupName || !image || !description) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required fields" }),
      }
    }

    const Task = {
      groupName,
      id: uuidv4(),
      image,
      description,
      title,
      date,
      type,
    }

    const message = await CreateTask(Task)

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

export const deleteTask = async (
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

    const message = await DeleteTask(id)

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

export const getTask = async (
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

    const message = await GetTask(id)

    if (!message) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Task not found" }),
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

export const updateTask = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const { id } = event.pathParameters || {}
  const { name } = JSON.parse(event.body || "{}")

  try {
    const message = await UpdateTask(id, name)
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
export const getTaskByDate = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { id } = event.pathParameters || {}

    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid Date" }),
      }
    }

    const message = await GetTaskByDate(id)

    if (!message) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Task not found" }),
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

export const getTodayTask = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const message = await GetTodayTask()

    if (!message) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Task not found" }),
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
