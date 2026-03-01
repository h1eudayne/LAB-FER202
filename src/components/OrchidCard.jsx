const OrchidCard = ({
  orchid,
  setSelectedOrchid,
  setShowDetails,
  dispatch,
}) => {
  const handleOnClick = (orchid) => {
    setSelectedOrchid(orchid);
    setShowDetails(true);
  };

  return (
    <div className="orchid-card">
      <img src={orchid.image} alt={orchid.name} />
      <h1>{orchid.name}</h1>
      <p className="orchid-price">${orchid.price.toFixed(2)}</p>
      <div className="orchid-actions">
        <button className="btn-view" onClick={() => handleOnClick(orchid)}>
          View Details
        </button>
        {dispatch && (
          <button
            className="btn-add-cart"
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: orchid })}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default OrchidCard;
