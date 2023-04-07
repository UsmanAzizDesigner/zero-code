// import logo from './logo.svg';
import './App.css';
// import { Layout } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes.js'
// const { Header, Footer, Sider, Content } = Layout;


function App() {
  return (
    <Router>
      <div className="OCCApp">
        <Routes />
      </div>
    </Router>
  );
}

export default App;
