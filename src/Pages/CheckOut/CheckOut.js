import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);
  const handleSubmitOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;
    const status = "Pending";

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      email,
      phone,
      message,
      status,
    };
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Your order placed successfully. Thank you.");
          form.reset();
        }
      });
  };
  return (
    <div className="my-10">
      <form onSubmit={handleSubmitOrder}>
        <div className="my-5 text-center">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <h1 className="text-3xl">Price: {price}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            name="phone"
            placeholder="phone"
            className="input input-bordered w-full "
          />
          <input
            type="text"
            defaultValue={user?.email}
            className="input input-bordered w-full "
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full my-10 rounded-md"
          placeholder="message"
        ></textarea>
        <input className="btn rounded-md" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default CheckOut;
