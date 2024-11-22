import React from "react";

const Footer = () => {
  return (
    <footer className="bg-lime-300 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Vegefoods Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Fresh Fruits</h2>
          <p className="text-gray-600 text-sm">
            Far far away,<br></br> behind the word mountains<br/>from the countries.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Menu Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Menu</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-900">Shop</a></li>
            <li><a href="#" className="hover:text-gray-900">About</a></li>
            <li><a href="#" className="hover:text-gray-900">Journal</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Help</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="#" className="hover:text-gray-900">Shipping Information</a></li>
            <li><a href="#" className="hover:text-gray-900">Returns & Exchange</a></li>
            <li><a href="#" className="hover:text-gray-900">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-900">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Have a Questions?</h2>
          <ul className="space-y-4 text-gray-600 text-sm">
            <li>
              <i className="fas fa-map-marker-alt mr-2"></i>
             JNTU Nachupally, Jagtial(Dist), Telangana State.
            </li>
            <li>
              <i className="fas fa-phone mr-2"></i>
              9391607599
            </li>
            <li>
              <i className="fas fa-envelope mr-2"></i>
              info@jntu.com
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;