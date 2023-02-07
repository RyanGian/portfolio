import React from "react";
import './Home.css';
import logo from "../assets/svg (5).png";

function Home() {

  return (
    <div className='home-container'>
      <div className="text-container">
      <div className="colour-border">
        <div className="name-container">
          RYAN GIAN
        </div>
      </div>


        <div className="profile-container">
          Laoreet justo nonummy. Dolor. Ligula luctus penatibus quis magna ut erat hac nam libero pretium mus lobortis rhoncus, pretium nunc dapibus natoque praesent interdum. Quis laoreet mus vulputate consectetuer aliquet.
        </div>

      </div>

        {/* <img
            className="image"
            src={ logo }
            alt="logos"
          ></img> */}

    </div>
  );
}

export default Home;