import React, { useState } from 'react';
import { Button, Modal, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const ActivityForm = () => {
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

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Button type="text" onClick={showModal}>
        <PlusOutlined />
      </Button>
      <Modal title="Add Activities" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form>
            <DatePicker onChange={onChange} />
        </form>
      </Modal>
    </>
  );
};

export default ActivityForm;