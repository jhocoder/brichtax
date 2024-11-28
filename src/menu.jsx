function Menu() {
    const home = 'Home'
    const services = 'Services'
    const about = 'About'
    const contact = 'Contact'
  
    return (
      <header id="header">
      <img src=".\images\logo.png" alt="" id="logo"/>
        <ul id='menu'>
          <li>{home}</li>
          <li>{services}</li>
          <li>{about}</li>
          <li>{contact}</li>
        </ul>
        </header>
    )
  }

export default Menu;