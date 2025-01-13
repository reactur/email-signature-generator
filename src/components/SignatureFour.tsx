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

const SignatureFour = (props: SignatureProps) => {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#1A202C",
        color: "white",
        borderRadius: "12px",
        animation: "fade-in 0.3s ease-in-out",
        maxWidth: "450px",
        margin: "auto",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
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
              border: "2px solid #63B3ED",
            }}
          />
        )}
        <div style={{ textAlign: "center" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
          >
            {props.name}
          </h3>
          <p style={{ color: "#A0AEC0", marginBottom: "4px" }}>{props.title}</p>
          <p style={{ color: "#718096" }}>{props.company}</p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          fontSize: "0.875rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Mail size={16} style={{ color: "#63B3ED" }} />
          <span>{props.email}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Phone size={16} style={{ color: "#63B3ED" }} />
          <span>{props.phone}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Linkedin size={16} style={{ color: "#63B3ED" }} />
          <a
            href={props.linkedin ? `https://${props.linkedin}` : "#"}
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Twitter size={16} style={{ color: "#63B3ED" }} />
          <a
            href={`https://twitter.com/${props.twitter.replace("@", "")}`}
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Globe size={16} style={{ color: "#63B3ED" }} />
          <a
            href={props.website ? `https://${props.website}` : "#"}
            style={{ color: "white", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MapPin size={16} style={{ color: "#63B3ED" }} />
          <span>{props.location}</span>
        </div>
      </div>
    </div>
  );
};

export default SignatureFour;
