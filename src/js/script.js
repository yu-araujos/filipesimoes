import bootstrap from 'bootstrap';
import fullpage from 'fullpage.js';
import $ from "jquery";

const btnMenu = document.getElementById('js-btn-menu');
btnMenu.addEventListener('click', () => {
  document.documentElement.classList.toggle('opened-menu');
});

new fullpage('#fullpage', {
  autoScrolling:true,
  menu: '#menu',
  anchors:['inicio', 'sobre', 'timeline'],
  paddingTop: '1em',
  navigation: true,
  afterLoad: function (anchorLink, index) {
    console.log(anchorLink);
    console.log(index)
  },
});

$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "50%");
	$(".2020").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "100%");
	$(".2022").addClass("active").siblings().removeClass("active");
});



