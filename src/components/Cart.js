import React from "react";
import { X } from "lucide-react";

const Cart = ({ isOpen, toggleMenu, cartItems = [], isLoggedIn }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleMenu}
    >
      <div
        className={`fixed right-0 top-0 w-80 lg:w-96 bg-base-100 h-full shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } rounded-tl-lg rounded-bl-lg flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Close Button */}
        <div className="p-4 text-lg font-bold text-center border-b flex items-center justify-between">
          <span>Shopping Cart</span>
          <button
            onClick={toggleMenu}
            className="btn btn-ghost p-1 text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 p-4 space-y-2 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>{item.name}</div>
                <div>{item.quantity} x ${item.price}</div>
              </div>
            ))
          )}
        </div>

        {/* Total and Checkout */}
        <div className="p-4 space-y-2 border-t flex-shrink-0">
          <div className="flex justify-between">
            <span>Total:</span>
            <span>
              $
              {cartItems.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </span>
          </div>
          <button className="btn btn-primary w-full">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
