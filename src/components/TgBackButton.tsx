import { FC } from 'react';
import { BackButton } from '@vkruglikov/react-telegram-web-app';
import { useNavigate } from 'react-router-dom';
import {CiSquareChevLeft} from "react-icons/ci";

const TgBackButton: FC = () => {
  const navigate = useNavigate();
  const tg = false;

  return (tg ?
    <BackButton onClick={() => navigate("/")}/>
    :
    <CiSquareChevLeft size={50} title={'Назад'} onClick={() => navigate("/")}/>
  );
};
export default TgBackButton;
