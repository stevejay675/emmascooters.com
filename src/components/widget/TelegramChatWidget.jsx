"use client"
import React, { useEffect } from "react";

const TelegramChatWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup when the component unmounts
    };
  }, []);  // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <div
        className="elfsight-app-1791568b-4771-4368-8ebb-99904fa61c21"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
};

export default TelegramChatWidget;
