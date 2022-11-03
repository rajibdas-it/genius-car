import React, { useEffect, useState } from "react";

const TableRow = ({ order, handleDelete, handleStatusUpdate }) => {
  const { _id, service, serviceName, price, customer, phone, status } = order;
  const [orderService, setOrderService] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/services/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderService(data));
  }, [service]);
  //   /orders/:id
  return (
    <tr>
      <th>
        <label>
          <button className="btn btn-ghost" onClick={() => handleDelete(_id)}>
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              {orderService?.img && (
                <img
                  src={orderService?.img}
                  alt="Avatar Tailwind CSS Component"
                />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{customer}</div>
            <div className="text-sm opacity-50">{phone}</div>
          </div>
        </div>
      </td>
      <td>
        {serviceName}
        <br />
        <span className="badge badge-ghost badge-sm">Price: ${price}</span>
      </td>
      <td>Purple</td>
      <th>
        <button
          className="btn btn-ghost btn-xs"
          onClick={() => handleStatusUpdate(_id)}
        >
          {status}
        </button>
      </th>
    </tr>
  );
};

export default TableRow;
