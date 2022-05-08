import React from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import { useEffect, useState } from "react";

const NEXT_ADMIN_ETH_ADDRESS = "0x3d5a063be50f830d2490fedd0fad01057609ea35";

async function upload() {
  const imageFile = new Moralis.File(data.name, data);
  await imageFile.saveIPFS();
}

const Admin = () => {
  const { isAuthenticated, user } = useMoralis();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      setAdmin(user.attributes.ethAddress === NEXT_ADMIN_ETH_ADDRESS);
    }
  }, [user]);

  return <>{admin ? <h2>Hello admin</h2> : <h2>You are not an admin</h2>}</>;
};

export default Admin;
