import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        width: "100svw",
        height: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          width: "fit-content",
          fontSize: "10svh",
          textAlign: "center",
          display: "block",
          marginBottom: "1rem",
        }}
      >
        404 This page is not available!
      </p>
      <Link
        to={"/"}
        style={{
          width: "fit-content",
          fontSize: "5svh",
          textAlign: "center",
          display: "block",
          color: "black",
          border: "1px solid black",
          padding: "2rem",
        }}
      >
        {" "}
        go back
      </Link>
    </div>
  );
}
