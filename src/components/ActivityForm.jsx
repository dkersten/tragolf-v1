import React, { useState } from 'react';
import { Button, Modal, Form, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import '../styling/_activity_form.scss';

const ActivityForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPuttingMatStats, setshowPuttingMatStats] = useState(false);
  const [formData, setFormData] = useState({
    date: null,
    activityOptions: [],
    puttingMatStats: null
  })

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

  //   form controls
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    // format data for unifiedData
    const activity = {
        date: `${formData.date}`,
        numActivities: formData.activityOptions.length,
        activities: formData.activityOptions
    }

    console.log("activity", activity)
    console.log("grid", `{${formData.date}: ${formData.activityOptions.length}}`)

    setFormData({
        date: null,
        activityOptions: [],
        puttingMatStats: null
    })
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFormData({
        date: null,
        activityOptions: [],
        puttingMatStats: null
    })
  };

  const onDateChange = (date) => {
    if (date !== null) {
        const dateStr = `${date.$y}-${date.$M + 1}-${date.$D}`
        setFormData(prevState => ({
            ...prevState,
            date: dateStr
        }))
    }
  };

  const handleActivityChange = (value) => {
    setFormData(prevState => ({
        ...prevState,
        activityOptions: value
    }))

    // check for putting mat session
    value.map(val => {
        val === "puttingMatPractice" ? setshowPuttingMatStats(true) : setshowPuttingMatStats(false)
    })
  }

  const enterPuttingMatStats = () => {

    return(
        <div className="activity-form__input">
            <label className='activity-form__label'>To Do: Enter Putting Stats</label>
        </div>
    )
  }

  const onFinish = (values) => {
    console.log('Success:', values);
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  return (
    <>
        <Button type="text" onClick={showModal}>
            <PlusOutlined />
        </Button>
        <Modal title="Add Activities" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Submit" footer={null}>
        <Form
            name="basic"
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 20,
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
            label="Date"
            name="date"
            rules={[
                {
                required: true,
                message: 'Select the date of activities',
                },
            ]}
        >
            <DatePicker id="datePicker" onChange={onDateChange} />
        </Form.Item>

        <Form.Item
            label="Activities"
            name="activites"
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
                onChange={handleActivityChange}
                options={activityOptions}
            />
        </Form.Item>

        <Form.Item
        wrapperCol={{
            offset: 4,
            span: 20,
        }}
        >
        <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
    </Form>
        {/* 
        <form>
            <div className='activity-form__input'>
                <label htmlFor='datePicker' className='activity-form__label'>Date:</label>
                <DatePicker id="datePicker" onChange={onDateChange} />
            </div>
            <div className='activity-form__input activity-form__input--vertical'>
                <label htmlFor='activitySelect' className='activity-form__label'>Type:</label>
                <Select
                id="activitySelect"
                mode="multiple"
                allowClear
                style={{
                    width: '100%',
                }}
                placeholder="Please select"
                onChange={handleActivityChange}
                options={activityOptions}
                />
            </div>
            {showPuttingMatStats ? enterPuttingMatStats() : null}
        </form> 
        */}
      </Modal>
    </>
  );
};

export default ActivityForm;