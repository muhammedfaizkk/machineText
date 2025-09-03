import React from "react";

export default function Banner() {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mx-4 mt-6 p-6 flex flex-col md:flex-row items-center justify-between">
            <div>
                <h2 className="text-xl font-semibold">Grab Upto 50% Off On</h2>
                <p className="text-gray-600 text-lg">Selected Headphones</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full">
                    Buy Now
                </button>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6">
                <img
                    src="/assets/banner.png" // Replace with your actual image path
                    alt="Headphone Banner"
                    className="w-64 md:w-80 object-contain"
                />
            </div>
        </section>
    );
}
