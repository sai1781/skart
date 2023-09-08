import "./SingUp.scss";

// import {faGoogle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGoogle,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const SingUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adding = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
    setPassword(e.target.value);
  };

  const submit = async (e) => {
    const userDetails = { email, password };
    console.log(userDetails);
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log("sai");
  };
  return (
    <div className="SingUp">
      <h1>SignUp</h1>
      <label>Email</label>
      <input type="email" name="email" onChange={(e) => adding(e)} required />
      <label>password</label>
      <input
        type="password"
        onChange={(e) => adding(e)}
        name="password"
        required
      />
      <div>
        <button onClick={(e) => submit(e)}>Login</button>
      </div>
      <div className="details">
        <hr /> or <hr />
      </div>
      <div className="socialSigUp">
        <FontAwesomeIcon
          className="icons"
          icon={faGoogle}
          style={{ color: "#cd1d1d" }}
        />
        <FontAwesomeIcon
          className="icons"
          icon={faInstagram}
          style={{ color: "#cd1d1d" }}
        />
        <FontAwesomeIcon className="icons" icon={faFacebookF} />
      </div>
    </div>
  );
};

export default SingUp;
