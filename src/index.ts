import express, { application } from "express";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes)


app.listen(3000, () => console.log("Express server listening on port 3000"))