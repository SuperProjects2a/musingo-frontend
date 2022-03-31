import { Tabs, Tab } from "react-bootstrap";
import SignIn from "./SignInUpComponents/SignIn";
import SignUp from "./SignInUpComponents/SignUp";

const SignInUp = () => {
  return (
    <div className="formDiv">
      <Tabs defaultActiveKey="Zaloguj się" className="mb-3">
        <Tab eventKey="Zaloguj się" title="Zaloguj się">
          <SignIn />
        </Tab>
        <Tab eventKey="Zarejestruj się" title="Zarejestruj się">
          <SignUp />
        </Tab>
      </Tabs>
    </div>
  );
};

export default SignInUp;
