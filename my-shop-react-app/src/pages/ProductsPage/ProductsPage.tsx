import React, { useEffect, useState } from "react";
import { URL } from "../../URL";
import axios from "axios";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useCard } from "../../context/CardContext";
import TemporaryDrawer from "../../component/TemporaryDrawer";


const ProductsPage: React.FC = () => {
    const [Products, setProducts] = useState<Product[]>();
    const [isLoading, setLoading] = useState(true);
    const [Category, setCategory] = useState<string>();
    const CardContext = useCard();
    console.log(CardContext);

    const getProducts = async () => {
        try {
            const response = await axios.get(URL.GET_PRODUCT_URL);
            setProducts(response.data);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
        setCategory('All');
    }, []); // Add [] to ensure useEffect runs only once

    if (!Products || Products.length === 0) {
        return (
            <div className='alert alert-warning' role='alert' >
                Error
            </div>
        )
    }

    const handleAddToCart = (product: Product) => {
        console.log(product);
        CardContext.addToCard(product);
    }


    // Function to get unique categories from products
    const getUniqueCategories = () => {
        const uniqueCategories: string[] = [];
        Products.forEach((product) => {
            if (!uniqueCategories.includes(product.category)) {
                if(product.category)
                    uniqueCategories.push(product.category);
            }

        });
        console.log( "Unique :", uniqueCategories);
        return uniqueCategories;
    };
    return (
        <div>
            <div className="container py-5 " >

                <h1 className="text-center mb-4">Products</h1>
                <p className="text-center">Explore our wide range of products below:</p>
                {
                    isLoading ? (<div className='text-center'>
                        <div className='spinner-border text-success' role='status'>
                        </div>

                    </div>) : null
                }


                <button className="btn btn-light">
                <TemporaryDrawer onSelectCategory={
                    (category) =>{
                        console.log(Category);
                        setCategory(category);
                        console.log(Category);
                    }
                } />
                </button>
                <hr />
                
                {
                    
                    Category == 'All' ? (
                        getUniqueCategories().map((category) => (
                            <div key={category}>
                                <h2>{category}</h2>
                                <Row xs={1} md={4} className="g-4">
                                    {Products
                                        .filter((product) => product.category == category)
                                        .map((product) => (
                                            <Col key={product.id} >
                                                
                                                <Card className="h-100 shadow" style={{ background: "#fafafa" }}>
                                                    <Card.Img
                                                        variant="top"
                                                        src={product.imgSrc}
                                                        alt={product.title}
                                                        height={280}
                                                    />
                                                    <Card.Body>
                                                        <Card.Title>{product.title}</Card.Title>
                                                        <Button
                                                            className="badge rounded-pill text-bg-primary"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#descriptionCollapse${product.id}`}
                                                        >
                                                            Read description
                                                        </Button>
                                                        <div
                                                            className="collapse"
                                                            id={`descriptionCollapse${product.id}`}
                                                        >
                                                            <Card.Text>{product.description}</Card.Text>
                                                        </div>
                                                        <p>{product.title} Rs</p>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Button
                                                            variant="primary"
                                                            className="me-2"
                                                            onClick={() => handleAddToCart(product)}>
                                                            Add to Cart
                                                        </Button>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        ))}
                                </Row>
                            </div>
                        ))
                    ) : (
                        <div >
                            <h2>{Category}</h2>
                            <Row xs={1} md={4} className="g-4">
                                {Products
                                    .filter((product) => product.category == Category)
                                    .map((product) => (
                                        <Col key={product.id} >
                                            <Card className="h-100 shadow" style={{ background: "#fafafa" }}>
                                                <Card.Img
                                                    variant="top"
                                                    src={product.imgSrc}
                                                    alt={product.title}
                                                    height={280}
                                                />
                                                <Card.Body>
                                                    <Card.Title>{product.title}</Card.Title>
                                                    <Button
                                                        className="badge rounded-pill text-bg-primary"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={`#descriptionCollapse${product.id}`}
                                                    >
                                                        Read description
                                                    </Button>
                                                    <div
                                                        className="collapse"
                                                        id={`descriptionCollapse${product.id}`}
                                                    >
                                                        <Card.Text>{product.description}</Card.Text>
                                                    </div>
                                                    <p>{product.title} Rs</p>
                                                </Card.Body>
                                                <Card.Footer>
                                                    <Button
                                                        variant="primary"
                                                        className="me-2"
                                                        onClick={() => handleAddToCart(product)}>
                                                        Add to Cart
                                                    </Button>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    ))}
                            </Row>
                        </div>

                    )

                }

            </div>
        </div>
    )
}

export default ProductsPage;
