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

const SignatureThree = (props: SignatureProps) => {
  return (
    <div
      style={{
        padding: "30px",
        background: "linear-gradient(135deg, #1E293B, #3B82F6)",
        color: "#fff",
        borderRadius: "20px",
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
        fontFamily: "'Roboto', sans-serif",
        margin: "auto",
        border: "1px solid #E5E7EB",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        <h4
          style={{
            fontSize: "1.2rem",
            fontStyle: "italic",
            color: "#d1d5db",
            margin: 0,
          }}
        >
          With regards,
        </h4>
      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {props.image && (
          <img
            src={props.image}
            alt={`${props.name}'s profile`}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #3B82F6",
              marginBottom: "15px",
            }}
          />
        )}
        <h3
          style={{
            fontSize: "1.8rem",
            fontWeight: "700",
            margin: "0",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
          }}
        >
          {props.name}
        </h3>
        <p
          style={{
            fontSize: "1rem",
            opacity: 0.9,
            margin: "5px 0",
            fontStyle: "italic",
            color: "#d1d5db",
          }}
        >
          {props.title} at {props.company}
        </p>
      </div>

      <div style={{ fontSize: "1rem", marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          <Mail size={20} style={{ color: "#fff" }} />
          <span>{props.email}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          <Phone size={20} style={{ color: "#fff" }} />
          <span>{props.phone}</span>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          <Globe size={20} style={{ color: "#fff" }} />
          <a
            href={props.website ? `https://${props.website}` : "#"}
            style={{ color: "#fff", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.website}
          </a>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          <Linkedin size={20} style={{ color: "#fff" }} />
          <a
            href={props.linkedin ? `https://${props.linkedin}` : "#"}
            style={{ color: "#fff", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.linkedin}
          </a>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "15px",
            fontWeight: "500",
          }}
        >
          <Twitter size={20} style={{ color: "#fff" }} />
          <a
            href={`https://twitter.com/${props.twitter.replace("@", "")}`}
            style={{ color: "#fff", textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.twitter}
          </a>
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
        <MapPin size={20} style={{ color: "#fff" }} />
        <span>{props.location}</span>
      </div>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg"
          alt={`${props.company} logo`}
          style={{
            width: "180px",
            height: "180px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default SignatureThree;
