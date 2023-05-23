import { createBrowserRouter } from "react-router-dom";
import LearnMore from "./LearnMore";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/learnmore", element: <LearnMore /> },
]);

export default router;
