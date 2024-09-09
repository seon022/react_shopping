import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductInfo from "./component/ProductInfo";
import "./App.css";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "product", element: <Product /> },
            { path: "cart", element: <Cart /> },
            { path: "product/:id", element: <ProductInfo /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
