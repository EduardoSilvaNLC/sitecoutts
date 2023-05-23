import { createBrowserRouter } from "react-router-dom";
import LearnMore from "./LearnMore";
import HomePage from "./HomePage";
import Learn from "../components/Learn";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/learn", element: <LearnMore /> },
]);

export default router;
