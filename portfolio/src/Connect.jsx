import React, { useState } from "react";
import emailjs from "emailjs-com";
import Toast from "./Toast"; // import Toast component
import "./Connect.css";

function Connect() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      email_to: email,
      message: message,
      firstName: "Pranush",
    };

    emailjs
      .send(
        "service_s22f3yo",
        "template_nm22ztk",
        templateParams,
        "nbSEGCqcFta30vaCf"
      )
      .then(() => {
        setToast({ show: true, message: "Email sent successfully! ✨", type: "success" });
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setToast({ show: true, message: "Failed to send email ❌", type: "error" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div id="connect" className="connect-container fade-in">
      <h3 className="connect-title slide-up">Let's connect🔗</h3>

      <form onSubmit={sendEmail} className="connect-form slide-up">
        <h6>Email</h6>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <h6>Message</h6>
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="glow-btn" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </button>
      </form>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
    </div>
  );
}

export default Connect;
