
import { Suspense } from 'react';
import './App.css'
import NavBar from './components/navbar/NavBar'
import PricingOpt from './components/pricingopt/PricingOpt'
import ResultChart from './components/result/ResultChart';


const pricingPromise= fetch('pricingData.json').then(res=> res.json());

function App() {

  return (
    <>
    <header>
      <NavBar></NavBar>
    </header>
      
      <main>
        <Suspense fallback={<p>Loading...</p>}>
        <PricingOpt pricingPromise={pricingPromise}></PricingOpt>
        </Suspense>
        <ResultChart></ResultChart>
      </main>
      
    </>
  )
}

export default App
