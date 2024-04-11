import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <h1>404</h1>
      <div>Not found</div>
      <Link to='/'>Go back home</Link>
    </>
  )
}

export default NotFound
