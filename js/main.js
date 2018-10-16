console.log("this is getting started");

$(document).ready(() => {
	resize();
});

$(window).resize(resize);

function resize() {
	if ($(window).width() < 700) {
        $(".navbar").hide();
        $(".titles").hide();
        $("#menu-icon").show();
	} else {
		$(".navbar").show();
        $(".titles").show();
        $("#menu-icon").hide();
	}
}