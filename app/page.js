import dynamic from "next/dynamic";

const Main = dynamic(() => import('./main'));
const About = dynamic(() => import('./About'));
const Projects = dynamic(() => import('./Projects'));
const Contact = dynamic(() => import('./Contact'));
export default function Home() {
    return (
            <main>
                <Main />
                <About />
                <Projects />
                <Contact />
            </main>
    );
}
