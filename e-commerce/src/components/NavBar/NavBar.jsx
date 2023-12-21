import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h3>Ascensor 69 | e-shop</h3>
            <div>
                <button>The Doors</button>
                <button>Depeche Mode</button>
                <button>B.B. King</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar