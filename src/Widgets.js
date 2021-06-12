import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widget_article'>
      <div className='widgets_articleleft'>
        <FiberManualRecordIcon />
      </div>

      <div className='widgets_articleright'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className='widgets'>
      <div className='widget_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Heavy rains floods Mumbai", "Tops news - 2324 readers")}
      {newsArticle(
        "Clubhouse chat leak - get the latest",
        "Tops news - 1,221 readers"
      )}
      {newsArticle(
        "Power corridor abuzz in Delhi",
        "Tops news - 1,124 readers"
      )}
      {newsArticle(
        "Electric vehicles under FAME II",
        "Tops news - 1021 readers"
      )}
      {newsArticle(
        "NASA to plan Mars colony and set up by next decade",
        "Tops news - 984 eaders"
      )}
      {newsArticle(
        "New hybrid car from Tesla, get to know all new features",
        "Tops news - 781 readers"
      )}
      {newsArticle("New models on the ramp ", "Tops news - 667 readers")}
      {newsArticle("Cute labrador on the run", "Tops news - 581 readers")}
      {newsArticle("Gold prices today", "Tops news - 234 readers")}
    </div>
  );
}

export default Widgets;
