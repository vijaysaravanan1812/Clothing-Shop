import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import ProductPage from '../ProductPage/ProductPage';
import axios from 'axios';
import { URL } from "../../URL"

const ProductSlide: React.FC = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [Products, setProducts] = useState<Product[]>();

    const getProducts = async () => {
        try {
            const response = await axios.get(URL.GET_PRODUCT_URL);
            const updatedProducts = response.data;
            setProducts(updatedProducts);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []); // Add [] to ensure useEffect runs only once

    if (!Products || Products.length === 0) {
        return (
            <div className='alert alert-warning' role='alert' >
                Error
            </div>
        )
    }

    const displayProduct = Products.map((product) => {
        return (
            <ProductPage
                key={product.id}
                Tittle={product.title}
                ImageSource={product.imgSrc}
                Description={product.description}
            />
        )
    })


    return (
        <>
            <Carousel responsive={responsive}>
                {displayProduct}
            </Carousel>
         
        </>


    );
}

export default ProductSlide;
