"use client";

import { FaEye } from "react-icons/fa";
import { CiMail, CiLock, CiPhone } from "react-icons/ci";
import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import './login.css';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

// Function to map Firebase error codes to custom messages
const getCustomErrorMessage = (errorCode) => {
  const errorMessages = {
    "auth/invalid-email": "The email address is invalid. Please enter a valid email.",
    "auth/email-already-in-use": "This email is already registered. Please use a different email.",
    "auth/weak-password": "The password is too weak. Please enter a stronger password.",
    "auth/wrong-password": "The password is incorrect. Please try again.",
    "auth/user-not-found": "No account found with this email. Please sign up first.",
    "auth/network-request-failed": "Network error. Please check your connection and try again.",
    // Add more error codes as needed
  };

  return errorMessages[errorCode] || "An unexpected error occurred. Please try again.";
};

export default function Login() {
  const [loginstate, setLoginstate] = useState(true);
  const [signupstate, setsignupstate] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  // Handle Sign-Up with Email and Password
  const handleSignUp = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up: ", user);
      setSuccessMessage("Sign-up successful! Proceed to Login.");
    } catch (error) {
      console.error("Error during sign-up:", error.message);
      // Set custom error message
      setErrorMessage(getCustomErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  // Handle Login with Email and Password
  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in: ", user);
      setSuccessMessage("Login successful! Redirecting...");
      setTimeout(() => {
        router.push("/"); // Navigate to the homepage after successful login
      }, 2000);
    } catch (error) {
      console.error("Error during login:", error.message);
      // Set custom error message
      setErrorMessage(getCustomErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google sign-in successful:", user);
      setSuccessMessage("Google Sign-In successful! Redirecting...");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      // Set custom error message
      setErrorMessage(getCustomErrorMessage(error.code));
    } finally {
      setLoading(false);
    }
  };

  // Toggle Signup/Login Display
  const handleSignUpDisplay = () => {
    setLoginstate(false);
    setsignupstate(true);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleLoginDisplay = () => {
    setLoginstate(true);
    setsignupstate(false);
    setErrorMessage("");
    setSuccessMessage("");
  };

  return (
    <div className="register">
      <section>
        <img src="images/loginBanner.png" alt="Login Banner" />
        <p>Get quality meals, delivered at your doorstep. Create or log in to your account and start ordering.</p>
      </section>

      <div className="login-signup">
        {/* LOGIN FORM */}
        <div className={`login ${!loginstate && "hidelogin"}`}>
          <h1>LOGIN</h1>

          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <div className="input">
            <CiMail />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <CiLock />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEye />
          </div>

          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging In..." : "Log In"}
          </button>

          <span>Don't have an account? <a onClick={handleSignUpDisplay}>Sign up</a></span>
        </div>

        {/* SIGNUP FORM */}
        <div className={`signup ${signupstate && "showsignup"}`}>
          <h1>CREATE AN ACCOUNT</h1>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <div className="input">
            <CiMail />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <CiPhone />
            <input type="text" placeholder="Phone Number" />
          </div>

          <div className="input">
            <CiLock />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaEye />
          </div>

          <button onClick={handleSignUp} disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {successMessage && (
            <div className="success-message">
              {successMessage}
              <span className="proceed-btn" onClick={handleLoginDisplay}>
                Login
              </span>
            </div>
          )}

          <div className="socials">
            <a onClick={handleGoogleSignIn} title="signin with your google account"><FaGoogle className="social-btn" /></a>
          </div>

          <span>Already have an account? <a onClick={handleLoginDisplay}>Login</a></span>
        </div>
      </div>
    </div>
  );
}
