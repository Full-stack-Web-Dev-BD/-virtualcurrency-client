import { useState } from 'react'
import Slide from './Slide'
import Navigation from './Navigation'


const images = [
    {
        type: 'img',
        url: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/0929784252ece38b2328cf77e51c9a91-1636732361638/R1-removebg-preview%20%281%29.png?__cld_token__=exp=1636754028~hmac=08371b440a7047d0a251b953d79d5e1081ac1e6aa2b6bf689df0f6103f2717e4',
    },
    {
        type: 'img',
        url: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/0929784252ece38b2328cf77e51c9a91-1636732361638/R1-removebg-preview%20%281%29.png?__cld_token__=exp=1636754028~hmac=08371b440a7047d0a251b953d79d5e1081ac1e6aa2b6bf689df0f6103f2717e4',
    },
    {
        type: 'img',
        url: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/0929784252ece38b2328cf77e51c9a91-1636732361638/R1-removebg-preview%20%281%29.png?__cld_token__=exp=1636754028~hmac=08371b440a7047d0a251b953d79d5e1081ac1e6aa2b6bf689df0f6103f2717e4',
    },
    {
        type: 'img',
        url: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/0929784252ece38b2328cf77e51c9a91-1636732361638/R1-removebg-preview%20%281%29.png?__cld_token__=exp=1636754028~hmac=08371b440a7047d0a251b953d79d5e1081ac1e6aa2b6bf689df0f6103f2717e4',
    },
    {
        type: 'img',
        url: 'https://fiverr-res.cloudinary.com/image/upload/q_auto,f_auto/v1/secured-attachments/message/attachments/0929784252ece38b2328cf77e51c9a91-1636732361638/R1-removebg-preview%20%281%29.png?__cld_token__=exp=1636754028~hmac=08371b440a7047d0a251b953d79d5e1081ac1e6aa2b6bf689df0f6103f2717e4',
    },

]

const classNames = ['second-slide', 'first-slide', 'active-slide', 'first-slide', 'second-slide']

const Slides = () => {
    const [firstIndex, setFirstIndex] = useState(0)
    const [fiveImages, setFiveImages] = useState(images.slice(firstIndex, firstIndex + 5))

    const goForword = () => {
        setFirstIndex(firstIndex + 1)
        if (firstIndex > images.length - 6) {
            setFirstIndex(0)
        }
        setFiveImages(images.slice(firstIndex, firstIndex + 5))
    }
    const goBackword = () => {
        setFirstIndex(firstIndex - 1)
        console.log(firstIndex)
        if (firstIndex < 1) {
            setFirstIndex(images.length - 5)
        }
        console.log(firstIndex)
        setFiveImages(images.slice(firstIndex, firstIndex + 5))
    }
    return (
        <div className='slider-container'>
            <div className='slider'>
                <Navigation className='right-navigation' changeHandler={goBackword}>
                    <i className="fas fa-arrow-left"></i>
                </Navigation>
                {
                    fiveImages.map((image, index) => <Slide className={classNames[index]} imgURL={image.url} type={image.type} key={index} />)
                }
                <Navigation className='left-navigation' changeHandler={goForword}>
                    <i className="fas fa-arrow-right"></i>
                </Navigation>
            </div>
        </div>
    )
}

export default Slides