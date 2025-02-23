import { type SignatureProps } from "../types/signatures"
import { Mail, Phone, Globe, MapPin } from 'lucide-react'

const EmailSignature = (props: SignatureProps) => {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "100%",
        maxWidth: "550px",
        borderCollapse: "collapse",
        backgroundColor: "#ffffff",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "24px" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: "32px 24px", backgroundColor: "#f8f9fa" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ width: "100px", verticalAlign: "top" }}>
                            <img
                              src={props.image || "/placeholder.svg?height=80&width=80"}
                              alt=""
                              width="80"
                              height="80"
                              style={{
                                display: "block",
                                borderRadius: "50%",
                                border: "3px solid #ffffff",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                              }}
                            />
                          </td>
                          <td style={{ verticalAlign: "top", paddingLeft: "16px" }}>
                            <h2
                              style={{
                                margin: "0 0 4px 0",
                                fontSize: "20px",
                                color: "#1a1a1a",
                                fontWeight: "600",
                              }}
                            >
                              {props.name}
                            </h2>
                            {props.title && (
                              <p
                                style={{
                                  margin: "0 0 4px 0",
                                  fontSize: "16px",
                                  color: "#4a4a4a",
                                }}
                              >
                                {props.title}
                              </p>
                            )}
                            {props.company && (
                              <p
                                style={{
                                  margin: "0",
                                  fontSize: "14px",
                                  color: "#666666",
                                }}
                              >
                                {props.company}
                              </p>
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      padding: "24px",
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #eaeaea",
                    }}
                  >
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <tbody>
                        {props.email && (
                          <tr>
                            <td style={{ paddingBottom: "12px" }}>
                              <a
                                href={`mailto:${props.email}`}
                                style={{
                                  color: "#666666",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src="/icons/mail.svg"
                                  alt=""
                                  width="16"
                                  height="16"
                                  style={{ marginRight: "8px" }}
                                />
                                {props.email}
                              </a>
                            </td>
                          </tr>
                        )}
                        {props.phone && (
                          <tr>
                            <td style={{ paddingBottom: "12px" }}>
                              <a
                                href={`tel:${props.phone}`}
                                style={{
                                  color: "#666666",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src="/icons/phone.svg"
                                  alt=""
                                  width="16"
                                  height="16"
                                  style={{ marginRight: "8px" }}
                                />
                                {props.phone}
                              </a>
                            </td>
                          </tr>
                        )}
                        {props.website && (
                          <tr>
                            <td style={{ paddingBottom: "12px" }}>
                              <a
                                href={`https://${props.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#666666",
                                  textDecoration: "none",
                                  fontSize: "14px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src="/icons/globe.svg"
                                  alt=""
                                  width="16"
                                  height="16"
                                  style={{ marginRight: "8px" }}
                                />
                                {props.website}
                              </a>
                            </td>
                          </tr>
                        )}
                        {props.location && (
                          <tr>
                            <td>
                              <span
                                style={{
                                  color: "#666666",
                                  fontSize: "14px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  src="/icons/map-pin.svg"
                                  alt=""
                                  width="16"
                                  height="16"
                                  style={{ marginRight: "8px" }}
                                />
                                {props.location}
                              </span>
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </td>
                </tr>
                {props.socialMedia && Object.keys(props.socialMedia).length > 0 && (
                  <tr>
                    <td
                      style={{
                        padding: "16px 24px",
                        backgroundColor: "#ffffff",
                        borderTop: "1px solid #eaeaea",
                      }}
                    >
                      {Object.entries(props.socialMedia).map(([key, social]) =>
                        social.url ? (
                          <a
                            key={key}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: "inline-block",
                              marginRight: "12px",
                              color: "#666666",
                            }}
                          >
                            <img
                              src={social.icon || "/placeholder.svg?height=20&width=20"}
                              alt={social.name}
                              width="20"
                              height="20"
                              style={{
                                display: "block",
                                opacity: 0.8,
                              }}
                            />
                          </a>
                        ) : null
                      )}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default EmailSignature
