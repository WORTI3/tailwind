const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy('src/img')


  const {
    DateTime
  } = require("luxon");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).setLocale('en-gb').toLocaleString(DateTime.DATE_HUGE);
  });

  return {
    dir: { input: 'src', output: '_site' }
  };
};
