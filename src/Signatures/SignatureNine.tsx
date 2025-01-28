import {  Linkedin, Twitter } from "lucide-react";
import {SignatureProps} from "../types/signatures"

const SignatureNine = (props: SignatureProps) => {
  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#ebf8ff",
        borderLeft: "4px solid #2563eb",
        animation: "fade-in 0.4s ease-in-out",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "bold",
              color: "#1e3a8a",
              margin: "0",
            }}
          >
            {props.name}
          </h3>
          <p style={{ color: "#2563eb", margin: "4px 0" }}>{props.title}</p>
          <p style={{ color: "#1e40af", margin: "4px 0" }}>{props.company}</p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <a
            href={props.linkedin ? `https://${props.linkedin}` : "#"}
            style={{
              color: "#2563eb",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#1e40af")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2563eb")}
          >
            <Linkedin size={20} />
          </a>

          <a
            href={`https://twitter.com/${props.twitter.replace("@", "")}`}
            style={{
              color: "#2563eb",
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#1e40af")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#2563eb")}
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignatureNine;

