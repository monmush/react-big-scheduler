import React from "react";
import { Modal, Input, Form } from "antd";
const FormItem = Form.Item;

const AddResourceForm = ({ visible, onCancel, onCreate }) => {
  const [from] = From.useForm();
  return (
    <Modal
      visible={visible}
      title="New Resource"
      okText="Create"
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical" form={form}>
        <Form.Item
          label="Name"
          rules={[
            {
              required: true,
              message: "Please input the name of the resource!"
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddResourceForm;
