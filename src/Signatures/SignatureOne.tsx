import { SignatureProps } from "../types/signatures";

const SignatureOne = (props: SignatureProps) => {
  const contactInfo = [
    {
      icon: "📧",
      value: props.email,
      href: `mailto:${props.email}`,
      isLink: true,
    },
    {
      icon: "📞",
      value: props.phone,
      href: `tel:${props.phone}`,
      isLink: true,
    },
    {
      icon: "🌐",
      value: props.website,
      href: `https://${props.website}`,
      isLink: true,
    },
    { icon: "📍", value: props.location, href: "", isLink: false },
  ];

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        fontFamily:
          'Arial, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto',
        maxWidth: "600px",
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#ffffff",
        border: "1px solid #e2e8f0",
      }}
    >
      <tbody>
        <tr>
          <td
            style={{
              width: "140px",
              padding: "20px",
              backgroundColor: "#202223",
              borderRight: "1px solid #e2e8f0",
              verticalAlign: "top",
            }}
          >
            <img
              src={props.image || "/placeholder.svg"}
              alt={props.name}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "2px solid #ffffff",
                display: "block",
                margin: "0 auto 16px auto",
              }}
            />

            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <tbody>
                <tr>
                  {props.socialMedia &&
                    Object.entries(props.socialMedia).map(
                      (
                        [key, social]: [
                          string,
                          { url: string; icon: string; name: string }
                        ],
                        index
                      ) =>
                        social.url ? (
                          <td
                            key={key}
                            style={{
                              padding: index !== 0 ? "0 0 0 8px" : "0",
                            }}
                          >
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                display: "inline-block",
                                lineHeight: "0",
                              }}
                            >
                              <img
                                src={social.icon}
                                alt={social.name}
                                width="34"
                                height="34"
                                style={{
                                  display: "block",
                                  filter: "grayscale(100%)",
                                  opacity: "0.8",
                                  transition: "all 0.3s ease",
                                  maxWidth: "34px !important",
                                  height: "34px !important",
                                  objectFit: "contain",
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

          <td
            style={{
              padding: "20px",
              verticalAlign: "top",
            }}
          >
            <table cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ paddingBottom: "8px" }}>
                    <h2
                      style={{
                        margin: "0",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#1a202c",
                        lineHeight: "1.3",
                      }}
                    >
                      {props.name}
                    </h2>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingBottom: "12px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        color: "#4a5568",
                        fontWeight: "500",
                        lineHeight: "1.4",
                      }}
                    >
                      {props.title} • {props.company}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingBottom: "12px" }}>
                    <div
                      style={{
                        height: "1px",
                        width: "32px",
                        backgroundColor: "#e2e8f0",
                      }}
                    />
                  </td>
                </tr>

                {contactInfo.map((info, index) => (
                  <tr key={index}>
                    <td style={{ paddingBottom: "8px" }}>
                      <p
                        style={{
                          margin: "0",
                          fontSize: "13px",
                          color: "#4a5568",
                          lineHeight: "1.5",
                        }}
                      >
                        <span style={{ marginRight: "8px" }}>{info.icon}</span>
                        {info.isLink ? (
                          <a
                            href={info.href}
                            style={{
                              color: "#2d3748",
                              textDecoration: "none",
                              borderBottom: "1px dotted #cbd5e0",
                            }}
                            target={
                              info.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              info.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span style={{ color: "#2d3748" }}>{info.value}</span>
                        )}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureOne;
