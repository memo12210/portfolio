/**
 * 404 Not Found page.
 * Displays a message for unmatched routes, with a link back to the home page.
 */

import { ThemeToggle } from "../components/ThemeToggle";

export const NotFound = () => {
  return (
    <>
      <ThemeToggle />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-2xl mb-4">Oops! Page Not Found</div>
        {/* Button back to home page */}
        <a href="/" className="dark-button">
          Go to Home
        </a>

        {/* TODO: add a game you've exported from Unity/Godot to showcase here */}
      </div>
    </>
  );
};
