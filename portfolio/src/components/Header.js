import styled from 'styled-components'

export default Header

function Header() {
    return (
        <Header1>
            <div className="titles">
                <h1>Weston Woodard</h1>
                <h2>Full Stack Web Developer</h2>
            </div>
            <nav>
                <a href='#'>Bio</a>
                <a href='#'>Projects</a>
                <a href='#'>Contact</a>
            </nav>
        </Header1>
    );
}

const Header1 = styled.div`
    height: 20vh;
`