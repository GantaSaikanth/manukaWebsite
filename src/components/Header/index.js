import { Component } from 'react'
import './index.css'


class Header extends Component {
    state = {isTrue: false}

    onClickMenuBtn = () => {
        this.setState(prevState => ({isTrue: !prevState.isTrue}))
    }

  render() {
    const {isTrue} = this.state
    return (
        <>
            <nav className='navbar-container'>
                <button onClick={this.onClickMenuBtn} className='navbar-extender'>
                    <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756545980/SVG_plpiej.png" alt="options" className='option-icon' />
                </button>
                <div className='navbar-content'>
                    <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756546267/Link_nn5ig2.png" alt="website-icon" className='website-icon-image' />
                    <div className='cart-container'>
                        <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756546390/Link_SVG_alff9n.png" alt="profile" className='icons' />
                        <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756546488/Link_SVG_wmx8qa.png" alt="search" className='icons' />
                        <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756644135/Button_dialog_qs9g6g.png" alt="cart" className='cart-icon' />
                    </div>
                </div>
            </nav>
            {isTrue && (
                <>
                <button className='extended-button'>Shop</button>
                <br />
                <button className='extended-button'>Explore</button>
                <br/>
                <button className='extended-button'>About</button>
                <br />
                <button className='extended-button'>Rewards</button>
                <br />
                <button className='extended-button'>Contact</button>
                <br />
                </>
            )}

            <nav className='big-size-windows-navbar'>
                <div className='which-manuka'>
                    <button className='button website-heading'>WHICK MANUKA IS FOR ME</button>
                </div>
                    <button className='button'>Shop</button>
                    <button className='button'>Explore</button>
                    <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756546267/Link_nn5ig2.png" alt="website-icon" className='website-icon-image' />
                    <button className='button'>About</button>
                    <button className='button'>Rewards</button>
                    <button className='button'>Contact</button>
                    <div className='cart-container-big'>
                        <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756546390/Link_SVG_alff9n.png" alt="profile" className='icons' />
                        <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756546488/Link_SVG_wmx8qa.png" alt="search" className='icons' />
                        <img src="https://res.cloudinary.com/dnvtpszvn/image/upload/v1756644135/Button_dialog_qs9g6g.png" alt="cart" className='cart-icon' />
                    </div>
                    
                
            </nav>
    </>

    )
}
}

export default Header