
import { Color } from './colors/Colors';
import Header from './components/Header';
import Banner from './components/Banner';
import GetToKnow from './components/GetToKnow';
import EducationCards from './components/Education';

function App() {


  return (
    <div className='bg-red-200'>
      <Header />
      <Banner />
      <GetToKnow />
      <EducationCards />
    </div>
  );
}

export default App
