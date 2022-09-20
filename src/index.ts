import express from "express";
import { routes } from "./routes";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(routes)


app.listen(port, () => console.log("Express server listening on port 3000"))