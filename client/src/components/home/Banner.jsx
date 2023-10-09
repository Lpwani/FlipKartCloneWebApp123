

import Carausal from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";   // auto css for carousel component...

import { styled } from '@mui/material';

// constants
import { bannerData } from '../../constants/data';


const Image = styled('img')({
    width: '100%',
    height: 200,
})

const responsive = {

      // the naming can be any, depends on you.
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1     // items tell how many item you need to show on carausal component at a time.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
    return (
        <Carausal
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}   // by default these property is true.
        slidesToSlide={1}     // how to much slides to slide per sliding operation.
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        >
            {
                bannerData.map(data => (
                    <Image src = {data.url} alt = "banner" />
                ))
            }
        </Carausal>
    )
}


export default Banner;