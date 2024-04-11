import { Product } from '~/interfaces/Product'
import instance from './api'
export const getAllProducts = async () => {
  try {
    const { data } = await instance.get('/products')
    return data
  } catch (error) {
    console.log(error)
  }
}
export const getProducts = async (id: string) => {
  try {
    const { data } = await instance.get(`/products/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const createProduct = async (product: Product) => {
  try {
    const { data } = await instance.post('/products', product)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const updateProduct = async (product: Product) => {
  try {
    const { data } = await instance.put(`/products/${product.id}`, product)
    return data
  } catch (error) {
    console.log(error)
  }
}
export const removeProduct = async (id: string) => {
  try {
    const { data } = await instance.delete(`/products/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
