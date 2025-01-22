import React from "react";

interface SignatureProps {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  website: string;
  image: string;
  socialMedia: {
    facebook?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

const SignatureOne = (props: SignatureProps) => {
  return (
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        fontFamily: "Arial, sans-serif",
        color: "#000",
        maxWidth: "600px",
        width: "100%",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        background:
          "linear-gradient(135deg, #ffffff 50%, #f5f5f5 100%)",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <tbody>
        <tr>
          {/* Left Column */}
          <td
            style={{
              padding: "20px",
              textAlign: "center",
              verticalAlign: "top",
              borderRight: "2px solid #0077b5",
            }}
          >
            {/* Profile Image */}
            {props.image && (
              <img
                src={props.image}
                alt={`${props.name}'s profile`}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: "3px solid #ddd",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  marginBottom: "15px",
                }}
              />
            )}

            {/* Social Media Icons */}
            <table
              cellPadding="0"
              cellSpacing="0"
              style={{ margin: "0 auto" }}
            >
              <tbody>
                <tr>
                  {props.socialMedia.facebook && (
                    <td style={{ padding: "0 8px" }}>
                      <a
                        href={props.socialMedia.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                          alt="Facebook"
                          width="24"
                          height="24"
                          style={{
                            filter: "grayscale(100%)",
                            transition: "filter 0.3s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.filter = "grayscale(0%)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.filter = "grayscale(100%)")
                          }
                        />
                      </a>
                    </td>
                  )}
                  {props.socialMedia.linkedin && (
                    <td style={{ padding: "0 8px" }}>
                      <a
                        href={props.socialMedia.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/733/733561.png"
                          alt="LinkedIn"
                          width="24"
                          height="24"
                          style={{
                            filter: "grayscale(100%)",
                            transition: "filter 0.3s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.filter = "grayscale(0%)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.filter = "grayscale(100%)")
                          }
                        />
                      </a>
                    </td>
                  )}
                  {props.socialMedia.twitter && (
                    <td style={{ padding: "0 8px" }}>
                      <a
                        href={props.socialMedia.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                          alt="Twitter"
                          width="24"
                          height="24"
                          style={{
                            filter: "grayscale(100%)",
                            transition: "filter 0.3s",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.filter = "grayscale(0%)")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.filter = "grayscale(100%)")
                          }
                        />
                      </a>
                    </td>
                  )}
                </tr>
              </tbody>
            </table>
          </td>

          {/* Right Column */}
          <td style={{ padding: "20px", verticalAlign: "top" }}>
            {/* Name */}
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                margin: "0 0 5px 0",
                color: "#000",
              }}
            >
              {props.name}
            </h2>
            {/* Title */}
            <p
              style={{
                margin: "5px 0",
                fontWeight: "600",
                color: "#555",
                fontSize: "16px",
              }}
            >
              {props.title}
            </p>
            {/* Phone */}
            <p
              style={{
                margin: "5px 0",
                color: "#333",
                fontSize: "14px",
              }}
            >
              📞 {props.phone}
            </p>
            {/* Email */}
            <p
              style={{
                margin: "5px 0",
                color: "#333",
                fontSize: "14px",
              }}
            >
              📧{" "}
              <a
                href={`mailto:${props.email}`}
                style={{
                  color: "#0073e6",
                  textDecoration: "none",
                }}
              >
                {props.email}
              </a>
            </p>
            {/* Location */}
            <p
              style={{
                margin: "5px 0",
                color: "#333",
                fontSize: "14px",
              }}
            >
              📍 {props.location}
            </p>
            {/* Website */}
            <p
              style={{
                margin: "5px 0",
                color: "#333",
                fontSize: "14px",
              }}
            >
              🌐{" "}
              <a
                href={props.website}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#0073e6",
                  textDecoration: "none",
                }}
              >
                {props.website}
              </a>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureOne;
