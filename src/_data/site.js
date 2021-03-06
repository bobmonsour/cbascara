module.exports = {
  env: process.env.ELEVENTY_ENV,
  dev_url: "http://localhost:8080",
  prod_url: "https://www.cbascaraspeechtherapy.com",
  mainNavLinks: [
    { url: "/", text: "Home", class: "push-right" },
    { url: "/services/", text: "Services" },
    {
      url: "/typicalsession/",
      text: "A Typical Session",
    },
    { url: "/whereiwork/", text: "Where Cynthia Works" },
    { url: "/aboutme/", text: "About Me" },
    {
      url: "/arrangeaconsultation/",
      text: "Arrange a Consultation",
    },
  ],
};
