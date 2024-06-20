import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import SectionCard from "./components/SectionCard.jsx";
import SectionProjects from "./components/SectionProjects.jsx";

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <header>
        <HeaderComponent/>
      </header>
      <section className='relative flex flex-1 flex-col'>
        <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover blur-sm -z-10'>
          <source src="https://videos.pexels.com/video-files/3175517/3175517-hd_1920_1080_25fps.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div className='flex flex-1 items-center justify-center'>
          <SectionCard/>
        </div>
        <div className='flex flex-1 items-center justify-center'>
          <SectionProjects/>
        </div>
      </section>
      <footer className='text-center'>
        <FooterComponent/>
      </footer>
    </div>
  )
}

export default App
