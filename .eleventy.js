const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };

  eleventyConfig.setLibrary("md", markdownIt(mdOptions));

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("src/img");

  const { DateTime } = require("luxon");

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("en-gb")
      .toLocaleString(DateTime.DATE_HUGE);
  });

  return {
    dir: { input: "src", output: "_site/wortie" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
