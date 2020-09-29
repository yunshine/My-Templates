import React, { Component } from 'react'; // imrc is the shortcut...
// import -something-, { -something- } from './-something-';
import './-something-.css'; // make a CSS file for this component..
import { withStyles } from '@material-ui/styles';
import styles from './styles/-something-Styles';
// import { Route, Switch, NavLink } from 'react-router-dom';

// import { v4 as uuidv4 } from 'uuid'; // for creating unique IDs with uuidv4();
// npm install axios (for API requests) in terminal???

class -something- extends Component {
  // static defaultProps = {
  //   key: value,
  // };
  
  // constructor(props) {
  //   super(props);
    // this.state = { key: value };
    // this.handleClick = this.handleClick.bind(this);
  // }

  // -something-() {
  //   this.setState({ key: value });
  // }

  // handleClick() {
  //   this.newFunction();
  //   this.setState(oldState => {
  //     return { score: oldState + 3 };
  //   })
  // }
  // => This is the way and the syntax to update an existing state, not:   this.setState({ score: this.state.score + 3 });

  render() {
    // const { classes } = this.props;
    return (
      // <div className={-something-}>
      <div className="-something-">
        {/* <h1>{this.state.-something-}</h1>
        <h1>{this.props.-something-}</h1> */}
        <h1>This is the -something- component...</h1>
      </div>
    );
  }
}

export default -something-; /// connect this component to App.js...
export default withStyles(styles)(-something-);

