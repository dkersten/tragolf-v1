import React, { useState } from 'react';
import { Button, Modal, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const ActivityForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [puttingMatStats, setPuttingMatStats] = useState(false);
  const [formData, setFormData] = useState({})

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
  ]

  //   form controls
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const handleActivityChange = (value) => {
    console.log(value);
    // check for putting mat session
    value.map(val => {
        val === "puttingMatPractice" ? setPuttingMatStats(true) : setPuttingMatStats(false)
    })
  }

  const enterPuttingMatStats = () => {

    return(
        <div className="activity-form__input">
            <label>To Do: Enter Putting Stats</label>
        </div>
    )
  }

  return (
    <>
      <Button type="text" onClick={showModal}>
        <PlusOutlined />
      </Button>
      <Modal title="Add Activities" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText="Submit">
        <form>
            <div className='activity-form__input'>
                <label>Date:</label>
                <DatePicker onChange={onDateChange} />
            </div>
            <div className='activity-form__input activity-form__input--vertical'>
                <label>Type:</label>
                <Select
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
            {puttingMatStats ? enterPuttingMatStats() : null}
        </form>
      </Modal>
    </>
  );
};

export default ActivityForm;