import styled from 'styled-components'
import self from './images/self.jpg'

export default Bio;

function Bio() {
    return(
        <div className="Bio">
            <Img src={self} alt="photo of myself"/>
            I'm a software developer living in Phoenix, Arizona.  I love creative problem solving and software development is a field that allows me to embrace this passion. <br/>
            Reach out to me if you have an interesting project that you wish to collaborate on.
        </div>
    )
}


const Img = styled.img`
    width: 200px;
`