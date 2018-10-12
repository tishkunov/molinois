import React, { Component, Fragment } from 'react';
import createBrowserHistory from "history/createBrowserHistory";
import './App.css';
import {  Route} from 'react-router';
import { Router } from 'react-router-dom';

import Login from './components/authorization/login'
import Signup from './components/authorization/signup'
import PasswordReset from './components/authorization/passwordReset'
import Dashboard from './components/dashboard'
import Referal from './components/authorization/referal'

import MyWallet from './components/myWallet'
import PaymentPage from './components/paymentPage'
import Bounty from './components/bountyProgram'
import Airdrop from './components/airDropUser'
import Feedback from './components/feedback'




import AdminPanel from './components/admin/adminPanel'
import BountyStatistic from './components/admin/bountyStatistic'
import CheckAdmins from './components/admin/checkAdmins'
import IcoStatistic from './components/admin/icoStatistic'
import AirdropSettings from './components/admin/airDropSettings'
import AirdropCheck from './components/admin/airDropAdminCheck'
import AirdropStatistic from './components/admin/airDropStatistic'
import BountySettings from './components/admin/bountySetting'

const history = createBrowserHistory();

class App extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
    this.setState({hasError: true},() => console.log(this.state.hasError))
  }

  componentDidMount() {
    document.title = "Investor private office"
  }


  render() {
    return (
      <div className="App">
            <Router history={history}>
              <Fragment>
                <Route exact path='/'         component={Login} />
                <Route exact path='/login/'        component={Login} />
                <Route path = '/signup'            component={Signup} />
                <Route path = '/dashboard'         component={Dashboard} />
                <Route path = '/bounty'            component={Bounty} />
                <Route path = '/password/reset'    component={PasswordReset} />
                <Route path = '/adminpanel'        component={AdminPanel} />
                <Route path = '/mywallet'          component={MyWallet} />
                <Route path = '/payment'           component={PaymentPage} />
                <Route path = '/referal'           component={Referal} />
                <Route path ='/feedback'           component={Feedback} />
                <Route path ='/bounty-settings'    component={BountySettings} />
                <Route path = '/bounty-statistic'  component={BountyStatistic} />
                <Route path = '/checkadmins'       component={CheckAdmins} />
                <Route path = '/ico-statistic'     component={IcoStatistic} />
                <Route path = '/airdrop-settings'  component={AirdropSettings} />
                <Route path = '/airdrop'           component={Airdrop} />
                <Route path = '/checkairdrop'      component={AirdropCheck} />
                <Route path = '/airdrop-statistic' component={AirdropStatistic} />
              </Fragment>

            </Router>
      </div>
    );
  }
}

export default App;
