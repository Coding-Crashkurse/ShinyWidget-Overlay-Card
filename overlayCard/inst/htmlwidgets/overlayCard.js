HTMLWidgets.widget({

  name: 'overlayCard',

  type: 'output',

  factory: function (el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function (x) {

        // TODO: code to render the widget, e.g.
        const template = document.createElement("template");
        template.innerHTML = `
              <style>
            .container{
                width: 1000px;
                position: relative;
                display: flex;
                justify-content: space-between;
            }

            .container .card{
                position: relative;
                cursor: pointer;
            }

            .container .card .face{
                width: 300px;
                height: 200px;
                transition: 0.5s;
            }

            .container .card .face.face1{
                position: relative;
                background: #333;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1;
                transform: translateY(100px);
            }

            .container .card:hover .face.face1{
                background: ${x.background};
                transform: translateY(0);
            }

            .container .card .face.face1 .content{
                opacity: 0.2;
                transition: 0.5s;
            }

            .container .card:hover .face.face1 .content{
                opacity: 1;
            }

            .container .card .face.face1 .content img{
                max-width: 100px;
            }

            .container .card .face.face1 .content h3{
                margin: 10px 0 0;
                padding: 0;
                color: #fff;
                text-align: center;
                font-size: 1.5em;
            }

            .container .card .face.face2{
                position: relative;
                background: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                box-sizing: border-box;
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
                transform: translateY(-100px);
            }

            .container .card:hover .face.face2{
                transform: translateY(0);
            }

            .container .card .face.face2 .content p{
                margin: 0;
                padding: 0;
            }

            .container .card .face.face2 .content a{
                margin: 15px 0 0;
                display:  inline-block;
                text-decoration: none;
                font-weight: 900;
                color: #333;
                padding: 5px;
                border: 1px solid #333;
            }

            .container .card .face.face2 .content a:hover{
                background: #333;
                color: #fff;
            }
            </style>
            <div class="container">
                <div class="card">
                    <div class="face face1">
                        <div class="content">
                            <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true">
                            <h3>Spendings</h3>
                        </div>
                    </div>
                    <div class="face face2">
                        <div class="content">
                            <div><slot name="textcontent" /></div>
                                <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            `;

        class UserCard extends HTMLElement {
          constructor() {
            super();

            this.showInfo = true;

            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
          }
        }

        window.customElements.define(`animated-card${x.id}`, UserCard);

        //if (!window.customElements.get('animated-card')) { window.customElements.define(`animated-card-${x.id}`, UserCard); }


        el.innerHTML = `
          <animated-card${x.id}>
            <div slot="textcontent">${x.text}</div>
          </animated-card${x.id}`;

      },


      resize: function (width, height) {

        // TODO: code to re-render the widget with a new size

      }

    };
  }
});
