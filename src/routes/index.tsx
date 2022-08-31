import {useRoutes} from 'react-router-dom'
import SignIn from '../views/SignIn'
import Layout from '../components/Layout'
import Homepage from '../views/Homepage'
import Error404 from '../views/Error404'
import UserInformationStore from '../stores/user-information-store'

const userInformationStore = new UserInformationStore()

const Routes = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useRoutes(
    [
      {
        path: '/sign-in',
        element:
          <SignIn
            userInformationStore={userInformationStore}/>
      },
      {
        path: '/',
        element:
          <Layout
            userInformationStore={userInformationStore}/>,
        children: [
          {
            path: '/homepage',
            element: <Homepage/>
          }
        ]
      },
      {
        path: '*',
        element: <Error404/>
      }
    ]
  )
}

export default Routes
