import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const Countdown = () => {
    const targetDate = new Date('2023-12-24T00:00:00.000Z');
    const [countdownCompleted, setCountdownCompleted] = React.useState(false);

    const calculateTimeRemaining = (targetDate: Date) => {
        const now = new Date()
        const timeRemaining = Math.max(targetDate.getTime() - now.getTime(), 0)
        return timeRemaining
    }

    const [countdown, setCountdown] = React.useState(calculateTimeRemaining(targetDate))

    React.useEffect(() => {
        const timer = setInterval(() => {
            const newCountdown = calculateTimeRemaining(targetDate);
            if (newCountdown > 0) {
                setCountdown(newCountdown);
            } else {
                setCountdownCompleted(true);
                clearInterval(timer)
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [targetDate]);

    const days = String(Math.floor(countdown / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0')
    const seconds = String(Math.floor((countdown % (1000 * 60)) / 1000)).padStart(2, '0');

    return (

        <ScContainer>

            <ScCountDownContainer>
                {countdownCompleted ? (
                        <ScTextInfo>Congratulations! The countdown is complete.</ScTextInfo>
                ) : (
                    <>
                            <ScTextInfo>Produkten är tillgänglig för köp om:</ScTextInfo>

                        <ScFlexContainer>
                            <ScColumn>
                                <ScCountdownText>{days}</ScCountdownText>
                                <ScText>Dagar</ScText>
                            </ScColumn>
                            <ScColon>:</ScColon>
                            <ScColumn>
                                <ScCountdownText>{hours}</ScCountdownText>
                                <ScText>Timmar</ScText>
                            </ScColumn>
                            <ScColon>:</ScColon>
                            <ScColumn>
                                <ScCountdownText>{minutes}</ScCountdownText>
                                <ScText>Minuter</ScText>
                            </ScColumn>
                            <ScColon>:</ScColon>

                            <ScColumn>
                                <ScCountdownText>{seconds}</ScCountdownText>
                                <ScText>Sekunder</ScText>
                            </ScColumn>
                        </ScFlexContainer>
                    </>
                )}
            </ScCountDownContainer>
        </ScContainer>
    )
}

export default Countdown

const ScContainer = styled(View)`
  flex: 1;
  align-items: center; 
  justify-content: center;
  align-content: center;
  height: 100vh;
  padding: 20px;
`

const ScCountDownContainer = styled(View)` 
  background-color: black;
  width: 100%;
  border-radius: 20px;
  padding: 20px;
`

const ScFlexContainer = styled(View)`
  display: flex;
  background-color: black;
  flex-direction: row;
  align-items: center; 
  justify-content: center;
  padding-top: 6px;
  width: 100%;
`

const ScColumn = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8px;
`

const ScCountdownText = styled(Text)`
  font-size: 40px;
  color: white;
  text-align: center;
  font-weight: 700;
`

const ScTextInfo = styled(Text)`
  text-align: center;
  color: white;
  font-weight: 500;
`

const ScText = styled(Text)`
  text-align: center;
  color: white;
  font-size: 12px;
`

const ScColon = styled(Text)`
  font-size: 25px;
  margin-top: -15px;
  color: white;
  font-weight: 700;
`