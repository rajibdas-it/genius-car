import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Router/Routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto" data-theme="cupcake">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
