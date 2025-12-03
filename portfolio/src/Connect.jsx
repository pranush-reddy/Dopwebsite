import React, { useState } from "react";
import emailjs from "emailjs-com";
import Toast from "./Toast"; // import Toast component
import "./Connect.css";

function Connect() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  

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
        serviceId,
        templateId,
        templateParams,
        publicKey
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
      <h3 className="connect-title slide-up">Let's connect<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" stroke="#f5f5f5" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" stroke="#f5f5f5" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg></h3>

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
