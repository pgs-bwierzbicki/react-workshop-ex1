import React, {Component} from 'react';
import Header from './components/header';
import MainContainer from './components/main-container';

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <MainContainer></MainContainer>
            </div>
        );
    }
}

export default App;
