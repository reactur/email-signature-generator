import { Mail, Phone, Globe, MapPin } from "lucide-react";

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

const SignatureTen = (props: SignatureProps) => {
  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      padding: "16px",
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif",
      animation: "slide-up 0.3s ease-in-out",
    }}
  >
    <div style={{ gridColumn: "span 2", marginBottom: "8px" }}>
      <h3
        style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "4px",
        }}
      >
        {props.name}
      </h3>
      <p style={{ color: "#555", margin: "4px 0" }}>{props.title}</p>
      <p style={{ color: "#777", margin: "4px 0" }}>{props.company}</p>
    </div>

    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      >
        <Mail size={16} style={{ marginRight: "8px", color: "#4F46E5" }} />
        <span style={{ color: "#555" }}>{props.email}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Phone size={16} style={{ marginRight: "8px", color: "#4F46E5" }} />
        <span style={{ color: "#555" }}>{props.phone}</span>
      </div>
    </div>

    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
      >
        <Globe size={16} style={{ marginRight: "8px", color: "#4F46E5" }} />
        <span style={{ color: "#555" }}>{props.website}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <MapPin size={16} style={{ marginRight: "8px", color: "#4F46E5" }} />
        <span style={{ color: "#555" }}>{props.location}</span>
      </div>
    </div>
  </div>
  );
};

export default SignatureTen;

