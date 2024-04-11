import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Product } from '~/interfaces/Product'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import { useParams } from 'react-router-dom'
import { getProducts } from '~/services/product'

const schemaProduct = Joi.object({
  title: Joi.string().required().min(3).max(100),
  price: Joi.number().required().min(0),
  description: Joi.string().allow(null, '')
})
type Props = {
  onEdit: (product: Product) => void
}

const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Product>({
    resolver: joiResolver(schemaProduct)
  })
  const onSubmit = (data: Product) => {
    onEdit({ ...data, id })
  }
  useEffect(() => {
    ;(async () => {
      const data = await getProducts(`/${id}`)
      setProduct(data)
    })()
  }, [])
  return (
    <div>
      <form className='max-w-sm mx-auto my-8' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='font-bold text-4xl my-3 text-center'>Add product</h1>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='title'>
            Title
          </label>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:defaultValue={product.} placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Title...'
            id='title'
            {...register('title', { required: true, minLength: 3, maxLength: 100 })}
            defaultValue={product?.title}
          />
          {errors.title && <span className='font-bold text-red-600'>{errors.title.message}</span>}
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='price'>
            Price
          </label>
          <input
            type='number'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:defaultValue={product.} placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Price...'
            id='price'
            {...register('price', { required: true, min: 0 })}
            defaultValue={product?.price as number}
          />
          {errors.price && <span className='font-bold text-red-600'>{errors.price.message}</span>}
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' htmlFor='description'>
            Description
          </label>
          <input
            type='text'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:defaultValue={product.} placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Description...'
            id='description'
            {...register('description')}
            defaultValue={product?.description}
          />
          {errors.description && <span className='font-bold text-red-600'>{errors.description.message}</span>}
        </div>
        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
          Edit product
        </button>
      </form>
    </div>
  )
}

export default ProductEdit
