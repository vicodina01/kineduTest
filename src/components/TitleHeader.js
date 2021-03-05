import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const TitleHeader = (props) => {
    return (
        <div style={{ color: '#ffffff' }}>
            <p style={{ fontWeight: 'bold' }}>Areas</p>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button
                    variant="contained"
                    onClick={props.handleSkill1Click}
                    className={props.buttonSkill1}
                    style={{ width: '160px' }}>
                    Physical
            </Button>
                <Button
                    variant="contained"
                    onClick={props.handleSkill2Click}
                    className={props.buttonSkill2}
                    style={{ width: '160px' }}>
                    Social & Emotional
            </Button>
            </ButtonGroup>
            <hr />
        </div>
    )
}

export default TitleHeader;
