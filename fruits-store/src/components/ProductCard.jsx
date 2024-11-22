import { IndianRupee } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ img, price, name, rating = 4 }) => {
    const [quantity, setQuantity] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    const handleAddToCart = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
    };

    const renderStars = () => {
        const totalStars = 5;
        return Array.from({ length: totalStars }, (_, i) => (
            <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill={i < rating ? "#fc0" : "#e9e9e9"}
                viewBox="0 0 24 24"
                className="h-4 w-4"
            >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.162L12 18.896l-7.334 3.864 1.4-8.162L.132 9.21l8.2-1.192L12 .587z" />
            </svg>
        ));
    };
    const navigate=useNavigate();

    const handleRedirect=()=>{
        navigate("/location")
    }

    return (
        <div className="relative flex w-[24%] p-4 mt-1 flex-col rounded-xl bg-lime-100 text-gray-700 shadow-md">
            {/* Product Image */}
            <div className="relative mx-4 -mt-0 h-32 overflow-hidden rounded-xl bg-gradient-to-r from-lime-300 to-lime-500">
                <img src={img} alt={name} className="h-full w-full object-cover" />
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h5 className="mb-1 block font-sans text-lg font-semibold text-blue-gray-900">
                    {name}
                </h5>
                <p className="font-sans leading-relaxed text-inherit font-bold flex items-center text-lg">
                    <IndianRupee className="h-4 w-4" /> {price * quantity}
                </p>
                <div className="flex items-center mt-1">{renderStars()}</div>
            </div>

            {/* Quantity Label */}
            <div className="px-4 pt-2 text-sm font-semibold text-blue-gray-900">
                Quantity:
            </div>

            {/* Increment and Decrement Section */}
            <div className="flex items-center justify-between p-4">
                <button
                    onClick={decrement}
                    className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 font-bold text-base hover:bg-gray-300"
                >
                    -
                </button>
                <span className="text-lg font-semibold">{quantity} kg</span>
                <button
                    onClick={increment}
                    className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-gray-700 font-bold text-base hover:bg-gray-300"
                >
                    +
                </button>
            </div>

            {/* Buttons Section */}
            <div className="p-4 pt-0 w-full space-y-2">
                <button
                    type="button"
                    className="w-full rounded-lg bg-lime-600 py-2 px-4 text-xs font-bold uppercase text-white shadow-md hover:shadow-lg focus:opacity-85"
                    onClick={handleRedirect}   >
                    Buy Now
                </button>
                <button
                    onClick={handleAddToCart}
                    type="button"
                    className="w-full rounded-lg bg-blue-600 py-2 px-4 text-xs font-bold uppercase text-white shadow-md hover:shadow-lg focus:opacity-85"
                >
                    Add to Cart
                </button>
            </div>

            {/* Popup Notification */}
            {showPopup && (
                <div className="absolute top-4 right-4 z-50 rounded-md bg-green-500 text-white px-3 py-1 shadow-lg">
                    Added to cart!
                </div>
            )}
        </div>
    );
};

export default ProductCard;