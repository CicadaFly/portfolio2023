import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/person1.jpg'
import img2 from '../../assets/person2.jpg'
import img3 from '../../assets/dnd.png'

const Test = () =>{
  const settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };
  return(
    <div className='container'>
      <Slider {...settings}>
        <div><img src={img1} style={{maxHeight:'100px',margin:'auto'}}/></div>
        <div><img src={img2} style={{maxHeight:'100px',margin:'auto'}}/></div>
        <div><img src={img3} style={{maxHeight:'100px',margin:'auto'}}/></div>
      </Slider>
      </div>
  )
}

export default Test
