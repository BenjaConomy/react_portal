import { useState, useEffect } from "react";
import { getProducts } from "../services/products_service";
import ErrorComponent from "./error_component";
import LoadingComponent from "./loading_component";
import ProductCard from "./product_component";

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
}

const ProductsListComponent = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.log('aquiiii');
                setError(true);
                setLoading(false);
            });
    }, []);



    


    if (loading) {
        return <LoadingComponent />;
    }

    if (loading == false && error == true) {
        return <ErrorComponent />;
    }else{

    const toggleSortOrder = () => {
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };

    var sortedProducts: any[] = [];


        sortedProducts = [...products].sort((a, b) => {
            if (sortOrder === "asc") {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        return (
            <div>
                <button onClick={toggleSortOrder}>
                    {sortOrder === "asc" ? "De mayor a menor" : "De menor a mayor"}
                </button>
                <ul>
                    {sortedProducts.map((product) => (
                        <ProductCard image={product.image} title={product.title} price={product.price} />
                    ))}
                </ul>
            </div>
        );
    }


};

export default ProductsListComponent;
