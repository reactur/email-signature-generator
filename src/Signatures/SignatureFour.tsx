import type { SignatureProps } from "../types/signatures"

const EmailSignature = (props: SignatureProps) => {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "100%",
        maxWidth: "450px",
        borderCollapse: "collapse",
        backgroundColor: "#1a202c",
        fontFamily: "Arial, sans-serif",
        border: "1px solid #2d3748",
      }}
    >
      <tbody>
        {/* Header with Image and Name */}
        <tr>
          <td style={{ padding: "20px 20px 0" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <img
                      src={props.image || "/placeholder.svg?height=80&width=80"}
                      alt=""
                      width="80"
                      height="80"
                      style={{
                        display: "block",
                        margin: "0 auto",
                        border: "2px solid #63b3ed",
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ textAlign: "center", paddingTop: "16px" }}>
                    <span
                      style={{
                        display: "block",
                        color: "#ffffff",
                        fontSize: "20px",
                        fontWeight: "bold",
                        lineHeight: "1.2",
                      }}
                    >
                      {props.name}
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#a0aec0",
                        fontSize: "14px",
                        marginTop: "4px",
                      }}
                    >
                      {props.title}
                    </span>
                    <span
                      style={{
                        display: "block",
                        color: "#718096",
                        fontSize: "14px",
                        marginTop: "4px",
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

        {/* Contact Information Grid */}
        <tr>
          <td style={{ padding: "20px" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ width: "50%", verticalAlign: "top" }}>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        {props.email && (
                          <tr>
                            <td style={{ paddingBottom: "16px" }}>
                              <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td style={{ width: "24px", paddingRight: "8px" }}>
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
                                          color: "#ffffff",
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
                            <td style={{ paddingBottom: "16px" }}>
                              <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td style={{ width: "24px", paddingRight: "8px" }}>
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
                                          color: "#ffffff",
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
                                          color: "#ffffff",
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
                      </tbody>
                    </table>
                  </td>
                  <td style={{ width: "50%", verticalAlign: "top" }}>
                    <table cellPadding="0" cellSpacing="0" style={{ width: "100%", borderCollapse: "collapse" }}>
                      <tbody>
                        {props.location && (
                          <tr>
                            <td style={{ paddingBottom: "16px" }}>
                              <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td style={{ width: "24px", paddingRight: "8px" }}>
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
                                          color: "#ffffff",
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
                        {props.socialMedia &&
                          Object.entries(props.socialMedia).map(([key, social]) =>
                            social.url ? (
                              <tr key={key}>
                                <td style={{ paddingBottom: "16px" }}>
                                  <table cellPadding="0" cellSpacing="0">
                                    <tbody>
                                      <tr>
                                        <td style={{ width: "24px", paddingRight: "8px" }}>
                                          <img
                                            src={social.icon || "/placeholder.svg?height=18&width=18"}
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
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                              color: "#ffffff",
                                              fontSize: "14px",
                                              textDecoration: "none",
                                            }}
                                          >
                                            {social.name}
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            ) : null,
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

