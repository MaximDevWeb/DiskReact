import { createBrowserRouter } from "react-router-dom";
import site from "./routes/site";
import auth from "./routes/auth";
import dashboard from "./routes/dashboard";

const router = createBrowserRouter([...site, ...auth, ...dashboard]);

export default router;
