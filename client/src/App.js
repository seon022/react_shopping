import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductInfo from "./component/ProductInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="App">
                <Root />
            </div>
        ),
        errorElement: (
            <div className="App">
                <NotFound />
            </div>
        ),
        children: [
            { index: true, element: <Home /> },
            { path: "/product", element: <Product /> },
            { path: "/product/:id", element: <ProductInfo /> },
        ],
    },
    {
        path: "/product",
        element: <Product />,
        errorElement: <NotFound />,
    },
]);

function App() {
    return (
        <RouterProvider router={router}>
            <div className="App"></div>
        </RouterProvider>
    );
}

export default App;
