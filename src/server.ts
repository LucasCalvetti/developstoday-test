import express from "express";
import "dotenv/config";
import countryRoutes from "./routes/country-routes.ts";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
app.use(cors({ origin: [`http://localhost:${port}`], methods: "GET" }));
app.use(express.json());

app.use("/api", countryRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
