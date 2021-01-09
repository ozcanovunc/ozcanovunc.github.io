const descriptionMd = `
  Hi, I'm Ozcan. I like building things. 🚧
`;

const description = descriptionMd
  .replace(/\[([^\]]+)\](\([^)]+\)|\[[^\]]+\])/g, "$1")
  .replace(/\n/g, "")
  .replace(/\s{2,}/g, " ")
  .trim();

module.exports = {
  title: "Ozcan Ovunc",
  descriptionMd,
  description,
  url: "https://www.ozcanovunc.com",
  twitterUsername: "@ozcanovunc",
  email: "ozcanovunc@outlook.com",
  socials: {
    GitHub: "https://github.com/ozcanovunc",
    Twitter: "https://twitter.com/ozcanovunc",
    Instagram: "https://instagram.com/ozcanovunc",
  },
  themeColor: "#F6E05E",
};
