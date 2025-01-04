import { Home } from "@/routes";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Home.Link>Return Home</Home.Link>
    </div>
  );
}
