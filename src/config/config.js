export const PORT = 8080;
export const MONGO_URI =
	"mongodb+srv://agustin:1234@cluster0.jm6lw.mongodb.net/datos";
export const dbConnectionType = process.env.MONGO_URI ? "Atlas" : "Local";
export const SECRET_KEY = process.env.SECRET_KEY || 1234;
export const saltRounds = 10;
export const CLIENT_ID_GOOGLE = process.env.CLIENT_ID_GOOGLE;
export const CLIENT_SECRET_GOOGLE = process.env.CLIENT_SECRET_GOOGLE;
