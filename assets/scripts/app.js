const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "css3",
				weight: 12.3
			}, {
				text: "",
				weight: 8
			}, {
				text: "javascript",
				weight: 17
			}, {
				text: "react",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "scrapping",
				weight: 4
			}, {
				text: "Python",
				weight: 9
			}, {
				text: "HTML5",
				weight: 15
			}, /* {
				text: "React",
				weight: 7
			} */
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am becoming a Web Developer.", "love coding.", "also teach programming to kids.", "am a problem solver."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "rgba(72, 9, 122, 0.91)", "background-color": "rgba(0, 0, 0, 0.18)"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
