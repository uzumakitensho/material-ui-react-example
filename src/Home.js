import React from 'react';
import Typography from '@material-ui/core/Typography';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h2">Ini Home</Typography>
                <SwipeableTextMobileStepper />
            </div>
        );
    };
}

export default Home;