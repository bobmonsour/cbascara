module.exports = {
  env: process.env.ELEVENTY_ENV,
  dev_url: "http://localhost:8080",
  prod_url: "https://cbascara.netlify.app",
  mainNavLinks: [
    { url: "/", text: "Home", class: "push-right" },
    { url: "/services/", text: "Services" },
    {
      url: "/typicalsession/",
      text: "Therapy Looks Like...",
    },
    { url: "/whereiwork/", text: "Where Cynthia Works" },
    { url: "/aboutme/", text: "About Me" },
    {
      url: "/arrangeaconsultation/",
      text: "Arrange a Consultation",
    },
  ],
};
