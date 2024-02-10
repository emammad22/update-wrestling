import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<div>I am index page</div>}>
      <Route path="/home" element={<div>Hello, World</div>} />
    </Route>
  )
);

export { router };
