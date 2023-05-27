import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"
import { db } from "../lib/database"

const TableName = "Users"

interface UserProps {
  name: string
  id: string
  password: string
  gmail: string
}
export const CreateUser = async (user: UserProps) => {
  const marshalledUser = marshall(user)

  const params = {
    TableName,
    Item: marshalledUser,
  }
  //s3
  await db.putItem(params)

  return "User created successfully"
}

export const LoginUser = async (gmail: string) => {
  const params = {
    TableName,
    IndexName: "gmail-index",
    KeyConditionExpression: "#id = :value",
    ExpressionAttributeNames: {
      "#id": "gmail",
    },
    ExpressionAttributeValues: {
      ":value": {
        S: gmail,
      },
    },
  }

  const { Items: items } = await db.query(params)

  return items
}

export const DeleteUser = async (userId: string): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: userId }),
  }

  await db.deleteItem(params)

  return "User deleted successfully"
}

export const GetUser = async (userId: string): Promise<any> => {
  const params = {
    TableName,
    Key: marshall({ id: userId }),
  }

  const { Item: item } = await db.getItem(params)
  return unmarshall(item)
}

export const UpdateUser = async (user): Promise<string> => {
  const params = {
    TableName,
    Key: marshall(user),
  }

  await db.putItem(params)
  return "User updated successfully"
}
