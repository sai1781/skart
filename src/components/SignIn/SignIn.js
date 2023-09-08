import { useState } from "react";
import "./SignIn.scss";
// import {signInWithGoogle} from "../../fireBase/fireBase.utils.js"
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from "../../fireBase/fireBase.utils";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGoogle,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const submit = async (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   console.log(password);
  //   try {
  //     const value = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log(value);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };
  const submit = async(e)=>{
    const userDetails = {email,password};
    const url = 'https://apis.ccbp.in/login';
    const options = {
      method:'POST',
      body:JSON.stringify(userDetails),
    }
    const response = await fetch(url,options)
    const data = await response.json();
    console.log(data);
    console.log("sai");
  }
  const signInIWthGoogle = async () => {
    try {
      const value = await signInWithPopup(auth, googleProvider);
      console.log(value);
    } catch (err) {
      alert(err);
    }
  };
  const signInIWthFacebook = async () => {
    try {
      const value = await signInWithPopup(auth, facebookProvider);
      console.log(value);
    } catch (err) {
      alert(err);
    }
  };
  const signInIWithTwitter = async () => {
    try {
      const value = await signInWithPopup(auth, twitterProvider);
      console.log(value);
    } catch (err) {
      alert(err);
    }
  };
  const logout = async () => {
    try {
      const value = await signOut(auth);
      console.log(value);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="SignIn">
      <h1>Sign In </h1>
      <h2>If you are a Exisitng user</h2>
      <form onSubmit={()=>submit()}>
        <label>email</label>
        <input
          name="email"
          type="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>password</label>
        <input
          name="password"
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="buttons">
          <button value={onsubmit}>click Here</button>
          <button onClick={() => logout}>Log Out</button>
        </div>
      </form>
      <div className="details">
        <hr /> or <hr />
      </div>
      <div className="socialSigUp">
        <FontAwesomeIcon
          className="icons"
          icon={faGoogle}
          style={{ color: "#cd1d1d" }}
          onClick={signInIWthGoogle}
        />
        <FontAwesomeIcon
          className="icons"
          icon={faInstagram}
          style={{ color: "#cd1d1d" }}
          onClick={signInIWthFacebook}
        />
        <FontAwesomeIcon className="icons" icon={faFacebookF} onClick={signInIWithTwitter} />
      </div>
    </div>
  );
};

export default SingIn;
