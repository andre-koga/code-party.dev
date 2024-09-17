// This file contains the store for the theme of the website

import { writable } from "svelte/store";

// Function to check if running in a browser environment
const isBrowser = typeof window !== "undefined";

// Function to get the initial theme
function getInitialTheme() {
  if (!isBrowser) {
    // Return a default theme if not in browser
    return "dark";
  }
  // Try to fetch the theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  // If found, return the saved theme, otherwise default to 'light'
  document.documentElement.setAttribute(
    "data-theme",
    savedTheme ? savedTheme : "dark",
  );

  return savedTheme ? savedTheme : "dark";
}

// Create the theme store with the initial theme
export const theme = writable(getInitialTheme());

// Subscribe to changes and update localStorage
theme.subscribe((value) => {
  if (isBrowser) {
    localStorage.setItem("theme", value);
  }
});
