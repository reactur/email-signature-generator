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

const SignatureThree = (props:SignatureProps) => {
  return (
    <div
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, #6EE7B7, #3B82F6)",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
        fontFamily: "'Roboto', sans-serif",
        maxWidth: "100%",
        margin: "auto",
        border: "1px solid #E5E7EB",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            margin: "0",
            textTransform: "uppercase",
            letterSpacing: "2px",
            color: "#fff",
          }}
        >
          {props.name}
        </h3>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.85,
            margin: "5px 0",
            fontStyle: "italic",
            color: "#d1d5db",
          }}
        >
          {props.title} at {props.company}
        </p>
      </div>
  
      <div style={{ fontSize: "1rem", marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
        >
          <Mail
            size={20}
            style={{
              color: "#fff",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
          />
          <span style={{ color: "#f3f4f6" }}>{props.email}</span>
        </div>
  
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          <Phone
            size={20}
            style={{
              color: "#fff",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
          />
          <span style={{ color: "#f3f4f6" }}>{props.phone}</span>
        </div>
      </div>
  
      <div style={{ marginBottom: "30px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          <Globe
            size={20}
            style={{
              color: "#fff",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
          />
          <span style={{ color: "#f3f4f6" }}>
            <a
              href={props.website ? `https://${props.website}` : "#"}
              style={{ color: "#fff", textDecoration: "none" }}
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
            gap: "20px",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          <Linkedin
            size={20}
            style={{
              color: "#fff",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
          />
          <span style={{ color: "#f3f4f6" }}>
            <a
              href={props.linkedin ? `https://${props.linkedin}` : "#"}
              style={{ color: "#fff", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.linkedin}
            </a>
          </span>
        </div>
  
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
            fontWeight: "500",
          }}
        >
          <Twitter
            size={20}
            style={{
              color: "#fff",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
          />
          <span style={{ color: "#f3f4f6" }}>
            <a
              href={`https://twitter.com/${props.twitter.replace("@", "")}`}
              style={{ color: "#fff", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.twitter}
            </a>
          </span>
        </div>
      </div>
  
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          fontWeight: "500",
        }}
      >
        <MapPin
          size={20}
          style={{
            color: "#fff",
            cursor: "pointer",
            transition: "transform 0.3s",
          }}
        />
        <span style={{ color: "#f3f4f6" }}>{props.location}</span>
      </div>
    </div>
  )
}

export default SignatureThree
