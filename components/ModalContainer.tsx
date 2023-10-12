import React, { useState } from 'react'
import { Modal, View } from 'react-native'
import Form from './Form'
import styled from 'styled-components'
import { ScButtonText, ScGreenButton } from './styles/Buttons'

const ModalContainer = () => {
	const [modalVisible, setModalVisible] = useState(false)

	const openModal = () => {
		setModalVisible(true)
	}

	const closeModal = () => {
		setModalVisible(false)
	}

	return (
		<>
			<Modal
				animationType='fade'
				transparent={true}
				visible={modalVisible}
			>
				<Overlay>
					<CenteredView>
						<ModalView>
							<Form onHide={closeModal} />
						</ModalView>
					</CenteredView>
				</Overlay>
			</Modal>
			<ScWrapper>
				<ScGreenButton onPress={openModal}>
					<ScButtonText>Ge bort biljetter</ScButtonText>
				</ScGreenButton>
			</ScWrapper>
		</>
	)
}

export default ModalContainer

const Overlay = styled(View)`
	flex: 1;
	background-color: rgba(0, 0, 0, 0.8);
	justify-content: center;
	align-items: center;
`

const ScWrapper = styled(View)`
	align-items: center;
`

const CenteredView = styled(View)`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin-top: 22px;
	border-radius: 16px;
	width: 95%;
`

const ModalView = styled(View)`
	margin: 20px;
	background-color: white;
	border-radius: 20px;
	padding: 35px;
	shadow-color: #000;
	width: 100%;
`
