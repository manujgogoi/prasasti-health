import React from "react";

const Card = ({ title, address, phone, whatsapp, email, website }) => {
  return (
    <div className="bg-gray-200 w-96 rounded-xl shadow-lg m-5 p-3">
      <h3 className="text-xl font-semibold text-green-700">{title}</h3>
      <div>
        {address ? (
          <>
            <h4 className="text-lg underline decoration-black">Address</h4>
            <address>{address}</address>
          </>
        ) : (
          ""
        )}
        {whatsapp ? (
          <>
            <h4 className="text-lg">WhatsApp</h4>
            <p>{whatsapp}</p>
          </>
        ) : (
          ""
        )}
        <p>Phone No. {phone}</p>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
};

export default Card;
