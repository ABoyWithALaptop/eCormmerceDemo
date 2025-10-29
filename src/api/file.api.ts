import { ImageFormat, ImageGravity } from "appwrite";
import { ID, storage } from "./appwrite";
import * as z from "zod";

const getFilePreviewSchema = z.object({
	fileId: z.string(),
	width: z.int().optional(),
	height: z.int().optional(),
	gravity: z.enum(ImageGravity).optional().default(ImageGravity.Center),
	quality: z.int().min(0).max(100).optional(),
	borderWidth: z.int().min(0).max(100).optional(),
	borderColor: z.string().optional(),
	borderRadius: z.int().min(0).max(4000).optional(),
	opacity: z.float32().min(0).max(1).optional(),
	rotation: z.int().min(-360).max(360).optional(),
	background: z.string().max(6).optional(),
	output: z.enum(ImageFormat).optional(),
	token: z.string().optional(),
});

type getFilePreviewProps = z.infer<typeof getFilePreviewSchema>;

const createFile = async (file: File, permissions?: string[]) => {
	try {
		const res = await storage.createFile({
			bucketId: import.meta.env.VITE_APPWRITE_IMG_BUCKET_ID,
			fileId: ID.unique(),
			file: file,
			permissions: permissions,
		});
		console.log("result calling createFile api: ", res);
	} catch (err) {
		console.log("error when calling createFile: ", err);
	}
};

const getFilePreview = async (props: getFilePreviewProps) => {
	try {
		const getFileProps = getFilePreviewSchema.parse(props);
		const result = await storage.getFilePreview({
			bucketId: import.meta.env.VITE_APPWRITE_IMG_BUCKET_ID,
			...getFileProps,
		});
		console.log("result calling getFilePreview api: ", result);
	} catch (error) {
		console.log("error when calling getFilePreview: ", error);
	}
};

export { createFile, getFilePreview };
