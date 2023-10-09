import { useEffect } from 'react';   // Here useEffect hook is use as replacement for lifecycle method provided by react-DOM -> components class sucha as willUnMount(), didComponentMount(),didComponentUpdate()...


// import { Fragment } from 'react';  Here you don't need to import Fragment component because javascript has syntactical improvement
// and it refers empty tag as Fragent automatically....

// components
import NavBar from './NavBar';
import Banner from './Banner';

import {styled, Box} from '@mui/material';

import { getProducts } from '../../redux/actions/productActions';
import { useDispatch } from 'react-redux';

const Component = styled(Box)`
    padding: 10px 10px;
    background: #F2F2F2;
`

const Home = () => {

    const dispatch = useDispatch();     

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return(
        <>
            <NavBar />
            <Component>
                <Banner />
            </Component>
        </>
    )
}


export default Home;