import { Button, Form, Radio, Modal, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

const CollectionCreateForm = ({ open, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    const [activitySelectedValues, setActivitySelectedValues] = useState([]);
    const [puttingRadioValue, setPuttingRadioValue] = useState(1);

    //Activity Options
    const activityOptions = [
        {label: "Round Played", value: "roundPlayed"},
        {label: "Short Game Practice", value: "shortGamePractice"},
        {label: "Range Session", value: "rangeSession"},
        {label: "Putting Practice", value: "puttingPractice"},
        {label: "Putting Mat Practice", value: "puttingMatPractice"},
        {label: "Exercise - Mobility and Strength", value: "exerciseMobilityAndStrength"},
        {label: "Exercise - Strength Training", value: "exerciseStrengthTraining"},
        {label: "Exercise - Cardio", value: "exerciseCardio"},
        {label: "Simulator - Round Played", value: "simulatorRoundPlayed"},
        {label: "Simulator - Range Session", value: "simulatorRangeSession"},
        {label: "Simulator - Short Game Practice", value: "simulatorShortGamePractice"},
        {label: "Golf Lesson", value: "golfLesson"},
    ]

    const handleActivityChange = (value) => {
        setActivitySelectedValues(value)
    }

    const handleRadioChange = (e) => {
        setPuttingRadioValue(e.target.value)
    }

    return (
        <Modal
        open={open}
        title="Add Activity"
        okText="Add"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
            form
            .validateFields()
            .then((values) => {
                form.resetFields();
                setActivitySelectedValues([]);
                onCreate(values);
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
        }}
        >
        <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
        >
            <Form.Item
                name="date"
                label="Date:"
                rules={[
                    {
                        required: true,
                        message: 'Input a date',
                    },
                ]}
            >
                <DatePicker id="datePicker" />
            </Form.Item>
            <Form.Item
                label="Activities"
                name="activities"
                rules={[
                    {
                    required: true,
                    message: 'Add you activities',
                    },
                ]}
            >
                <Select
                    id="activitySelect"
                    mode="multiple"
                    allowClear
                    style={{
                        width: '100%',
                    }}
                    placeholder="Please select"
                    options={activityOptions}
                    onChange={handleActivityChange}
                />
            </Form.Item>
            <Form.Item
                shouldUpdate
                hidden={!activitySelectedValues.some(value => value === "puttingMatPractice")}
                label="Enter Putting Mat Stats?"
                name="showPuttingMatStats"
            >
                <Radio.Group
                    name="puttingStatsBool"
                    onChange={handleRadioChange}
                    value={puttingRadioValue}
                    rules={[
                        {
                        required: true,
                        message: 'You must select an option',
                        },
                    ]}
                >
                    <Radio value={1}>No</Radio>
                    <Radio value={2}>Yes</Radio>
                </Radio.Group>
            </Form.Item>
        </Form>
        </Modal>
    );
};


const ModalButton = () => {
  const [open, setOpen] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };
  return (
    <div>
      <Button
        type="text"
        onClick={() => {
            setOpen(true);
        }}
      >
        <PlusOutlined />
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
};
export default ModalButton;