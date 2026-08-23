import React from "react";

export function PageLoader() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        backgroundColor: "#090d16",
        color: "#94a3b8",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: "3px solid rgba(255, 255, 255, 0.1)",
          borderTopColor: "#f59e0b",
          borderRightColor: "#06b6d4",
          animation: "pageLoaderSpin 0.75s linear infinite",
        }}
      />
      <span style={{ fontSize: "0.875rem", fontWeight: 600, letterSpacing: "0.05em", color: "#e2e8f0" }}>
        Loading experience...
      </span>
      <style>{`
        @keyframes pageLoaderSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default PageLoader;
