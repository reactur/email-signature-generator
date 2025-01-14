import { Mail, Phone, Globe, Linkedin, Twitter, MapPin } from "lucide-react";

interface SignatureProps {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  twitter: string;
  location: string;
  image: string;
}

const SignatureThree = (props: SignatureProps) => {
  return (
    <div
      style={{
        width: "450px",
        margin: "auto",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        fontFamily: "'Arial', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Image Section */}
      <div
        style={{
          backgroundColor: "#007BFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        {props.image && (
          <img
            src={props.image}
            alt={`${props.name}'s avatar`}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid white",
            }}
          />
        )}
        <h2
          style={{
            color: "#ffffff",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          {props.name}
        </h2>
        <p style={{ color: "#E2E8F0", fontSize: "1rem", marginBottom: "0" }}>
          {props.title}
        </p>
      </div>

      {/* Info Section */}
      <div
        style={{
          padding: "20px",
          display: "grid",
          gap: "16px",
          fontSize: "0.9rem",
          color: "#2D3748",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Mail size={18} style={{ color: "#007BFF" }} />
          <span>{props.email}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Phone size={18} style={{ color: "#007BFF" }} />
          <span>{props.phone}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Linkedin size={18} style={{ color: "#007BFF" }} />
          <a
            href={props.linkedin ? `https://${props.linkedin}` : "#"}
            style={{ color: "#007BFF", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Twitter size={18} style={{ color: "#007BFF" }} />
          <a
            href={`https://twitter.com/${props.twitter.replace("@", "")}`}
            style={{ color: "#007BFF", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Globe size={18} style={{ color: "#007BFF" }} />
          <a
            href={props.website ? `https://${props.website}` : "#"}
            style={{ color: "#007BFF", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MapPin size={18} style={{ color: "#007BFF" }} />
          <span>{props.location}</span>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#F7FAFC",
          padding: "10px 20px",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "#A0AEC0",
          borderTop: "1px solid #E2E8F0",
        }}
      >
        © 2025 {props.company}. All rights reserved.
      </div>
    </div>
  );
};

export default SignatureThree;
