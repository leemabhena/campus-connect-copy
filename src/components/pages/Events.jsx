import React from "react";
import { Grid } from "@mui/material";
import { EventsTile } from "../EventsTile";

export const Events = () => {
  return (
    <div className="Events">
      <h3 className="app-page-heading">Events</h3>
      <Grid container>
        <Grid item md={4}>
          <EventsTile />
        </Grid>
        <Grid item md={4}>
          <EventsTile />
        </Grid>
        <Grid item md={4}>
          <EventsTile />
        </Grid>
        <Grid item md={4}>
          <EventsTile />
        </Grid>
        <Grid item md={4}>
          <EventsTile />
        </Grid>
        <Grid item md={4}>
          <EventsTile />
        </Grid>
        <Grid item md={4}>
          <EventsTile />
        </Grid>
        <Grid item md={4}>
          <EventsTile />
        </Grid>
        <Grid item md={4}>
          <EventsTile />
        </Grid>
      </Grid>
    </div>
  );
};
