import { Component } from "react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import './index.css'

const manukaImages = [
    { id: 1, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756549451/List_irfpsc.png' },
    { id: 2, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548551/Item_Link_atxeiz.png' },
    { id: 3, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548561/modal-opener_hyxfkg.png' },
    { id: 4, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548571/Item_Link_fktb6v.png' },
    { id: 5, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548579/Item_Link_w0xcsp.png' },
    { id: 6, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548587/Item_Link_b4dq06.png' },
    { id: 7, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548595/Item_Link_rwlfnk.png' },
    { id: 8, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548602/Item_Link_gcrevb.png' },
]

const thumbnailImages = [
    { id: 1, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756614319/8d93649b099c59282802fa91e97511eef4488f59_1_hqamit.png' },
    { id: 2, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756614513/Label_Label_paints_nd9efo.png' },
    
    { id: 3, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756614471/Label_Label_paints_fui0wz.png' },
    { id: 4, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756614487/Label_Label_paints_jyvwum.png' },
    { id: 5, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756614537/Label_Label_paints_sktt5s.png' },
    { id: 6, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756614548/Label_Label_paints_ik4xbn.png' },
    { id: 7, imageUrl: 'https://res.cloudinary.com/dnvtpszvn/image/upload/v1756614555/Label_Label_paints_azgpl6.png' },
]

class Home extends Component {
    state = { imageId: 1, count: 1 }

    componentDidMount() {
        this.intervalId = setInterval(this.carouselImageFunction, 3000)

    }

    onClickIncreaseCount = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))

        
    }

    onClickDecreaseCount = () => {
        const { count } = this.state
        if (count > 1) {
            this.setState(prevState => ({ count: prevState.count - 1 }))
        }
    }

    carouselImageFunction = () => {
        const { imageId } = this.state
        if (imageId < manukaImages.length) {
            this.setState(prevState => ({ imageId: prevState.imageId + 1 }))
        } else {
            this.setState({ imageId: 1 })
        }
    }

    onClickLeftBtn = () => {
        const { imageId } = this.state
        if (imageId > 1) {
            this.setState(prevState => ({ imageId: prevState.imageId - 1 }))
            clearInterval(this.intervalId)
            this.intervalId = setInterval(this.carouselImageFunction, 3000)
        } else {
            this.setState({ imageId: manukaImages.length })
        }
    }

    onClickRightBtn = () => {
        const { imageId } = this.state
        if (imageId < manukaImages.length) {
            this.setState(prevState => ({ imageId: prevState.imageId + 1 }))
            clearInterval(this.intervalId)
            this.intervalId = setInterval(this.carouselImageFunction, 3000)

        } else {
            this.setState({ imageId: 1 })
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        const { imageId, count } = this.state
        const imageUrl = manukaImages.find(eachImage => eachImage.id === imageId)


        return (
            <div className="home-container">
                <div className="first-content">
                    <div className="carousel-container">
                        <button onClick={this.onClickLeftBtn} type="button" className="left-button">
                            <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548921/Button_-_Previous_slide_SVG_epcbtx.png" alt="left-scroll-icon" />
                        </button>
                        <div className="carousel-content">
                            <img src={imageUrl.imageUrl} alt="carousel" className="carousel-image" />
                        </div>
                        <button onClick={this.onClickRightBtn} type="button" className="right-button">
                            <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548912/Button_-_Next_slide_SVG_pizwsg.png" alt="right-scroll-icon" />
                        </button>
                    </div>
                    <div className="big-size-windows">
                        <img className="second" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548551/Item_Link_atxeiz.png" alt="second-image" />
                        <img className="second" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548561/modal-opener_hyxfkg.png" alt="third-image" />
                        <img className="fourth" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548571/Item_Link_fktb6v.png" alt="fourth-image" />
                        <img className="second" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548579/Item_Link_w0xcsp.png" alt="fifth-image" />
                        <img className="second" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548587/Item_Link_b4dq06.png" alt="sixth-image" />
                        <img className="second" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548595/Item_Link_rwlfnk.png" alt="seventh-image" />
                        <img className="second" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548602/Item_Link_gcrevb.png" alt="eight-image" />
                    </div>
                </div>

                <div className="second-content">
                    <h1 className="home-heading">Manuka Honey <br /> UMF<sup>TM</sup> 24+ <br /> MGO 1122+</h1>
                    <div className="info-umf-mgo">
                        <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756549830/SVG_ergtjc.png" alt="info" />

                        <div className="popup-container">
                            <Popup
                            contentStyle={{width: '300px'}}
                                trigger={
                                    <p className="umf-para">What is UMF and MGO?</p>
                                }
                            >
                                {close => (
                                    <>
                                        <div className="popup-inner-container">
                                            <p className="manuka-info">UMF is the strength and purity rating of manuku honey</p>
                                            <div className="pallete-arranger">
                                            <div className="color-pallete">
                                                <p className="pallete-text-1">10+</p>
                                                <hr className="pallete-hr-1" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-2">15+</p>
                                                <hr className="pallete-hr-2" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-3">20+</p>
                                                <hr className="pallete-hr-3" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-4">24+</p>
                                                <hr className="pallete-hr-4" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-5">26+</p>
                                                <hr className="pallete-hr-5" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-6">28+</p>
                                                <hr className="pallete-hr-6" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-7">30+</p>
                                                <hr className="pallete-hr-7" />
                                            </div>
                                            </div>
                                            

                                            <p className="inner-para">The higher the number, the greater the potency and rarity of manuku honey</p>
                                        </div>

                                        <div className="popup-inner-container-2">
                                            <p className="manuka-info">MGO is the key natural compound that gives Manuka honey its special antibacterial strength.</p>
                                            <div className="pallete-arranger">
                                            <div className="color-pallete">
                                                <p className="pallete-text-1">263+</p>
                                                <hr className="pallete-hr-1" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-2">514+</p>
                                                <hr className="pallete-hr-2" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-3">829+</p>
                                                <hr className="pallete-hr-3" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-4">1122+</p>
                                                <hr className="pallete-hr-4" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-5">1282+</p>
                                                <hr className="pallete-hr-5" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-6">1450+</p>
                                                <hr className="pallete-hr-6" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-7">1620+</p>
                                                <hr className="pallete-hr-7" />
                                            </div>
                                            </div>
                                            

                                            <p className="inner-para">The higher the number, the higher the antibacterial properties in the honey.</p>
                                        </div>
                                        <div className="button-container">
                                            <button
                                            type="button"
                                            className="trigger-button"
                                            onClick={() => close()}
                                        >
                                            Close
                                        </button>
                                        </div>
                                        
                                    </>
                                )}
                            </Popup>
                        </div>

                        <div className="popup-container-big-screen">
                            <Popup
                            contentStyle={{width: '500px'}}
                                trigger={
                                    <p className="umf-para">What is UMF and MGO?</p>
                                }
                            >
                                {close => (
                                    <>
                                        <div className="popup-inner-container">
                                            <p className="manuka-info">UMF is the strength and purity rating of manuku honey</p>
                                            <div className="pallete-arranger">
                                            <div className="color-pallete">
                                                <p className="pallete-text-1">10+</p>
                                                <hr className="pallete-hr-1" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-2">15+</p>
                                                <hr className="pallete-hr-2" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-3">20+</p>
                                                <hr className="pallete-hr-3" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-4">24+</p>
                                                <hr className="pallete-hr-4" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-5">26+</p>
                                                <hr className="pallete-hr-5" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-6">28+</p>
                                                <hr className="pallete-hr-6" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-7">30+</p>
                                                <hr className="pallete-hr-7" />
                                            </div>
                                            </div>
                                            

                                            <p className="inner-para">The higher the number, the greater the potency and rarity of manuku honey</p>
                                        </div>

                                        <div className="popup-inner-container-2">
                                            <p className="manuka-info">MGO is the key natural compound that gives Manuka honey its special antibacterial strength.</p>
                                            <div className="pallete-arranger">
                                            <div className="color-pallete">
                                                <p className="pallete-text-1">263+</p>
                                                <hr className="pallete-hr-1" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-2">514+</p>
                                                <hr className="pallete-hr-2" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-3">829+</p>
                                                <hr className="pallete-hr-3" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-4">1122+</p>
                                                <hr className="pallete-hr-4" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-5">1282+</p>
                                                <hr className="pallete-hr-5" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-6">1450+</p>
                                                <hr className="pallete-hr-6" />
                                            </div>

                                            <div className="color-pallete">
                                                <p className="pallete-text-7">1620+</p>
                                                <hr className="pallete-hr-7" />
                                            </div>
                                            </div>
                                            

                                            <p className="inner-para">The higher the number, the higher the antibacterial properties in the honey.</p>
                                        </div>
                                        <div className="button-container">
                                            <button
                                            type="button"
                                            className="trigger-button"
                                            onClick={() => close()}
                                        >
                                            Close
                                        </button>
                                        </div>
                                        
                                    </>
                                )}
                            </Popup>
                        </div>
                    </div>
                    <div className="optimiser">
                        <p className="paragraphs">The Optimiser</p>
                        <div className="ratings">
                            <img className="rating-icon" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756550475/Container_iuap5v.png" alt="rating" />
                            <p className="review">825 Reviews</p>
                        </div>
                    </div>
                    <p className="manuka-info">
                        For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                        Honey is powerfully active, sourced from wild and rugged locations around
                        Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                        flavour and your body will love you for it.
                    </p>
                    <div className="companies-certified">
                        <img className="certified-icon" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756551013/certifications_yyfj1o.png" alt="certified" />
                        <img className="certified-icon" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756551025/certifications_qvt4zv.png" alt="certified" />
                        <img className="certified-icon" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756551032/certifications_uezbdf.png" alt="certified" />
                        <img className="certified-icon" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756551038/certifications_ehccqr.png" alt="certified" />
                        <img className="certified-icon" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756551047/certifications_kbh4xo.png" alt="certified" />
                        <img className="certified-icon" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756551056/certifications_u5ykhe.png" alt="certified" />
                    </div>
                    <h1 className="review">SIZE (SELECT ONE)</h1>
                    <p className="manuka-info">Variant: 125g | 4.4oz</p>
                    <ol className="manuka-images-list">
                        {thumbnailImages.map(eachImage => (
                            <li className="manuka-items-list">
                                <img key={eachImage.id} src={eachImage.imageUrl} alt={`manuka-${eachImage.id}`} className="manuka-image" />
                            </li>
                        ))}
                    </ol>
                    <h1 className="review">PAYMENT OPTIONS (SELECT ONE)</h1>
                    <div className="payment-options-container">
                        <div className="payment-div-container">
                            <div className="one-time-payment">
                                <p className="one-time-payment-text">One-time <br /> purchase</p>
                                <p className="one-time-payment-text">$55.88 <br /> USD</p>
                            </div>
                            <div className="save-container">
                                <p className="inside-payment-text">Subscribe & Save <br /> 20%</p>
                                <p className="inside-payment-text">$44.70 <br /> USD</p>
                            </div>
                        </div>
                        <div className="question">
                            <img className="retry-icon" src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756553786/SVG_tf322a.png" alt="retry" />
                            <p className="manuka-info">What is a Subscription?</p>
                        </div>
                    </div>
                    <h1 className="review">SELECT QUANTITY</h1>
                    <div className="quantity-container">
                        <div className="quantity-div">
                            <button onClick={this.onClickDecreaseCount} type="button" className="quantity-button">
                                -
                            </button>
                            <p>{count}</p>
                            <button onClick={this.onClickIncreaseCount} type="button" className="quantity-button">
                                +
                            </button>
                        </div>
                        <button type="button" className="add-to-cart">ADD TO CART</button>
                    </div>
                    <div className="beauty-bundle">
                        <div className="beauty-heading-container">
                            <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548921/Button_-_Previous_slide_SVG_epcbtx.png" alt="left-arrow" />
                            <h1 className="beauty-heading">Beauty bundle</h1>
                            <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756548912/Button_-_Next_slide_SVG_pizwsg.png" alt="right-arrowx" />
                        </div>
                        <div className="beauty-bundle-cart-items">
                            <div className="image-card-container">
                                <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756556110/image_j2gbt6.png" alt="card-image" />
                                <h1 className="product-heading">UMF 20+</h1>
                                <select className="selecter">
                                    <option value="125g">125g</option>
                                    <option value="250g">250g</option>
                                    <option value="500g">500g</option>
                                </select>
                            </div>
                            <p>+</p>
                            <div className="image-card-container">
                                <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756556116/image_zqb3sw.png" alt="card-image" />
                                <h1 className="product-heading">UMF 24+</h1>
                                <select className="selecter">
                                    <option value="125g">125g</option>
                                    <option value="250g">250g</option>
                                    <option value="500g">500g</option>
                                </select>
                            </div>
                            <p>+</p>
                            <div className="image-card-container">
                                <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756556171/image_152_ibbimr.png" alt="card-image" />
                                <h1 className="product-heading">Wooden Spoon</h1>
                            </div>
                            <div className="beauty-add-to-cart-price-container">
                                <p className="price-tag"><span className="text-overwrite">$478.75 USD</span> $430.88 <span className="discount">Save 10%</span></p>
                                <button className="add-to-cart-btn">ADD BUNDLE TO CART</button>
                            </div>
                        </div>

                    </div>
                    <div className="login-container">

                        <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756557344/Colourclub_Logo_n35vhm.png" alt="colour-pallete" />


                        <p className="manuka-info">Colourclub members earn up to <span className="span-56">56</span> reward points when buy this item. Sign up or login</p>
                    </div>
                    <div className="delivery-container">
                        <div>
                            <h1 className="review">DELIVERY</h1>
                            <p className="deliver-para">FREE DELIVERY ON ORDERS OVER $30</p>
                        </div>
                        <div>
                            <h1 className="review">ESTIMATED DELIVERY DATE:</h1>
                            <p className="deliver-para">June 9 - June 13 to</p>
                        </div>
                    </div>
                    <hr className="hr-line" />

                    <div className="delivery-container">
                        <div>
                            <h1 className="review">AFTER PAY</h1>
                            <div className="afterpay-container">
                                <p className="deliver-para">or 4 interest-free payments of $13.97 with </p>
                                <div className="cash-div">
                                    <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756564717/Vector_syxxou.png" alt="cash-icon" />
                                </div>

                                <p className="afterpay"> Afterpay </p>
                                <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756549830/SVG_ergtjc.png" alt="info" />
                            </div>
                        </div>

                    </div>
                    <hr className="hr-line" />


                    <h1 className="review">UMF <sup>TM</sup> SCALE</h1>
                    <div className="umf-container">
                        <div className="umf-scalers">
                            <h1 className="review">UMF<sup>TM</sup> 10+</h1>
                            <hr className="scaling-1" />
                        </div>
                        <div className="umf-scalers">
                            <h1 className="review scaling">UMF<sup>TM</sup> 15+</h1>
                            <hr className="scaling-2" />
                        </div>
                        <div className="umf-scalers">
                            <h1 className="review scaling">UMF<sup>TM</sup> 20+</h1>
                            <hr className="scaling-3" />
                        </div>
                        <div className="umf-scalers">
                            <h1 className="review scaling">UMF<sup>TM</sup> 24+</h1>
                            <hr className="scaling-4" />
                        </div>
                        <div className="umf-scalers">
                            <h1 className="review scaling">UMF<sup>TM</sup> 26+</h1>
                            <hr className="scaling-5" />
                        </div>
                        <div className="umf-scalers">
                            <h1 className="review scaling">UMF<sup>TM</sup> 28+</h1>
                            <hr className="scaling-6" />
                        </div>
                        <div className="umf-scalers">
                            <h1 className="review scaling">UMF<sup>TM</sup> 30+</h1>
                            <hr className="scaling-7" />
                        </div>
                    </div>
                    <h1 className="review">TASTE PROFILE</h1>

                    <Slider className="slider" />
                    <div className="bold-container">
                        <p className="manuka-info">Clean & Intense</p>
                        <p className="manuka-info">Bold & Intense</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home