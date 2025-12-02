import React from "react";
import "./Toast.css";

export default function Toast({ message, type, onClose }) {
  return (
    <div className={`toast ${type}`}>
      <span>{message}</span>
      <button onClick={onClose} className="close-btn">×</button>
    </div>
  );
}
