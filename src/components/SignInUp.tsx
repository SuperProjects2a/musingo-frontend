import { Tabs, Tab } from "react-bootstrap";
import SignIn from "./SignInUpComponents/SignIn";
import SignUp from "./SignInUpComponents/SignUp";
import { useState } from "react";

const SignInUp = () => {
  const [key, setKey] = useState("Zaloguj się");
  var bgClass = key === "Zaloguj się" ? "bgSignIn" : "bgSignUp";
  return (
    // <div className={`${bgClass} backgroundSignInUp pt-5 `}>
    <div className={`${bgClass} backgroundSignInUp pt-5 `}>
      <div className="formDiv">
        <Tabs
          defaultActiveKey="Zaloguj się"
          className="nav-fill mb-3"
          onSelect={(k: any) => setKey(k)}
        >
          <Tab eventKey="Zaloguj się" title="Zaloguj się">
            <SignIn />
          </Tab>
          <Tab eventKey="Zarejestruj się" title="Zarejestruj się">
            <SignUp />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default SignInUp;
