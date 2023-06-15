import { Grid } from "@mui/material";
import "./styles/Signup.css";

export const Signup = () => {
  return (
    <div className="Signup">
      <Grid container>
        <Grid item xs={4}>
          <div className="slogo">Campus connect</div>
          <div className="sleft">
            <h2 className="slheader">Join by your role</h2>
            <p className="sleft-decs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              officiis expedita fugit ad totam qui porro corporis beatae ea illo
            </p>
            <div className="stypes ">
              <div className="square sactive">
                <div className="row_">
                  <i className="fa-solid fa-graduation-cap full"></i>
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <p className="stitle">I'am Student</p>
              </div>
              <div className="square">
                <div className="row_">
                  <i className="fa-solid fa-house-circle-check full"></i>
                  {/* <i className="fa-solid fa-circle-check"></i> */}
                </div>
                <p className="stitle">I'am Landlord</p>
              </div>
            </div>
            <button className="ssubmit">Continue</button>
            <p className="ssignp">
              Already have an account <a href="/login">Login</a> ?
            </p>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="rimg">
            <img
              src="https://cdn.pixabay.com/photo/2023/05/21/07/59/iceberg-8008071_1280.jpg"
              alt="login image"
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
