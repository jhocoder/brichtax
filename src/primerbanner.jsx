const ContactButton = () =>{
    return <button id="contact">Contact</button>
}

const LearnMoreButton = () =>{
    return <button id="learnmore">Learn More</button>
}

function PrimerBanner(){
    const title = 'Simplifying Your Finances and Empowering Your Growth';
    const ptitle = '"Let Brich Tax & Accounting Services LLC handle the numbers, so you can focus on what truly matters—growing your business. With reliable bookkeeping, payroll services, and expert financial consulting, we’ve got you covered every step of the way."'

    return(
    <section id="primerbanner">
        <div id="leftDivFirstBanner">
            <h1 id="firstH1">{title}</h1>
            <p id="ptitle">{ptitle}</p>
            <div id="buttonsFirst">
                <ContactButton />
                <LearnMoreButton />
            </div>
            
        </div>
    </section>
    
    )
}

export default PrimerBanner;
