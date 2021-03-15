import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
// import Slider from "react-slick";
//import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
//import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";

/*function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <ArrowBackIos
            style={{
                zIndex: "9",
                fontSize: "0",
                left: "-25px",
                lineHeight: "0",
                position: "absolute",
                top: "50%",
                display: "block",
                width: "20px",
                height: "20px",
                padding: "0",
                msTransform: "translate(0, -50%)",
                transform: "translate(0, -50%)",
                cursor: "pointer",
                border: "none",
            }}
            onClick={onClick}
        />
    );
}*/

/*function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <ArrowForwardIos
            style={{
                zIndex: "9",
                fontSize: "0",
                lineHeight: "0",
                right: "-25px",
                position: "absolute",
                top: "50%",
                display: "block",
                width: "20px",
                height: "20px",
                padding: "0",
                msTransform: "translate(0, -50%)",
                transform: "translate(0, -50%)",
                cursor: "pointer",
                border: "none",
            }}
            onClick={onClick}
        />
    );
}
*/

function MainPage(props) {
    /*var settings = {
        dots: true,
        lazyLoad: true,
        fade: true,
        infinite: true,
        autoplay: false,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />
    };
    **/
    return (
        <div className="contain">
            <div className="bienvenida">
                <h2>Bienvenido a Radarin</h2>
                <p>Hola</p>
            </div>
        </div>
    );
}

export default MainPage;