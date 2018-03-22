import React, { Component } from "react"
import { connect } from "react-redux" // ALLOWS THE USE OF REDUC TO GET THE STATE FROM THIS.PROPS
import { Route, Switch } from "react-router-dom";

import HomepageContainer from "./Homepage/Containers/HomepageContainer";
import Setup from "./Setup/Setup";

class RoomEaseContainer extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={HomepageContainer} />
        <Route path="/setup" component={Setup} />
      </Switch>
    )
  }
}

export default connect(state => state)(RoomEaseContainer)



// {/* <Reuseables.logoIcon url="https://i.imgur.com/DqjYaRi.png" /> */}
//         <Reuseables.navBar logoUrl="https://i.imgur.com/DqjYaRi.png" logoName="RoomEase" />
//         <h1>RoomEase Container</h1>
//         <Signup />
//         <DashboardContainer />
//         <HomepageContainer />
//         <ProfileContainer />