import express from "express";
import { routes } from "./routes";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes)


app.listen(port, () => console.log("Express server listening on port 3000"))