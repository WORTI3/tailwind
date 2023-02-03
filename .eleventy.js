const markdown = require("markdown-it");

module.exports = function (eleventyConfig) {
  let md = markdown({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  });

  md.use(require("markdown-it-emoji"));
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPlugin(require("@11ty/eleventy-navigation"));
  eleventyConfig.addPlugin(require("eleventy-plugin-time-to-read"));
  eleventyConfig.addPassthroughCopy("src/img");

  const { DateTime } = require("luxon");
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("en-gb")
      .toLocaleString(DateTime.DATE_HUGE);
  });

  return {
    dir: { 
      input: "src",
      includes: "_includes",
      output: "_site/wortie" 
    },
    templateFormats: ["njk", "md"],
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
