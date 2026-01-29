import "../styles/modalStyle.css";

const OrchidModal = ({
  showDetails,
  selectedOrchid,
  setSelectedOrchid,
  setShowDetails,
}) => {
  const handleCloseModal = () => {
    setShowDetails(false);
    setSelectedOrchid(null);
  };
  return (
    <>
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

export default OrchidModal;
