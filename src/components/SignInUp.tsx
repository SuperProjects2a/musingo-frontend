import { Tabs, Tab } from "react-bootstrap";
import SignIn from "./SignInUpComponents/SignIn";
import SignUp from "./SignInUpComponents/SignUp";

const SignInUp = () => {
  return (
    <div className="backgroundSignInUp py-sm-4">
      <div className="formDiv ">
        <Tabs
          defaultActiveKey="Zaloguj się"
          className="nav-fill mb-3"
          transition={false}
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
