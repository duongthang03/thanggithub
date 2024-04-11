// import { Carousel, Typography } from '@material-tailwind/react'
// import React, { useState } from 'react'

// const Banner = () => {
//   const items = [
//     {
//       src: 'https://picsum.photos/id/123/1200/400',
//       altText: 'Slide 1',
//       caption: 'Slide 1',
//       key: 1
//     },
//     {
//       src: 'https://picsum.photos/id/456/1200/400',
//       altText: 'Slide 2',
//       caption: 'Slide 2',
//       key: 2
//     },
//     {
//       src: 'https://picsum.photos/id/678/1200/400',
//       altText: 'Slide 3',
//       caption: 'Slide 3',
//       key: 3
//     }
//   ]
//   function Banner(args) {
//     const [activeIndex, setActiveIndex] = useState(0)
//     const [animating, setAnimating] = useState(false)

//     const next = () => {
//       if (animating) return
//       const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
//       setActiveIndex(nextIndex)
//     }

//     const previous = () => {
//       if (animating) return
//       const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
//       setActiveIndex(nextIndex)
//     }

//     const goToIndex = (newIndex) => {
//       if (animating) return
//       setActiveIndex(nextIndex)
//     }

//     const slides = items.map((item) => {
//       return (
//         <Typography
//           // onExiting={() => setAnimating(true)}
//           // onExited={() => setAnimating(false)}
//           key={item.key}
//           className='rounded-xl'
//         >
//           <img src={item.src} alt={item.altText} className='h-full w-full object-cover' />
//           <Typography
//             // captionText={item.caption}
//             // captionHeader={item.caption}
//             variant='h1'
//             color='white'
//             className='mb-4 text-3xl md:text-4xl lg:text-5xl'
//           ></Typography>
//         </Typography>
//       )
//     })
//   }
//   return (
//     <>
//       <Carousel >
//           {slides}
//       </Carousel>
//     </>
//   )
// }

// export default Banner
