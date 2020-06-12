HTMLWidgets.widget({

  name: 'overlayCard',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        // TODO: code to render the widget, e.g.
          const container = document.createElement("div");
          container.classList.add("card_container");

          container.style.position = "relative";
          container.style.height = "500px";

          const main = document.createElement("div");
          main.classList.add("main");
          main.classList.add("col-sm-4");
          main.style.display = "block";
          main.style.width = "100%";
          main.style.height = "100%";
          main.style.backgroundColor = "lightgray";
          main.innerHTML = x.front;

          const overlay = document.createElement("div");
          overlay.classList.add("overlay");
          overlay.style.position = "absolute";
          overlay.style.bottom = "100%";
          overlay.style.left = 0;
          overlay.style.right = 0;
          overlay.style.backgroundColor = "#008CBA";
          overlay.style.overflow = "hidden";
          overlay.style.width = "100%";
          overlay.style.height = 0;
          overlay.style.transition = "0.5s ease";
          overlay.style.paddingLeft = "15px";
          overlay.style.paddingRight = "15px";
          overlay.innerHTML = x.overlay;

          const text = document.createElement("div");
          text.classList.add("text");
          text.style.color = "white";
          text.style.fontSize = "20px";
          text.style.position = "absolute";
          text.style.top = "50%";
          text.style.left = "50%";
          text.style.transform = "translate(-50%, -50%)";
          text.style.align = "center";

          document.querySelector("body").appendChild(container);
          document.querySelector(".card_container").appendChild(main);
          document.querySelector(".main").appendChild(overlay);
          document.querySelector(".overlay").appendChild(text);

          document.querySelector(".card_container").addEventListener("mouseover", function(){
              const overlay = document.querySelector(".overlay");
              overlay.style.bottom = 0;
              overlay.style.height = "100%";
          });

          document.querySelector(".card_container").addEventListener("mouseout", function(){
              const overlay = document.querySelector(".overlay");
              overlay.style.bottom = "100%";
              overlay.style.height = 0;
          });

    },

      resize: function(width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
