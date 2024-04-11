import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '~/interfaces/Product'
import instance from '~/services/api'
const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    }
    getProduct()
  }, [])
  return (
    <>
      <div className='font-[sans-serif] bg-white'>
        <div className='p-6 lg:max-w-7xl max-w-4xl mx-auto'>
          <div className='grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6'>
            <div className='lg:col-span-3 w-full lg:sticky top-0 text-center'>
              <div className='px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative'>
                <img src={product?.thumbnail} alt='Product' className='w-full rounded object-cover' />
              </div>
              <div className='mt-6 flex flex-wrap justify-center gap-6 mx-auto'>
                {product?.images?.map((index) => {
                  return (
                    <div className='rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]' key={index}>
                      <img src={index} alt='Product2' className='w-24 cursor-pointer h-full' />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='lg:col-span-2'>
              <h2 className='text-2xl font-extrabold text-[#333]'>{product?.title}</h2>
              <div className='flex flex-wrap gap-4 mt-6'>
                <p className='text-[#333] text-4xl font-bold'>{product?.price}$</p>
                <p className='text-gray-400 text-xl'>
                  <p className=''>{product?.discountPercentage}%</p>
                </p>
              </div>
              <div className='flex space-x-2 mt-4'>
                <h4 className='text-[#333] text-base'>Stock: {product?.stock}</h4>
              </div>
              <div className='flex space-x-2 mt-4'>
                <svg className='w-5 fill-[#333]' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg className='w-5 fill-[#333]' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg className='w-5 fill-[#333]' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg className='w-5 fill-[#333]' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <svg className='w-5 fill-[#CED5D8]' viewBox='0 0 14 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z' />
                </svg>
                <h4 className='text-[#333] text-base'>500 Reviews</h4>
              </div>

              <div className='flex flex-wrap gap-4 mt-10'>
                <button
                  type='button'
                  className='min-w-[200px] px-4 py-3 bg-[#333] hover:bg-[#111] text-white text-sm font-bold rounded'
                >
                  Buy now
                </button>
                <button
                  type='button'
                  className='min-w-[200px] px-4 py-2.5 border border-[#333] bg-transparent hover:bg-gray-50 text-[#333] text-sm font-bold rounded'
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
