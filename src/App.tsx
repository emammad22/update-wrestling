import { RouterProvider } from "react-router-dom";
import { router } from "./routes";


export default function App() {

  return (
    <div className="p-10">
      <RouterProvider router={router} />
    </div>
  )
}
