import * as React from 'react';
import PropTypes from 'prop-types';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const marks = [
    {
        value: 0,
        label: '0',
    },
    {
        value: 1000,
        label: '1000',
    },
]

const PrettoSlider = styled(Slider)({
    color: 'rgb(18 207 45)',
    height: 10,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '4px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },

    '& .MuiSlider-markLabel': {
        fontSize: 18,
    }
});


export const MUISlider = ({ title, value, handleChangeDep }) => {

    const WordToUpperCase = (word) => {
        return word[0].toUpperCase() + word.slice(1)
    }
    const [a, setA] = React.useState(value);

    const handleChange = (event, newValue) => {
        setA(newValue);

    }
    const handleInputChange = (e) => setA(e.target.value)
    React.useEffect(() => {
        handleChangeDep(a, title)

    }, [a])

    return (
        <Box sx={{ width: 300, margin: '20px 50px' }}>
            <Box sx={{ display: "flex", flexWrap: { xs: 'wrap', md: 'none' }, alignItems: "end" }}>
                <Typography gutterBottom>{WordToUpperCase(title)} : </Typography>
                <OutlinedInput sx={{ width: 100, m: "0px 10px" }}
                    endAdornment={<InputAdornment position="end">GB</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    size='small'
                    value={a}
                    onChange={handleInputChange}
                />
            </Box>

            <PrettoSlider
                valueLabelDisplay="auto"
                aria-label="pretto slider"
                value={a}
                step={1}
                marks={marks}
                min={0}
                max={1000}
                onChange={handleChange}

            />

        </Box>

    );
}