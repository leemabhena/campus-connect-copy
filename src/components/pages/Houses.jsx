import { HouseTile } from "../ HouseTile";
import { Grid } from "@mui/material";
import "../styles/Houses.css";

export const Houses = () => {
  return (
    <div className="Houses">
      <h3 className="app-page-heading">Off campus housing</h3>
      <Grid container>
        <Grid item xs={3}>
          <HouseTile />
        </Grid>
        <Grid item xs={3}>
          <HouseTile />
        </Grid>
        <Grid item xs={3}>
          <HouseTile />
        </Grid>
        <Grid item xs={3}>
          <HouseTile />
        </Grid>
      </Grid>
    </div>
  );
};
