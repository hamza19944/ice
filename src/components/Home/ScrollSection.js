import image from "../../assets/scoop-down-bright-fruit-ice-cream-paper-sheet.jpg" 
const ScrollSection = () => {
    return (
        <section className="scroll-section">
            <h1>Our Partners</h1>
            <div className="img">
                <img src={image} alt="" />
                <div className="para">
                    <h2>Нева-Холод</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates, earum nam nihil sunt quisquam iure accusamus eligendi optio facilis consequuntur mollitia pariatur saepe iusto soluta quod aliquam ipsam blanditiis.</p>
                </div>
            </div>
        </section>
    );
}
 
export default ScrollSection;