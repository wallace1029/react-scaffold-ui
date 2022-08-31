import './index.scss'

import {Button, Image} from 'antd'
import {useNavigate} from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate()

  // return to home
  const onClickBackButton = () => {
    navigate('/homepage')
  }

  return (
    <div className="error-404">
      <div className="image-container">
        <Image
          src={require('../../assets/images/404.png')}
          width={240}
          preview={false}/>
      </div>
      <div className="text-container">
        <p className="apology">
          Sorry, this page is not found.
        </p>
        <p className="contact">
          If you have any questions, please contact admin.
        </p>
        <div className="actions">
          <Button
            type="primary"
            onClick={() => onClickBackButton()}>
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Error404
