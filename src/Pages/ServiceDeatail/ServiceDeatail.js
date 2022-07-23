import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDeatail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <h2>You are about to to detail {service.name} </h2>

      <Link to="/checkout">
        <button>Proceed Checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDeatail;
