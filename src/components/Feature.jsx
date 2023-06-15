import "./styles/Feature.css";
import { Grid } from "@mui/material";

function Feature(props) {
  return (
    <div className="Feature">
      <Grid container>
        <Grid item xs={6}>
          <div className="feature-img">
            <img
              src="https://assets.website-files.com/605ac1613df290232539ca06/6064097dc28d2154d31d675e_iphone_homepage_old-p-500.png"
              alt="feature image"
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="feature-info">
            <h3 className="feature-small-heading">Feed</h3>
            <h2 className="feature-h-big">
              Stay updated about whats happening on campus
            </h2>
            <p className="feature-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id
              laboriosam esse consectetur quaerat aspernatur deleniti, soluta
              tempora quod modi! Beatae unde voluptates delectus cupiditate
              totam ipsum voluptatibus officia ut?
            </p>
            <ul className="feature-list">
              <li>
                <span className="b-circular">
                  <i className="fa-solid fa-plus"></i>
                </span>
                <span className="fl-title">Create post.</span>
                This is a post and allows you to do some stuff.
              </li>
              <li>
                <span className="b-circular">
                  <i className="fa-solid fa-comment"></i>
                </span>{" "}
                <span className="fl-title">Comment.</span> Can add comments to
                friends and collegues posts.
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Feature;
