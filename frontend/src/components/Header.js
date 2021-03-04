import { Link } from 'react-router-dom';
function openMenu(){
  return alert('This is Idol Pages');
}
function Header() {
  return (
    <header className="header">
      <div className="brand">
        <button onclick="openMenu()">
          &#9776;
        </button>
        <Link to="/">Idol Pages</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
  );
}

export default Header;
