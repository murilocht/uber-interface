import { Platform, PixelRatio } from 'react-native';

export function getPixelSize(pixels) {
    return Platform.select({
        ios: pixels,
        android: PixelRatio.getPixelSizeForLayoutSize(pixels)
    });
};

export const Apikey = 'YOUR_API_KEY';