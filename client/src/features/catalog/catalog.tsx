import { useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import { Button } from "@mui/material";
import ProductList from "./ProductList";


export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(reponse => reponse.json())
            .then(data => setProducts(data))

    }, [])
    function AddProduct() {
        setProducts(prevState => [...prevState,
        {
            id: prevState.length + 101,
            name: 'product' + (prevState.length + 1),
            price: (prevState.length * 100) + 100,
            brand: 'some brand',
            type: 'some type',
            description: 'some descreption',
            pictureUrl: 'http://picsum.photos/200',
            quantityInStock: 23

        }]);
    }

    return (
        <>
            <ProductList products={products} />
            <Button variant='contained' onClick={AddProduct}>Add product</Button>
        </>

    );
}