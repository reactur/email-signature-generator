interface SignatureProps {
  name: string
  title: string
  company: string
  email: string
  phone: string
  website: string
  location: string
  image: string
  socialMedia: {
    [key: string]: {
      url: string
      icon: string
      name: string
    }
  }
}

const SignatureOne = (props: SignatureProps) => {
  const contactInfo = [
    { icon: "📧", value: props.email, href: `mailto:${props.email}`, isLink: true },
    { icon: "📞", value: props.phone, href: `tel:${props.phone}`, isLink: true },
    { icon: "🌐", value: props.website, href: `https://${props.website}`, isLink: true },
    { icon: "📍", value: props.location, href: "", isLink: false },
  ]

  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
        maxWidth: "600px",
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
      }}
    >
      <tbody>
        <tr>
          {/* Profile Column */}
          <td
            style={{
              width: "140px",
              padding: "24px",
              backgroundColor: "#f8fafc",
              borderRight: "1px solid #e2e8f0",
              verticalAlign: "top",
            }}
          >
            <img
              src={props.image || "/placeholder.svg"}
              alt={props.name}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "60px",
                border: "3px solid #fff",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                marginBottom: "16px",
              }}
            />

            {/* Social Media Icons */}
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{
                margin: "0 auto",
              }}
            >
              <tbody>
                <tr>
                  {Object.entries(props.socialMedia).map(([key, social], index) => (
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
                          src={social.icon || "/placeholder.svg"}
                          alt={social.name}
                          width="24"
                          height="24"
                          style={{
                            filter: "grayscale(100%)",
                            transition: "filter 0.3s",
                            opacity: "0.8",
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.filter = "grayscale(0%)"
                            e.currentTarget.style.opacity = "1"
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.filter = "grayscale(100%)"
                            e.currentTarget.style.opacity = "0.8"
                          }}
                        />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </td>

          <td style={{ padding: "24px", verticalAlign: "top" }}>
            <table cellPadding="0" cellSpacing="0">
              <tbody>
             
                <tr>
                  <td style={{ paddingBottom: "4px" }}>
                    <h2
                      style={{
                        margin: "0",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#1a202c",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {props.name}
                    </h2>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingBottom: "16px" }}>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "15px",
                        color: "#4a5568",
                        fontWeight: "500",
                      }}
                    >
                      {props.title} • {props.company}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingBottom: "16px" }}>
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
                          fontSize: "14px",
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
                            target={info.href.startsWith("http") ? "_blank" : undefined}
                            rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
  )
}

export default SignatureOne

