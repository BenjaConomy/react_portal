import React from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import error from '../assets/error.json';

const ErrorComponent: React.FC = () => {
    return (
        <div>
            <Player
                src={error}
                autoplay={true}
                loop={true}
                style={{ height: 200, width: 200 }}
            />
            <h2>Oops! Hubo un error.</h2>
        </div>
    );
};

export default ErrorComponent;
