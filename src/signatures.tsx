import SignatureOne from "./Signatures/SignatureOne";
import SignatureTwo from "./Signatures/SignatureTwo";
import SignatureThree from "./Signatures/SignatureThree";
import SignatureFour from "./Signatures/SignatureFour";
import SignatureFive from "./Signatures/SignatureFive";
import SignatureSix from "./Signatures/SignatureSix";
import SignatureSeven from "./Signatures/SignatureSeven";
import SignatureEight from "./Signatures/SignatureEight";
import SignatureNine from "./Signatures/SignatureNine";
import SignatureTen from "./Signatures/SignatureTen";
import SignatureEleven from "./Signatures/SignatureEleven";
import SignatureTwelve from "./Signatures/SignatureTwelve";
import EmailSignature from "./Signatures/SignatureThirteen";
import { SignatureProps } from "./types/signatures";

export const signatures: ((props: SignatureProps) => JSX.Element)[] = [
  (props) => (
    <SignatureOne
      {...props}
      socialMedia={{
        linkedin: {
          url: props.linkedin,
          icon: "https://res.cloudinary.com/dkiow1fed/image/upload/v1738050615/myImages/fyoseagbv3vpk5pfs5a8.png",
          name: "LinkedIn",
        },
        instagram: {
          url: props.instagram,
          icon: "https://res.cloudinary.com/dkiow1fed/image/upload/v1738050614/myImages/ktloviwi4rii9pcjzfsl.png",
          name: "Instagram",
        },
        twitter: {
          url: props.twitter,
          icon: "https://res.cloudinary.com/dkiow1fed/image/upload/v1738050616/myImages/mr5khmgzja02pg19pada.png",
          name: "Twitter",
        },
        youtube: {
          url: props.youtube,
          icon: "https://res.cloudinary.com/dkiow1fed/image/upload/v1738050617/myImages/nzyk1soz7yizawtvvyfp.png",
          name: "YouTube",
        },
        tiktok: {
          url: props.tiktok,
          icon: "https://res.cloudinary.com/dkiow1fed/image/upload/v1738050615/myImages/kuet5f4bqruqp5c7vbtf.png",
          name: "TikTok",
        },
       
      }}
    />
  ),

  (props) => <SignatureTwo {...props} />,
  (props) => <SignatureThree {...props} />,
  (props) => <SignatureFour {...props} />,
  (props) => <SignatureFive {...props} />,
  (props) => <SignatureSix {...props} />,
  (props) => <SignatureSeven {...props} />,
  (props) => <SignatureEight {...props} />,
  (props) => <SignatureNine {...props} />,
  (props) => <SignatureTen {...props} />,
  (props) => (
    <SignatureEleven
      {...props}
      company="Company Ltd"
      address={props.location}
      companyNo="12367617"
      vat="344865081"
      logo="https://dummyimage.com/600x400/ffffff/000000&text=Logo"
      tagline="Great Tagline. Made simple."
      socialMedia={{
        facebook: "https://facebook.com/dummyprofile",
        instagram: "https://instagram.com/dummyprofile",
        youtube: "https://youtube.com/dummyprofile",
      }}
    />
  ),
  (props) => <SignatureTwelve {...props} />,
  (props) => <EmailSignature {...props} />,
];
