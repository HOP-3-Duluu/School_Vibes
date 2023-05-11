import { marshall } from "@aws-sdk/util-dynamodb"
import { db } from "../lib/database"

const TableName = "Users"

export const CreateUser = async (user) => {
  const marshalledUser = marshall(user)

  const params = {
    TableName,
    Item: marshalledUser,
  }
  //s3
  await db.putItem(params)

  return "User created successfully"
}

export const DeleteUser = async (userId: string): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: userId }),
  }

  await db.deleteItem(params)

  return "User deleted successfully"
}

export const GetUser = async (userId: string): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: userId }),
  }

  const { Item: item } = await db.getItem(params)
  return JSON.stringify(item)
}

export const UpdateUser = async (
  userId: any,
  name: string
): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: userId, name }),
  }

  await db.updateItem(params)
  return "User updated successfully"
}
