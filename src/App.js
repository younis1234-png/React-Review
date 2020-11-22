import React from "react";
import Review from "./Review";
// import { FaGithubSquare } from "react-icons/fa";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2> Our reviews</h2>
          <div className="underline"></div>
        </div>
        {/* our review componenet */}
        <Review />
      </section>

      {/* <FaGithubSquare className="icon" /> */}
    </main>
  );
}

export default App;

// to style a icons you can either target the svg in the container you can see it in console.log or you can add a className  to {FaG...}
// we have import it from react-icons
