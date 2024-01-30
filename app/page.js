import Main from './main';
import About from './about';
import Projects from './projects';
import Contact from './contact';
import CurveTransition from '../components/CurveTransition';
export default function Home() {
    return (
            <main>
                <Main />
                <About />
                <Projects />
                <CurveTransition/>
                <Contact />
            </main>
    );
}
