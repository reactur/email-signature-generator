import { Mail, Phone, Globe, Linkedin, Twitter, MapPin } from "lucide-react";
import {SignatureProps} from "../types/signatures"

const SignatureTwo = (props: SignatureProps) => {
  const getIconAsBase64 = (icon: JSX.Element) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icon.props.children}</svg>`
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "100%",
        maxWidth: "600px",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        borderCollapse: "collapse",
        backgroundColor: "#ffffff",
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "24px", background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  {/* Profile Image Column */}
                  <td style={{ verticalAlign: "top", width: "120px", paddingRight: "24px" }}>
                    {props.image && (
                      <div
                        style={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        }}
                      >
                        <img
                          src={props.image}
                          alt={props.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    )}
                  </td>

                  {/* Content Column */}
                  <td style={{ verticalAlign: "top" }}>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        {/* Name and Title Section */}
                        <tr>
                          <td style={{ paddingBottom: "16px" }}>
                            <h2
                              style={{
                                margin: "0 0 4px 0",
                                fontSize: "24px",
                                fontWeight: "bold",
                                color: "#0f172a",
                                letterSpacing: "-0.025em",
                              }}
                            >
                              {props.name}
                            </h2>
                            <p
                              style={{
                                margin: "0 0 8px 0",
                                fontSize: "16px",
                                color: "#475569",
                                fontWeight: "500",
                              }}
                            >
                              {props.title}
                            </p>
                            <p
                              style={{
                                margin: "0",
                                fontSize: "15px",
                                color: "#64748b",
                              }}
                            >
                              {props.company}
                            </p>
                          </td>
                        </tr>

                        {/* Separator */}
                        <tr>
                          <td style={{ paddingBottom: "16px" }}>
                            <div
                              style={{
                                height: "2px",
                                background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
                                width: "48px",
                              }}
                            ></div>
                          </td>
                        </tr>

                        {/* Contact Information */}
                        <tr>
                          <td>
                            <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                              <tbody>
                                <tr>
                                  <td style={{ paddingBottom: "12px" }}>
                                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                      <tbody>
                                        <tr>
                                          <td style={{ paddingRight: "24px", whiteSpace: "nowrap" }}>
                                            <a
                                              href={`mailto:${props.email}`}
                                              style={{
                                                color: "#475569",
                                                textDecoration: "none",
                                                fontSize: "14px",
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <img
                                                src={getIconAsBase64(<Mail />) || "/placeholder.svg"}
                                                alt=""
                                                style={{
                                                  width: "16px",
                                                  height: "16px",
                                                  marginRight: "8px",
                                                  color: "#6366f1",
                                                }}
                                              />
                                              {props.email}
                                            </a>
                                          </td>
                                          <td style={{ whiteSpace: "nowrap" }}>
                                            <a
                                              href={`tel:${props.phone}`}
                                              style={{
                                                color: "#475569",
                                                textDecoration: "none",
                                                fontSize: "14px",
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <img
                                                src={getIconAsBase64(<Phone />) || "/placeholder.svg"}
                                                alt=""
                                                style={{
                                                  width: "16px",
                                                  height: "16px",
                                                  marginRight: "8px",
                                                  color: "#6366f1",
                                                }}
                                              />
                                              {props.phone}
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                                <tr>
                                  <td style={{ paddingBottom: "12px" }}>
                                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                      <tbody>
                                        <tr>
                                          <td style={{ paddingRight: "24px", whiteSpace: "nowrap" }}>
                                            <a
                                              href={`https://${props.website}`}
                                              style={{
                                                color: "#475569",
                                                textDecoration: "none",
                                                fontSize: "14px",
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <img
                                                src={getIconAsBase64(<Globe />) || "/placeholder.svg"}
                                                alt=""
                                                style={{
                                                  width: "16px",
                                                  height: "16px",
                                                  marginRight: "8px",
                                                  color: "#6366f1",
                                                }}
                                              />
                                              {props.website}
                                            </a>
                                          </td>
                                          <td style={{ whiteSpace: "nowrap" }}>
                                            <span
                                              style={{
                                                color: "#475569",
                                                fontSize: "14px",
                                                display: "flex",
                                                alignItems: "center",
                                              }}
                                            >
                                              <img
                                                src={getIconAsBase64(<MapPin />) || "/placeholder.svg"}
                                                alt=""
                                                style={{
                                                  width: "16px",
                                                  height: "16px",
                                                  marginRight: "8px",
                                                  color: "#6366f1",
                                                }}
                                              />
                                              {props.location}
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                                {/* Social Links */}
                                <tr>
                                  <td style={{ paddingTop: "8px" }}>
                                    <table cellPadding="0" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
                                      <tbody>
                                        <tr>
                                          <td style={{ paddingRight: "12px" }}>
                                            <a
                                              href={`https://${props.linkedin}`}
                                              style={{
                                                display: "inline-block",
                                                padding: "8px",
                                                backgroundColor: "#f8fafc",
                                                borderRadius: "8px",
                                                lineHeight: 0,
                                              }}
                                            >
                                              <img
                                                src={getIconAsBase64(<Linkedin />) || "/placeholder.svg"}
                                                alt="LinkedIn"
                                                style={{
                                                  width: "16px",
                                                  height: "16px",
                                                  color: "#0077b5",
                                                }}
                                              />
                                            </a>
                                          </td>
                                          <td>
                                            <a
                                              href={`https://twitter.com/${props.twitter.replace("@", "")}`}
                                              style={{
                                                display: "inline-block",
                                                padding: "8px",
                                                backgroundColor: "#f8fafc",
                                                borderRadius: "8px",
                                                lineHeight: 0,
                                              }}
                                            >
                                              <img
                                                src={getIconAsBase64(<Twitter />) || "/placeholder.svg"}
                                                alt="Twitter"
                                                style={{
                                                  width: "16px",
                                                  height: "16px",
                                                  color: "#1da1f2",
                                                }}
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default SignatureTwo

