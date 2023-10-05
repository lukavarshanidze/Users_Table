"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/pages/slices/userSlice";
import { AppDispatch, RootState } from "@/pages/store/store";
import Pegination from "../Pegination/Pegination";
import DeleteUserModal from "@/pages/utils/DeleteUserModal";
import TableHeader from "@/pages/utils/TableHeader";
import EditUserModal from "@/pages/utils/EditUserModal";
import TableBody from "@/pages/utils/TableBody";
import { CloseModal } from "@/pages/utils/CloseModal";

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { entities, loading } = useSelector((state: RootState) => state.user);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  let currentUsers = entities.slice(indexOfFirstUser, indexOfLastUser);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers, dispatch]);

  CloseModal();
  return (
    <div className="relative w-1/1 mx-auto  flex flex-col">
      <table className="text-center">
        <TableHeader />
        <TableBody currentUsers={currentUsers} />
      </table>
      <Pegination itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} />
      <DeleteUserModal />
      <EditUserModal />
    </div>
  );
}
export default Home;
