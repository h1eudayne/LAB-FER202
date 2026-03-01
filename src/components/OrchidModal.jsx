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

  if (!showDetails || !selectedOrchid) return null;

  return (
    <div className="orchid-modal-overlay" onClick={handleCloseModal}>
      <div className="orchid-modal" onClick={(e) => e.stopPropagation()}>
        <span className="orchid-modal-close" onClick={handleCloseModal}>
          &times;
        </span>
        <h2>{selectedOrchid.name}</h2>
        <p>
          <strong>Origin:</strong> {selectedOrchid.origin}
        </p>
        <p>
          <strong>Category:</strong> {selectedOrchid.category}
        </p>
        <p>
          <strong>Color:</strong> {selectedOrchid.color}
        </p>
        <p>
          <strong>Price:</strong> ${selectedOrchid.price.toFixed(2)}
        </p>
        <p>
          <strong>Rating:</strong> {selectedOrchid.rating} / 5
        </p>
        {selectedOrchid.isSpecial && (
          <p style={{ color: "#e67e22", fontWeight: "bold" }}>
            Special Orchid!
          </p>
        )}
      </div>
    </div>
  );
};

export default OrchidModal;
