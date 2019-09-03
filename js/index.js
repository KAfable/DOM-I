const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Header Nav
let nav = document.querySelectorAll("header nav a");
for (let i = 0; i < nav.length; i++) {
  nav[i].innerHTML = siteContent["nav"][`nav-item-${i + 1}`];
  //console.log(nav[i]);
  //console.log(siteContent["nav"][`nav-item-${i + 1}`]);
}

document.querySelector("h1").innerHTML = siteContent["cta"]["h1"];
document.querySelector("button").innerHTML = siteContent["cta"]["button"];
document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent["cta"]["img-src"]);

let mainHeaders = document.querySelectorAll(".text-content h4");
mainHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
mainHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];
mainHeaders[2].innerHTML = siteContent["main-content"]["services-h4"];
mainHeaders[3].innerHTML = siteContent["main-content"]["product-h4"];
mainHeaders[4].innerHTML = siteContent["main-content"]["vision-h4"];
//console.log(siteContent["main-content"]["vision-h4"]);

let mainTexts = document.querySelectorAll(".text-content p");
mainTexts[0].innerHTML = siteContent["main-content"]["features-content"];
mainTexts[1].innerHTML = siteContent["main-content"]["about-content"];
mainTexts[2].innerHTML = siteContent["main-content"]["services-content"];
mainTexts[3].innerHTML = siteContent["main-content"]["product-content"];
mainTexts[4].innerHTML = siteContent["main-content"]["vision-content"];

// Middle Img
document
  .querySelector("#middle-img")
  .setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Questions
// * Is query selector just superior? Seems easier to write
// * How would I do the Header Nav using an 'for of' loop?
// * For mainHeaders, is there a faster way to copy and paste into one area?
