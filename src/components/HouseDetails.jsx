import React from "react";
import "./styles/HouseDetails.css";
import { Grid } from "@mui/material";
import { HouseDetailsReview } from "./HouseDetailsReview";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const HouseDetails = () => {
  return (
    <div className="HouseDetails">
      <h2 className="hd-title">This is the main house in Lorem Ipsum</h2>
      <div className="hd-small-intro">
        <p className="hd-review">
          <i className="fa-solid fa-star"></i> 4.98 - 9 reviews
        </p>
        <div className="hd-location">Bulawayo, Zimbabwe</div>
      </div>
      <div className="hd-images">
        <ImageList
          sx={{ width: "100%", height: 450 }}
          variant="woven"
          cols={3}
          gap={8}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
      <button className="reserve">Reserve</button>
      <br /> <br />
      <br />
      <Grid container>
        <Grid item xs={6}>
          <div className="hd-landlord">
            <h3 className="hd-ll-heading">Meet your host</h3>
            <div className="flex-row">
              <div className="host-img">
                <img src="/public/house.jpeg" alt="host image" />
              </div>
              <div className="host-reviews">
                <p>52 reviews</p>
                <p className="tb-bordered">4.92 rating</p>
                <p>5 years hosting</p>
              </div>
            </div>
            <div className="host-info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              aperiam quia corporis ea! Quod, doloribus quos. Incidunt eaque,
              deleniti impedit cupiditate quos consequatur accusamus, excepturi,
              accusantium distinctio commodi corrupti aliquam.
            </div>
            <button className="message-host">Chat with host</button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="hd-place">
            <h3 className="place-heading">About this place</h3>
            <p className="place-desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              voluptate porro ut culpa qui eveniet enim ullam laudantium,
              consequatur laborum, ducimus sequi dolorem aut hic odit inventore
              totam? Voluptatum, officiis.
            </p>
            <h3 className="sleep-place">Where you'll sleep</h3>
            <p className="hd-sleep-p">
              <i className="fa-solid fa-bed"></i> Bedroom:{" "}
              <span className="sleep-info">1 single bed</span>
            </p>

            <h3 className="place-contents">What this place offers</h3>

            <p className="contents">
              <i className="fa-solid fa-house-lock"></i> Lock on bedroom door
            </p>
            <p className="contents">
              <i className="fa-solid fa-wifi"></i> WIFI
            </p>
            <p className="contents">
              <i className="fa-solid fa-car-side"></i> Free parking in premises
            </p>
            <p className="contents">
              <i className="fa-solid fa-book-open-reader"></i> Study place
            </p>

            <p className="contents">
              <i className="fa-solid fa-caret-down"></i> Backup Power
              <span className="nested-info">
                <i className="fa-solid fa-solar-panel"></i> Solar Panels
              </span>
              <span className="nested-info">Generator</span>
            </p>

            <p className="contents">
              <i className="fa-solid fa-caret-down"></i> Kitchen
              <span className="nested-info">
                <i className="fa-solid fa-utensils"></i> Cooking intensils
              </span>
              <span className="nested-info">Refrigerator</span>
            </p>

            <p className="contents">
              <i className="fa-solid fa-caret-down"></i> Living Room
              <span className="nested-info">
                {" "}
                <i className="fa-solid fa-tv"></i> TV
              </span>
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="dark-rule"></div>
      <div className="hd-map">
        <h3 className="map-title">Where you will be</h3>
        <div className="map">
          <img src="/public/map.png" alt="map" />
        </div>
      </div>
      <div className="dark-rule"></div>
      <div className="rules">
        <h3 className="to-know">House rules</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          placeat, dolorum libero quia dolore enim! Esse voluptates beatae
          obcaecati deleniti, corporis reiciendis neque error ex saepe placeat
          totam quo repudiandae!
        </p>
      </div>
      <div className="dark-rule"></div>
      <div className="hd-reviews">
        <h3 className="hd-review-heading">Reviews</h3>
        <p className="rv-title">
          <i className="fa-solid fa-star"></i>4.89 - 9 reviews
        </p>
        <div className="d-table">
          <div className="table-row">
            <HouseDetailsReview />
            <HouseDetailsReview />
          </div>
          <div className="table-row">
            <HouseDetailsReview />
          </div>
        </div>
      </div>
    </div>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    cols: 2,
  },
];
