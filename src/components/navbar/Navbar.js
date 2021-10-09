import avatar from '../../img/jorge_reyes.jpg';
import './navbar.css';

export const Navbar = () => {
    return (

        <div className = "navBar" >
            <ul className='lista'>
                <li><a href="index.html" ><img src={avatar} alt="Logo" className="foto" /></a></li>
                <li> <a href = "about.html" > Sobre nosotros </a></li>
                <li> <a href = "products.html" > Productos </a></li>
                <li> <a href = "account.html" > Mi cuenta </a></li>
            </ul>
        </div>
    )
}