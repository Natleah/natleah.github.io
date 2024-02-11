function myMove() {
        const container = document.getElementById("container");
        const box = document.getElementById("animate");
        let t = setInterval(move, 1);
        let pos = 1;
        let test = true;
        let zdex = "2";

        function move() {
          box.style.left = `${pos}px`;
          box.style.top = `${pos}px`;
          if (test) {
            pos++; /* mov down */
          } else {
            pos--; /* move up */
          }
          /* update the direction when you reach the top or bottom limit*/

          if (pos >= 350) {
            test = false;
            zdown();
          } else if (pos <= -30) {
            test = true;
            zup();
          }
        }

        function zdown() {
          box.style.zIndex =
            "-10"; /* trying to make it go under the container on the way back */
        }

        function zup() {
          box.style.zIndex =
            "2"; /* trying to make it go back to it's original position for the journey across */
        }
      }
	  function stop() {
			window.stop();
		}
