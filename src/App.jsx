import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar } from './components/NavBar/NavBar'
import { Parallax } from './components/Parallax/Parallax'
import { Footer } from './components/Footer/Footer'



import './App.css'
import image1 from './assets/screenChat.gif'
import image2 from './assets/screenBackend.gif'
import image3 from './assets/BackendPerson.gif'
import image4 from './assets/frontPersonas.gif'



import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';




function App() {




  return (
    <div className="App">

      <NavBar/>
      <Parallax/>


      <div>
        <div>

        </div>

        <div className='section'>
        {/* <h3 className='border'> !!!!!!!!! </h3> */}
          <h3 className='border'> Proyectos realizados </h3>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sint sunt id optio accusantium cum amet eligendi nam ipsam, laborum maiores perspiciatis 
            odio in eos iure omnis? Labore voluptatibus atque exercitationem!
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Et laudantium nisi dignissimos fugit,
            sint nesciunt laborum mollitia eum sequi quidem placeat. Ea assumenda
            magnam eius, ipsum ad reiciendis laudantium quidem?
          </p> */}

          <p>
            Bienvenido a mi sitio web, mi nombre es Alexander Contreras, aqui podras encontrar
            algunos ejemplos de desarrollos que he realizado desde Apps moviles, Web, Backend.
          </p>

        </div>
      </div>


      <MDBRow className= ' bBody  row-cols-1 row-cols-md-2 g-4'>

        <MDBCol>
        <div className='cards'>
          <img src={image1} className='imgG'/>

          <div>
            <h2 className='titulo'>Chat Grupal </h2>
            <h3 className='subtitulo'> Ionic</h3>
            <p className='texto'>
              Chat grupal con interaccion por medio de grupos, 
              en el cual se puede realizar envio de mensajes de texto,
              imagen y video, asi como las opciones de reenviar mensajes a otros grupos
              tambien se pueden responder los mensajes idividualemte. Y cada mensaje recibido 
              alerta por medio de una notificacion push de nuevo mensaje.   
            </p>
            {/* <button className='buttonn'> Mostrar más</button> */}
          </div>

        </div>
        </MDBCol>

        <MDBCol>
        <div className='cards'>
          <img src={image2} className='imgG'/>

          <div>
            <h2 className='titulo'>Backend chat grupal</h2>
            <h3 className='subtitulo'>  NodeJS </h3>
            <p className='texto'>
              Este es un proyecto de backend con NodeJS para la conexion de servicios que utiliza 
              el chat grupal, este mismo esta conectado a una base de datos con MongoDb, utiliza librerias 
              como express, bycript, express-fileupload, socket.io. Creado en TS y compilado en JS como proyecto final. 
            </p>
            {/* <button className='buttonn'> Mostrar más</button> */}
          </div>

        </div>
        </MDBCol>

        <MDBCol>
        <div className='cards'>
          <img src={image3} className='imgG'/>

          <div>
            <h2 className='titulo'>Backend administracion de reportes</h2>
            <h3 className='subtitulo'> NodeJS</h3>
            <p className='texto'>
              Backend para el desarrollo de una plataforma para administracion de reportes, 
              este realiza una consulta a una base de datos Oracle de donde se estrae la informacion 
              base de todo lo que se realiza en este sistema, este proseso lo realiza cada ves que se accede al sistema, 
              tenemos la opcion de crear usuarios, login de usuario, consultar reportes, actualiza reportes, asigna reporte, 
              cambios de estado de reporte, revalidacion de token. 
            </p>
            {/* <button className='buttonn'> Mostrar más</button> */}
          </div>

        </div>
        </MDBCol>

        <MDBCol>
        <div className='cards'>
          <img src={image4} className='imgG'/>

          <div>
            <h2 className='titulo'>Frontend reportes </h2>
            <h3 className='subtitulo'> ReactJS</h3>
            <p className='texto'>
              Este proyecto es la parte visual del proyecto de reporte, aqui se utiliza react con vite, 
              diseño en css, react-dom, react-modal, react-router-dom, entre otros complementos usados para 
              el desarrollo de esta plataforma, en la cual se pretende dar seguimiento a reportes asignados a usuarios 
              haciendo eso por medio de manejadores de estado que nos indicaran el proceso que lleva cada uno de estos 
              reportes. 
            </p>
            {/* <button className='buttonn'> Mostrar más</button> */}
          </div>

        </div>
        </MDBCol>


      </MDBRow>


      {/* <div className='' > 

        
      </div> */}

      

      <Footer/>



    </div>
  )
}

export default App


