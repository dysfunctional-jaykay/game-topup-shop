import { TextInput, useColorScheme, TextInputProps } from 'react-native'
import { Colors } from '../constants/Colors'

type textProps = {
    title?: boolean
}

const ThemedText = ({ style, title = false, ...props }: TextInputProps & textProps) => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme] 

    return (
        <TextInput
            style={[{ 
                backgroundColor: theme.uiBackground,
                color: theme.text,
                padding: 20,
                borderRadius: 6,
            }, style
        ]}
            {...props}
        />
    )
}

export default ThemedText