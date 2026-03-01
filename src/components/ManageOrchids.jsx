import { useState, useEffect } from "react";
import { useAuth } from "./ThemeContext";
import {
  getOrchids,
  createOrchid,
  updateOrchid,
  deleteOrchid,
} from "../services/orchidService";
import "../styles/manageStyle.css";

const ManageOrchids = () => {
  const { user } = useAuth();
  const [orchids, setOrchids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingOrchid, setEditingOrchid] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    rating: 0,
    isSpecial: false,
    color: "",
    origin: "",
    category: "",
    price: 0,
  });

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

  useEffect(() => {
    fetchOrchids();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAdd = () => {
    setEditingOrchid(null);
    setFormData({
      name: "",
      image: "",
      rating: 0,
      isSpecial: false,
      color: "",
      origin: "",
      category: "",
      price: 0,
    });
    setShowForm(true);
  };

  const handleEdit = (orchid) => {
    setEditingOrchid(orchid);
    setFormData({
      name: orchid.name,
      image: orchid.image,
      rating: orchid.rating,
      isSpecial: orchid.isSpecial,
      color: orchid.color,
      origin: orchid.origin,
      category: orchid.category,
      price: orchid.price,
    });
    setShowForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const rating = Number(formData.rating);
      const data = {
        ...formData,
        rating,
        price: Number(formData.price),
        isSpecial: rating === 5,
      };
      if (editingOrchid) {
        await updateOrchid(editingOrchid.id, data);
      } else {
        await createOrchid(data);
      }
      setShowForm(false);
      fetchOrchids();
    } catch (error) {
      console.error("Error saving orchid:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this orchid?")) return;
    try {
      await deleteOrchid(id);
      fetchOrchids();
    } catch (error) {
      console.error("Error deleting orchid:", error);
    }
  };

  if (!user) {
    return (
      <div className="manage-container">
        <h2>Access Denied</h2>
        <p>Please login as Admin to manage orchids.</p>
      </div>
    );
  }

  if (loading) {
    return <div className="manage-container">Loading...</div>;
  }

  return (
    <div className="manage-container">
      <div className="manage-header">
        <h2>Manage Orchids</h2>
        <button className="btn-create" onClick={handleAdd}>
          + Add Orchid
        </button>
      </div>

      {/* Form modal */}
      {showForm && (
        <div className="manage-form-overlay">
          <form className="manage-form" onSubmit={handleSubmit}>
            <h3>{editingOrchid ? "Edit Orchid" : "Add New Orchid"}</h3>
            <div className="form-group full-width">
              <label className="manage-label">Name</label>
              <input
                name="name"
                placeholder="Enter orchid name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group full-width">
              <label className="manage-label">Image URL</label>
              <input
                name="image"
                placeholder="Enter image URL"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="manage-label">Origin</label>
              <input
                name="origin"
                placeholder="e.g. Vietnam"
                value={formData.origin}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="manage-label">Category</label>
              <input
                name="category"
                placeholder="e.g. Cattleya"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="manage-label">Color</label>
              <input
                name="color"
                placeholder="e.g. Pink"
                value={formData.color}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="manage-label">Price ($)</label>
              <input
                name="price"
                type="number"
                placeholder="0"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label className="manage-label">Rating (1-5)</label>
              <input
                name="rating"
                type="number"
                min="1"
                max="5"
                placeholder="1-5"
                value={formData.rating}
                onChange={handleChange}
              />
            </div>

            <div className="manage-form-actions">
              <button type="submit" className="btn-save">
                {editingOrchid ? "Update" : "Create"}
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Orchids table */}
      <table className="manage-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Origin</th>
            <th>Category</th>
            <th>Price</th>
            <th>Special</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orchids.map((orchid) => (
            <tr key={orchid.id}>
              <td>{orchid.name}</td>
              <td>{orchid.origin}</td>
              <td>{orchid.category}</td>
              <td>${orchid.price}</td>
              <td>{orchid.isSpecial ? "Special Orchid!" : ""}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(orchid)}>
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(orchid.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrchids;
