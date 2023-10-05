import React, { useState } from "react";
import { openUserInNewWindow } from "../components/openUserInNew/openInNewWindow";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUserId } from "../slices/currentUserSlice";
import { setEditUserData } from "../slices/editUserSlice";
import { RootState } from "../store/store";

const TableBody = ({ currentUsers }: any) => {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state: RootState) => state.user);

  const editUser = (event: any, user: any) => {
    event.stopPropagation();
    dispatch(setCurrentUserId(user.id));
    dispatch(setEditUserData(user));
    document.getElementById("id01")!.style.display = "none";
    document.getElementById("id02")!.style.display = "block";
  };

  const openModal = (e, user: any) => {
    e.stopPropagation();
    dispatch(setCurrentUserId(user.id));
    document.getElementById("id01")!.style.display = "block";
    document.getElementById("id02")!.style.display = "none";
  };


  return (
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
  );
};

export default TableBody;
