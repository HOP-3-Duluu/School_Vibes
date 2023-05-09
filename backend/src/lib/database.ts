import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { default_region } from "./constant"

export const db = new DynamoDB({
  region: default_region,
})
