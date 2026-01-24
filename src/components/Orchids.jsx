import "../styles/presentStyle.css";
import { ListOfOrchids } from "../ListOfOrchids";
import { useState } from "react";
import "../styles/modalStyle.css";
import OrchildList from "./OrchildList";

const Orchids = () => {
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleOnClick = (orchid) => {
    console.log(orchid);

    setSelectedOrchid(orchid);
    setShowDetails(true);
  };

  const handleCloseModal = () => {
    setShowDetails(false);
    setSelectedOrchid(null);
  };

  return (
    <>
      <div className="container">
        <OrchildList handleOnClick={handleOnClick} />
      </div>
      {showDetails && selectedOrchid && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={handleCloseModal}>
              &times;
            </span>
            <p>Origin: {selectedOrchid.origin}</p>
            <p>Category: {selectedOrchid.category}</p>
            <p>Color: {selectedOrchid.color}</p>
            <p>Rating: {selectedOrchid.rating} / 5</p>
            {selectedOrchid.isSpecial && (
              <p>
                <strong>Special Orchid!</strong>
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Orchids;
