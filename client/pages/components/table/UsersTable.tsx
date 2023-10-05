"use client";
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/pages/slices/userSlice";
import { AppDispatch, RootState } from "@/pages/store/store";
import { setEditUserData } from "@/pages/slices/editUserSlice";
import {
  setCurrentUserId,
  clearCurrentUserId,
} from "@/pages/slices/currentUserSlice";
import { clearEditUserData } from "@/pages/slices/editUserSlice";
import Pegination from "../Pegination/Pegination";
import { openUserInNewWindow } from "../openUserInNew/openInNewWindow";
import { CloseModal } from "@/pages/utils/CloseModal";
import DeleteUserModal from "@/pages/utils/DeleteUserModal";

// Define the Home component
function Home() {
  // Redux related
  const dispatch = useDispatch<AppDispatch>();
  const { entities, loading } = useSelector((state: RootState) => state.user);
  const currentUserId = useSelector((state: any) => state.currentUser);
  const editUserData = useSelector((state: any) => state.editUser);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastUser = currentPage * itemsPerPage;
  const indexOfFirstUser = indexOfLastUser - itemsPerPage;
  let currentUsers = entities.slice(indexOfFirstUser, indexOfLastUser);

  // Fetch users on component mount
  useEffect(() => {
    dispatch(fetchUsers());
  }, [fetchUsers, dispatch]);

  // Edit user function
  const editUser = (event: any, user: any) => {
    event.stopPropagation();
    dispatch(setCurrentUserId(user.id));
    dispatch(setEditUserData(user));
    document.getElementById("id01")!.style.display = "none";
    document.getElementById("id02")!.style.display = "block";
  };

  // Open modal function
  const openModal = (e, user: any) => {
    e.stopPropagation();
    dispatch(setCurrentUserId(user.id));
    document.getElementById("id01")!.style.display = "block";
    document.getElementById("id02")!.style.display = "none";
  };

  // Close modal function
  const closeModal = () => {
    dispatch(clearCurrentUserId());
    dispatch(clearEditUserData());
    document.getElementById("id02")!.style.display = "none";
    document.getElementById("id01")!.style.display = "none";
  };

  let ref = useRef();
  // Event listener for closing modals when clicking outside
  CloseModal();

  // Render the component
  return (
    <div className="relative w-1/1 mx-auto  flex flex-col">
      {/* Table for user data */}
      <table className="text-center">
        {/* Table header */}
        <thead className="">
          <tr className="bg-green-500 ">
            <th className="w-1/4 ">User Name</th>
            <th className="w-1/4">User Email</th>
            <th className="w-1/4">User City</th>
            <th className="w-1/4">Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody className="border-solid ">
          {loading ? (
            <tr>
              <td>Loading...</td>
            </tr>
          ) : (
            currentUsers.map((user: any) => (
              <tr
                className=""
                key={user.id}
                onClick={() => openUserInNewWindow(user)}
              >
                <td className="w-1/4">{user.name}</td>
                <td className="w-1/4">{user.email}</td>
                <td className="w-1/4">{user.city}</td>
                <td className="flex justify-around mt-3">
                  <button
                    onClick={(e) => {
                      editUser(e, user);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(e, user);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <Pegination
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
      />

      <DeleteUserModal />

      <div
        style={{ display: "none" }}
        id="id02"
        className="absolute bottom-36 left-0 right-0 w-72 mx-auto bg-green-500"
      >
        <div className="w3-modal-content w3-card-4">
          <header className="">
            <span
              onClick={closeModal}
              className="text-2xl w-8 flex justify-center bg-blue-500"
            >
              &times;
            </span>
            <h2 className="text-center">Edit User </h2>
          </header>
          <div className="w3-container">
            <form
              action={`http://localhost:8080/api/update/${currentUserId}`}
              method="post"
              className="flex flex-col gap-2"
            >
              <div className="flex gap-2">
                <label className="w-12" id="name">
                  Name:
                </label>
                <input type="text" name="name" id="name" required />
              </div>
              <div className="flex gap-2">
                <label className="w-12" id="email">
                  Email:{" "}
                </label>
                <input type="email" name="email" id="email" required />
              </div>
              <div className="flex gap-2">
                <label className="w-12" id="city">
                  City:
                </label>
                <input type="text" name="city" id="city" required />
              </div>
              <button className="bg-blue-500 h-8 " type="submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
