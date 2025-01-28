import { Mail, Phone, Globe, Linkedin, Twitter, MapPin } from "lucide-react";
import {SignatureProps} from "../types/signatures"

const SignatureSeven = (props: SignatureProps) => {
  return (
    <div
    style={{
      padding: "16px",
      border: "1px solid #E5E7EB",
      borderRadius: "8px",
      transition: "box-shadow 0.3s ease-in-out",
      fontFamily: "Arial, sans-serif",
      margin: "auto",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.1)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1F2937" }}>
      {props.name}
    </h3>
    <p
      style={{
        fontSize: "0.875rem",
        color: "#6B7280",
        margin: "4px 0",
      }}
    >
      {props.title} · {props.company}
    </p>

    <div
      style={{
        marginTop: "12px",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        fontSize: "0.875rem",
        color: "#4B5563",
      }}
    >
      <a
        href={`mailto:${props.email}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          color: "#4B5563",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#2563EB";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#4B5563";
        }}
      >
        <Mail size={14} /> {props.email}
      </a>

      <a
        href={props.website ? `https://${props.website}` : "#"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          color: "#4B5563",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#2563EB";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#4B5563";
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Globe size={14} /> {props.website}
      </a>

      <a
        href={props.linkedin ? `https://${props.linkedin}` : "#"}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          color: "#4B5563",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#2563EB";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#4B5563";
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={14} /> {props.linkedin}
      </a>

      <a
        href={`https://twitter.com/${props.twitter.replace("@", "")}`}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          textDecoration: "none",
          color: "#4B5563",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "#2563EB";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "#4B5563";
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter size={14} /> {props.twitter}
      </a>

      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <Phone size={14} /> {props.phone}
      </span>

      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <MapPin size={14} /> {props.location}
      </span>
    </div>
  </div>
  );
};

export default SignatureSeven;

