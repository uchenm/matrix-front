/*
 * @Author: XueYu 😊
 * @Date: 2019-01-24 10:39:14
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-24 14:51:14
 */
import React, { PureComponent } from 'react'
import { Form, Input, Button } from 'antd'
import { setCookie } from '../../utils'
import router from 'umi/router'

class Login extends PureComponent {
  onSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        setCookie('user', 'usertoken')
        window.location.href = '/trade/XBTUSD'
      }
    });
  }
  render(){
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Form layout='vertical' onSubmit={this.onSubmit}>
          <Form.Item label='邮箱'>
          {
            getFieldDecorator('email')(
              <Input />
            )
          }
          </Form.Item>
          <Form.Item>
          {
            getFieldDecorator('pass')(
              <Input />
            )
          }
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">登入</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create({ name: 'login_form' })(Login)