import React from 'react'
import TabNavigator from './navigation/TabNavigator'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

export default function App() {
  return (
    <ActionSheetProvider>
      <TabNavigator />
    </ActionSheetProvider>
  )
}