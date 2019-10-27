import React from "react";
import "./Main.css";


const Main = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
           <img alt="" src={require("../../images/" + props.image)} width="150" height="100" />
</div>
</div>
);

export default Main;