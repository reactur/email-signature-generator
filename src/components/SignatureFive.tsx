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

const SignatureFive = (props: SignatureProps) => {
  return (
    <div
    style={{
      padding: "24px",
      backgroundColor: "#F9FAFB",
      border: "1px solid #E5E7EB",
      borderRadius: "8px",
      textAlign: "center",
      animation: "slide-up 0.3s ease-in-out",
      fontFamily: "'Georgia', serif",
      color: "#4A5568",
      maxWidth: "500px",
      margin: "auto",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div>
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#1A202C",
          marginBottom: "8px",
        }}
      >
        {props.name}
      </h3>
      <p
        style={{
          fontStyle: "italic",
          color: "#718096",
          marginBottom: "4px",
        }}
      >
        {props.title}
      </p>
      <p style={{ color: "#A0AEC0", marginBottom: "8px" }}>{props.company}</p>
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
        <span>
          <a
            href={props.website ? `https://${props.website}` : "#"}
            style={{ color: "#4A90E2", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.website}
          </a>
        </span>
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

