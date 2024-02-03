import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<>Hello It is Root</>}>
      <Route></Route>
    </Route>,
  ),
);

export { router };
