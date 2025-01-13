import { useState } from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

interface SignatureProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  companyNo: string;
  vat: string;
  website: string;
  logo: string;
  tagline: string;
  socialMedia: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
  image: string;
}

const SignatureEleven = (props: SignatureProps) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      color: darkMode ? "#fff" : "#000",
      maxWidth: "700px",
      borderRadius: "10px",
      overflow: "hidden",
      background: darkMode ? "#222" : "#fff",
      border: darkMode ? "1px solid #444" : "1px solid #ccc",
      boxShadow: darkMode ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    button: {
      margin: "10px",
      padding: "10px 20px",
      borderRadius: "5px",
      background: darkMode ? "#555" : "#ddd",
      color: darkMode ? "#fff" : "#000",
      cursor: "pointer",
      border: "none",
      fontSize: "0.9rem",
    },
    topSection: {
      padding: "20px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      borderBottom: darkMode ? "1px solid #444" : "1px solid #eee",
    },
    middleSection: {
      padding: "20px",
      backgroundColor: darkMode ? "#000" : "#000",
      color: "#fff",
      textAlign: "center" as const,
    },
    socialMedia: {
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      borderBottom: darkMode ? "1px solid #444" : "1px solid #eee",
    },
    footer: {
      padding: "20px",
      fontSize: "0.8rem",
      color: darkMode ? "#bbb" : "#555",
      textAlign: "center" as const,
      lineHeight: "1.5",
    },
  };

  return (
    <div style={styles.container}>
      {/* Dark Mode Toggle */}
      <button style={styles.button} onClick={handleThemeToggle}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      {/* Top Section */}
      <div style={styles.topSection}>
        <div>
          {props.image && (
            <img
              src={props.image}
              alt={`${props.name}'s profile`}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                objectFit: "cover",
                border: darkMode ? "2px solid #555" : "2px solid #ddd",
              }}
            />
          )}
        </div>
        <div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              margin: 0,
              lineHeight: "1.2",
            }}
          >
            {props.name}
          </h2>
          <p
            style={{
              margin: "5px 0",
              fontWeight: "600",
              color: darkMode ? "#bbb" : "#555",
              fontSize: "1rem",
            }}
          >
            {props.title}
          </p>
          <p style={{ margin: "5px 0", color: darkMode ? "#ddd" : "#333", fontSize: "0.9rem" }}>
            {props.email}
          </p>
          <p style={{ margin: "5px 0", color: darkMode ? "#ddd" : "#333", fontSize: "0.9rem" }}>
            {props.phone}
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div style={styles.middleSection}>
        <h3 style={{ fontSize: "1.3rem", margin: "10px 0" }}>{props.tagline}</h3>
        <img
          src={props.logo}
          alt={`${props.company} logo`}
          style={{
            width: "120px",
            height: "auto",
            margin: "10px 0",
          }}
        />
        <a
          href={props.website}
          style={{
            color: "#fff",
            textDecoration: "none",
            fontSize: "1rem",
            marginTop: "10px",
            display: "inline-block",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.website}
        </a>
      </div>

      {/* Social Media */}
      <div style={styles.socialMedia}>
        {props.socialMedia.facebook && (
          <a
            href={props.socialMedia.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: darkMode ? "#bbb" : "#555" }}
          >
            <Facebook size={24} />
          </a>
        )}
        {props.socialMedia.instagram && (
          <a
            href={props.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: darkMode ? "#bbb" : "#555" }}
          >
            <Instagram size={24} />
          </a>
        )}
        {props.socialMedia.youtube && (
          <a
            href={props.socialMedia.youtube}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: darkMode ? "#bbb" : "#555" }}
          >
            <Youtube size={24} />
          </a>
        )}
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        <p>{props.company}</p>
        <p>{props.address}</p>
        <p>
          Company no: {props.companyNo} | VAT: {props.vat}
        </p>
      </div>
    </div>
  );
};

export default SignatureEleven;
