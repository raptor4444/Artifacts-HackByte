import React from "react";
import vg from "../assets/2.png";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div class="button-container" id="Patient">
        <main>
          <button>Patient</button>
        </main>
      </div>
      <div class="button-container" id="Database">
        <main>
          <button>Database</button>
        </main>
      </div>
    </>
  );
};

export default Home;
