import React from "react";
import { Mail, Phone, Globe, Linkedin, Twitter, MapPin } from "lucide-react";
import {SignatureProps} from "../types/signatures"

const SignatureTwelve: React.FC<SignatureProps> = (props) => {

  return (
    <div
      style={{
        padding: "16px",
        animation: "fade-in 0.4s ease-in-out",
        fontFamily: "Arial, sans-serif",
        textAlign: "center", 
      }}
    >
      {/* Image */}
      {props.image && (
        <div
          style={{
            width: "80px",
            height: "80px",
            margin: "0 auto auto", 
            borderRadius: "50%", 
            overflow: "hidden", 
            border: "2px solid #E5E7EB", 
          }}
        >
          <img
            src={props.image}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover", 
            }}
          />
        </div>
      )}

   
      <h3 style={{ fontSize: "1.5rem", fontWeight: "300", color: "#1F2937" }}>
        {props.name}
      </h3>
      <p style={{ color: "#4B5563", margin: "4px 0" }}>
        {props.title} at {props.company}
      </p>

      <div
        style={{
          marginTop: "12px",
          display: "flex",
          gap: "16px",
          justifyContent: "center", 
        }}
      >
        <a
          href={`mailto:${props.email}`}
          style={{
            color: "#9CA3AF",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#374151")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#9CA3AF")}
        >
          <Mail size={20} />
        </a>

        <a
          href={props.linkedin ? `https://${props.linkedin}` : "#"}
          style={{
            color: "#9CA3AF",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#374151")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#9CA3AF")}
        >
          <Linkedin size={20} />
        </a>

        <a
          href={`https://twitter.com/${props.twitter.replace("@", "")}`}
          style={{
            color: "#9CA3AF",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#374151")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#9CA3AF")}
        >
          <Twitter size={20} />
        </a>

        <a
          href="#"
          style={{
            color: "#9CA3AF",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#374151")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#9CA3AF")}
        >
          <MapPin size={20} />
        </a>

        <a
          href={props.website ? `https://${props.website}` : "#"}
          style={{
            color: "#9CA3AF",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#374151")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#9CA3AF")}
        >
          <Globe size={20} />
        </a>

        <a
          href="#"
          style={{
            color: "#9CA3AF",
            transition: "color 0.3s",
            textDecoration: "none",
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#374151")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#9CA3AF")}
        >
          <Phone size={20} />
        </a>
      </div>
    </div>
  );
};

export default SignatureTwelve;
