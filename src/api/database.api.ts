import { Client, TablesDB } from "appwrite";

const client = new Client()
	.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your API Endpoint
	.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID); // Your project ID

const db = new TablesDB(client);

const getData = async () => {
	const result = await db.listRows({
		databaseId: import.meta.env,
	});
};
