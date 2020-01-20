import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

import { Apikey } from '../../utils';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey={Apikey}
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;
