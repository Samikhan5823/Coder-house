import React, { useState } from 'react'
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail'
import StepOtp from '../Steps/StepOtp/StepOtp'
const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
}
const Login = () => {
  const [step, setstep] = useState(1)
  const Step = steps[step]
  const onNextPage = () => {
    setstep(step + 1)
  }
  return <Step handleClick={onNextPage} />
}

export default Login
