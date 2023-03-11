import { Container } from "@mui/system";
import React, { useEffect, useRef } from "react";
import styles from "../SignUp/signup.module.css";
function Signup() {
  const inputfield=useRef();
  useEffect(()=>{
    inputfield.current.focus()
  })
  return (
    <div>
      <Container>
        <div className={styles.signup}>
          <div className={styles.card}>
            <h6>Welcome</h6>
            <label>Name</label>
            <br />
            <input ref={inputfield} type="text" />
            <br />
            <label>Email</label>
            <br />
            <input type="text" />
            <br />
            <label>Password</label>
            <br />
            <input type="password" />
            <br />
            <label>Conform Password</label>
            <br />
            <input type="password" />
            <br />
            <div className={styles.button}>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
