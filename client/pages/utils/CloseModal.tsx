export const CloseModal = () => {
  if (typeof window !== "undefined") {
    window.onclick = function (event: any) {
      let openModal = document.getElementById("id01");
      let editModal = document.getElementById("id02");
      if (openModal && !openModal.contains(event.target)) {
        document.getElementById("id01")!.style.display = "none";
      }
      if (editModal && !editModal.contains(event.target)) {
        document.getElementById("id02")!.style.display = "none";
      }
    };
  }
};
