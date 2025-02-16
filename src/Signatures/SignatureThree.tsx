import { type SignatureProps } from "../types/signatures"

const EmailSignature = (props: SignatureProps) => {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "100%",
        maxWidth: "450px",
        borderCollapse: "collapse",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #e2e8f0",
      }}
    >
      <tbody>
        {/* Header Section */}
        <tr>
          <td style={{ backgroundColor: "#0052cc", textAlign: "center", padding: "25px 15px" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <img
                      src={props.image || "/placeholder.svg?height=100&width=100"}
                      alt=""
                      width="100"
                      height="100"
                      style={{
                        display: "block",
                        width: "100px",
                        height: "100px",
                        margin: "0 auto",
                        border: "3px solid #ffffff",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingTop: "15px", textAlign: "center" }}>
                    <span
                      style={{
                        display: "block",
                        color: "#ffffff",
                        fontSize: "22px",
                        fontWeight: "bold",
                        lineHeight: "1.2",
                      }}
                    >
                      {props.name}
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#e2e8f0",
                        fontSize: "16px",
                        marginTop: "5px",
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
          <td style={{ padding: "20px" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              <tbody>
                {props.email && (
                  <tr>
                    <td style={{ paddingBottom: "12px" }}>
                      <table cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            <td style={{ width: "22px", paddingRight: "10px" }}>
                              <img
                                src="/placeholder.svg?height=18&width=18"
                                alt=""
                                width="18"
                                height="18"
                                style={{
                                  display: "block",
                                }}
                              />
                            </td>
                            <td>
                              <a
                                href={`mailto:${props.email}`}
                                style={{
                                  color: "#2d3748",
                                  fontSize: "14px",
                                  textDecoration: "none",
                                }}
                              >
                                {props.email}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}

                {props.phone && (
                  <tr>
                    <td style={{ paddingBottom: "12px" }}>
                      <table cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            <td style={{ width: "22px", paddingRight: "10px" }}>
                              <img
                                src="/placeholder.svg?height=18&width=18"
                                alt=""
                                width="18"
                                height="18"
                                style={{
                                  display: "block",
                                }}
                              />
                            </td>
                            <td>
                              <a
                                href={`tel:${props.phone}`}
                                style={{
                                  color: "#2d3748",
                                  fontSize: "14px",
                                  textDecoration: "none",
                                }}
                              >
                                {props.phone}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}

                {props.website && (
                  <tr>
                    <td style={{ paddingBottom: "12px" }}>
                      <table cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            <td style={{ width: "22px", paddingRight: "10px" }}>
                              <img
                                src="/placeholder.svg?height=18&width=18"
                                alt=""
                                width="18"
                                height="18"
                                style={{
                                  display: "block",
                                }}
                              />
                            </td>
                            <td>
                              <a
                                href={`https://${props.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#2d3748",
                                  fontSize: "14px",
                                  textDecoration: "none",
                                }}
                              >
                                {props.website}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}

                {props.location && (
                  <tr>
                    <td>
                      <table cellPadding="0" cellSpacing="0">
                        <tbody>
                          <tr>
                            <td style={{ width: "22px", paddingRight: "10px" }}>
                              <img
                                src="/placeholder.svg?height=18&width=18"
                                alt=""
                                width="18"
                                height="18"
                                style={{
                                  display: "block",
                                }}
                              />
                            </td>
                            <td>
                              <span
                                style={{
                                  color: "#2d3748",
                                  fontSize: "14px",
                                }}
                              >
                                {props.location}
                              </span>
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

        {/* Social Media */}
        <tr>
          <td style={{ padding: "0 20px 20px" }}>
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
                        borderTop: "1px solid #e2e8f0",
                        paddingTop: "15px",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ textAlign: "center" }}>
                            {props.socialMedia && Object.entries(props.socialMedia).map(([key, social]) =>
                              social.url ? (
                                <a
                                  key={key}
                                  href={social.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: "inline-block",
                                    marginRight: "12px",
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
              </tbody>
            </table>
          </td>
        </tr>

        {/* Footer */}
        <tr>
          <td
            style={{
              backgroundColor: "#f7fafc",
              padding: "12px 20px",
              textAlign: "center",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            <span
              style={{
                color: "#a0aec0",
                fontSize: "12px",
              }}
            >
              © 2025 {props.company}. All rights reserved.
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default EmailSignature
