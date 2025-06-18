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
          <button id="button2" onClick={()=>test('test test')}>GET IN TOUCH</button>
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
            <br/>
          A Product Designer & Developer.
          <br/>
          <div>The sky was painted with shades of  <br/>orange and pink as the sun began to set. <br/> A gentle breeze rustled the leaves,  <br/>and birds chirped their final songs of the day. </div>
        </div>

        <div>
            <div id="about1"></div>
            <div id="about2"></div>
        </div>
      </section>
    </>
  );
}
export default App;
