import {Outlet} from 'react-router-dom'
import {observer} from 'mobx-react'
import UserInformationStore from '../../stores/user-information-store'

const Layout = observer((props: {
  userInformationStore: UserInformationStore
}) => {
  return (
    <div className="layout">
      <div className="header-container">
        header, and nickname is: {props.userInformationStore.nickname}
      </div>
      <div className="body-container">
        <div className="menu-container">
          menu
        </div>
        <div className="main-container">
          <Outlet/>
        </div>
      </div>
    </div>
  )
})

export default Layout
