import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-500">Service</p>
        <h2 className="text-4xl font-semibold my-5">Our Service Area</h2>
        <p className="text-gray-700">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
    </div>
  );
};

export default Services;
