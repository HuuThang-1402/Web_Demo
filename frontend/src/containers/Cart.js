import { Form, Input, Button, Space, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';

const medicine = [
  { label: 'Thuốc 1', value: 'Thuốc 1' },
  { label: 'Thuốc 2', value: 'Thuốc 2' },
  { label: 'Thuốc 3', value: 'Thuốc 3' },
  { label: 'Thuốc 4', value: 'Thuốc 4' },
  { label: 'Thuốc 5', value: 'Thuốc 5' },
  { label: 'Thuốc 6', value: 'Thuốc 6' },
  { label: 'Thuốc 7', value: 'Thuốc 7' },
  { label: 'Thuốc 8', value: 'Thuốc 8' },
  { label: 'Thuốc 9', value: 'Thuốc 9' },
  { label: 'Thuốc 10', value: 'Thuốc 10' },
];

  /* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        address: '${label} is not a valid address!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
  /* eslint-enable no-template-curly-in-string */




const Cart = () => {
  
    const [form] = Form.useForm();
    const handleChange = () => {
        form.setFieldsValue({ sights: [] });
    };

    const onFinish = values => {
        alert("Đơn hàng của bạn đã được xác nhận và sẽ được giao trong vòng 3-5 ngày nữa");
    };

  
    return (
        <div>
            <Form name="nest-messages" validateMessages={validateMessages} onFinish={onFinish} autoComplete="off">
                <Form.Item name={['user', 'name']} label="Họ tên" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'address']} label="Địa chỉ" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'age']} label="SĐT" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.List name="users">
                    {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <Space key={fields.key} style={{ display: 'flex', marginBottom: 8 }}  align="baseline">
                            <Form.Item
                            {...restField}
                            name={[name, 'first']}
                            fieldKey={[fieldKey, 'first']}
                            rules={[{ required: true, message: 'Missing first name' }]}
                            label="Loại thuốc"
                            >
                                <Select options={medicine} onChange={handleChange} style={{width:"150px"}}/>
                            </Form.Item>
                            <Form.Item
                            {...restField}
                            name={[name, 'last']}
                            fieldKey={[fieldKey, 'last']}
                            rules={[{ required: true, message: 'Missing last name' }]}
                            label="Số lượng"
                            >
                                <Input/>
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                        ))}
                        <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Thêm thuốc
                        </Button>
                        </Form.Item>
                    </>
                    )}
                </Form.List>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Đặt hàng
                    </Button>
                </Form.Item>
                </Form>
        </div>
        
      );
  
}
export default Cart;

