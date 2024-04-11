// import React, { useState } from 'react'

// const Add = () => {
//   const [inputs, setInputs] = useState({})

//   const handleChange = (event) => {
//     const name = event.target.value
//     const value = event.target.value
//     setInputs((values) => ({ ...values, [name]: value }))
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     alert(inputs)
//   }
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter name:
//           <input type='text' name='userName' value={inputs.userName} onChange={handleChange} />
//         </label>
//         <label>
//           Enter age:
//           <input type='number' name='age' value={inputs.age} onChange={handleChange} />
//         </label>
//         <input type='submit' />
//       </form>
//     </>
//   )
// }

// export default Add
