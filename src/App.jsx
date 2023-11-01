import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home/index.element";
import Groups from "./pages/Group/index.element";
import { NotesContextProvider } from "./store/notesContext";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "groups/:id", element: <Groups /> },
    ],
  },
]);

function App() {
  return (
    <NotesContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </NotesContextProvider>
  );
}

export default App;
