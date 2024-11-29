import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Rotlayout from "./Rotlayout/Rotlayout";
import Home from "./pages/Home/Home";
import LOgin from "./components/LOgin";
import Profil from "./components/Profil/Profil";
import Allnewcard from "./pages/Home/Allnewcard";
import Detals from "./pages/Derails/Deatals";
import Chat from "./components/Chat";

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LOgin />,
    },
    {
      path: "profil",
      element: <Profil />,
    },
    {
      path: "chat",
      element: <Chat />,
    },
    {
      path: "details/:id",
      element: <Detals />,
    },
    {
      path: "/allnewCard/details/:id",
      element: <Detals />,
    },
    {
      path: "/",
      element: <Rotlayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "allnewCard",
          element: <Allnewcard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
