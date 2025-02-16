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
      }}
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
                backgroundColor: "#6366f1",
                border: "1px solid #4f46e5",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ padding: "35px 25px", textAlign: "center" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        width: "100%",
                        borderCollapse: "collapse",
                      }}
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
                                margin: "0 auto",
                                border: "4px solid #ffffff",
                                backgroundColor: "#ffffff",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ paddingTop: "20px", textAlign: "center" }}>
                            <span
                              style={{
                                display: "block",
                                color: "#ffffff",
                                fontSize: "24px",
                                fontWeight: "bold",
                                lineHeight: "1.2",
                              }}
                            >
                              {props.name}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ paddingTop: "5px", textAlign: "center" }}>
                            <span
                              style={{
                                display: "block",
                                color: "#e0e7ff",
                                fontSize: "16px",
                                fontStyle: "italic",
                              }}
                            >
                              {props.title}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ paddingTop: "5px", textAlign: "center" }}>
                            <span
                              style={{
                                display: "block",
                                color: "#c7d2fe",
                                fontSize: "14px",
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
                <tr>
                  <td
                    style={{
                      backgroundColor: "#4f46e5",
                      padding: "25px",
                    }}
                  >
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{
                        width: "100%",
                        maxWidth: "320px",
                        margin: "0 auto",
                        borderCollapse: "collapse",
                      }}
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
                                        src="/placeholder.svg?height=16&width=16"
                                        alt=""
                                        width="16"
                                        height="16"
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
                            <td style={{ paddingBottom: "12px" }}>
                              <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td style={{ width: "22px", paddingRight: "10px" }}>
                                      <img
                                        src="/placeholder.svg?height=16&width=16"
                                        alt=""
                                        width="16"
                                        height="16"
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
                            <td style={{ paddingBottom: "12px" }}>
                              <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td style={{ width: "22px", paddingRight: "10px" }}>
                                      <img
                                        src="/placeholder.svg?height=16&width=16"
                                        alt=""
                                        width="16"
                                        height="16"
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
                        {props.location && (
                          <tr>
                            <td>
                              <table cellPadding="0" cellSpacing="0">
                                <tbody>
                                  <tr>
                                    <td style={{ width: "22px", paddingRight: "10px" }}>
                                      <img
                                        src="/placeholder.svg?height=16&width=16"
                                        alt=""
                                        width="16"
                                        height="16"
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
                      </tbody>
                    </table>
                  </td>
                </tr>
                {props.socialMedia && Object.keys(props.socialMedia).length > 0 && (
                  <tr>
                    <td
                      style={{
                        backgroundColor: "#4338ca",
                        padding: "20px",
                        textAlign: "center",
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
                              marginLeft: "6px",
                              marginRight: "6px",
                              textDecoration: "none",
                            }}
                          >
                            <img
                              src={social.icon || "/placeholder.svg?height=20&width=20"}
                              alt={social.name}
                              width="20"
                              height="20"
                              style={{
                                display: "block",
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
