function toggle_block(id) {
  var block = document.getElementById(id)
  var block_display = block.style.display
  if (block_display == 'none') {
    block.style.display = 'block'
  } else {
    block.style.display = 'none'
  }
};

$(function () {
  $("#img").load("import/img.html");
});

$(function () {
  $("#small-window").load("import/small-window.html");
});

$(function () {
  $("#header").load("import/header.html");
});

$(function () {
  $("#education").load("import/education.html");
});

$(function () {
  $("#experience").load("import/experience.html");
});

$(function () {
  $("#project").load("import/project.html");
});

$(function () {
  $("#skill").load("import/skill.html");
});



















