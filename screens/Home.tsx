import { Text, Image, ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'
import { useState } from 'react'
import ModalContainer from '../components/ModalContainer'
import { GreenButton, ButtonText } from '../components/Buttons'
import Carousel from 'react-native-snap-carousel'

const HomeScreen = () => {
	const [modalVisible, setModalVisible] = useState(false)
	const [showTickets, setShowTickets] = useState(true)

	const openModal = () => {
		setModalVisible(true)
	}

	const closeModal = () => {
		setModalVisible(false)
	}

	const carouselData = [
		{ imageSource: require('../assets/QR.png') },
		{ imageSource: require('../assets/QR.png') },
		{ imageSource: require('../assets/QR.png') },
	]

	const hideTickets = () => {
		setShowTickets(!showTickets)
	}

	return (
		<ScSafeAreaView>
			<ScrollView>
				<Wrapper>
					<HeaderImage
						source={require('../assets/images/card2.jpg')}
					/>
					<ScTitle>Leffes beachclub</ScTitle>
					<ContentText>
						Solgården, Hotell Tylösand - Halmstad
					</ContentText>
					<ContentText>2021-12-24</ContentText>
					<GreenButton onPress={hideTickets}>
						<ButtonText>
							{showTickets ? 'Dölj biljetter' : 'Visa biljetter'}
						</ButtonText>
					</GreenButton>
					<GreenButton onPress={openModal}>
						<ButtonText>Ge bort biljetter</ButtonText>
					</GreenButton>
				</Wrapper>

				<ModalContainer
					visible={modalVisible}
					onClose={closeModal}
					onShow={openModal}
				/>
				<StatusBar style='auto' />
			</ScrollView>

			{showTickets && (
				<Carousel
					data={carouselData}
					renderItem={({ item }) => (
						<Image
							source={item.imageSource}
							style={{
								width: 200,
								height: 200,
							}}
						/>
					)}
					sliderWidth={400}
					itemWidth={220}
					firstItem={1}
				/>
			)}
		</ScSafeAreaView>
	)
}

export default HomeScreen

const Wrapper = styled.View`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
`

const HeaderImage = styled(Image)`
	width: 90%;
	height: 250px;
	border-radius: 20px;
	border-radius: 20px;
`
const ScTitle = styled(Text)`
	font-size: 20px;
	font-weight: bold;
	padding-top: 20px;
`
const ContentText = styled(Text)`
	padding-top: 5px;
`
const ScSafeAreaView = styled.SafeAreaView`
	flex: 1;
`
