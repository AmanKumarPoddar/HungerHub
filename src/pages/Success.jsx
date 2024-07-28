import React from "react";
import { PropagateLoader } from "react-spinners";
import { useState, useEffect } from "react";

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader />
      ) : (
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Order Successful!
          </h2>
          <p>Your order has been placed successfully</p>
        </div>
      )}
    </div>
  );
};

export default Success;
