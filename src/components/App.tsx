import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "../routes/Root";
import { FormScreen } from "../routes/FormScreen";
import { ToDoListScreen } from "../routes/ToDoListScreen";
import { CropImageScreen } from "../routes/CropImageScreen";
import { ROUTES } from "../constants";

const router = createBrowserRouter([
  {
    path: ROUTES.root,
    element: <Root />,
    children: [
      {
        path: ROUTES.form,
        element: <FormScreen />,
      },
      {
        path: ROUTES.to_do_list,
        element: <ToDoListScreen />,
      },
      {
        path: ROUTES.crop_image,
        element: <CropImageScreen />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
