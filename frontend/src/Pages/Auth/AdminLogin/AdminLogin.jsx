import { useState } from "react";
import AdminLoginIntro from "./components/AdminLoginIntro";
import AdminStats from "./components/AdminStats";
import AdminLoginCard from "./components/AdminLoginCard";
import "./AdminLogin.module.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    console.log({
      email,
      password,
      rememberMe,
    });

    // Yahan baad mein tum apni backend API laga sakti ho
  };

  return (
    <div className={AdminLogin.page}>

      {/* Decorative Background */}
      <div className={AdminLogin.leftGlow}></div>
      <div className={AdminLogin.rightGlow}></div>

      <div className={AdminLogin.smallCircleOne}></div>
      <div className={AdminLogin.smallCircleTwo}></div>
      <div className={AdminLogin.smallCircleThree}></div>

      <div className={AdminLogin.dotPatternLeft}></div>
      <div className={AdminLogin.dotPatternRight}></div>

      {/* Main Content */}
      <main className={AdminLogin.mainContent}>

        {/* LEFT SIDE */}
        <section className={AdminLogin.leftSection}>
          <AdminLoginIntro />

          <AdminStats />
        </section>

        {/* RIGHT SIDE */}
        <section className={AdminLogin.rightSection}>
          <AdminLoginCard
            email={email}
            password={password}
            rememberMe={rememberMe}
            setEmail={setEmail}
            setPassword={setPassword}
            setRememberMe={setRememberMe}
            handleLogin={handleLogin}
          />
        </section>

      </main>

      {/* Bottom Wave */}
      <div className={AdminLogin.bottomWave}>
        <div className={AdminLogin.waveOne}></div>
        <div className={AdminLogin.waveTwo}></div>
      </div>

      {/* Footer */}
      <footer className={AdminLogin.footer}>
        <p>© 2026 JobBridge. All rights reserved.</p>

        <div className={AdminLogin.footerLinks}>
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Contact Us</a>
        </div>
      </footer>

    </div>
  );
};

export default AdminLogin;