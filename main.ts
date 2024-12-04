radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        wuKong.setAllMotor(100, 100)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 90)
    }
    if (receivedNumber == 2) {
        wuKong.setAllMotor(100, 100)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
    }
    if (receivedNumber == 3) {
        wuKong.setAllMotor(100, 100)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
    }
    if (receivedNumber == 4) {
        wuKong.setAllMotor(-100, -100)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 90)
    }
    if (receivedNumber == 5) {
        wuKong.setAllMotor(0, 0)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 90)
    }
})
radio.setGroup(4)
basic.forever(function () {
	
})
