import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentUserId } from "../slices/currentUserSlice";
import { clearEditUserData } from "../slices/editUserSlice";

const DeleteUserModal = () => {
  const dispatch = useDispatch();
  const currentUserId = useSelector((state: any) => state.currentUser);

  const closeModal = () => {
    dispatch(clearCurrentUserId());
    dispatch(clearEditUserData());
    document.getElementById("id02")!.style.display = "none";
    document.getElementById("id01")!.style.display = "none";
  };
  return (
    <div
      className="absolute bottom-36 left-0 right-0 w-40 mx-auto bg-green-500 text-center"
      style={{ display: "none" }}
      id="id01"
    >
      <div className="">
        <span onClick={closeModal} className="flex justify-end p-1 bg-blue-500">
          &times;
        </span>
        <h2>Delete User?</h2>
        <div className="flex justify-between">
          <form
            action={`http://localhost:8080/api/delete/${currentUserId}`}
            method="post"
          >
            <button type="submit">Delete</button>
          </form>
          <button onClick={closeModal}>Cancel</button>§
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
