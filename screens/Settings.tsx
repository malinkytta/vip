import { Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

const Settings = () => {
	return (
		<ScSafeAreaView>
			<Wrapper>
				<Text>Hi from Settings Page</Text>
				<StatusBar style='auto' />
			</Wrapper>
		</ScSafeAreaView>
	)
}

export default Settings

const ScSafeAreaView = styled.SafeAreaView`
	flex: 1;
`

const Wrapper = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`
