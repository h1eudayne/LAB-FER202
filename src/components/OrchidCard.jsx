const OrchidCard = ({ orchid, setSelectedOrchid, setShowDetails }) => {
  const handleOnClick = (orchid) => {
    setSelectedOrchid(orchid);
    setShowDetails(true);
  };

  return (
    <>
      <div className="card">
        <img src={orchid.image} alt="" />
        <h1>{orchid.name}</h1>
        <p>
          <button
            onClick={() => {
              handleOnClick(orchid);
            }}
          >
            View Details
          </button>
        </p>
      </div>
    </>
  );
};

export default OrchidCard;
