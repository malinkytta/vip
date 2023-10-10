import { NavigationContainer } from '@react-navigation/native'
import Home from '../screens/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Settings from '../screens/Settings'
import { AntDesign } from '@expo/vector-icons'
import Gallery from '../screens/Gallery'
import { Ionicons } from '@expo/vector-icons'
import { View, Image } from 'react-native'
import styled from 'styled-components'

const Tab = createBottomTabNavigator()

interface CustomTabBarIconProps {
	imageSource: number
}

const CustomTabBarIcon: React.FC<CustomTabBarIconProps> = ({ imageSource }) => {
	return (
		<IconCircle>
			<StyledIcon source={imageSource} />
		</IconCircle>
	)
}

const SettingsTabBarIcon: React.FC = () => {
	return (
		<IconCircle>
			<AntDesign name='setting' size={24} color='black' />
		</IconCircle>
	)
}

const WalletTabBarIcon = () => {
	return (
		<IconCircle>
			<Ionicons name='wallet-outline' size={24} color='black' />
		</IconCircle>
	)
}

const TabGroup = () => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerShown: false,
				tabBarStyle: {
					backgroundColor: 'black',
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
				},
			}}
		>
			<Tab.Screen
				name='VIP-monkey'
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
					tabBarIcon: () => (
						<CustomTabBarIcon
							imageSource={require('../assets/monkeyHead.png')}
						/>
					),
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
`
