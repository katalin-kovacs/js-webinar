const ElementFinder = require("../mock/ElementFinder");
const Browser = require("../mock/Browser");

const HomePage = require("../../pop/HomePage");

const expect = require("chai").expect;

describe("HomePage Class", () => {
  beforeEach(() => {
    global.element = ElementFinder.element;
    global.browser = new Browser();
  });

  afterEach(() => {
    delete global.element;
    delete global.browser;
  });

  it("should be defined", () => {
    expect(HomePage).to.be.instanceOf(Function);
  });

  it("should have a stored name", () => {
    const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
      css: "body",
    });

    expect(page.name).not.to.be.undefined;
    expect(page.name).to.equal("EPAM Home Page");
  });

  it("should have a stored URL", () => {
    const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
      css: "body",
    });

    expect(page.url).not.to.be.undefined;
    expect(page.url).to.equal("https://www.epam.com/");
  });

  it("should have a stored locator", () => {
    const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
      css: "body",
    });

    expect(page.locator).not.to.be.undefined;
    expect(page.locator.css).to.equal("body");
  });

  describe("Parent", () => {
    it("should not have a parent by default", () => {
      const page = new HomePage("Home", "http://epam.com", { css: "body" });

      expect(page.parent).not.to.be.undefined;
      expect(page.parent).to.be.null;
    });

    it("should throw an error if parent is set", () => {
      const element = new HomePage("Title", { css: "h1" });
      const page = new HomePage("Home", "http://epam.com", { css: "body" });

      expect(page.setParent).not.to.be.undefined;
      expect(() => page.setParent(element)).to.throw();
    });
  });

  describe("Children", () => {
    it("should have Title as a children", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });

      expect(page.children.Title.name).to.equal("Title");
    });

    it("should have Logo set as a children", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });

      expect(page.children.Logo.name).to.equal("Logo");
    });

    it("should have Top Navigation Panel set as a children", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });

      expect(page.children["Top Navigation Panel"].name).to.equal(
        "Top Navigation Panel"
      );
    });

    it("should have Main Section set as a children", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });

      expect(page.children["Main Section"].name).to.equal("Main Section");
    });

    it("should have Footer section set as a children", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });

      expect(page.children["Footer section"].name).to.equal("Footer section");
    });

    it("should have the correct locator for Title element", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });
      const pElement = page.get("Title");

      expect(pElement).to.be.instanceOf(ElementFinder);
      expect(pElement.locator().css).to.equal("span.title-slider__slide-row");
    });

    it("should have the correct locator for Top Navigation Panel", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });
      const pElement = page.get("Top Navigation Panel");

      expect(pElement).to.be.instanceOf(ElementFinder);
      expect(pElement.locator().css).to.equal(".top-navigation-ui");
    });

    it("should have the correct locator for Logo element", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });
      const pElement = page.get("Logo");

      expect(pElement).to.be.instanceOf(ElementFinder);
      expect(pElement.locator().css).to.equal(".header__logo");
    });

    it("should have teh correct locator for Main Section", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });
      const pElement = page.get("Main Section");

      expect(pElement).to.be.instanceOf(ElementFinder);
      expect(pElement.locator().id).to.equal("main");
    });

    it("should have the correct locator for Footer section", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });
      const pElement = page.get("Footer section");

      expect(pElement).to.be.instanceOf(ElementFinder);
      expect(pElement.locator().css).to.equal(".footer.section");
    });
  });

  describe("Load", () => {
    it("should load the page by the given URL", () => {
      const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
        css: "body",
      });

      expect(page.load).not.to.be.undefined;
      expect(page.load()).to.equal("https://www.epam.com/");
    });
  });

  // describe("Get Title", () => {
  //   it("should return correct title", () => {
  //     const page = new HomePage("EPAM Home Page", "https://www.epam.com/", {
  //       css: "body",
  //     });

  //     expect(page.getTitle).not.to.be.undefined;
  //     expect(page.getTitle()).to.equal("Title");
  //   });
  // });
});
