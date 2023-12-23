import './header.css'
import { ArrayIcons }from '../lists/icons.jsx'

var tema = "light"

export function Header(){
    console.log(ArrayIcons.clima[tema].cloud)
    return(
    <section  className = "headerContainer">
        <ul className = "headerList">
            <li className = "mainlistItem">
                <img className = "skyIcon" src={ArrayIcons.clima[tema].moon} alt="" />    
                <h1 className='dia'>Qua.</h1>
                <article className='temperaturaMax'>
                    {ArrayIcons.others.arrows.arrowUp1}
                    <p>32°</p> 
                </article>
                <article className='temperaturaMin'>
                    <p>21°</p> 
                    {ArrayIcons.others.arrows.arrowDown1}
                </article>

            </li>

            <li className = "listItem">
                <img className = "skyIcon" src={ArrayIcons.clima[tema].cloud} alt="" />    
                <h1 className='dia'>Qua.</h1>
                <article className='temperaturaMax'>
                    {ArrayIcons.others.arrows.arrowUp1}
                    <p>32°</p> 
                </article>
                <article className='temperaturaMin'>
                    <p>21°</p> 
                    {ArrayIcons.others.arrows.arrowDown1}
                </article>
            </li>
            
            <li className = "listItem">
                <img className = "skyIcon" src={ArrayIcons.clima[tema].sun} alt="" />    
                <h1 className='dia'>Qua.</h1>
                <article className='temperaturaMax'>
                    {ArrayIcons.others.arrows.arrowUp1}
                    <p>32°</p> 
                </article>
                <article className='temperaturaMin'>
                    <p>21°</p> 
                    {ArrayIcons.others.arrows.arrowDown1}
                </article>
            </li>
            
            <li className = "listItem">
                <img className = "skyIcon" src={ArrayIcons.clima[tema].rain} alt="" />    
                <h1 className='dia'>Qua.</h1>
                <article className='temperaturaMax'>
                    {ArrayIcons.others.arrows.arrowUp1}
                    <p>32°</p> 
                </article>
                <article className='temperaturaMin'>
                    <p>21°</p> 
                    {ArrayIcons.others.arrows.arrowDown1}
                </article>
            </li>

            <li className = "listItem">
                <img className = "skyIcon" src={ArrayIcons.clima[tema].lightning} alt="" />    
                <h1 className='dia'>Qua.</h1>
                <article className='temperaturaMax'>
                    {ArrayIcons.others.arrows.arrowUp1}
                    <p>32°</p> 
                </article>
                <article className='temperaturaMin'>
                    <p>21°</p> 
                    {ArrayIcons.others.arrows.arrowDown1}
                </article>
            </li>
            
        </ul>
    </section>
    )
    
}