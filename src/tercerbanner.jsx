const TercerBanner = () => {
    const imagenIzq = "./images/tercerbanner.png";
    const title = "Providing Expert Tax and Accounting Services Tailored to Your Needs";
    const description = "Personal Taxes Simplify your tax filing process with our expert assistance for individuals.";
  
    return (
        <div id="tercerbannerdiv">
            <img id="imagenTercer"src={imagenIzq} alt="" />
            <div id="divderecho">
                <h1 id="titulotercerbanner">{title}</h1>
                <p id="descripciontercerbanner">{description}</p>
            </div>
        </div>
    );
  };
  
  export default TercerBanner;
  