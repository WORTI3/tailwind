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
  eleventyConfig.addFilter("setAttribute", function (dictionary, key, value) {
    dictionary[key] = value;
    return dictionary;
  });

  eleventyConfig.addCollection("categories", (collectionApi) => {
    const posts = collectionApi
      .getFilteredByTag("posts")
      .filter((p) => !p.data.tags.includes("draft"));

    return posts.reduce(
      (tags, post) => {
        post.data.blogTags
          .filter((tag) => tag !== "posts")
          .forEach((tag) => {
            if (!tags[tag.title]) {
              tags[tag.title] = 0;
            }
            tags[tag.title]++;
          });
        return tags;
      },
      { "All posts": posts.length }
    );
  });

  eleventyConfig.addFilter("categoryFilter", function (collection, category) {
    console.log("debug cat:" + category);
    if (!category) return collection;
    console.log(category);
    const filtered = collection.filter((p) => p._data.blogTags.includes(category));
    // const filtered = collection.filter(
    //   (tags, post) => post.data.blogTags.title === category
    // );
    return filtered;
  });

  eleventyConfig.addFilter("pluck", function (arr, value) {
    if (!value) return collection;
    var filtered = arr.filter((p) => p.data.blogTags["title"] == value);
    console.log("filtered: " + filtered);
    // console.log("reduced: " + reduced);
    return filtered;
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site/wortie",
    },
    templateFormats: ["njk", "md"],
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
