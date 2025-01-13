import SignatureOne from "./components/SignatureOne";
import SignatureTwo from "./components/SignatureTwo";
import SignatureThree from "./components/SignatureThree";
import SignatureFour from "./components/SignatureFour";
import SignatureFive from "./components/SignatureFive";
import SignatureSix from "./components/SignatureSix";
import SignatureSeven from "./components/SignatureSeven";
import SignatureEight from "./components/SignatureEight";
import SignatureNine from "./components/SignatureNine";
import SignatureTen from "./components/SignatureTen";
import SignatureEleven from "./components/SignatureEleven";
import SignatureTwelve from "./components/SignatureTwelve";

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
  image: string;
}

export const signatures: ((props: SignatureProps) => JSX.Element)[] = [
  (props) => <SignatureOne {...props} />,
  (props) => (
    <SignatureTwelve
      {...props}
      address="XXXX Ridge Road, Conway, XX 67XXX"
      socialMedia={{
        facebook: "https://facebook.com/",
        linkedin: "https://linkedin.com/",
        instagram: "https://instagram.com/",
        twitter: "https://twitter.com/",
        youtube: "https://youtube.com/",
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
      address="386 Road, Imiganaryport, SK2 7BY, Mars"
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
 
];
