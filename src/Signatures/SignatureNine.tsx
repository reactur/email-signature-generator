import { Mail, Phone, Globe, MapPin, Linkedin, Twitter } from "lucide-react"
import type { SignatureProps } from "../types/signatures"

const SignatureNine = (props: SignatureProps) => {
  return (
    <div
      style={{
        padding: "24px",
        background: "linear-gradient(to right, #f8fafc, #ffffff)",
        borderLeft: "4px solid #0f172a",
        borderRadius: "4px",
        maxWidth: "600px",
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#0f172a",
                margin: "0 0 4px 0",
                letterSpacing: "-0.025em",
              }}
            >
              {props.name}
            </h3>
            {props.title && (
              <p
                style={{
                  fontSize: "16px",
                  color: "#475569",
                  margin: "0 0 2px 0",
                  fontWeight: "500",
                }}
              >
                {props.title}
              </p>
            )}
            {props.company && (
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  margin: "0",
                }}
              >
                {props.company}
              </p>
            )}
          </div>

          {/* Social Links */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              padding: "4px 0",
            }}
          >
            {props.linkedin && (
              <a
                href={`https://linkedin.com/in/${props.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0f172a",
                  padding: "8px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.2s ease",
                }}
              >
                <Linkedin size={18} />
              </a>
            )}
            {props.twitter && (
              <a
                href={`https://twitter.com/${props.twitter.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0f172a",
                  padding: "8px",
                  borderRadius: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.2s ease",
                }}
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div
          style={{
            display: "grid",
            gap: "12px",
            fontSize: "14px",
            color: "#475569",
          }}
        >
          {props.email && (
            <a
              href={`mailto:${props.email}`}
              style={{
                color: "#475569",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Mail size={16} />
              {props.email}
            </a>
          )}
          {props.phone && (
            <a
              href={`tel:${props.phone}`}
              style={{
                color: "#475569",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Phone size={16} />
              {props.phone}
            </a>
          )}
          {props.website && (
            <a
              href={`https://${props.website}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#475569",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Globe size={16} />
              {props.website}
            </a>
          )}
          {props.location && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <MapPin size={16} />
              {props.location}
            </div>
          )}
        </div>
      </div>

      {/* Optional: Separator line */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, #e2e8f0, transparent)",
          margin: "20px 0 0 0",
        }}
      />
    </div>
  )
}

export default SignatureNine

