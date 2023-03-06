import HomeLayout from '@/layouts/Home'
import React, { useState } from 'react'
import { data } from '.././public/data'
import { Button, Table, Input, Modal, Form } from 'antd';


const Blog = () => {
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState(data);
  const [value, setValue] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    console.log(dataSource);
    setIsModalOpen(false);
    dataSource.push(values);
    setDataSource(dataSource);
    setValue('');
    console.log(dataSource);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const FilterByNameInput = (
    <Input
      placeholder="Search Name"
      value={value}
      onChange={e => {
        const currValue = e.target.value;
        setValue(currValue);
        const filteredData = data.filter(entry =>
          entry.first_name.toLowerCase().includes(currValue)
          || entry.last_name.toLowerCase().includes(currValue)
          || entry.email.toLowerCase().includes(currValue)
          || entry.phone.toLowerCase().includes(currValue)
        );
        setDataSource(filteredData);
      }}
    />
  );
  const columns = [

    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
      key: 'phone',
    }
  ];

  return (
    <div className='container mx-auto'>
      <h1>Blog</h1>
      <p>Search by Name</p>
      <div className="flex space-x-96 my-6">
        {FilterByNameInput}

        <Button onClick={showModal}>Add Item</Button>
      </div>



      <Table
        indexed
        dataSource={dataSource}
        columns={columns}
        shadow={true}
      />
      <Modal title="Form Input" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >

          <Form.Item
            label="ID"
            name="id"
            rules={[
              {
                required: true,
                message: 'Please input your id !',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="First Name"
            name="first_name"
            rules={[
              {
                required: true,
                message: 'Please input your First Name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[
              {
                required: true,
                message: 'Please input your Last Name!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Email Address !',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your Phone Number!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

Blog.layout = HomeLayout
export default Blog