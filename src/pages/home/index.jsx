import React from 'react'
import { connect } from 'dva'
import { Button, Table, Modal, Form, Input,  Checkbox } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

@connect(({ home }) => {
  return {
    // name: home.name,
    // age: home.age,
    data:home.data
  }
})



export default class Home extends React.Component{
  state={
    data:[],
    visible: false,
    title: '添加',
    form:{},
    users:{
      name:"666",
      age:'666',
      msg:'666'
    },
    colums:[
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'msg',
        key: 'msg',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Button type="primary" style={{marginRight:"10px"}} onClick={this.showModal}>添加</Button>
            <Button type="primary" style={{marginRight:"10px"}} onClick={() => {this.bian(record)}}>编辑</Button>
            <Button type="danger" onClick={() => {this.del(record)}}>删除</Button>
          </span>
        ),
      },
    ]
  }

  showModal = () => {
    this.setState({
      visible: true,
      title: '添加'
    });
  };

  bian = record => {
    this.setState({
      visible: true,
    })
    // if(this.el){
    //   console.log(this.el)
    // }
      // this.el.setFieldsValue(this.state.users)
    this.setState({
      form: { ...record },
      title: '编辑'
    })
    
  }

  del = val => {
    console.log(val)
    this.props.dispatch({
      type:'home/delData',
      payload:val.id,
    })
  }

  handleOk = e => {
    this.el.submit()
    console.log(this.el)
    let a = this.el.getFieldsValue()
    if(a.msg == undefined){
      console.log(1)
    }else{
      if(this.state.title == '添加'){
        let obj = {}
        obj.name = a.name
        obj.age = a.age
        obj.msg = a.msg
        this.props.dispatch({
          type:'home/addData',
          payload:obj,
        })
      }else{
        console.log(a)
        this.props.dispatch({
          type:'home/updateData',
          payload:a,
        })
      }
      
      this.setState({
        visible: false,
        form: {  }
      });
    }
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    })
  };

  onFinish = values => {
    console.log(values)
  };

  onFinishFailed = errorInfo => {
    console.log(errorInfo)
    console.log(1)
  };

  componentDidMount () {
    this.props.dispatch({
      type:'home/getDataList',
      payload:'666'
    })
    
  }
  click = () => {
    this.props.dispatch({
      type:'home/update',
      payload:'小白'
    })
  }
  
  render () {
    const { data } = this.props
    const { colums, form, title } = this.state
    console.log( form ,666)
    return (
      <div className="pages-home">
        111
        <Table
          columns={colums} 
          dataSource={data} 
          rowKey={v=>v.id} 
          pagination={{pageSize:5,}}
        />
       
        <Modal
          title={ title }
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form
            {...layout}
            ref={ vl => this.el=vl}
            name="basic"
            initialValues={form}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >

            <Form.Item
              name="id"
              rules={[{ required: true, message: 'Please input your id!' }]}
            >
              <Input type="hidden"/>
            </Form.Item>

            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="age"
              name="age"
              rules={[{ required: true, message: 'Please input your age!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="msg"
              name="msg"
              rules={[{ required: true, message: 'Please input your msg!' }]}
            >
              <Input />
            </Form.Item>

          </Form>

        </Modal>



      </div>
    )
  }
}