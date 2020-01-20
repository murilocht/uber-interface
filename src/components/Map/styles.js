import styled from 'styled-components/native';

import { Platform } from 'react-native';

export const LocationBox = styled.View`
    background: #FFF;
    shadow-color: #000;
    shadow-offset: 0 0; 
    shadow-opacity: 0.1;
    elevation: 1;
    border: 1px solid #DDD;
    border-radius: 3px;
    flex-direction: row;
    margin-top: 20px;    
    align-items: center;
`;

export const LocationText = styled.Text`
    padding: 5px;
    font-size: 14px;
    color: #333;
`;

export const LocationTimeBox = styled.View`
    background: #222;
    padding: 3px 8px;
`;

export const LocationTimeText = styled.Text`
    color: #FFF;
    text-align: center;
    font-size: 12px;
`;

export const LocationTimeTextSmall = styled.Text`
    color: #FFF;
    text-align: center;
    font-size: 10px;
`;

export const Back = styled.TouchableOpacity`
    position: absolute;
    top: ${Platform.select({ ios: 60, android: 40 })};
    left: 20px;
`;