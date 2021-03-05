import React from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const MilestoneList = (props) => {
    return (

        <List component="nav">
            {
                Object.keys(props.milestones).map((oneKey, i) => {

                    let currentMilestoneState;
                    let currentMilestoneClassName;

                    let foundIndex = props.milestoneStatus.findIndex(item => item.id === props.milestones[oneKey].id);

                    if (foundIndex === -1) {
                        currentMilestoneState = "Not Answered";
                        currentMilestoneClassName = "App-button-pill bg-gray fc-gray";
                    } else {
                        currentMilestoneState = props.milestoneStatus[foundIndex].status
                        currentMilestoneClassName = props.milestoneStatus[foundIndex].className                       
                    }

                    return (

                        <ListItem key={i}>
                            <ListItemText
                                style={{ paddingRight: '30%' }}
                                primary={props.milestones[oneKey].title}
                                secondary={props.milestones[oneKey].description} />
                            <ListItemSecondaryAction >
                                <Button
                                    variant="contained"
                                    onClick={() => props.handleMilestoneClick(props.milestones[oneKey].id)}
                                    className={currentMilestoneClassName}
                                    style={{ width: '130px' }}>
                                    {currentMilestoneState}
                                </Button>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )
                })
            }
        </List>
    )
}

export default MilestoneList;