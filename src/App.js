import "./App.css";
function App() {
  const test = (a) => {
    alert(a);
  };
  return (
    <>
      <section>
        <div id="main-div">
          <div id="div1">
            <div id="intro">
              Hello! <br />
              I'm Jonathan Doe <br />
              a product designer <br />
              base in Somewhere.
            </div>
          </div>
          <div id="div2"></div>
        </div>
        <div id="div3">
          <div id="nav1">Portfolio.</div>
          <div id="nav2">Intro</div>
          <div id="nav3">About</div>
          <div id="nav4">Works</div>
          <div id="nav5">Contact</div>
        </div>
        <div id="buttonDiv">
          <button id="button1">MORE ABOUT ME</button>
          <button id="button2">GET IN TOUCH</button>
          <h1 id="dash">__________________</h1>
          <button id="button3">GET MY CV</button>
        </div>

        <div id="listDiv">
          <ul id="list">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <br />
        <br />
        <br />
        <br />

        <div>
          <div
            style={{
              fontSize: "190px",
              fontFamily: "Times Romen",
              fontWeight: "bold",
              marginTop: "200px",
              marginLeft: "70px",
              color: "#d4d6d4",
              zIndex: "-1",
            }}
          >
            01
          </div>
          <div
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              marginTop: "-140px",
              zIndex: "1",
              marginLeft: "100px",
              fontFamily: "Times Romen",
            }}
          >
            About Me.
          </div>
        </div>

        <div id="about-text">
          <div>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit.
            <br />
            Voluptas explicabo id debitis <br /> cupiditate cumque, error quia!{" "}
            <br />
            Debitis cupiditate ipsa nihil labore, <br /> earum atque dolor quos
            saepe vero inventore, <br />
            odit nam deleniti accusantium omnis mollitia <br />
            consequatur harum incidunt! Ex modi aut <br /> repudiandae
            doloremque commodi <br />
            recusandae labore sit.
          </div>
        </div>

        <div style={{ paddingBottom: "300px" }}>
          <div id="about1"></div>
          <div id="about2"></div>
          <div id="about3"></div>
          <div id="about4"></div>
          <div id="about5"></div>
          <div id="about6"></div>
        </div>

        <div id="section3">
          <div id="experiance" class="sec" style={{ marginLeft: "150px" }}>
            <ul>
              <li class="list-head" >
                <h3><span class="span">|</span> Experiance</h3>
              </li>
                <br/>
              <li class="list">
                <h4>Spotify</h4>
                <p>Product Designer</p>
              </li>
              <li class="list">
                <h4>Dropbox</h4>
                <p>Interface Developer</p>
              </li>
              <li class="list">
                <h4>Google</h4>
                <p>Lead UI Designer</p>
              </li>
              <li class="list">
                <h4>Figma</h4>
                <p>UI Designer</p>
              </li>
              <li class="list">
                <h4>Microsoft</h4>
                <p>UI Designer</p>
              </li>
            </ul>
          </div>
          <div id="award" class="sec">
            <ul>
              <li class="list-head">
                <h3><span class="span"> |</span> Award</h3>
              </li>
                <br/>
              <li class="list">
                <h4>Site Of The Month</h4>
                <p>Awwwards — 2023</p>
              </li>
              <li class="list">
                <h4>Site Of The Day</h4>
                <p>Awwwards — 2023</p>
              </li>
              <li class="list">
                <h4>Agency of The Year</h4>
                <p>Awwwards — 2022</p>
              </li>
              <li class="list">
                <h4>FWA of The Month</h4>
                <p>FWA — 2022</p>
              </li>
              <li class="list">
                <h4>Site Of The Month</h4>
                <p>Awwwards — 2022</p>
              </li>
            </ul>
          </div>
          <div id="skill" class="sec">
            <ul>
              <li class="list-head">
                <h3><span class="span">|</span> Skill</h3>
              </li>
              <br/>
                <li class="list">
                <h4>Product Design</h4>
              </li>
              <li class="list">
                <h4>Prototyping</h4>
               
              </li>
              <li class="list">
                <h4>UI/UX Design</h4>
              
              </li>
              <li class="list">
                <h4>Frontend Development</h4>
              
              </li>
              <li class="list">
                <h4>Illustration</h4>
              
              </li>
                 <li class="list">
                <h4>Visual Design</h4>
              
              </li>
            </ul>
          </div>
        </div>
        <div id="section4"></div>

        <div></div>
      </section>
    </>
  );
}
export default App;
