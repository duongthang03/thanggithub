import { Navigate, Outlet } from 'react-router-dom'

const CheckPermission = () => {
  const userLogged = localStorage.getItem('accessToken')
  return userLogged ? <Outlet /> : <Navigate to='/login' />
}

export default CheckPermission
