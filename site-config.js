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
    Github: "https://github.com/ozcanovunc",
    Twitter: "https://twitter.com/ozcanovunc",
    Instagram: "https://instagram.com/ozcanovunc",
    Linkedin: "https://www.linkedin.com/in/ozcanovunc",
    Medium: "https://medium.com/@ozcanovunc",
    Envelope: "mailto:ozcanovunc@outlook.com",
  },
  mainSocials: ["Github", "Linkedin"],
  profileUrl:
    "https://www.gravatar.com/avatar/377f15e733cc48e22dc47084cf21cedb?s=600",
};
