import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/products.js";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <div>
            <h1>전체</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} />
                            <h3 className="product_title">{product.title}</h3>
                            <p className="product_price">${product.price}</p>
                            <p className="viewDetail">상세 보기</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
