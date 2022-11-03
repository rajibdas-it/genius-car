import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import TableRow from "./TableRow";

const Orders = () => {
  //   const location = useLocation();
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  //   const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to cancel this order?");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Deleted");
            const remaining = orders.filter((odr) => odr._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Approved your order");
          window.location.reload();
          //   const pendingOrder = orders.filter((ord) => ord._id !== id);
          //   const confirmOrder = orders.filter((ord) => ord._id === id);
          //   //   confirmOrder.status = "Approved";
          //   const newOrders = [...pendingOrder, confirmOrder];
          //   setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h1 className="text-3xl text-center">You have {orders?.length} orders</h1>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <TableRow
                  key={order?._id}
                  order={order}
                  handleDelete={handleDelete}
                  handleStatusUpdate={handleStatusUpdate}
                ></TableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
