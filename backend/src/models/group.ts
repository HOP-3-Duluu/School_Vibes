import { marshall } from "@aws-sdk/util-dynamodb"
import { db } from "../lib/database"

const TableName = "Groups"

interface GroupProps {
  name: string
  id: string
  image: string
  description: string
}

export const CreateGroup = async (group: GroupProps) => {
  const marshalledGroup = marshall(group)

  const params = {
    TableName,
    Item: marshalledGroup,
  }
  //s3
  await db.putItem(params)

  return "Group created successfully"
}

export const DeleteGroup = async (groupId: string): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: groupId }),
  }

  await db.deleteItem(params)

  return "Group deleted successfully"
}

export const GetGroup = async (groupId: string): Promise<any> => {
  const params = {
    TableName,
    Key: marshall({ id: groupId }),
  }
  const { Item: item } = await db.getItem(params)
  return item
}

export const UpdateGroup = async (
  groupId: any,
  name: string
): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: groupId, name }),
  }

  await db.updateItem(params)
  return "Group updated successfully"
}
