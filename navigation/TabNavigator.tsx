import {
	NavigationContainer,
	NavigatorScreenParams,
} from '@react-navigation/native'
import Home from '../screens/Home'
import {
	createBottomTabNavigator,
	BottomTabBarButtonProps,
} from '@react-navigation/bottom-tabs'
import Settings from '../screens/Settings'
import { AntDesign } from '@expo/vector-icons'
import Gallery from '../screens/Gallery'
import { Ionicons } from '@expo/vector-icons'
import { View, Image } from 'react-native'
import styled, { css } from 'styled-components'
import { useIsFocused } from '@react-navigation/native'

interface HomeScreenParams {}
interface SettingsParams {}

interface VipMonkeyParams {}

export type TabBarType = {
	Home: NavigatorScreenParams<undefined>
	Settings: NavigatorScreenParams<SettingsParams>
	VipMonkey: NavigatorScreenParams<VipMonkeyParams>
}

const Tab = createBottomTabNavigator<TabBarType>()

interface CustomTabBarIconProps {
	imageSource: number
}

const CustomTabBarIcon: React.FC<CustomTabBarIconProps> = ({ imageSource }) => {
	const isFocused = useIsFocused()

	return (
		<IconCircle focusable={isFocused}>
			<StyledIcon source={imageSource} />
		</IconCircle>
	)
}

const SettingsTabBarIcon: React.FC = () => {
	const isFocused = useIsFocused()

	return (
		<IconCircle focusable={isFocused}>
			<AntDesign name='setting' size={24} color='black' />
		</IconCircle>
	)
}

const WalletTabBarIcon = () => {
	const isFocused = useIsFocused()

	return (
		<IconCircle focusable={isFocused}>
			<Ionicons name='wallet-outline' size={24} color='black' />
		</IconCircle>
	)
}

const TabGroup = () => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				// tabBarActiveBackgroundColor: 'blue',
				// tabBarInactiveBackgroundColor: 'green',
				headerShown: false,
				tabBarStyle: {
					backgroundColor: 'black',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
				},
			}}
		>
			<Tab.Screen
				name='VipMonkey'
				component={Gallery}
				options={{
					tabBarIcon: () => <WalletTabBarIcon />,
					tabBarLabel: '',
				}}
			/>

			<Tab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarIcon: () => {
						return (
							<CustomTabBarIcon
								imageSource={require('../assets/monkeyHead.png')}
							/>
						)
					},
					tabBarLabel: '',
				}}
			/>
			<Tab.Screen
				name='Settings'
				component={Settings}
				options={{
					tabBarIcon: () => <SettingsTabBarIcon />,
					tabBarLabel: '',
				}}
			/>
		</Tab.Navigator>
	)
}

const TabNavigator = () => {
	return (
		<NavigationContainer>
			<TabGroup />
		</NavigationContainer>
	)
}

export default TabNavigator

const StyledIcon = styled(Image)`
	width: 24px;
	height: 24px;
`

const IconCircle = styled(View)`
	width: 40px;
	height: 40px;
	background: #00ebb0;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
	margin-top: 25px;
	${(props) =>
		props.focusable &&
		css`
			border: 2px solid white;
			${''}
			shadowColor: white;
			${''}
			shadowOpacity: 0.6;
			${''}
			shadowRadius: 9px;
		`}
`
