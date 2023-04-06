import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({image}) =>{
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };
  return (
    <Slider {...settings}>       
       {image.map((img,i)=>(<figure className="image is-4by3" key={i}><img src={img} alt="Placeholder image"/></figure>))}
    </Slider>
  )
}

export default CardSlider