import { Application } from "express";
import VersionRouter from "./VersionRoutes";

const AddApplicationRoutes = (app: Application) => {
    app.use("/version",VersionRouter);
}

export default AddApplicationRoutes;