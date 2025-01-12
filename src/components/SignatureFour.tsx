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

const SignatureFour = (props: SignatureProps) => {
  return (
    <div
    style={{
      padding: "16px",
      backgroundColor: "#1A202C",
      color: "white",
      borderRadius: "8px",
      animation: "fade-in 0.3s ease-in-out",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      maxWidth: "400px",
      margin: "auto",
    }}
  >
    <div
      style={{
        borderBottom: "1px solid #2D3748",
        paddingBottom: "8px",
      }}
    >
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

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        fontSize: "0.875rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flex: "1 1 calc(50% - 8px)",
        }}
      >
        <Mail size={16} style={{ color: "#63B3ED" }} />
        <span>{props.email}</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flex: "1 1 calc(50% - 8px)",
        }}
      >
        <Phone size={16} style={{ color: "#63B3ED" }} />
        <span>{props.phone}</span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flex: "1 1 calc(50% - 8px)",
        }}
      >
        <Linkedin size={16} style={{ color: "#63B3ED" }} />
        <a
          href={props.linkedin ? `https://${props.linkedin}` : "#"}
          style={{ color: "white", textDecoration: "none" }}
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
          gap: "8px",
          flex: "1 1 calc(50% - 8px)",
        }}
      >
        <Twitter size={16} style={{ color: "#63B3ED" }} />
        <a
          href={`https://twitter.com/${props.twitter.replace("@", "")}`}
          style={{ color: "white", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.twitter}
        </a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          flex: "1 1 calc(50% - 8px)",
        }}
      >
        <Globe size={16} style={{ color: "#63B3ED" }} />
        <a
          href={props.website ? `https://${props.website}` : "#"}
          style={{ color: "white", textDecoration: "none" }}
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
          gap: "8px",
          flex: "1 1 calc(50% - 8px)",
        }}
      >
        <MapPin size={16} style={{ color: "#63B3ED" }} />
        <span>{props.location}</span>
      </div>
    </div>
  </div>
  );
};

export default SignatureFour;
