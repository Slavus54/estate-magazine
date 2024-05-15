import {routes} from '../routes/routes'

const Navbar = () => {
    return (
        <div className='navbar'>
            {routes.map(el => 
                <a href={el.url} className='navbar__item'>{el.title}</a>
            )}
        </div>
    )
} 

export default Navbar