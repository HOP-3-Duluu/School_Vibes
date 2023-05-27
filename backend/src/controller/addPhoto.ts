import { s3 } from "../lib/s3"
import { GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { v4 as uuidv4 } from "uuid"
export const CreateContent = async (event: any) => {
  const { base: base64Data } = JSON.parse(event.body)
  const bucketParams = {
    Bucket: "demoday2023",
    Key: `${uuidv4().substring(0, 6)}.png`,
    Body: Buffer.from(base64Data, "base64"),
    ContentType: "image/png",
    ContentEncoding: "base64",
  }
  try {
    await s3.putObject(bucketParams)
    try {
      const command = new GetObjectCommand(bucketParams)
      const signedUrl = await getSignedUrl(s3, command)
      return signedUrl
    } catch (err) {
      throw err
    }
  } catch (error) {
    throw error
  }
}
