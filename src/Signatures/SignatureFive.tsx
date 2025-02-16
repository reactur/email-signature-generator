import { type SignatureProps } from "../types/signatures"

const EmailSignature = (props: SignatureProps) => {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "100%",
        maxWidth: "500px",
        borderCollapse: "collapse",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #e5e7eb",
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "24px" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{ width: "100%", borderCollapse: "collapse" }}
            >
              {/* Header with Image and Name */}
              <tbody>
                <tr>
                  <td>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ width: "80px", verticalAlign: "top" }}>
                            <img
                              src={props.image || "/placeholder.svg?height=80&width=80"}
                              alt=""
                              width="80"
                              height="80"
                              style={{
                                display: "block",
                                border: "2px solid #6366f1",
                              }}
                            />
                          </td>
                          <td style={{ width: "16px" }} />
                          <td style={{ verticalAlign: "top" }}>
                            <table
                              cellPadding="0"
                              cellSpacing="0"
                              style={{ width: "100%", borderCollapse: "collapse" }}
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <span
                                      style={{
                                        display: "block",
                                        fontSize: "24px",
                                        fontWeight: "bold",
                                        color: "#1a202c",
                                      }}
                                    >
                                      {props.name}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingTop: "4px" }}>
                                    <span
                                      style={{
                                        display: "block",
                                        fontSize: "16px",
                                        color: "#718096",
                                        fontStyle: "italic",
                                      }}
                                    >
                                      {props.title}
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingTop: "4px" }}>
                                    <span
                                      style={{
                                        display: "block",
                                        fontSize: "14px",
                                        color: "#a0aec0",
                                      }}
                                    >
                                      {props.company}
                                    </span>
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

                {/* Contact Information */}
                <tr>
                  <td style={{ paddingTop: "20px" }}>
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
                                    <td style={{ width: "24px", paddingRight: "8px" }}>
                                      <img
                                        src="/placeholder.svg?height=18&width=18"
                                        alt=""
                                        width="18"
                                        height="18"
                                        style={{ display: "block" }}
                                      />
                                    </td>
                                    <td>
                                      <a
                                        href={`mailto:${props.email}`}
                                        style={{
                                          color: "#555555",
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
                                    <td style={{ width: "24px", paddingRight: "8px" }}>
                                      <img
                                        src="/placeholder.svg?height=18&width=18"
                                        alt=""
                                        width="18"
                                        height="18"
                                        style={{ display: "block" }}
                                      />
                                    </td>
                                    <td>
                                      <a
                                        href={`tel:${props.phone}`}
                                        style={{
                                          color: "#555555",
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
                                    <td style={{ width: "24px", paddingRight: "8px" }}>
                                      <img
                                        src="/placeholder.svg?height=18&width=18"
                                        alt=""
                                        width="18"
                                        height="18"
                                        style={{ display: "block" }}
                                      />
                                    </td>
                                    <td>
                                      <a
                                        href={`https://${props.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          color: "#4a90e2",
                                          fontSize: "14px",
                                          textDecoration: "none",
                                          fontWeight: "bold",
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
                                    <td style={{ width: "24px", paddingRight: "8px" }}>
                                      <img
                                        src="/placeholder.svg?height=18&width=18"
                                        alt=""
                                        width="18"
                                        height="18"
                                        style={{ display: "block" }}
                                      />
                                    </td>
                                    <td>
                                      <span
                                        style={{
                                          color: "#555555",
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

                {/* Social Media Icons */}
                <tr>
                  <td style={{ paddingTop: "24px", textAlign: "center" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr>
                          <td>
                            {props.socialMedia && Object.entries(props.socialMedia).map(([key, social]) =>
                              social.url ? (
                                <a
                                  key={key}
                                  href={social.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{
                                    display: "inline-block",
                                    marginRight: "16px",
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
      </tbody>
    </table>
  )
}

export default EmailSignature
