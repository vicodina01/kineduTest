import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TitleHeader from './TitleHeader';
import MilestoneList from './MilestoneList';

const MilestonesForm = (props) => {
    let buttonSkill1;
    let buttonSkill2;
    let buttonFormText;

    if (props.skillSelected === 'Physical') {
        buttonSkill1 = 'App-button-pill bg-white fc-blue App-button-pill-left';
        buttonSkill2 = 'App-button-pill bg-blue App-button-pill-right border-white';
        buttonFormText = 'Next';

      } else {
        buttonSkill1 = 'App-button-pill bg-pink App-button-pill-left border-white';
        buttonSkill2 = 'App-button-pill bg-white fc-pink App-button-pill-right';
        buttonFormText = 'Finish Assesment';
      }
    return (
        <Container fixed>
            <Card>
                <CardHeader
                    style={{ backgroundColor: props.colorSelected, textAlign: 'center' }}
                    title={
                        <TitleHeader
                            handleSkill1Click={props.handleSkill1Click}
                            handleSkill2Click={props.handleSkill2Click}
                            buttonSkill1={buttonSkill1}
                            buttonSkill2={buttonSkill2} />
                    }
                    subheader={
                        <React.Fragment>
                            <div style={{ color: '#ffffff', textAlign: 'center', fontSize: 'small' }}>
                                <h1>{props.currentSkill.title}</h1>
                                <p>{props.currentSkill.description}</p>
                            </div>
                        </React.Fragment>
                    }
                />
                <CardContent>
                    <MilestoneList
                        milestones={props.currentSkill.milestones}
                        milestoneStatus={props.milestoneStatusArray}
                        handleMilestoneClick={props.handleMilestoneClick} />
                    <Button variant="contained" style={{ minWidth: '130px' }}
                        onClick={props.handleFormClick}
                        className="App-button-pill bg-green fc-white">{buttonFormText}</Button>
                </CardContent>
            </Card>
        </Container>
    )
}

export default MilestonesForm;