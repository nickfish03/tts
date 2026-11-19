module.exports = function(eleventyConfig) {
  // Copy existing HTML files as-is to _site
eleventyConfig.addPassthroughCopy("about.html");
  eleventyConfig.addPassthroughCopy("why-toad.html"); // redirect to about.html#why-toad
  eleventyConfig.addPassthroughCopy("contact.html");
  eleventyConfig.addPassthroughCopy("resources.html");
  eleventyConfig.addPassthroughCopy("rates.html");

  // Copy images directory (logos, project photos)
  eleventyConfig.addPassthroughCopy("images/logo");
  eleventyConfig.addPassthroughCopy("images/projects");
  eleventyConfig.addPassthroughCopy("images/*.jpg");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    // Process only .njk and .md files, not all .html files
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
