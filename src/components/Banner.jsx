import { Grid } from "@mui/material";
import "./styles/Banner.css";

export const Banner = () => {
  return (
    <div className="Banner">
      <Grid container>
        <Grid item xs={5}>
          <div className="vcentered">
            <h1 className="welcome-heading">
              Connect to other students on campus.
            </h1>
            <p className="welcome-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              ipsam repellendus culpa sit quasi, dolorem impedit ab voluptas,{" "}
            </p>
            <div className="app-buttons">
              <a href="#" className="playstore">
                <img src="src/assets/playstore.svg" alt="playstore logo" />
                <span className="app-btn-text">
                  <em>Get it on</em> <br /> Google Play
                </span>
              </a>
              <a href="#" className="appstore">
                {" "}
                <img src="src/assets/apple.svg" alt="apple logo" />
                <span className="app-btn-text-a">
                  <em>Download on the</em> <br /> App Store
                </span>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className="banner-imgs">
            <img
              src="https://assets.website-files.com/605ac1613df290232539ca06/605ac437304c53b21642dd0f_hero_iphone.png"
              alt="campus connect app"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
