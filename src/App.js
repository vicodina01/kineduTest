import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import MilestonesForm from './components/MilestonesForm';
import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Varela Round',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

class App extends Component {

  constructor(props) {
    super(props);

    this.handleSkill1Click = this.handleSkill1Click.bind(this);
    this.handleSkill2Click = this.handleSkill2Click.bind(this);
    this.handleMilestoneClick = this.handleMilestoneClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);

    this.state = {
      skill1: [],
      skill2: [],
      milestoneStatusArray: [],
      isLoaded: false,
      skillSelected: 'Physical',
      colorSelected: '#1FADDF',
    }
  }

  handleSkill1Click() {
    this.setState({ skillSelected: 'Physical', colorSelected: '#1FADDF' });
  }

  handleSkill2Click() {
    this.setState({ skillSelected: 'Social', colorSelected: '#D43571' });
  }

  handleMilestoneClick(itemId) {

    let foundIndex = this.state.milestoneStatusArray.findIndex(item => item.id === itemId);
    let updItem = this.state.milestoneStatusArray;
    if (foundIndex === -1) {
      updItem.push({ id: itemId, status: 'Completed', className: 'App-button-pill bg-green fc-white' });
    } else {
      updItem[foundIndex].status = (updItem[foundIndex].status === 'Uncompleted') ? 'Complete' : 'Uncompleted';
      updItem[foundIndex].className = (updItem[foundIndex].status === 'Uncompleted') ? 'App-button-pill bg-gray fc-green' : 'App-button-pill bg-green fc-white';
    }

    this.setState({ milestoneStatusArray: updItem });

  }

  handleFormClick() {
    if (this.state.skillSelected === 'Physical') {
      this.handleSkill2Click();
    } else {
      //implement modal here ..
    }
  }


  componentDidMount() {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', 'Token token=5105f4358e45f6f98057a654c882b7742c3ac5241c81a706acc48c84f8acde9f8a344993ac42369627ae9f2caf1eed42ff1be9562fe2167c9c80908e76e95c49');
    const myInit = { headers: myHeaders };

    Promise.all([
      fetch('http://staging.kinedu.com/api/v3/skills/2/milestones', myInit)
        .then(res => res.json()),
      fetch('http://staging.kinedu.com/api/v3/skills/23/milestones', myInit)
        .then(res => res.json())
    ])
      .then(res => {
        const data1 = res[0];
        const data2 = res[1]
        this.setState({
          isLoaded: true,
          skill1: data1.data.skill,
          skill2: data2.data.skill,
        })
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    let { isLoaded, skill1, skill2, skillSelected, colorSelected, milestoneStatusArray } = this.state;

    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {

      return (
        <ThemeProvider theme={theme}>
          <div className="App">
            <MilestonesForm  
              currentSkill={(skillSelected === 'Physical') ? skill1 : skill2}
              skillSelected={skillSelected}
              colorSelected={colorSelected}
              milestoneStatusArray = {milestoneStatusArray}
              handleSkill1Click={this.handleSkill1Click}
              handleSkill2Click={this.handleSkill2Click}
              handleMilestoneClick={this.handleMilestoneClick}
              handleFormClick={this.handleFormClick} />
          </div>
        </ThemeProvider>
      );
    }
  }
}



export default App;
