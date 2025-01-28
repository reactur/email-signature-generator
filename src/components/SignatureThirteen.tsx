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
    { url: website, icon: "/icons/website.png", alt: "Website" },
    { url: linkedin, icon: "/icons/linkedin-mini.png", alt: "LinkedIn" },
    { url: twitter, icon: "/icons/x-mini.png", alt: "X (Twitter)" },
    { url: facebook, icon: "/icons/facebook-mini.png", alt: "Facebook" },
    { url: instagram, icon: "/icons/instagram-mini.png", alt: "Instagram" },
    { url: youtube, icon: "/icons/youtube-mini.png", alt: "YouTube" },
    { url: tiktok, icon: "/icons/tiktok-mini.png", alt: "TikTok" },
    { url: github, icon: "/icons/github-mini.png", alt: "GitHub" },
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
