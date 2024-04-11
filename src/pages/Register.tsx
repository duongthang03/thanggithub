import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { User } from '~/interfaces/User'
import instance from '~/services/api'
import { useNavigate } from 'react-router-dom'

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().required().min(6)
})
// type Props = {
//   onRegister: (user: User) => void
// }

const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: joiResolver(userSchema)
  })
  const onSubmit = (user: User) => {
    ; (async () => {
      const { data } = await instance.post('/register', user)
      console.log(data)
      if (data.accessToken) {
        window.confirm('Register success, switch to login page') && navigate('/login')
      }
    })()
  }
  return (
    <div>
      <form className='max-w-sm mx-auto my-8' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold text-4xl my-3 text-center'>Register</h1>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Email'
            id='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span className='font-bold text-red-600'>{errors.email.message}</span>}
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Password'
            id='password'
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <span className='font-bold text-red-600'>{errors.password.message}</span>}
        </div>

        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
