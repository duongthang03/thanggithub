type TProduct = {
  name: string
  price: number
}

const Product = (props: { product: TProduct }) => {
  return (
    <>
      <h2>{props.product.name}</h2>
      <h2>{props.product.price}</h2>
    </>
  )
}

export default Product
