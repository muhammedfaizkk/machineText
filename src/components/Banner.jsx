import React from "react";

export default function Banner() {
    return (
        <section className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl mx-4 mt-6 p-4 flex flex-col md:flex-row items-center justify-between shadow-md">
            <div>
                <h1 className="text-lg md:text-2xl text-[#3A4980] font-bold">
                    Grab Upto 50% Off On
                </h1>
                <p className="text-[#3A4980] text-base md:text-lg">
                    Selected Headphones
                </p>
                <button className="mt-3 bg-[#3A4980] hover:bg-[#2c3666] text-white transition px-5 py-2 rounded-full text-sm font-medium shadow-sm">
                    Buy Now
                </button>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <img
                    src="/assets/banner.png"
                    alt="Headphone Banner"
                    className="w-48 md:w-56 object-contain"
                />
            </div>
        </section>
    );
}
