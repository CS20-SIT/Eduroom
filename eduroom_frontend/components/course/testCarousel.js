import React, { useState } from "react";
import { Box, Slide } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  transitions: {
    easing: {
      easeInOut: "linear",
      easeOut: "linear",
      easeIn: "linear",
      sharp: "linear"
    }
  }
});

export default function Home() {
  const [twoSlide, setTwoSlide] = useState (true)
  const [oneSlide, setOneSlide] = useState (false)

// const test = setInterval(nextSlide, 100);

setInterval(function() {
    slides[counter].style.opacity = 0; // Hide the previous image
    counter = (counter + 1) % slides.length; // Increment counter
    slides[counter].style.opacity = 1; // Show the next image
  }, 3000);

  function nextSlide() {
    setOneSlide((prevState) => !prevState);
    setTwoSlide((prevState) => !prevState);
  }

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          style={{ overflowX: "hidden", height: 400 }}
        >
          <button onClick={nextSlide}>

          <div style={{ display: "flex", width: "100%", position: "relative" }}>
            <Slide
              style={{ position: "absolute" }}
              direction={"left"}
              in={oneSlide}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <div style={{ backgroundColor: "green", width: "100%" }}>
              <img src="/images/package/pic2.svg" id="test"></img>
              </div>
            </Slide>

            <Slide
              style={{ position: "absolute" }}
              direction={"right"}
              in={twoSlide}
              mountOnEnter
              unmountOnExit
              timeout={1000}
            >
              <div style={{ backgroundColor: "red", width: "100%" }}>
              <img src="/images/package/pic1.svg" id="test"></img>
              </div>
            </Slide>      
          </div>
          </button>
        </Box>
      </ThemeProvider>
    </Box>
  );
}
