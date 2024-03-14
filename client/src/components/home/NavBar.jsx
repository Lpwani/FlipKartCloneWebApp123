
import "react-multi-carousel/lib/styles.css";

import {Box, Typography, styled} from '@mui/material';


// constants
import { navData } from '../../constants/data';


const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '55px 130px 0 130px',
    justifyContent: 'space-between',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        margin: 0
    },
    [theme.breakpoints.down('md')]: {
        margin: 0,
        display: "none",
    }
}));

const Container = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
        padding: "12px 8px",
        textAlign: "center",
    },
    [theme.breakpoints.down('md')]: {
        padding: "12px 8px",
        textAlign: "center",
        "& > img": {
            objectFit: "cover",
        }
    }
}));

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`

const NavBar = () => {
    return (
        <Box style={{ background: '#fff'}}>
            <Component>
                {
                    navData.map((data, index) =>(
                        <Container key={index}>
                            <img src={data.url} alt="nav" style = {{width: 64}}/>
                            <Text>{data.text}</Text>
                        </Container>
                    ))
                }
            </Component>
        </Box>
    )
}


export default NavBar;