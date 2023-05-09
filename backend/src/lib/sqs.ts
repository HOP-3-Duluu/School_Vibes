import { SQS } from "@aws-sdk/client-sqs"
import { default_region } from "./constant"

export const sqs = new SQS({
  region: default_region,
})
