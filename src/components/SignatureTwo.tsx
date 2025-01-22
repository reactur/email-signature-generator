import { Mail, Phone, Globe, Linkedin, Twitter, MapPin } from "lucide-react";

interface SignatureProps {
  name: string;
  title: string;
  company: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  twitter: string;
  location: string;
}

const SignatureTwo = (props: SignatureProps) => {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      width="100%"
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
        lineHeight: "1.5",
        color: "#333",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              borderLeft: "4px solid #4F46E5",
              padding: "16px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <table cellPadding="0" cellSpacing="0" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#333",
                        margin: "0 0 4px 0",
                      }}
                    >
                      {props.name}
                    </h3>
                    <p style={{ margin: "0 0 8px 0", color: "#555" }}>
                      {props.title} at {props.company}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td>
                    <table
                      cellPadding="0"
                      cellSpacing="0"
                      style={{ width: "100%", marginTop: "8px" }}
                    >
                      <tbody>
                        <tr>
                          <td width="20">
                            <Mail size={16} style={{ color: "#4F46E5" }} />
                          </td>
                          <td>{props.email}</td>
                        </tr>
                        <tr>
                          <td width="20">
                            <Phone size={16} style={{ color: "#4F46E5" }} />
                          </td>
                          <td>{props.phone}</td>
                        </tr>
                        <tr>
                          <td width="20">
                            <Globe size={16} style={{ color: "#4F46E5" }} />
                          </td>
                          <td>
                            <a
                              href={props.website ? `https://${props.website}` : "#"}
                              style={{
                                color: "#4F46E5",
                                textDecoration: "none",
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {props.website}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td width="20">
                            <MapPin size={16} style={{ color: "#4F46E5" }} />
                          </td>
                          <td>{props.location}</td>
                        </tr>
                        <tr>
                          <td width="20">
                            <Linkedin size={16} style={{ color: "#0077B5" }} />
                          </td>
                          <td>
                            <a
                              href={
                                props.linkedin ? `https://${props.linkedin}` : "#"
                              }
                              style={{
                                color: "#0077B5",
                                textDecoration: "none",
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {props.linkedin}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td width="20">
                            <Twitter size={16} style={{ color: "#1DA1F2" }} />
                          </td>
                          <td>
                            <a
                              href={`https://twitter.com/${props.twitter.replace(
                                "@",
                                ""
                              )}`}
                              style={{
                                color: "#1DA1F2",
                                textDecoration: "none",
                              }}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {props.twitter}
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
  );
};

export default SignatureTwo;
