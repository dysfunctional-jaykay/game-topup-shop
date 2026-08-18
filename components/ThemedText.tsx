import { Text, useColorScheme, TextProps } from 'react-native'
import { Colors } from '../constants/Colors'

type textProps = {
    title?: boolean
}

const ThemedText = ({ style, title = false, ...props }: TextProps & textProps) => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme] 

    const textColor = title ? theme.title : theme.text

    return (
        <Text
            style={[{ color: textColor }, style]}
            {...props}
        />
    )
}

export default ThemedText