import { marshall } from "@aws-sdk/util-dynamodb"
import { db } from "../lib/database"

const TableName = "Classes"

export const CreateClass = async (Class: any) => {
  const marshalledClass = marshall(Class)

  const params = {
    TableName,
    Item: marshalledClass,
  }
  //s3
  await db.putItem(params)

  return "Class created successfully"
}

export const DeleteClass = async (classId: string): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: classId }),
  }

  await db.deleteItem(params)

  return "Class deleted successfully"
}

export const GetClass = async (classId: string): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: classId }),
  }

  const { Item: item } = await db.getItem(params)
  return JSON.stringify(item)
}

export const UpdateClass = async (
  classId: any,
  name: string
): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: classId, name }),
  }

  await db.updateItem(params)
  return "Class updated successfully"
}
