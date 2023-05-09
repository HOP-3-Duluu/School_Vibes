import { S3 } from "@aws-sdk/client-s3"
import { default_region } from "./constant"
export const s3 = new S3({
  region: default_region,
})
