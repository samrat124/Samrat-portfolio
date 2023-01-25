import React from "react";
import GitHubCalendar from "react-github-calendar";
import { ThemeContext } from "../../contexts/theme-context";
import { useContext } from "react";

const Github = () => {
  const { theme, isDark } = useContext(ThemeContext);

  return (
    <div id="github" className={isDark ? "dark-github" : "light-github"}>
      <div className="github--header">
        <h1 style={{ color: theme.primary }}>Github</h1>
      </div>
      <GitHubCalendar username="samrat124" />
    </div>
  );
};

export default Github;
