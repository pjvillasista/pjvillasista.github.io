console.log("I am here!");

let viz;
const containerDiv = document.getElementById("vizContainer");
const url = "https://public.tableau.com/views/BrightFutures/Dashboard1";
const options = {
    hideTabs: true,
    height: 800,
    width: 1000,
    onFirstInteractive: function () {
        console.log("Hey, my dashboard is interactive!");
    },
    onFirstVizSizeKnown: function () {
        console.log("Hey, my dashboard has a size!");
    }
};

function initViz() {
    viz = new tableau.Viz(containerDiv, url, options);
}

document.addEventListener("DOMContentLoaded", initViz);