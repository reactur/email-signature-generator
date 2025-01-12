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
  (props) => <SignatureTwo {...props} />,
  (props) => <SignatureThree {...props} />,
  (props) => <SignatureFour {...props} />,
  (props) => <SignatureFive {...props} />,
  (props) => <SignatureSix {...props} />,
  (props) => <SignatureSeven {...props} />,
  (props) => <SignatureEight {...props} />,
  (props) => <SignatureNine {...props} />,
  (props) => <SignatureTen {...props} />,
];
