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
  }

const SignatureTwo = (props:SignatureProps) => {
  return (
    <div
    style={{
      fontFamily: "Arial, sans-serif",
      padding: "16px",
      borderLeft: "4px solid #4F46E5",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      animation: "fade-in 0.5s ease-in-out",
    }}
  >
    <h3
      style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#333",
        marginBottom: "4px",
      }}
    >
      {props.name}
    </h3>
    <p style={{ color: "#555", margin: "4px 0 8px 0" }}>
      {props.title} at {props.company}
    </p>

    <div style={{ marginTop: "8px", fontSize: "0.875rem", color: "#555" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "8px",
          gap: "8px",
        }}
      >
        <Mail size={16} style={{ color: "#4F46E5" }} />
        <span>{props.email}</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "8px",
          gap: "8px",
        }}
      >
        <Phone size={16} style={{ color: "#4F46E5" }} />
        <span>{props.phone}</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "8px",
          gap: "8px",
        }}
      >
        <Globe size={16} style={{ color: "#4F46E5" }} />
        <span>
          <a
            href={props.website ? `https://${props.website}` : "#"}
            style={{ color: "#4F46E5", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.website}
          </a>
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "8px",
          gap: "8px",
        }}
      >
        <MapPin size={16} style={{ color: "#4F46E5" }} />
        <span>{props.location}</span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "8px",
          gap: "8px",
        }}
      >
        <Linkedin size={16} style={{ color: "#0077B5" }} />
        <span>
          <a
            href={props.linkedin ? `https://${props.linkedin}` : "#"}
            style={{ color: "#0077B5", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkedin}
          </a>
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Twitter size={16} style={{ color: "#1DA1F2" }} />
        <span>
          <a
            href={`https://twitter.com/${props.twitter.replace("@", "")}`}
            style={{ color: "#1DA1F2", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.twitter}
          </a>
        </span>
      </div>
    </div>
  </div>
  )
}

export default SignatureTwo
