const Slide = ({ imgURL, className, type }) => {
    return (
        <>
            {console.log(className)}
            {type == 'img' ?
                (
                    <div className={'slide ' + className} style={{ backgroundImage: `url(${imgURL})` }}>
                    </div>) :
                (
                    <>
                        {className == "active-slide" ?
                            <div className={'slide video-slide ' + className} >
                                <video loop muted src={imgURL} autoPlay >  </video>
                            </div> :
                            <div className={'slide video-slide ' + className} >
                                <video loop muted src={imgURL}  >  </video>
                            </div>
                        }
                    </>
                )
            }
        </>
    )
}

export default Slide