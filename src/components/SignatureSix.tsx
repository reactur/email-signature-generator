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

const SignatureSix = (props: SignatureProps) => {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "16px",
      padding: "24px",
      background: "linear-gradient(to right, #6366F1, #7C3AED, #EC4899)",
      color: "#fff",
      borderRadius: "12px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
      fontFamily: "'Arial', sans-serif",
      maxWidth: "1200px",
      margin: "auto",
    }}
  >
    <div
      style={{
        width: "80px",
        height: "80px",
        background: "#fff",
        color: "#7C3AED",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.5rem",
        fontWeight: "bold",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
      }}
    >
      {props.name[0]}
    </div>

    <div style={{ textAlign: "center" }}>
      <h3
        style={{ fontSize: "1.5rem", fontWeight: "bold", margin: "0 0 4px" }}
      >
        {props.name}
      </h3>
      <p style={{ fontSize: "1rem", fontStyle: "italic", margin: "0 0 4px" }}>
        {props.title}
      </p>
      <p style={{ fontSize: "0.875rem", opacity: "0.8", margin: "0" }}>
        {props.company}
      </p>
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        fontSize: "0.875rem",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Mail size={16} style={{ color: "#fff" }} />
        <span>{props.email}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Phone size={16} style={{ color: "#fff" }} />
        <span>{props.phone}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Globe size={16} style={{ color: "#fff" }} />
        <a
          href={props.website ? `https://${props.website}` : "#"}
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.website}
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Linkedin size={16} style={{ color: "#fff" }} />
        <a
          href={props.linkedin ? `https://${props.linkedin}` : "#"}
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.linkedin}
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Twitter size={16} style={{ color: "#fff" }} />
        <a
          href={`https://twitter.com/${props.twitter.replace("@", "")}`}
          style={{
            color: "#fff",
            textDecoration: "none",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.twitter}
        </a>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <MapPin size={16} style={{ color: "#fff" }} />
        <span>{props.location}</span>
      </div>
    </div>
  </div>
  );
};

export default SignatureSix;

