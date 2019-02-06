import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import axios from 'axios';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const PATH_BASE = 'https://api.thecatapi.com/v1/images/search?limit=10';

const styles = theme => ({
    root: {
        maxWidth: 400,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 400,
        overflow: 'hidden',
        width: '100%',
    },
});

class SwipeableTextMobileStepper extends React.Component {
    state = {
        activeStep: 0,
        catsList: []
    };

    componentDidMount() {
        this.fetchCatsListData();
    }

    fetchCatsListData = () => {
        axios(`${PATH_BASE}`)
            .then(result => this.setCatsListData(result.data))
            .catch(error => this.setState({ error }));
    };

    setCatsListData = (result) => {
        this.setState({
            catsList: result,
        });
    };

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep - 1,
        }));
    };

    handleStepChange = activeStep => {
        this.setState({ activeStep });
    };

    render() {
        const { classes, theme } = this.props;
        const { activeStep } = this.state;
        const maxSteps = this.state.catsList.length;

        return (
            maxSteps === 0 ? <div></div> :
            <div>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{this.state.catsList[activeStep].id}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={this.handleStepChange}
                    enableMouseEvents
                >
                    {this.state.catsList.map((step, index) => (
                        <div key={step.id}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.url} alt={step.id} />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper 
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Back
                        </Button>
                    }
                />
            </div>
        );
    }
}

SwipeableTextMobileStepper.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);