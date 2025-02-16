import React from "react";
import {SignatureProps} from "../types/signatures"


const SignatureThirteen: React.FC<SignatureProps> = ({
  name,
  phone,
  email,
  location,
  image,
  website,
  linkedin,
  twitter,
  facebook,
  instagram,
  youtube,
  tiktok,
  github,
}) => {

  const socialMedia = [
    { url: website, icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/internetarchive.svg", alt: "Website" },
    { url: linkedin, icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg", alt: "LinkedIn" },
    { url: twitter, icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/x.svg", alt: "X (Twitter)" },
    { url: facebook, icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/facebook.svg", alt: "Facebook" },
    { url: instagram, icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg", alt: "Instagram" },
    { url: youtube, icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/youtube.svg", alt: "YouTube" },
    { url: tiktok, icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tiktok.svg", alt: "TikTok" },
    { url: github, icon: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg", alt: "GitHub" },
  ];
  

  return (
    <table width="470" style={{ fontSize: "12.8px", borderCollapse: "collapse" }}>
      <tbody>
        <tr valign="top">
          <td style={{ width: "10px", padding: "1px 10px" }}>
            <img
              src={image}
              alt="Profile"
              style={{ display: "block", width: "auto", height: "83px" }}
            />
          </td>
          <td style={{ borderRight: "1px solid #666", width: "1px" }}></td>
          <td style={{ textAlign: "left", lineHeight: "normal", padding: "0 10px" }}>
            <div style={{ fontSize: "14px", color: "#646464" }}>
              <b>{name}</b>
              <br />
            </div>
            <div style={{ fontSize: "13px", margin: "6px 0 5px" }}>
              <span style={{ color: "#8d8d8d" }}>
                <a
                  href={`tel:${phone}`}
                  style={{ color: "#8d8d8d", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {phone}
                </a>
                &nbsp; | &nbsp;
                <a
                  href={`mailto:${email}`}
                  style={{ color: "#8d8d8d", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {email}
                </a>
                <br />
                <span>{location}</span>
              </span>
            </div>
            <div>
              {socialMedia.map(
                (social, index) =>
                  social.url && ( 
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginRight: "4px", display: "inline-block" }}
                    >
                      <img src={social.icon} alt={social.alt} width="24" height="24" />
                    </a>
                  )
              )}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SignatureThirteen;
