import { type SignatureProps } from "../types/signatures"

const SignatureTwo = (props: SignatureProps) => {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: "100%",
        maxWidth: "600px",
        borderCollapse: "collapse",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "25px" }}>
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                width: "100%",
                borderCollapse: "collapse",
                borderLeft: "3px solid #2e3b80",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ paddingLeft: "25px" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: "100%", borderCollapse: "collapse" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ paddingBottom: "20px" }}>
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
                                        color: "#2e3b80",
                                        lineHeight: "1.2",
                                      }}
                                    >
                                      {props.name}
                                    </span>
                                    <span
                                      style={{
                                        display: "block",
                                        fontSize: "16px",
                                        color: "#666666",
                                        marginTop: "4px",
                                      }}
                                    >
                                      {props.title}
                                    </span>
                                  </td>
                                  <td
                                    style={{
                                      verticalAlign: "top",
                                      textAlign: "right",
                                      paddingLeft: "20px",
                                    }}
                                  >
                                    <img
                                      src={props.image || "/placeholder.svg?height=80&width=80"}
                                      alt=""
                                      width="80"
                                      height="80"
                                      style={{
                                        display: "block",
                                        marginLeft: "auto",
                                      }}
                                    />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <table
                              cellPadding="0"
                              cellSpacing="0"
                              style={{
                                width: "100%",
                                borderCollapse: "collapse",
                                borderTop: "1px solid #e5e5e5",
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td style={{ paddingTop: "15px" }}>
                                    <table
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{ borderCollapse: "collapse" }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{
                                              backgroundColor: "#2e3b80",
                                              color: "#ffffff",
                                              fontSize: "12px",
                                              padding: "4px 12px",
                                              whiteSpace: "nowrap",
                                            }}
                                          >
                                            {props.company}
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td style={{ paddingTop: "15px" }}>
                                    <table
                                      cellPadding="0"
                                      cellSpacing="0"
                                      style={{ borderCollapse: "collapse" }}
                                    >
                                      <tbody>
                                        <tr>
                                          {props.phone && (
                                            <td
                                              style={{
                                                paddingRight: "20px",
                                                whiteSpace: "nowrap",
                                              }}
                                            >
                                              <a
                                                href={`tel:${props.phone}`}
                                                style={{
                                                  color: "#666666",
                                                  fontSize: "13px",
                                                  textDecoration: "none",
                                                }}
                                              >
                                                {props.phone}
                                              </a>
                                            </td>
                                          )}
                                          {props.email && (
                                            <td
                                              style={{
                                                paddingRight: "20px",
                                                whiteSpace: "nowrap",
                                              }}
                                            >
                                              <a
                                                href={`mailto:${props.email}`}
                                                style={{
                                                  color: "#666666",
                                                  fontSize: "13px",
                                                  textDecoration: "none",
                                                }}
                                              >
                                                {props.email}
                                              </a>
                                            </td>
                                          )}
                                          {props.website && (
                                            <td style={{ whiteSpace: "nowrap" }}>
                                              <a
                                                href={`https://${props.website}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                  color: "#666666",
                                                  fontSize: "13px",
                                                  textDecoration: "none",
                                                }}
                                              >
                                                {props.website}
                                              </a>
                                            </td>
                                          )}
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                {props.location && (
                                  <tr>
                                    <td style={{ paddingTop: "10px" }}>
                                      <span
                                        style={{
                                          color: "#666666",
                                          fontSize: "13px",
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
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default SignatureTwo
