import { Client, Account, Avatars, TablesDB, Storage } from 'react-native-appwrite'

export const APPWRITE_ENDPOINT = 'https://sgp.cloud.appwrite.io/v1'
export const PROJECT_ID = '6a86e954000af4243ffa'

export const client = new Client()
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(PROJECT_ID)
    .setPlatform('dev.jaykay.exptopup');

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new TablesDB(client);
export const storage = new Storage(client);