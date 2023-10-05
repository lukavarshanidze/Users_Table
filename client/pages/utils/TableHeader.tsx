import React from "react";

const TableHeader = () => {
  return (
    <thead className="">
      <tr className="bg-green-500 ">
        <th className="w-1/4 ">User Name</th>
        <th className="w-1/4">User Email</th>
        <th className="w-1/4">User City</th>
        <th className="w-1/4">Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
