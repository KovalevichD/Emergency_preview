(function () {
	function onImagesLoaded(container, event) {
		var images = container.getElementsByTagName("img");
		var loaded = images.length;
		for (var i = 0; i < images.length; i++) {
			if (images[i].complete) {
				loaded--;
			}
			else {
				images[i].addEventListener("load", function() {
					loaded--;
					if (loaded == 0) {
						event();
					}
				});
			}
			if (loaded == 0) {
				event();
			}
		}
	}
	
	onImagesLoaded(document.getElementById("b_531543"), function() {
		var elements = document.getElementById("b_531543").getElementsByClassName('js-bnfy');
		for (var i=0; i < elements.length; i++) {
			elements[i].style.display = 'block';
		}
		
		function startAnimation() {
			
			gsap.to("#el_I5315435241436", { autoAlpha: 1, x: 0, y: 0, scaleX: 1.2, scaleY: 1.2, rotation: 0, duration: 0, delay: 0 });
			gsap.to("#el_I5315435241436", {
				duration: 7,
				delay: 0,
				repeat: 0,
				keyframes: [{ duration: 0, transformOrigin: '50% 50%', x: 0, y: 0, scaleX: 1.2, scaleY: 1.2, rotation: 0, autoAlpha: 1, ease: 'linear',},{ duration: 7, transformOrigin: '50% 50%', x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, autoAlpha: 1, ease: 'linear',}]
			});
			gsap.to("#el_I5315435231411", { autoAlpha: 0, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, duration: 0, delay: 0 });
			gsap.to("#el_I5315435231411", {
				duration: 1,
				delay: 0,
				repeat: 0,
				keyframes: [{ duration: 0, autoAlpha: 0, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, ease: 'power1',},{ duration: 1, autoAlpha: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, ease: 'power1',}]
			});
			gsap.to("#el_I53154352314125114002", { autoAlpha: 0, x: 0, y: 0, scaleX: 0, scaleY: 1, rotation: 0, duration: 0, delay: 0 });
			gsap.to("#el_I53154352314125114002", {
				duration: 0.7,
				delay: 0.3,
				repeat: 0,
				keyframes: [{ duration: 0, autoAlpha: 0, scaleX: 0, x: 0, y: 0, scaleY: 1, rotation: 0, ease: 'power1',},{ duration: 0.7, autoAlpha: 1, scaleX: 1, x: 0, y: 0, scaleY: 1, rotation: 0, ease: 'power1',}]
			});
			gsap.to("#el_I531543523141251139995112213", { autoAlpha: 0, x: 0, y: 50, scaleX: 1, scaleY: 1, rotation: 0, duration: 0, delay: 0 });
			gsap.to("#el_I531543523141251139995112213", {
				duration: 1.2,
				delay: 1,
				repeat: 0,
				keyframes: [{ duration: 0, autoAlpha: 0, y: 50, x: 0, scaleX: 1, scaleY: 1, rotation: 0, ease: 'power1',},{ duration: 1.2, autoAlpha: 1, y: 0, x: 0, scaleX: 1, scaleY: 1, rotation: 0, ease: 'power1',}]
			});
			gsap.to("#el_I531543523141251139995112214", { autoAlpha: 0, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, duration: 0, delay: 0 });
			gsap.to("#el_I531543523141251139995112214", {
				duration: 1.6,
				delay: 2,
				repeat: 0,
				keyframes: [{ duration: 0, autoAlpha: 0, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, ease: 'power1',},{ duration: 1.6, autoAlpha: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, ease: 'power1',}]
			});
			gsap.to("#el_I5315435231413", { autoAlpha: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, duration: 0, delay: 0 });
			gsap.to("#el_I5315435231413", {
				duration: 1,
				delay: 0,
				repeat: 0,
				keyframes: [{ duration: 0, autoAlpha: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, ease: 'power1',},{ duration: 1, autoAlpha: 1, x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, ease: 'power1',}]
			});
			gsap.to("#el_I5315435231414", { autoAlpha: 0, x: 0, y: 0, scaleX: 1, scaleY: 0, rotation: 0, duration: 0, delay: 0 });
			gsap.to("#el_I5315435231414", {
				duration: 1.5,
				delay: 3.1,
				repeat: 0,
				keyframes: [{ duration: 0, autoAlpha: 0, scaleY: 0, x: 0, y: 0, scaleX: 1, rotation: 0, ease: 'power1',},{ duration: 1.5, autoAlpha: 1, scaleY: 1, x: 0, y: 0, scaleX: 1, rotation: 0, ease: 'power1',}]
			});
		}
		startAnimation();
	});})();