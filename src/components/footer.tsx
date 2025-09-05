import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/50 backdrop-blursm shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-6 px-5 text-center">
        <small className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} nammaAI. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
