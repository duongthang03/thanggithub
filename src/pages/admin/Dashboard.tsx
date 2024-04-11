import { Link, useNavigate } from 'react-router-dom'
import { Product } from '~/interfaces/Product'

type Props = {
  product: Product[]
  onDel: (id: number | undefined) => void
}
const Dashboard = ({ product, onDel }: Props) => {
  const navigate = useNavigate()
  const handleDelete = (id: number | undefined) => {
    onDel(id)
  }
  const logOut = () => {
    const isConfirm = confirm('Are you sure')
    if (isConfirm) {
      localStorage.removeItem('accessToken')
      navigate('/')
    }
  }
  return (
    <>
      <div className='flex justify-between ml-7 mr-10 my-5'>
        <Link
          to={'/admin/add'}
          className='text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Add new
        </Link>
        <button
          onClick={logOut}
          className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Log Out
        </button>
      </div>
      <h1>Hello Admin</h1>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-800 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <th className='px-6 py-3'>Id</th>
          <th className='px-6 py-3'>Title</th>
          <th className='px-6 py-3'>Price</th>
          <th className='px-6 py-3'>Image</th>
          <th className='px-6 py-3'>Action</th>
        </thead>
        <tbody>
          {product.map((index) => (
            <>
              <tr
                key={index.id}
                className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'
              >
                <td className='px-6 py-3'>{index.id}</td>
                <th className='px-6 py-3'>{index.title}</th>
                <td className='px-6 py-3'>{index.price}</td>
                <td className='w-72 h-48 px-6 py-3'>
                  <img src={index.thumbnail} className='size-full object-cove' alt={index.description} />
                </td>
                <td className='px-6 py-3'>
                  <Link
                    to={`/admin/edit/${index.id}`}
                    className='font-medium bg-yellow-300 py-2 px-4 rounded-lg hover:underline text-bg-dark '
                  >
                    Edit
                  </Link>{' '}
                  /{' '}
                  <button
                    className='font-medium bg-red-300 py-2 px-4 rounded-lg dark:text-red-500 hover:underline hover:bg-red-600 hover:text-black'
                    onClick={() => handleDelete(Number(index.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Dashboard
