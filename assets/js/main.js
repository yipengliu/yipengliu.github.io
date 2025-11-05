/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

// Language switching functionality
let getCurrentLanguage = () => {
  if (window.location.pathname.includes('/zh/')) {
    return "zh";
  } else {
    return "en";
  }
};

let setLanguage = (lang) => {
  // Redirect to appropriate page
  if (lang === "zh") {
    // Navigate to Chinese page
    window.location.href = window.location.origin + "/zh/";
  } else {
    // Navigate to English page
    window.location.href = window.location.origin + "/";
  }
};

let updateLanguageIcon = (lang) => {
  const icon = $("#language-icon");
  if (lang === "en") {
    icon.attr("title", "切换到中文 / Switch to Chinese");
    icon.text("中文");
  } else {
    icon.attr("title", "Switch to English / 切换到英文");
    icon.text("EN");
  }
};

// Toggle language manually
var toggleLanguage = () => {
  console.log("toggleLanguage called");
  const currentLang = getCurrentLanguage();
  console.log("Current language:", currentLang);
  const newLang = currentLang === "zh" ? "en" : "zh";
  console.log("New language:", newLang);
  setLanguage(newLang);
};

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // Initialize language setting based on current page
  let currentLang = getCurrentLanguage();
  updateLanguageIcon(currentLang);

  // Enable the language toggle
  console.log("Binding language toggle event");
  $('#language-toggle').on('click', function(e) {
    console.log("Language toggle clicked");
    e.preventDefault();
    toggleLanguage();
  });

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({
    offset: -scssMastheadHeight,
    preventDefault: false,
  });

});
