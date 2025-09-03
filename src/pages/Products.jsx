import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";

export default function Products() {
    return (
        <div className="min-h-screen flex flex-col">
          
            <Banner />
            <main className="flex-1 container mx-auto px-4 py-8">
                <ProductGrid />
            </main>
            
        </div>
    );
}
