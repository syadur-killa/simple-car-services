import React from "react";
import google from "../../../images/social/google.png";
import facebook from "../../../images/social/facebook.png";
import github from "../../../images/social/github.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const Sociallogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user1, loading1, error1] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error || error2) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error2?.message}
        </p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      <div>
        <button
          className="btn btn-primary w-50 mx-auto d-block"
          onClick={() => signInWithGoogle()}
        >
          <img style={{ height: "30px" }} src={google} alt="" />
          <span className="mx-2 font-weight-bold">Google Sign In</span>
        </button>
        <button
          className="btn btn-info w-50 mx-auto d-block mt-2"
          onClick={() => signInWithFacebook()}
        >
          <img style={{ height: "30px" }} src={facebook} alt="" />
          <span className="mx-2 font-weight-bold">Facebook Sign In</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-primary w-50 mx-auto d-block mt-2"
        >
          <img style={{ height: "30px" }} src={github} alt="" />
          <span className="mx-2 font-weight-bold">Github Sign In</span>
        </button>
        {errorElement}
      </div>
    </div>
  );
};

export default Sociallogin;
