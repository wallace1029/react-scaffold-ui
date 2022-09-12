import './styles/index.scss'
import {observer} from 'mobx-react'
import UserInformationStore from '../../stores/user-information-store'
import {Button, Form, Input, message} from 'antd'
import {useNavigate} from 'react-router-dom'
import Password from 'antd/es/input/Password'
import {ILoginFormValues} from './types'
import api from './api'
import {storage} from '../../utils/storage'

const SignIn = observer((props: {
  userInformationStore: UserInformationStore
}) => {
  const navigate = useNavigate()

  // login
  const onFinish = async (values: ILoginFormValues) => {
    const r = await api.login(values)
    storage.setTid(r)
    message.success('Login successfully.')
    navigate({
      pathname: '/'
    })
  }

  return (
    <div className="sign-in">
      <div className="left-container">
        <img
          className="cover"
          src={require('../../assets/images/login_cover.jpg')}
          alt="cover"
        />
      </div>
      <div className="right-container">
        <div className="form-card">
          <div className="title">
            Welcome, Administrator!
          </div>
          <Form
            layout="vertical"
            initialValues={{
              mobile: '13900000000',
              password: '1234567890'
            }}
            onFinish={onFinish}>
            <Form.Item
              label="Mobile"
              name="mobile"
              rules={[
                {
                  required: true,
                  message: 'Please input your mobile.'
                }
              ]}>
              <Input
                placeholder="Please input your mobile."/>
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password.'
                }
              ]}>
              <Password
                placeholder="Please input your password."/>
            </Form.Item>
            <Form.Item>
              <div className="help-tips">
                Forget your password?
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                block>
                Login
              </Button>
            </Form.Item>
            <Form.Item>
              <div className="agreement">
                Login means your agree to our <a href="">terms of service</a> and <a href="">privacy policy</a>.
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
})

export default SignIn
