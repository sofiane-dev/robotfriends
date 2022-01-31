import { Component } from "react";
import CardList from "components/CardList";
import SearchBox from "components/SearchBox";
import Scroll from "components/Scroll";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    isPending: state.fetchRobots.isPending,
    robots: state.fetchRobots.robots
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onFetchRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount(){
    this.props.onFetchRobots();
  }
  render() {
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
