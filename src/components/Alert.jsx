import React from 'react'
import { useAlert } from 'react-alert'

const Alert = () => {
  const alert = useAlert()

  return (
    <button
      onClick={() => {
        alert.show(<h6>'This project is highly crowdsourced and collaborative in nature.Therefore, we can not and do not guarantee the veracity of the information provided here, and hence due diligence by the user is strongly advised.' </h6>)
      }}
    >
      Warning
    </button>
  )
}

export default Alert
