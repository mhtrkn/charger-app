import { Dimensions } from 'react-native';

const COLORS = {
    primary: "#EFF0F3",
    secondary: "#1C2129",
    green: "#8AF289",
    textColor: "#333",
}

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const PADDING = {
    verticalPadding: windowHeight * 2 / 100,
    horizontalPadding: windowWidth * 5 / 100
}

export {
    COLORS,
    PADDING
}