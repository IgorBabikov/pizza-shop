import { Outlet} from 'react-router-dom'

import {Header} from "../components";

function MaingLayout() {
  return (
   <div className="wrapper">
    <Header />

    <Outlet/>
   </div>
  )
}

export default MaingLayout