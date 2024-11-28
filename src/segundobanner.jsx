const Segundobanner = () =>{
 const title = "Bringing Clarity to Your Finances"

 const firstSquare = 'Trusted Expertise'
 const firstSquarep = "With years of experience, we provide reliable tax and accounting services tailored to your unique financial needs."

 const secondSquare = 'Comprehensive Services'
 const secondSquarep = "We understand that every client is different. Our customized strategies ensure that your business and personal finances are in capable hands."

 const thirdSquare = 'Personalized Solutions'
 const thirdSquarep = "From bookkeeping and payroll to notary services and financial consulting, we offer a wide range of solutions to help you stay ahead."

 const fourSquare = 'Client-Centered Support'
 const fourSquarep = "Your satisfaction is our priority. Our team is committed to delivering fast, friendly, and professional assistance whenever you need it."
 const imagenLogo ='./images/logoentero.png'
 return(
    <section id="segundobanner">
        <h1 id="titlesegundobanner">{title}</h1>
    <div id="squares">
    <div id="square2">
        <i className="fa-solid fa-phone"></i>
        <h2>{firstSquare}</h2>
        <p>{firstSquarep}</p>
        </div>
        <div id="square2">
        <i className="fa-solid fa-phone"></i>
        <h2>{secondSquare}</h2>
        <p>{secondSquarep}</p>
        </div>
        <div id="square2">
        <i className="fa-solid fa-phone"></i>
        <h2>{thirdSquare}</h2>
        <p>{thirdSquarep}</p>
        </div>
        <div id="square2">kl
        <i className="fa-solid fa-phone"></i>
        <h2>{fourSquare}</h2>
        <p>{fourSquarep}</p>
        </div>
        </div>
        <img src={imagenLogo} alt="" id="imagenLogobrich"/>
    </section>
 )

}

export default Segundobanner;