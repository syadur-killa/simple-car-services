import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import Loadding from "../../Home/Loadding/Loadding";
import { Toast } from "react-bootstrap";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  console.log("Inside requir auth", user);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);

  if (loading) {
    return <Loadding />;
  }
  if (sending) {
    return <Loadding />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div>
        <h3 className="text-danger">Your Email is not verified</h3>
        <h5 className="text-primary">Please Verify Email</h5>
        <button
          onClick={async () => {
            await sendEmailVerification();
            Toast("Sent email");
          }}
        >
          Send Verification email
        </button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
