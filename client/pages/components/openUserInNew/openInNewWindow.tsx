import { setCurrentUserId } from "@/pages/slices/currentUserSlice";
import { useDispatch } from "react-redux";
export function openUserInNewWindow(user: any) {
    const url = `/api/userDetails/${user.id}`;
    const openModal = document.getElementById("id01")?.style.display;
    const editModal = document.getElementById("id02")?.style.display;
  setCurrentUserId(user.id)

    if (openModal !== "block" && editModal !== "block") {
      const form = document.createElement("form");
      form.method = "POST";
      form.action = url;
      form.target = "_blank"; // Open in a new tab

      // Hidden input fields
      const userId = document.createElement("input");
      userId.type = "hidden";
      userId.name = "userId";
      userId.value = user.id;

      const userName = document.createElement("input");
      userName.type = "hidden";
      userName.name = "userName";
      userName.value = user.name;

      const userEmail = document.createElement("input");
      userEmail.type = "hidden";
      userEmail.name = "userEmail";
      userEmail.value = user.email;

      const userCity = document.createElement("input");
      userCity.type = "hidden";
      userCity.name = "userCity";
      userCity.value = user.city;

      form.appendChild(userId);
      form.appendChild(userName);
      form.appendChild(userEmail);
      form.appendChild(userCity);

      document.body.appendChild(form);
      form.submit();

      document.body.removeChild(form);
    }
  }
