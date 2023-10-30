import React from 'react';
import {Player} from '@lottiefiles/react-lottie-player';
import loading from '../assets/loading.json';

const LoadingComponent: React.FC = () => {
    return (
        <div>
            <Player
                src={loading}
                autoplay={true}
                loop={true}
                style={{ height: 500, width: 500 }}
            />
        </div>
    );
};

export default LoadingComponent;
