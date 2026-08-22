import { useColorScheme, Pressable, PressableProps, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'

type textProps = {
    title?: boolean
}

const ThemedButton = ({ style, ...props }: PressableProps & textProps) => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme] 

    return (
        <Pressable 
            style={({pressed}) => [styles.btn, pressed && styles.pressed]}
            {...props}
            />
        
    )
}

export default ThemedButton

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 6,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.8,
  }
})