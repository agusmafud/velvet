import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Fade from 'react-reveal/Fade';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
    root: {        
        margin: '0 auto',
        flexGrow: 1,
        maxWidth: 230,               
        overflow: 'hidden',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            maxWidth: 250,            
        },
        [theme.breakpoints.up('md')]: {
            maxWidth: 320,            
        },
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing.unit * 4,
        backgroundColor: theme.palette.background.default,
    },
    img: {        
        display: 'block',        
        overflow: 'hidden',
        width: '100%',
    },
    mobileStepper: {        
    }
});

class Galeria extends React.Component {
    state = {
        activeStep: 0,
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
        const { classes, fotos } = this.props;
        const { activeStep } = this.state;
        const maxSteps = fotos.length;

    return (
        <div className={classes.root}>        
            <Fade>
            <AutoPlaySwipeableViews
                axis='x'
                index={activeStep}
                onChangeIndex={this.handleStepChange}
                enableMouseEvents
            >
                {
                    fotos.map((step, index) => (
                        <div key={index}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label} />
                            ) : null}
                        </div>
                    ))
                }
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                className={classes.mobileStepper}                
                backButton={
                    <Button size="small" color='primary' onClick={this.handleBack} disabled={activeStep === 0}>
                        <KeyboardArrowLeft /> 
                    </Button>
                }        
                nextButton={
                    <Button size="small" color='primary' onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>                                            
                        <KeyboardArrowRight />
                    </Button>
                }
            />
            </Fade>
      </div>
    );
  }
}

Galeria.propTypes = {
    classes: PropTypes.object.isRequired,
    fotos: PropTypes.array.isRequired,
};

export default withStyles(styles)(Galeria);