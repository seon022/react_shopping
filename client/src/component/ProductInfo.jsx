import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/products";

const ProductInfo = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const data = await fetchProductById(id);
            setProduct(data);
        };
        getProduct();
    }, [id]);

    if (!product) return <div>로딩 중...</div>;

    return (
        <div className="infoWrap">
            <div className="productInfo">
                <h1 className="infoTitle">{product.title}</h1>
                <div className="infoImgWrap">
                    <img src={product.image} alt={product.title} />
                </div>
                <div>
                    <p>가격: ${product.price}</p>
                    <p>설명: {product.description}</p>
                </div>

                {/* <button>장바구니에 추가</button> */}
            </div>
        </div>
    );
};

export default ProductInfo;
