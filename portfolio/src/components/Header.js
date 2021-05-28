import styled from 'styled-components'
import linkedin from './images/linkedin.png'
import github from './images/github.png'

export default Header

function Header() {
    return (
        <Header1>
            <div className="titles">
                <h1>Weston Woodard</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
            <nav>
                <a href='https://www.linkedin.com/in/weston-woodard-76709988/' target='_blank'><Img src={linkedin} alt="linkedin button"/></a>
                <a href='https://github.com/SpicyLunchbox' target='_blank'><Img src={github} alt="github button"/></a>
            </nav>
            <button>Download my Resume</button>
        </Header1>
    );
}

const Header1 = styled.div`
    height: 20vh;
`
const Img = styled.img`
    width: 100px;
`