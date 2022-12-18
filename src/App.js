import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/empres'>Empresa</Link>
                </li>
                <li>
                    <Link to='/contato'>Contato</Link>
                </li>
            </ul>
        </Router>
    );
}

export default App;
