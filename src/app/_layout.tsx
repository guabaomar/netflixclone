import { Stack } from "expo-router";
import { PaperProvider } from 'react-native-paper';
import { ThemeProvider, DarkTheme } from '@react-navigation/native'

export default function RootLayout() {

  const myTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'white',
    },
  }

  return (


    <ThemeProvider value={myTheme}>
      
        <PaperProvider>   
        <Stack screenOptions={
          {
            headerShown: false,
            contentStyle: { backgroundColor: 'black' },
          }
        } />
        
        </PaperProvider>

      </ThemeProvider>

  )
}