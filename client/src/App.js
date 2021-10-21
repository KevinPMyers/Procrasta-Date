import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import { Layout } from 'antd';
import LoginPage from './pages/LoginPage';
import RecipePage from './pages/RecipePage';


function App() {
  return (
    <div className="App">
      <Router>

        <Layout>

          <Layout>
            <Header></Header>
            <div>

              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login-page" component={LoginPage} />
              </Switch>
            </div>

            <RecipePage />


            <Footer>Footer</Footer>
          </Layout>
        </Layout>

      </Router>



    </div>
  );
}

export default App;
