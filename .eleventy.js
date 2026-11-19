module.exports = function(eleventyConfig) {
  // Redirect page for the old "Why Toad?" URL (story now lives on About)
  eleventyConfig.addPassthroughCopy("why-toad.html");

  // Shared stylesheet and images
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images/logo");
  eleventyConfig.addPassthroughCopy("images/projects");
  eleventyConfig.addPassthroughCopy("images/*.jpg");

  // {% year %} for the footer copyright
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    // Pages are .njk templates that extend _includes/base.njk
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
