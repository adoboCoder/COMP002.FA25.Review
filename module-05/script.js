// 1. Create a page that displays a balloon (using the balloon emoji, 🎈). When you press
// the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow,
// it should deflate (shrink) 10 percent. You can control the size of text (emoji are
// text) by setting the font-size CSS property (style.fontSize) on its parent element.
// Remember to include a unit in the value—for example, pixels (10px). The key names of
// the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the
// balloon, without scrolling the page.
// When that works, add a feature where, if you blow up the balloon past a certain size,
// it explodes. In this case, exploding means that it is replaced with a 💥 emoji, and
// the event handler is removed (so that you can’t inflate or deflate the explosion).
// Hint: keeping track of the size in percentage might be easier.
// Hint: Make sure you quote the emoji characters. They are strings, after all.
// Hint: document.getElementById("balloon") will get the balloon element on the page.

// 2. The index.html page has a tabbed layout. Make the default state of the layout show
// the first tab, and make it so that when you click the links at the top the correct
// tab's contents are displayed and the others are hidden. Prevent the default action of
// the links and set up an event listener with the logic necessary to make the tabs
// function as expected. There are many ways to accomplish this task, but you will need
// to at minimum add listeners to each link and toggle the display of the tab contents.
// Hint: display: none; hides an element, and display: block; will bring it
// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {

    // Get the links
    var tab1Link = document.getElementById("tab1Link");
    var tab2Link = document.getElementById("tab2Link");
    var tab3Link = document.getElementById("tab3Link");

    // Get the tab content sections
    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");

    // A function to hide all tabs
    function hideAllTabs() {
        tab1.style.display = "none";
        tab2.style.display = "none";
        tab3.style.display = "none";
    }

    // Show Tab 1 by default
    hideAllTabs();
    tab1.style.display = "block";

    // When clicking Tab 1
    tab1Link.addEventListener("click", function (event) {
        event.preventDefault();         // Prevents the page from reloading
        hideAllTabs();                  // Hide everything
        tab1.style.display = "block";   // Show tab 1
    });

    // When clicking Tab 2
    tab2Link.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllTabs();
        tab2.style.display = "block";
    });

    // When clicking Tab 3
    tab3Link.addEventListener("click", function (event) {
        event.preventDefault();
        hideAllTabs();
        tab3.style.display = "block";
    });

});
