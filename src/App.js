import Benefits from "./Benefits";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Plans from "./Plans";
import Services from "./Services";
function App() {
    return (
        <div className=" h-full border-2 border-cyan-500">
            <Hero />
            <Benefits />
            <Services />
            <Plans />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
