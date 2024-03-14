import { useEffect } from 'react';   // Here useEffect hook is use as replacement for lifecycle method provided by react-DOM -> components class sucha as willUnMount(), didComponentMount(),didComponentUpdate()...


// import { Fragment } from 'react';  Here you don't need to import Fragment component because javascript has syntactical improvement
// and it refers empty tag as Fragent automatically....

// components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

import {styled, Box} from '@mui/material';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

const Component = styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;
`

const Home = () => {

    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();     

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return(
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discount for You" timer={false}/>
                <Slide products={products} title="Suggesting Items" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </Component>
        </>
    )
}


export default Home;