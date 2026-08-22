import { 
    Text, 
    View, 
    useColorScheme, 
    Image, 
    ImageSourcePropType, 
    ImageStyle, 
    StyleProp, 
    Pressable, 
    PressableProps,
    StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors'

type cardProps = {
    cardTitle: string,
    linkTo?: string,
    cardIconPath?: string | number, // Accepts require('./img.png') OR 'https://...' OR 'file://...'
    style?: StyleProp<ImageStyle>,
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    onPress?: () => void,
}

const ThemedPressableCard = ({ 
    cardTitle,
    linkTo,
    cardIconPath,
    style,
    resizeMode,
    onPress, 
    ...props 
}: cardProps & PressableProps) => {
    const colorScheme = useColorScheme() ?? 'light'
    const theme = Colors[colorScheme]
    const [hasError, setHasError] = useState(false)

    const resolveSource = (): ImageSourcePropType => {
        if (typeof cardIconPath === 'number') {
          // Local static asset imported via require()
          return cardIconPath;
        }
        
        // Remote URL (http/https) or absolute local device path (file://)
        return { uri: cardIconPath };
      };
    
      return (
        <Pressable
          onPress={onPress}
          style= {({ pressed }) => [
            {backgroundColor: theme.uiBackground, boxShadow: theme.shadow},
              styles.card, 
              pressed && styles.cardPressed
          ]}
          {...props}
        >
          <Image
            onError={(e) => setHasError(true)}
            source={hasError ? require('../assets/no-image-icon.jpg') : resolveSource()} 
            style={[styles.iconImg, style]}
            resizeMode={resizeMode}
          />
          <View style={styles.titleContainer}>
            <Text style={[{color: theme.text}, style, styles.iconTitle]}>
              {cardTitle}
            </Text> 
          </View>
        </Pressable>
      )
}

export default ThemedPressableCard

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 250,
    overflow: "hidden",
    borderRadius: 12,
    elevation: 4,
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.2)",
  },
  cardPressed: {
    opacity: 0.7,
  },
  iconImg: {
    width: "100%",
    height: 185,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  iconTitle: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 19,
  },
});