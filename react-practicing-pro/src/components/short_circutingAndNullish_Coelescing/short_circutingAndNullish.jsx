import React, { useState } from "react";

const ShortCircuitAndNullish = () => {
  const [user, setUser] = useState({
    name: "",
    age: 20,
    preferences: null,
    score: undefined,
  });

  // Examples of short-circuiting
  const welcomeMessage = user.name && `Welcome, ${user.name}!`;
  const showAgeWarning = user.age < 18 || "You are an adult";

  // Examples of nullish coalescing
  const userPreferences = user.preferences ?? "No preferences set";
  const userScore = user.score ?? "Not available";

  return (
    <div>
      <hr />

      <h2>Short-circuiting and Nullish Coalescing Examples</h2>

      {/* Short-circuit with && (renders nothing if falsy) */}
      {welcomeMessage && <p>{welcomeMessage}</p>}

      {/* Short-circuit with || (shows default message) */}
      <p>{showAgeWarning}</p>

      {/* Nullish coalescing examples */}
      <p>Preferences: {userPreferences}</p>
      <p>Score: {userScore}</p>

      {/* More practical examples */}
      {user.name || <button>Please Login</button>}
      {user.permissions?.admin && <button>Admin Panel</button>}

      {/* Conditional styles using short-circuit */}
      <div
        style={{
          color: user.age < 18 && "red",
          fontWeight: user.name ? "bold" : "normal",
        }}
      >
        Status: {user.active ?? "Inactive"}
      </div>
    </div>
  );
};

export default ShortCircuitAndNullish;
