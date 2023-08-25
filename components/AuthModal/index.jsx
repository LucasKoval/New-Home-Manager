import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import { toast } from 'react-toastify'
import { GlobalContext } from '@/context/GlobalContext'

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 380,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  paddingTop: '8px',
}

const textFieldStyle = {
  width: '100%',
}

const AuthModal = ({ openModal, handleCloseModal }) => {
  const { setIsAuth } = useContext(GlobalContext)
  const [password, setPassword] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    if (password === '167943') {
      console.log('Access granted!')
      setIsAuth(true)
      handleCloseModal()
      toast.success('Contenido desbloqueado!')
    } else {
      toast.error('Contraseña incorrecta!')
    }
  }

  const passwordHandler = (event) => {
    console.log(event.target.value)
    setPassword(event.target.value)
  }

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <form onSubmit={submitHandler}>
        <Box sx={modalStyle} noValidate autoComplete="off">
          <p>Ingrese la contraseña para continuar.</p>
          <TextField
            sx={textFieldStyle}
            id="outlined-basic"
            label="Contraseña"
            variant="outlined"
            name="password"
            onChange={passwordHandler}
          />
        </Box>
      </form>
    </Modal>
  )
}

export default AuthModal
