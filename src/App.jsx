import './App.css';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import data from './data';


function App() {
  const idolsList = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Header />
      <main className='container mx-auto mt-8'>
        <div className='flex justify-center items-center flex-col gap-4 mx-2'>
          {idolsList}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
