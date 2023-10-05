import React from "react";
import { clearCurrentUserId } from "../slices/currentUserSlice";
import { clearEditUserData } from "../slices/editUserSlice";
import { useDispatch, useSelector } from "react-redux";

const EditUserModal = () => {
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
  );
};

export default EditUserModal;
