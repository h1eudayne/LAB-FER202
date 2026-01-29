import { useAuth } from "./ThemeContext";

const Navigation = () => {
  const { dark, toggleTheme, user, login, logout } = useAuth();

  const getButtonStyle = (isPrimary) => ({
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "all 0.2s ease",
    backgroundColor: isPrimary ? "#007bff" : dark ? "#444" : "#e0e0e0",
    color: isPrimary ? "#fff" : dark ? "#fff" : "#333",
  });

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: dark ? "#1e1e1e" : "#fff",
        color: dark ? "#fff" : "#333",
        padding: "16px 32px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: dark
          ? "0 2px 10px rgba(0,0,0,0.3)"
          : "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <strong>{user ? `Welcome, ${user.name}` : "Please login"}</strong>

      <div style={{ display: "flex", gap: "12px" }}>
        {user ? (
          <button
            style={getButtonStyle(false)}
            onClick={logout}
            onMouseOver={(e) => (e.target.style.opacity = "0.8")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            Logout
          </button>
        ) : (
          <button
            style={getButtonStyle(true)}
            onClick={login}
            onMouseOver={(e) => (e.target.style.filter = "brightness(1.1)")}
            onMouseOut={(e) => (e.target.style.filter = "brightness(1)")}
          >
            Login
          </button>
        )}

        <button style={getButtonStyle(false)} onClick={toggleTheme}>
          {dark ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
