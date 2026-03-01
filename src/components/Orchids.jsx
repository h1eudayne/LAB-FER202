import ListOrchids from "./ListOrchids";
import "../styles/presentStyle.css";

const Orchids = ({ dispatch }) => {
  return (
    <div className="orchid-grid">
      <ListOrchids dispatch={dispatch} />
    </div>
  );
};

export default Orchids;
