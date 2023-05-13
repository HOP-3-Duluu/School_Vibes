import { marshall } from "@aws-sdk/util-dynamodb"
import { db } from "../lib/database"

const TableName = "Classes"

interface ClassProp {
  name: string
  id: string
  image: string
  description: string
}

export const CreateClass = async (Class: ClassProp) => {
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

export const GetClass = async (classId: string): Promise<any> => {
  const params = {
    TableName,
    Key: marshall({ id: classId }),
  }

  const { Item: item } = await db.getItem(params)
  return item
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
