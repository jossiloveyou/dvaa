import React from 'react'
import { Button, Input } from 'antd'

export default class Login extends React.Component{
  componentDidMount () {
    console.log(this.props.match)
  }
  render () {
    return (
      <div className="pages-login">
        <Button type="primary">点击</Button>
        <Input type="date"/>
        Login
      </div>
    )
  }
}