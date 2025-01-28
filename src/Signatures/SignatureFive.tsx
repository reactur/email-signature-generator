import { Mail, Phone, Globe, Linkedin, Twitter, MapPin } from "lucide-react";
import {SignatureProps} from "../types/signatures"

const SignatureFive = (props: SignatureProps) => {
  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E5E7EB",
        borderRadius: "12px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#4A5568",
        maxWidth: "500px",
        margin: "auto",
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        {props.image && (
          <img
            src={props.image}
            alt={`${props.name}'s avatar`}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #6366F1",
            }}
          />
        )}
        <div style={{ textAlign: "left" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1A202C",
              margin: 0,
            }}
          >
            {props.name}
          </h3>
          <p
            style={{
              fontStyle: "italic",
              color: "#718096",
              margin: "4px 0",
            }}
          >
            {props.title}
          </p>
          <p style={{ color: "#A0AEC0", margin: 0 }}>{props.company}</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "16px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Mail size={18} style={{ color: "#6366F1" }} />
          <span style={{ color: "#555" }}>{props.email}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Phone size={18} style={{ color: "#6366F1" }} />
          <span style={{ color: "#555" }}>{props.phone}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Globe size={18} style={{ color: "#6366F1" }} />
          <a
            href={props.website ? `https://${props.website}` : "#"}
            style={{
              color: "#4A90E2",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.website}
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MapPin size={18} style={{ color: "#6366F1" }} />
          <span style={{ color: "#555" }}>{props.location}</span>
        </div>
      </div>

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          color: "#718096",
        }}
      >
        <a
          href={props.linkedin ? `https://${props.linkedin}` : "#"}
          style={{
            color: "#718096",
            textDecoration: "none",
            transition: "color 0.3s ease-in-out",
          }}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => (e.currentTarget.style.color = "#6366F1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#718096")}
        >
          <Linkedin size={18} />
        </a>

        <a
          href={`https://twitter.com/${props.twitter.replace("@", "")}`}
          style={{
            color: "#718096",
            textDecoration: "none",
            transition: "color 0.3s ease-in-out",
          }}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => (e.currentTarget.style.color = "#6366F1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#718096")}
        >
          <Twitter size={18} />
        </a>
      </div>
    </div>
  );
};

export default SignatureFive;
