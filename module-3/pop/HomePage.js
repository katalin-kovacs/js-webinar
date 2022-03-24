/**
 * Create HomePage class representing the EPAM.com home page.
 * Add main widgets and element of the page and write tests
 * for it (test/pop/HomePage.spec.js).
 */

const Browser = require("../test/mock/Browser");

const Layout = require("./Layout");
const Element = require("./Element");

module.exports = class HomePage extends Layout {
  constructor() {
    super("EPAM Home Page", "https://www.epam.com/", { css: "body" });

    this.titleLabel = new Element("Title", {
      css: "span.title-slider__slide-row",
    });
    this.addChildren(this.titleLabel);

    this.logoImage = new Element("Logo", { css: ".header__logo" });
    this.addChildren(this.logoImage);

    this.topNavigationPanel = new Element("Top Navigation Panel", {
      css: ".top-navigation-ui",
    });
    this.addChildren(this.topNavigationPanel);

    this.mainSection = new Element("Main Section", { id: "main" });
    this.addChildren(this.mainSection);

    this.footerSection = new Element("Footer section", {
      css: ".footer.section",
    });
    this.addChildren(this.footerSection);
  }

  // getTitle() {
  //   let browser = new Browser();
  //   return browser.get(this.titleLabel);
  // }
};
