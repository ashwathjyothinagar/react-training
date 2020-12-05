import logo from './logo.svg';
import './App.css';
import Tick from './Tick';
import Toggle from './Toggle';
import LoggingButton from './common/LoggingButton';
import Greeting from './common/UserGreeting';
import LoggingControl from './common/LoginControl';
import MailBox from './common/MailBox';
import Page from './common/Page';
import NumberList from './common/NumberList';
import ListItems from './lists/ListItem';
import Blog from './lists/Blog';
import NameForm from './forms/NameForm';
import EssayForm from './forms/EssayForm';
import FlavorForm from './forms/FlavorForm';
import Calculator from './liftingstate/Calculator';
const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];

const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        <hr></hr>
        {/* <Toggle></Toggle> */}
        {/* <LoggingButton></LoggingButton> */}
        {/* <LoggingControl></LoggingControl> */}

        {/* <MailBox unreadMessages={messages}></MailBox> */}
        {/* <Page></Page> */}

        {/* <NumberList></NumberList> */}

        {/* <ListItems numbers={numbers}></ListItems> */}
        {/* <Blog posts={posts}></Blog> */}

        {/* <NameForm value="asdfasdf"></NameForm> */}
        {/* <EssayForm></EssayForm> */}
        {/* <FlavorForm></FlavorForm> */}
        <Calculator></Calculator>
      </header>
    </div>
  );
}


export default App;
