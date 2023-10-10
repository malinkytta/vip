import { ScrollView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import styled from 'styled-components/native'

const images = [
	require('../assets/images/bild.jpg'),
	require('../assets/images/bild2.jpg'),
	require('../assets/images/bild3.jpg'),
	require('../assets/images/bild4.jpg'),
]

const Gallery = () => {
	return (
		<ScSafeAreaView>
			<ScrollView>
				<GridContainer>
					{images.map((image, index) => (
						<GridItem key={index}>
							<GridImage source={image} />
						</GridItem>
					))}
				</GridContainer>
			</ScrollView>
			<StatusBar style='auto' />
		</ScSafeAreaView>
	)
}

export default Gallery

const GridContainer = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	max-height: 100px;
`

const GridItem = styled.View`
	width: 50%;
`

const GridImage = styled.Image`
	width: 100%;
	max-height: 200px;
`

const ScSafeAreaView = styled.SafeAreaView`
	flex: 1;
`
