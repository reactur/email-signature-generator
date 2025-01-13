import React from "react";
import { Facebook, Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

interface SignatureProps {
  name: string;
  title: string;
  phone: string;
  email: string;
  address: string;
  website: string;
  image: string;
  socialMedia: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

const SignatureTwelve: React.FC<SignatureProps> = (props) => {
  return (
    <div
      style={{
        fontFamily: "'Arial', sans-serif",
        color: "#000",
        maxWidth: "600px",
        display: "flex",
        alignItems: "center",
        padding: "20px",
        border: "2px solid #e0e0e0",
        borderRadius: "10px",
        gap: "20px",
        backgroundColor: "#fff",
      }}
    >
      <div style={{ borderRight: "2px solid red", padding: "0 20px" }}>
        {props.image && (
          <img
            src={props.image}
            alt={`${props.name}'s profile`}
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #ddd",
              marginBottom: "20px",
            }}
          />
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {props.socialMedia.facebook && (
            <a
              href={props.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3b5998" }}
            >
              <Facebook size={24} />
            </a>
          )}
          {props.socialMedia.linkedin && (
            <a
              href={props.socialMedia.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0077b5" }}
            >
              <Linkedin size={24} />
            </a>
          )}
          {props.socialMedia.instagram && (
            <a
              href={props.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#e1306c" }}
            >
              <Instagram size={24} />
            </a>
          )}
          {props.socialMedia.twitter && (
            <a
              href={props.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1da1f2" }}
            >
              <Twitter size={24} />
            </a>
          )}
          {props.socialMedia.youtube && (
            <a
              href={props.socialMedia.youtube}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ff0000" }}
            >
              <Youtube size={24} />
            </a>
          )}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            margin: 0,
            lineHeight: "1.2",
          }}
        >
          {props.name}
        </h2>
        <p
          style={{
            margin: "5px 0",
            fontWeight: "600",
            color: "#555",
            fontSize: "1rem",
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            margin: "5px 0",
            color: "#333",
            fontSize: "0.9rem",
          }}
        >
          📞 {props.phone}
        </p>
        <p
          style={{
            margin: "5px 0",
            color: "#333",
            fontSize: "0.9rem",
          }}
        >
          ✉️ {props.email}
        </p>
        <p
          style={{
            margin: "5px 0",
            color: "#333",
            fontSize: "0.9rem",
          }}
        >
          📍 {props.address}
        </p>
        <p
          style={{
            margin: "5px 0",
            color: "#333",
            fontSize: "0.9rem",
          }}
        >
          🌐{" "}
          <a
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0073e6", textDecoration: "none" }}
          >
            {props.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignatureTwelve;
