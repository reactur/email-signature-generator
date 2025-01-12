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

const SignatureEight = (props: SignatureProps) => {
  return (
    <div
      style={{
        position: "relative",
        padding: "16px",
        backgroundColor: "#fff",
        border: "2px solid #000",
        borderRadius: "12px",
        fontFamily: "Arial, sans-serif",
        animation: "slide-up 0.4s ease-in-out",
        margin: "auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "80px",
          height: "80px",
          backgroundColor: "#FACC15",
          borderBottomLeftRadius: "100%",
          zIndex: -1,
        }}
      ></div>

      <h3 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#1F2937" }}>
        {props.name}
      </h3>
      <p style={{ color: "#374151", fontSize: "1rem", margin: "4px 0" }}>
        {props.title}
      </p>
      <p
        style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "8px" }}
      >
        {props.company}
      </p>

      <div
        style={{
          marginTop: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
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

