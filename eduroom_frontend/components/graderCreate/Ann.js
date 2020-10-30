import React from "react";
import AnnDialog from "../graderCreate/AnnDialog";
import AnnTable from "./AnnTable";
import { useState, useEffect } from "react";

const Test = () => {
  const [refresh, setRefresh] = useState(false);
  const handleUpdate = () => {
    console.log(refresh);
    console.log("Handle Update From Dialog Submission");
    setRefresh(true);
    setRefresh(false);
  };

  return (
    <div>
      <AnnDialog onSuccess={handleUpdate} />
      <AnnTable update={refresh} />
    </div>
  );
};
export default Test;
