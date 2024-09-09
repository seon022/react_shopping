import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/products.js";
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getProducts = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchProducts();
            setProducts(data);
        } catch (err) {
            setError("상품을 불러오는 중 오류가 발생했습니다.");
            console.error("상품을 불러오는 중 오류 발생:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    if (loading) {
        return <div>로딩 중...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>전체</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.title} />
                            <h3 className="product_title">{product.title}</h3>
                            <p className="product_price">
                                ${product.price.toFixed(2)}
                            </p>
                            <p className="viewDetail">상세 보기</p>
                        </Link>
                        <button className="cartBtn">
                            cart <FaShoppingCart />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
