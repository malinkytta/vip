import { View } from 'react-native'
import styled from 'styled-components/native'
import Countdown from '../components/Countdown'

const CountDownScreen = () => {
	return (
		<ScSafeAreaView>
			<Countdown />
		</ScSafeAreaView>
	)
}

export default CountDownScreen

const ScSafeAreaView = styled.SafeAreaView`
	flex: 1;
`
