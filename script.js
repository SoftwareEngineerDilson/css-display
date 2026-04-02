/**
 * CSS display slider behavior control
 * created: 2026 by dilsonTorrefiel
 */

// Width adjust
function adjustWidth(slide_id, element_id) {
  const slider = document.getElementById(slide_id);
  const element = document.getElementById(element_id);
  slider.addEventListener("input", (e) => {
    element.style.width = `${e.target.value}px`;
  });
}

// Height adjust
function adjustHeight(slide_id, element_id) {
  const slider = document.getElementById(slide_id);
  const element = document.getElementById(element_id);
  slider.addEventListener("input", (e) => {
    element.style.height = `${e.target.value}px`;
  });
}

adjustWidth("i-block-width", "block");
adjustHeight("i-block-height", "block");
adjustWidth("i-inline-width", "inline");
adjustHeight("i-inline-height", "inline");
adjustWidth("i-inline-block-width", "inline-block");
adjustHeight("i-inline-block-height", "inline-block");