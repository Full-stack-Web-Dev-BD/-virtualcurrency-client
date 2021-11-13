import { useState } from 'react'
import Slide from './Slide'
import Navigation from './Navigation'
import img1 from './files/img1.png'
import vid2 from './files/vid2.mp4'

const images = [
    {
        type: 'img',
        url: img1,
    },
    {
        type: 'img',
        url: img1,
    },
    {
        type: 'img',
        url: img1,
    },
    {
        type: 'video',
        url: vid2,
    },
    {
        type: 'img',
        url: img1,
    },
    {
        type: 'img',
        url: img1,
    },
    {
        type: 'img',
        url: img1,
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