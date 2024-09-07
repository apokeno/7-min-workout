import { Button, Form, Typography } from 'antd';
import { FC, useState } from 'react';
import { BackButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';

const BackButtonDemo: FC = () => {
  const [buttonState, setButtonState] = useState<{
    show: boolean;
  }>({show: true});
  const showPopup = useShowPopup();
  const navigate = useNavigate();

  return (
    <>
      <Typography.Title level={3}>BackButton</Typography.Title>
      <Form
        labelCol={{ span: 6 }}
        name="BackButtonDemo"
        layout="horizontal"
        autoComplete="off"
      >
        <Form.Item>
          <Button
            block
            type="primary"
            onClick={() =>
              setButtonState({
                show: !buttonState?.show,
              })
            }
          >
            {buttonState?.show ? 'Hide BackButton' : 'Show BackButton'}
          </Button>
        </Form.Item>
      </Form>
      <div>
        {buttonState?.show && (
          <BackButton
            onClick={() => {
//              showPopup({
//                message: 'back button click',
//              });
              navigate("/")
            }}
          />
        )}
      </div>
    </>
  );
};
export default BackButtonDemo;
