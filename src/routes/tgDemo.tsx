import React, { DispatchWithoutAction, FC, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    useThemeParams,
    WebAppProvider,
} from '@vkruglikov/react-telegram-web-app';
import { ConfigProvider, theme } from 'antd';

import '../index.css';
import logo from '../logo.svg';

import MainButtonDemo from '../demo/MainButtonDemo';
import BackButtonDemo from '../demo/BackButtonDemo';
import ShowPopupDemo from '../demo/ShowPopupDemo';
import HapticFeedbackDemo from '../demo/HapticFeedbackDemo';
import ScanQrPopupDemo from '../demo/ScanQrPopupDemo';
import ExpandDemo from '../demo/ExpandDemo';
import CountdownCircle from '../components/CountdownCircle';

const TgDemo = ( ) => {
  const [colorScheme, themeParams] = useThemeParams();
  const [isBetaVersion, handleRequestBeta] = [false, false];
  const [activeBtn, setActiveBtn] = useState(true);

  return (
      <div>
        <ConfigProvider
            theme={
                themeParams.text_color
                    ? {
                            algorithm:
                                colorScheme === 'dark'
                                    ? theme.darkAlgorithm
                                    : theme.defaultAlgorithm,
                            token: {
                                colorText: themeParams.text_color,
                                colorPrimary: themeParams.button_color,
                                colorBgBase: themeParams.bg_color,
                            },
                        }
                    : undefined
            }
        >
            <header className="App-header">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />
            </header>
            <div className="contentWrapper">
                {isBetaVersion && (
                    <div className="betaVersion">
                        <h3>WARNING: BETA VERSION</h3>
                        <button onClick={() => setActiveBtn(state => !state)}>
                            change button
                        </button>
                    </div>
                )}
                <ExpandDemo />
                {!activeBtn ? (
                    <MainButtonDemo
                        initialValues={{
                            show: isBetaVersion,
                            text: 'SECOND BUTTON',
                            progress: true,
                        }}
                        key="1"
                    />
                ) : (
                    <MainButtonDemo
                        key="2"
                        initialValues={{
                            show: isBetaVersion,
                        }}
                    />
                )}
                <BackButtonDemo />
                <ShowPopupDemo />
                <HapticFeedbackDemo />
                <ScanQrPopupDemo />
            </div>
        </ConfigProvider>
    </div>
);
};

export default TgDemo;
