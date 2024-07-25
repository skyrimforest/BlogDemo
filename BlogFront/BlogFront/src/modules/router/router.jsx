import { useEffect } from "react";
import { useNavigate, createBrowserRouter } from "react-router-dom";
import Blog from "../../pages/Blog/Blog";
import Login from "../../pages/Login/Login";

const Redirect = () => {
  const navigate = useNavigate();
  //组件挂载时进行挂载
  useEffect(() => {
    navigate("/Login", { replace: true });
  }, []);

  return <Login />;
};

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <Redirect />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
]);

export default customRouter;
