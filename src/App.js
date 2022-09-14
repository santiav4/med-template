import Benefits from "./Benefits";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Plans from "./Plans";
import Services from "./Services";
import Scropt from "./scropt";
function App() {
    return (
        <div className=" h-full bg-[#fafafa] min-w-[360px] max-w-[1024px] mx-auto  ">
            <Hero />
            <div className="  px-6">
                <Benefits />
                <Services />
                <Plans />
                <Contact />
                <Footer />
                {/* <Scropt /> */}
            </div>
        </div>
    );
}

export default App;
