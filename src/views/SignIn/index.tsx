import {observer} from 'mobx-react'
import UserInformationStore from '../../stores/user-information-store'
import {Button} from 'antd'
import {useNavigate} from 'react-router-dom'

const SignIn = observer((props: {
  userInformationStore: UserInformationStore
}) => {
  const navigate = useNavigate()

  // sign in, then jump to homepage
  const onClickSignInButton = () => {
    props.userInformationStore.setUserInformation({
      id: 1,
      nickname: 'Kobe Bryant'
    })
    navigate('/homepage')
  }

  return (
    <div className="sign-in">
      sign in
      <Button
        type="primary"
        onClick={() => onClickSignInButton()}>
        Sign In
      </Button>
    </div>
  )
})

export default SignIn
