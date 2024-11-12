// Marking this file as a client component
"use client"; // <-- Add this line at the top

import { Button } from "@nextui-org/react";

const Page = () => {
  return (
    <div>
      <Button
        style={{
          backgroundColor: "#000", // black background
          color: "#fff", // white text
          fontWeight: "bold",
          padding: "10px 20px",
        }}
        onClick={() => alert("Use the routes to check the other pages.")}
      >
        Hello, Faysel
      </Button>
    </div>
  );
};

export default Page;

