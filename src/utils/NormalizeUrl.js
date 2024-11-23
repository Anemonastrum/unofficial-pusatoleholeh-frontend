export const normalizeUrl = (url) => {
    if (!url) return ""; // Handle empty or undefined URLs
    try {
      // Replace backslashes with forward slashes
      let normalizedUrl = url.replace(/\\/g, "/");
  
      // Add `http://` if it starts with `localhost` but has no protocol
      if (normalizedUrl.startsWith("localhost")) {
        normalizedUrl = `http://${normalizedUrl}`;
      }
  
      // Fix URLs like `http:\localhost` by ensuring proper protocol formatting
      normalizedUrl = normalizedUrl.replace(/^http:\//, "http://").replace(/^https:\//, "https://");
  
      return normalizedUrl;
    } catch (error) {
      console.error("Error normalizing URL:", error);
      return url; // Return the original URL if an error occurs
    }
  };
  