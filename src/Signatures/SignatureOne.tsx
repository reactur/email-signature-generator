import type { SignatureProps } from "../types/signatures";

const SignatureOne = (props: SignatureProps) => {
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
          <td style={{ padding: "30px" }}>
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td style={{ width: "140px", verticalAlign: "top" }}>
                    <img
                      src={
                        props.image 
                      }
                      alt=""
                      width="140"
                      height="140"
                      style={{
                        display: "block",
                        width: "140px",
                        height: "140px",
                        maxWidth: "140px",
                        border: "2px solid #2563eb",
                        padding:"2px",
                        borderRadius:"50%"
                      }}
                    />
                  </td>
                  <td style={{ width: "30px" }} />
                  <td style={{ verticalAlign: "top" }}>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: "100%" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ paddingBottom: "5px" }}>
                            <span
                              style={{
                                display: "block",
                                fontSize: "22px",
                                fontWeight: "bold",
                                color: "#1a1a1a",
                                lineHeight: "1.3",
                                letterSpacing: "-0.5px",
                              }}
                            >
                              {props.name}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ paddingBottom: "15px" }}>
                            <span
                              style={{
                                display: "block",
                                fontSize: "16px",
                                color: "#2563eb",
                                lineHeight: "1.4",
                                letterSpacing: "-0.2px",
                              }}
                            >
                              {props.title}
                              {props.company && (
                                <>
                                  <span
                                    style={{
                                      color: "#6b7280",
                                      padding: "0 6px",
                                    }}
                                  >
                                    |
                                  </span>
                                  <span style={{ color: "#374151" }}>
                                    {props.company}
                                  </span>
                                </>
                              )}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td style={{ paddingBottom: "15px" }}>
                            <table cellPadding="0" cellSpacing="0">
                              <tbody>
                                <tr>
                                  <td>
                                    <div
                                      style={{
                                        width: "40px",
                                        height: "3px",
                                        fontSize: "1px",
                                        backgroundColor: "#2563eb",
                                      }}
                                    >
                                      &nbsp;
                                    </div>
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
                              style={{ width: "100%" }}
                            >
                              <tbody>
                                {props.phone && (
                                  <tr>
                                    <td style={{ paddingBottom: "8px" }}>
                                      <table cellPadding="0" cellSpacing="0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "75px" }}>
                                              <span
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#6b7280",
                                                  fontWeight: "500",
                                                }}
                                              >
                                                Phone
                                              </span>
                                            </td>
                                            <td>
                                              <a
                                                href={`tel:${props.phone}`}
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#374151",
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
                                {props.email && (
                                  <tr>
                                    <td style={{ paddingBottom: "8px" }}>
                                      <table cellPadding="0" cellSpacing="0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "75px" }}>
                                              <span
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#6b7280",
                                                  fontWeight: "500",
                                                }}
                                              >
                                                Email
                                              </span>
                                            </td>
                                            <td>
                                              <a
                                                href={`mailto:${props.email}`}
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#374151",
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
                                {props.website && (
                                  <tr>
                                    <td style={{ paddingBottom: "8px" }}>
                                      <table cellPadding="0" cellSpacing="0">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "75px" }}>
                                              <span
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#6b7280",
                                                  fontWeight: "500",
                                                }}
                                              >
                                                Website
                                              </span>
                                            </td>
                                            <td>
                                              <a
                                                href={`https://${props.website}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#374151",
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
                                            <td style={{ width: "75px" }}>
                                              <span
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#6b7280",
                                                  fontWeight: "500",
                                                }}
                                              >
                                                Address
                                              </span>
                                            </td>
                                            <td>
                                              <span
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#374151",
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
                      </tbody>
                    </table>
                  </td>
                </tr>
                {props.socialMedia &&
                  Object.keys(props.socialMedia).length > 0 && (
                    <tr>
                      <td colSpan={3} style={{ paddingTop: "25px" }}>
                        <table
                          cellPadding="0"
                          cellSpacing="0"
                          style={{ width: "100%" }}
                        >
                          <tbody>
                            <tr>
                              <td>
                                <div
                                  style={{
                                    height: "1px",
                                    fontSize: "1px",
                                    backgroundColor: "#e5e7eb",
                                  }}
                                >
                                  &nbsp;
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ paddingTop: "20px" }}>
                                <table cellPadding="0" cellSpacing="0">
                                  <tbody>
                                    <tr>
                                      {Object.entries(props.socialMedia).map(
                                        ([key, social]) =>
                                          social.url ? (
                                            <td
                                              key={key}
                                              style={{ paddingRight: "15px" }}
                                            >
                                              <a
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                  textDecoration: "none",
                                                }}
                                              >
                                                <img
                                                  src={
                                                    social.icon 
                                                  }
                                                  alt={social.name}
                                                  width="28"
                                                  height="28"
                                                  style={{
                                                    display: "block",
                                                    width: "28px",
                                                    height: "28px",
                                                  }}
                                                />
                                              </a>
                                            </td>
                                          ) : null
                                      )}
                                    </tr>
                                  </tbody>
                                </table>
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
  );
};

export default SignatureOne;
