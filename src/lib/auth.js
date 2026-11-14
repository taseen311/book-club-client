import { jwt } from "better-auth/plugins";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_DB_URI);

const db = client.db("book-club");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),

    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    },

    baseURL: process.env.BETTER_AUTH_URL,
    plugins: [jwt()],
});
