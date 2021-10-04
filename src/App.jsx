import { imageOnDayTime } from "./logic/DayTimeImage";
import './App.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {

    return (
        <div style={{ backgroundImage: `url(${imageOnDayTime()})` }} className='app-container'>
            <Header />
            <Main />
        </div>
    );
}

export default App;