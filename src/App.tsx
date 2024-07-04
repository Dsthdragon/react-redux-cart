import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Cart from "./pages/cart";
import ErrorPage from "./pages/error";
import Header from "./components/header";

const router = createBrowserRouter([{ path: "*", element: <Root /> }]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={router} />;
}

function Root() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}
