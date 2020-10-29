import React from "react";
import AnnDialog from "./AnnCom/AnnDialog";
import AnnTable from "./AnnCom/AnnTable";
import { useState, useEffect } from "react";
//prepare for adding abmin log wheen create / edit ann
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
