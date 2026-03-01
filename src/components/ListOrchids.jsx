import { useState, useEffect } from "react";
import { getOrchids } from "../services/orchidService";
import OrchidModal from "./OrchidModal";
import OrchidCard from "./OrchidCard";

const ListOrchids = ({ dispatch }) => {
  const [orchids, setOrchids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const fetchOrchids = async () => {
      try {
        const res = await getOrchids();
        setOrchids(res.data);
      } catch (error) {
        console.error("Error fetching orchids:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrchids();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center", padding: "40px" }}>Loading...</p>;
  }

  return (
    <>
      {orchids.map((orchid) => (
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
