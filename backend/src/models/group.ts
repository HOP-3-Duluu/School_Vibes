import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"
import { db } from "../lib/database"

const TableName = "Groups"

interface GroupProps {
  name: string
  id: string
  detail: string
  tasks: any[]
  members: any[]
  color: string
}

export const CreateGroup = async (group: GroupProps) => {
  const marshalledGroup = marshall(group)

  const params = {
    TableName,
    Item: marshalledGroup,
  }
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
  const { Item: item }: any = await db.getItem(params)
  return unmarshall(item)
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

export const GetUserGroup = async (userId: string): Promise<any> => {
  const params = {
    TableName: "Users",
    Key: marshall({ id: userId }),
  }
  const { Item: item } = await db.getItem(params)
  const groups: any[] = []

  if (item && item.groups) {
    const userGroups: any = item.groups.L

    for (const group of userGroups) {
      const groupId = group.S
      const groupData = await GetGroup(groupId)
      groups.push(groupData)
    }
  }

  return groups
}
