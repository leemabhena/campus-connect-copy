import { Grid } from "@mui/material";
import "./styles/Login.css";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="Login">
      <Grid container>
        <Grid item xs={4}>
          <div className="llogo">Campus connect</div>
          <div className="lleft">
            <h2 className="llheader">Welcome Back</h2>
            <p className="lleft-decs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              officiis expedita fugit ad totam qui porro corporis beatae ea illo
            </p>
            <form>
              <input
                type="email"
                name="email"
                required
                id=""
                className="linput"
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                required
                id=""
                className="linput"
                placeholder="Password"
              />
              <button className="lsubmit" onClick={() => navigate("/app")}>
                Login
              </button>
            </form>
            <p className="lsignp">
              Don't have an account <a href="/signup">Sign up</a> ?
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
