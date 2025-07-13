import React from "react";
import "./About.css";
import medance from "../data/medance.jpg"

export default function About() {
  return (
    <div className="background">
      <div className="wrapper">
        <div className="center-content">
          <div className="imgbox img">
            <img src={medance} alt="Gavin Dancing" />
          </div>
        </div>
        <div className="text-group">
          <p>
            <b>ABSTRACT</b>
            <br />
            <br />
            This research explores how computational shuffling of video segments
            affects audience perception. Participants viewed two videos: one
            original, one algorithmically altered. Responses were gathered to
            evaluate which version viewers believed was authentic.
          </p>
          <p>
            Read the paper here:{" "}
            <a
              href="https://www.gavincaulfield.com/file?src=CRC.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Computationally Random Choreography
            </a>
          </p>
        </div>
      </div>
      <div
        className="secab"
        onClick={() => {
          window.location.href = "mailto:gavindcaulfield@gmail.com";
        }}
      >
        <b>CONTACT</b>: gavindcaulfield@gmail.com
      </div>
      <div
        className="secab"
        onClick={() => {
          window.location.href = "https://www.gavincaulfield.com";
        }}
      >
        <b>WEBSITE</b>: www.gavincaulfield.com
      </div>
      <div style={{marginBottom: "10rem"}}></div>
    </div>
  );
}
