import { marshall, unmarshall } from "@aws-sdk/util-dynamodb"
import { db } from "../lib/database"
import moment from "moment"
import { getUser } from "../controller/User"
const TableName = "Tasks"

interface TaskProp {
  groupName: string
  id: string
  image: string
  description: string
  title: string
  date: string
  type: string
}

export const CreateTask = async (Task: TaskProp) => {
  const marshalledTask = marshall(Task)

  const params = {
    TableName,
    Item: marshalledTask,
  }
  //s3
  await db.putItem(params)

  return "Task created successfully"
}

export const DeleteTask = async (TaskId: string): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: TaskId }),
  }

  await db.deleteItem(params)

  return "Task deleted successfully"
}

export const GetTask = async (TaskId: string): Promise<any> => {
  const params = {
    TableName,
    Key: marshall({ id: TaskId }),
  }

  const { Item: item } = await db.getItem(params)
  return item
}

export const UpdateTask = async (
  TaskId: any,
  name: string
): Promise<string> => {
  const params = {
    TableName,
    Key: marshall({ id: TaskId, name }),
  }

  await db.updateItem(params)
  return "Task updated successfully"
}

export const GetTodayTask = async (): Promise<any> => {
  const today = moment().format("DD")
  console.log("today ====>", today)
  const params = {
    TableName,
  }

  const { Items: items } = await db.scan(params)
  const todayTasks = items.filter((task) => {
    const taskDate = moment(task.date.S).format("DD")
    console.log("task ==> ", taskDate)
    return taskDate == today
  })
  return todayTasks
}

export const GetTaskByDate = async (day): Promise<any> => {
  const params = {
    TableName,
  }

  const { Items: items } = await db.scan(params)

  const dateTasks = items.filter((task) => {
    const taskDate = moment(task.date.S)
    return taskDate.format("DD") == day
  })
  console.log(dateTasks)

  return dateTasks
}
