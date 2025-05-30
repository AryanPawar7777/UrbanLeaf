import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address:'',
    city: '', 
    zip: ''
}) 

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()

  const handleOrder = () =>{
    const newOrder = {
        products:cart.products,
        orderNumber : "12344",
        shippingInformation : shippingInfo, 
        totalPrice: cart.totalPrice
    }
    setOrder(newOrder)
    navigate('/order-confirmation')
  }
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>

      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-10 mt-8">
        {/* Left Side - Forms */}
        <div className="md:w-2/3">
          {/* Billing */}
          <div className="border p-4 mb-6 rounded">
            <div
              className="flex items-center justify-between cursor-pointer mb-2"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold">Billing Information</h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Phone #"
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            </div>
          </div>

          {/* Shipping */}
          <div className="border p-4 mb-6 rounded">
            <div
              className="flex items-center justify-between cursor-pointer mb-2"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold">Shipping Information</h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  placeholder="Enter City Name"
                  className="w-full px-3 py-2 border rounded"
                  onChange ={(e) => setShippingInfo({...shippingInfo, city: e.target,value})}
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  placeholder="Enter ZipCode"
                  className="w-full px-3 py-2 border rounded"
                   onChange ={(e) => setShippingInfo({...shippingInfo, zip: e.target,value})}
                />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="border p-4 mb-6 rounded">
            <div
              className="flex items-center justify-between cursor-pointer mb-2"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold">Payment Information</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2">
                  Cash on Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>

              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter the Card No."
                      className="border p-2 w-full rounded bg-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Holder name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card Holder Name"
                      className="border p-2 w-full rounded bg-white"
                      required
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded bg-white"
                        required
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 w-full rounded bg-white"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-8 md:mt-0">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div>
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600 text-sm">
                      ₹{product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-right font-semibold text-gray-800 whitespace-nowrap">
                  ₹{(product.price * product.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Price:</span>
              <span>₹{cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
