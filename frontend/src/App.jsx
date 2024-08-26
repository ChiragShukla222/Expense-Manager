import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from './components/Home'
import UserDashBoard from "./components/UserDashBoard"
import Wages from "./components/Wages"
import Expense from "./components/Expense"
import Saving from "./components/Saving"
import Report from "./components/Report"
import Showwage from "./components/Showwage"
import Piecharts from "./components/Piecharts"
const App = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>

            {/* for dashboard routes */}
            <Routes>
                  <Route path='/dashboard' element ={<UserDashBoard/>}>
                                    <Route path="wages" element={<Wages/>}/>
                                    <Route path="expense"element={<Expense/>}/>
                                    <Route path="savings" element={<Saving/>}/>
                                    <Route path ="displaywages" element ={<Showwage/>}/>
                                    <Route path="report" element={<Report/>}/>
                                    <Route path = "piechart" element={<Piecharts/>}/>

                </Route>

            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
