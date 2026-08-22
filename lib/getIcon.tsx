import { APPWRITE_ENDPOINT, PROJECT_ID } from '../lib/appwrite'

const BUCKET_ID = '6a8920d40012967d3c35'

export function getIcon(fileId: string) {
    return `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${fileId}/preview?width=400&height=400&quality=80&project=${PROJECT_ID}`
}