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

export const signatures = [
  // Modern S1
  (props: SignatureProps) => (
    <div
      style={{
        padding: "16px",
        animation: "fade-in 0.4s ease-in-out",
        fontFamily: "Arial, sans-serif",
      }}
    >
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
          href={props.linkedin}
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
          href={props.twitter}
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
          href={props.website}
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
  ),

  // Modern Minimal S2
  (props: SignatureProps) => (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "16px",
        borderLeft: "4px solid #4F46E5",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        animation: "fade-in 0.5s ease-in-out",
      }}
    >
      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "4px",
        }}
      >
        {props.name}
      </h3>
      <p style={{ color: "#555", margin: "4px 0 8px 0" }}>
        {props.title} at {props.company}
      </p>

      <div style={{ marginTop: "8px", fontSize: "0.875rem", color: "#555" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            gap: "8px",
          }}
        >
          <Mail size={16} style={{ color: "#4F46E5" }} />
          <span>{props.email}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            gap: "8px",
          }}
        >
          <Phone size={16} style={{ color: "#4F46E5" }} />
          <span>{props.phone}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            gap: "8px",
          }}
        >
          <Globe size={16} style={{ color: "#4F46E5" }} />
          <span>
            <a
              href={props.website}
              style={{ color: "#4F46E5", textDecoration: "none" }}
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
            marginBottom: "8px",
            gap: "8px",
          }}
        >
          <MapPin size={16} style={{ color: "#4F46E5" }} />
          <span>{props.location}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
            gap: "8px",
          }}
        >
          <Linkedin size={16} style={{ color: "#0077B5" }} />
          <span>
            <a
              href={props.linkedin}
              style={{ color: "#0077B5", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.linkedin}
            </a>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Twitter size={16} style={{ color: "#1DA1F2" }} />
          <span>
            <a
              href={`https://twitter.com/${props.twitter.replace("@", "")}`}
              style={{ color: "#1DA1F2", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.twitter}
            </a>
          </span>
        </div>
      </div>
    </div>
  ),

  // Gradient Card S3
  (props: SignatureProps) => (
    <div
      style={{
        padding: "20px",
        background: "linear-gradient(to right, #6366F1, #7C3AED)",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        animation: "zoom-in 0.3s ease-in-out",
        fontFamily: "'Poppins', sans-serif",
        maxWidth: "400px",
        margin: "auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h3
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            margin: "0",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#fff",
          }}
        >
          {props.name}
        </h3>
        <p
          style={{
            fontSize: "1.1rem",
            opacity: 0.9,
            margin: "5px 0",
            fontStyle: "italic",
          }}
        >
          {props.title} at {props.company}
        </p>
      </div>

      <div style={{ fontSize: "0.95rem", marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
        >
          <Mail
            size={18}
            style={{
              color: "white",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
          />
          <span style={{ color: "#e1e1e1", transition: "color 0.3s" }}>
            {props.email}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
        >
          <Phone
            size={18}
            style={{
              color: "white",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
          />
          <span style={{ color: "#e1e1e1", transition: "color 0.3s" }}>
            {props.phone}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "12px",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
        >
          <Globe
            size={18}
            style={{
              color: "white",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
          />
          <span style={{ color: "#e1e1e1", transition: "color 0.3s" }}>
            <a
              href={props.website}
              style={{ color: "white", textDecoration: "none" }}
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
            gap: "12px",
            marginBottom: "12px",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
        >
          <Linkedin
            size={18}
            style={{
              color: "white",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
          />
          <span style={{ color: "#e1e1e1", transition: "color 0.3s" }}>
            <a
              href={props.linkedin}
              style={{ color: "white", textDecoration: "none" }}
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
            gap: "12px",
            marginBottom: "12px",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
        >
          <Twitter
            size={18}
            style={{
              color: "white",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
          />
          <span style={{ color: "#e1e1e1", transition: "color 0.3s" }}>
            <a
              href={`https://twitter.com/${props.twitter.replace("@", "")}`}
              style={{ color: "white", textDecoration: "none" }}
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
          gap: "12px",
          fontWeight: "500",
          transition: "all 0.3s ease",
        }}
      >
        <MapPin
          size={18}
          style={{
            color: "white",
            transition: "transform 0.3s",
            cursor: "pointer",
          }}
        />
        <span style={{ color: "#e1e1e1", transition: "color 0.3s" }}>
          {props.location}
        </span>
      </div>
    </div>
  ),

  // Professional Dark S4

  (props: SignatureProps) => (
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
            href={`https://${props.linkedin}`}
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
            href={`https://${props.website}`}
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
  ),

  // Elegant Light S5
  (props: SignatureProps) => (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#F9FAFB",
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
        textAlign: "center",
        animation: "slide-up 0.3s ease-in-out",
        fontFamily: "'Georgia', serif",
        color: "#4A5568",
        maxWidth: "500px",
        margin: "auto",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1A202C",
            marginBottom: "8px",
          }}
        >
          {props.name}
        </h3>
        <p
          style={{
            fontStyle: "italic",
            color: "#718096",
            marginBottom: "4px",
          }}
        >
          {props.title}
        </p>
        <p style={{ color: "#A0AEC0", marginBottom: "8px" }}>{props.company}</p>
      </div>

      <div
        style={{
          marginTop: "16px",
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Mail size={18} style={{ color: "#6366F1" }} />
          <span style={{ color: "#555" }}>{props.email}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Phone size={18} style={{ color: "#6366F1" }} />
          <span style={{ color: "#555" }}>{props.phone}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Globe size={18} style={{ color: "#6366F1" }} />
          <span>
            <a
              href={`https://${props.website}`}
              style={{ color: "#4A90E2", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.website}
            </a>
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <MapPin size={18} style={{ color: "#6366F1" }} />
          <span style={{ color: "#555" }}>{props.location}</span>
        </div>
      </div>
      <div
        style={{
          marginTop: "24px",
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          color: "#718096",
        }}
      >
        <a
          href={props.linkedin}
          style={{
            color: "#718096",
            textDecoration: "none",
            transition: "color 0.3s ease-in-out",
          }}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => (e.currentTarget.style.color = "#6366F1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#718096")}
        >
          <Linkedin size={18} />
        </a>

        <a
          href={`https://twitter.com/${props.twitter.replace("@", "")}`}
          style={{
            color: "#718096",
            textDecoration: "none",
            transition: "color 0.3s ease-in-out",
          }}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={(e) => (e.currentTarget.style.color = "#6366F1")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#718096")}
        >
          <Twitter size={18} />
        </a>
      </div>
    </div>
  ),

  // Modern Split S6
  (props: SignatureProps) => (
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
            href={`https://${props.website}`}
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
            href={props.linkedin}
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
  ),

  // Minimalist Card S7
  (props: SignatureProps) => (
    <div
      style={{
        padding: "16px",
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
        transition: "box-shadow 0.3s ease-in-out",
        fontFamily: "Arial, sans-serif",
        margin: "auto",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0px 8px 20px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#1F2937" }}>
        {props.name}
      </h3>
      <p
        style={{
          fontSize: "0.875rem",
          color: "#6B7280",
          margin: "4px 0",
        }}
      >
        {props.title} · {props.company}
      </p>

      <div
        style={{
          marginTop: "12px",
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "0.875rem",
          color: "#4B5563",
        }}
      >
        <a
          href={`mailto:${props.email}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
            color: "#4B5563",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#2563EB";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4B5563";
          }}
        >
          <Mail size={14} /> {props.email}
        </a>

        <a
          href={`https://${props.website}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
            color: "#4B5563",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#2563EB";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4B5563";
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe size={14} /> {props.website}
        </a>

        <a
          href={props.linkedin}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
            color: "#4B5563",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#2563EB";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4B5563";
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={14} /> {props.linkedin}
        </a>

        <a
          href={`https://twitter.com/${props.twitter.replace("@", "")}`}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            textDecoration: "none",
            color: "#4B5563",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#2563EB";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4B5563";
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size={14} /> {props.twitter}
        </a>

        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Phone size={14} /> {props.phone}
        </span>

        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <MapPin size={14} /> {props.location}
        </span>
      </div>
    </div>
  ),

  // Bold Accent S8
  (props: SignatureProps) => (
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
            href={`https://${props.website}`}
            style={{
              color: "#2563EB",
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
            href={props.linkedin}
            style={{
              color: "#2563EB",
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
              color: "#2563EB",
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
  ),

  // Corporate Blue S9
  (props: SignatureProps) => (
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
            href={props.linkedin}
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
            href={props.twitter}
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
  ),

  // Minimal Icons S10
  (props: SignatureProps) => (
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
  ),
];
