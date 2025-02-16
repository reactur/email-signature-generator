import { type SignatureProps } from "../types/signatures"

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
        fontFamily: "Arial, sans-serif",
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "30px" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                backgroundColor: "#f8fafc",
                border: "1px solid #e2e8f0",
              }}
            >
              <tbody>
                {/* Header Section */}
                <tr>
                  <td
                    style={{
                      backgroundColor: "#1e40af",
                      padding: "25px",
                      textAlign: "center",
                    }}
                  >
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src={props.image || "/placeholder.svg?height=100&width=100"}
                              alt=""
                              width="100"
                              height="100"
                              style={{
                                display: "block",
                                margin: "0 auto",
                                border: "3px solid #ffffff",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ paddingTop: "15px" }}>
                            <span
                              style={{
                                display: "block",
                                color: "#ffffff",
                                fontSize: "24px",
                                fontWeight: "bold",
                                letterSpacing: "-0.5px",
                              }}
                            >
                              {props.name}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ paddingTop: "5px" }}>
                            <span
                              style={{
                                display: "block",
                                color: "#93c5fd",
                                fontSize: "16px",
                                letterSpacing: "0.5px",
                              }}
                            >
                              {props.title}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                {/* Contact Information */}
                <tr>
                  <td style={{ padding: "25px" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr>
                          <td>
                            <table
                              cellPadding="0"
                              cellSpacing="0"
                              style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                backgroundColor: "#ffffff",
                                border: "1px solid #e2e8f0",
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td style={{ padding: "15px" }}>
                                    <table
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{ width: "100%", borderCollapse: "collapse" }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{
                                              color: "#1e40af",
                                              fontSize: "14px",
                                              fontWeight: "bold",
                                              paddingBottom: "10px",
                                            }}
                                          >
                                            {props.company}
                                          </td>
                                        </tr>
                                        {props.email && (
                                          <tr>
                                            <td style={{ paddingBottom: "8px" }}>
                                              <a
                                                href={`mailto:${props.email}`}
                                                style={{
                                                  color: "#475569",
                                                  fontSize: "14px",
                                                  textDecoration: "none",
                                                }}
                                              >
                                                {props.email}
                                              </a>
                                            </td>
                                          </tr>
                                        )}
                                        {props.phone && (
                                          <tr>
                                            <td style={{ paddingBottom: "8px" }}>
                                              <a
                                                href={`tel:${props.phone}`}
                                                style={{
                                                  color: "#475569",
                                                  fontSize: "14px",
                                                  textDecoration: "none",
                                                }}
                                              >
                                                {props.phone}
                                              </a>
                                            </td>
                                          </tr>
                                        )}
                                        {props.website && (
                                          <tr>
                                            <td style={{ paddingBottom: "8px" }}>
                                              <a
                                                href={`https://${props.website}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                  color: "#1e40af",
                                                  fontSize: "14px",
                                                  textDecoration: "none",
                                                }}
                                              >
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
                                                  color: "#475569",
                                                  fontSize: "14px",
                                                }}
                                              >
                                                {props.location}
                                              </span>
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        {/* Social Media */}
                        {props.socialMedia && Object.keys(props.socialMedia).length > 0 && (
                          <tr>
                            <td style={{ paddingTop: "20px", textAlign: "center" }}>
                              <table
                                cellPadding="0"
                                cellSpacing="0"
                                style={{
                                  width: "100%",
                                  borderCollapse: "collapse",
                                  backgroundColor: "#ffffff",
                                  border: "1px solid #e2e8f0",
                                }}
                              >
                                <tbody>
                                  <tr>
                                    <td style={{ padding: "12px" }}>
                                      {Object.entries(props.socialMedia).map(([key, social]) =>
                                        social.url ? (
                                          <a
                                            key={key}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                              display: "inline-block",
                                              marginRight: "15px",
                                              textDecoration: "none",
                                            }}
                                          >
                                            <img
                                              src={social.icon || "/placeholder.svg?height=24&width=24"}
                                              alt={social.name}
                                              width="24"
                                              height="24"
                                              style={{
                                                display: "block",
                                              }}
                                            />
                                          </a>
                                        ) : null
                                      )}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        )}
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

export default EmailSignature
