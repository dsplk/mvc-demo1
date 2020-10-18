import "./app2.css";
import $ from "jquery";

const $nav = $("#app2 .tab-nav");
const $tabContent = $("#app2 .tab-content");

$nav.on("click", "li", (e) => {
  const $li = $(e.currentTarget);
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index();
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active");
});

$nav.children().eq(0).trigger("click");
