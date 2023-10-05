'use client'

import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersTable from "./components/table/UsersTable";

function index() {
  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <div>
      <UsersTable />
    </div>
  );
}

export default index;
