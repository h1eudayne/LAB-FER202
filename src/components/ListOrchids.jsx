import { useState } from "react";
import { ListOfOrchids } from "../ListOfOrchids";
import OrchidModal from "./OrchidModal";
import OrchidCard from "./OrchidCard";

const ListOrchids = ({ dispatch }) => {
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {ListOfOrchids.map((orchid) => (
        <OrchidCard
          key={orchid.id}
          orchid={orchid}
          setSelectedOrchid={setSelectedOrchid}
          setShowDetails={setShowDetails}
          dispatch={dispatch}
        />
      ))}
      <OrchidModal
        showDetails={showDetails}
        selectedOrchid={selectedOrchid}
        setSelectedOrchid={setSelectedOrchid}
        setShowDetails={setShowDetails}
      />
    </>
  );
};

export default ListOrchids;
