import { Mail, Phone, Globe, Linkedin, Twitter, MapPin } from "lucide-react";
import {SignatureProps} from "../types/signatures"


const SignatureEight = (props: SignatureProps) => {
  return (
    <div
      style={{
        position: "relative",
        padding: "20px",
        backgroundColor: "#F9FAFB",
        border: "2px solid #E5E7EB",
        borderRadius: "12px",
        fontFamily: "Arial, sans-serif",
        width: "100%",
        maxWidth: "400px",
        margin: "auto",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
              border: "2px solid #FACC15",
            }}
          />
        )}
        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#1F2937",
              margin: 0,
            }}
          >
            {props.name}
          </h3>
          <p style={{ color: "#374151", fontSize: "1rem", margin: "4px 0" }}>
            {props.title}
          </p>
          <p style={{ color: "#6B7280", fontSize: "0.875rem", margin: 0 }}>
            {props.company}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          fontSize: "0.875rem",
          color: "#4B5563",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MapPin size={16} /> {props.location}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Mail size={16} /> {props.email}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Phone size={16} /> {props.phone}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Globe size={16} />{" "}
          <a
            href={props.website ? `https://${props.website}` : "#"}
            style={{
              color: "#4B5563",
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
          <Linkedin size={16} />{" "}
          <a
            href={props.linkedin ? `https://${props.linkedin}` : "#"}
            style={{
              color: "#4B5563",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkedin}
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Twitter size={16} />{" "}
          <a
            href={`https://twitter.com/${props.twitter.replace("@", "")}`}
            style={{
              color: "#4B5563",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.twitter}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignatureEight;
