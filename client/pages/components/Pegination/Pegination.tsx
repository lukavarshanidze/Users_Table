import { RootState } from "@/pages/store/store";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Pegination = ({ itemsPerPage, setCurrentPage}: any) => {
  const { entities, loading } = useSelector((state: RootState) => state.user);

  const paginate = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination mx-auto w-40 flex justify-between gap-1">
      {Array.from({ length: Math.ceil(entities.length / itemsPerPage) }).map(
        (_, index) => (
          <button
            className="bg-blue-500 w-20"
            key={index + 1}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  );
};
export default Pegination;
