import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      habitaciones: 'Rooms',
      ubicacion: 'Location',
      galeria: 'Gallery',
      contacto: 'Contact',
      direccion: 'Address',
      habitacionSimple: 'Single Room',
      habitacionDoble: 'Double Room',
      despripcionHabSimple: 'The rooms are simple and in some cases have a French balcony or enclosed terrace.',
      despripcionHabDoble: 'The superior rooms have a sitting area and basic kitchen. They can accommodate 4 people upon request.',
      cabeceraHabitaciones: 'Room characteristics',
      iconInternet: 'Free Wifi Internet',
      iconTelevision: 'Satellite television',
      iconRadio: 'Piped music',
      iconAireAcondicionado: 'Air-conditioning',
      iconTelefono: 'Phone',
      iconBaño: 'Private bathroom',
      cabeceraContacto: 'Contact us',
      pContacto: 'You can make your questions or suggestions either by phone or by email or by using the contact form that we make available to you.',
      labelNombre: 'Name*',
      labelTelefono: 'Phone*',
      labelMensaje: 'Message',
      labelAsunto: 'Subject*',
      textReservar: 'Reserve',
      textInformación: 'Information',
      textOtros: 'Others',
      politicaPrivacidad: 'I have read and accept the ',
      pPrivacidad: 'Privacy Policy.',
      enviar: 'Submit',
      cabeceraUbicaion: 'Perfect location',
      textUbicacion1: 'Hostal Ana is a charming accommodation located less than 12 minutes walk from Burriana Beach. In the very heart of Nerja, this hostel is a 3-minute walk from the historical exhibitions at the Nerja Museum and a 4-minute walk from Verano Azul Park. The Balcón de Europa Square is a 10-minute walk from the hostel and Malaga Airport is 75 km away. Nature lovers will appreciate the proximity of Playa El Salón, which is 1 km away. The location 2 km from the Águila Aqueduct is an advantage for our guests.',
      textGaleria: 'In our hostel you will find all the comforts and a family environment, with a terrace where you can see the fantastic views of one of the most beautiful and charming towns in all of southern Spain',
      textHome1: 'Welcome to Hostal Ana Nerja!',
      textHome2: 'Immerse yourself in the warmth and comfort of our charming 2-star hostel, located in the heart of the wonderful town of Nerja. We are proud to offer you not only a place to rest, but a cozy and familiar experience that will make you feel at home from the moment you walk through our doors.',
      textHome3: "Our privileged location places you just a few steps from the main attractions of Nerja, from its picturesque streets to its beautiful beaches with crystal-clear waters. Whether you're here to explore the rich local culture, enjoy the sun and sand, or simply relax and unwind, Hostal Ana is the perfect starting point for your adventures.",
      textHome4: "Our team is committed to providing you with exceptional service, always with a smile and the warmth that characterizes the hosts of our land. From tips on the best places to visit to local restaurant recommendations, we're here to make your stay unforgettable.",
      textHome5: 'Welcome to your home away from home, where every moment will be an unforgettable memory. We hope you enjoy your stay at Hostal Ana Nerja!',
      inicio: 'Home',
      cerrar: 'CLOSE',
    }
  },
  es: {
    translation: {
      habitaciones: 'Habitaciones',
      ubicacion: 'Ubicación',
      galeria: 'Galería',
      contacto: 'Contacto',
      direccion: 'Dirección',
      habitacionSimple: 'Habitación Individual',
      habitacionDoble: 'Habitación Doble',
      despripcionHabSimple: 'Las habitaciones son sencillas y disponen en algunos casos de balcón francés o terraza cerada.',
      despripcionHabDoble: 'Las habitaciones superiores cuentan con zona de descanso y cocina básica. Tienen capacidad para 4 personas previa solicitud.',
      cabeceraHabitaciones: 'Caracteristicas de las habitaciones',
      iconInternet: 'Internet Wifi gratis',
      iconTelevision: 'Televisión por satélite',
      iconRadio: 'Hilo musical',
      iconAireAcondicionado: 'Aire acondicionado',
      iconTelefono: 'Teléfono',
      iconBaño: 'Baño privado',
      cabeceraContacto: 'Contacta con nosotros',
      pContacto: 'Puedes realizar tus consultas o sugerencias tanto por teléfono como por correo electrónico o utilizando el formulario de contacto que ponemos a su disposición.',
      labelNombre: 'Nombre*',
      labelTelefono: 'Telélefono*',
      labelMensaje: 'Mensaje',
      labelAsunto: 'Asunto*',
      textReservar: 'Reservar',
      textInformación: 'Información',
      textOtros: 'Otros',
      politicaPrivacidad: 'He leído y acepto la ',
      pPrivacidad: 'Política de Privacidad.',
      enviar: 'Enviar',
      cabeceraUbicaion: 'Locaclización perfecta',
      textUbicacion1: 'El Hostal Ana es un encantador alojamiento situado a menos de 12 minutos a pie de la Playa de Burriana. En el mismísimo corazón de Nerja, este hostal está a 3 minutos a pie de las exposiciones hitóricas del Museo de Nerja y a 4 minutos a pie del parque Verano Azul. La plaza Balcón de Europa se encuentra a 10 minutos andando del hostal y el aeropuerto de Málaga se sitúa a 75 km. Los amantes de la naturaleza apreciarán la proximidad de la Playa El Salón, que está a 1 km de distancia. La ubicación a 2 km del Acueducto del Águila es una ventaja para nuestros huéspedes.',
      textGaleria: 'En nuestro hostal encontrarás todas las comodidades y un entorno familiar, contando con una terraza donde podrás ver las fantasticas vistas a uno de los pueblos más bonitos y con encanto de todo el sur de España',
      textHome1: '¡Bienvenido al Hostal Ana Nerja!',
      textHome2: 'Sumérgete en la calidez y la comodidad de nuestro encantador hostal de 2 estrellas, ubicado en el corazón del maravilloso pueblo de Nerja. Nos enorgullece ofrecerte no solo un lugar donde descansar, sino una experiencia acogedora y familiar que te hará sentir como en casa desde el momento en que cruzas nuestras puertas.',
      textHome3: 'Nuestra privilegiada ubicación te coloca a solo unos pasos de los principales atractivos de Nerja, desde sus pintorescas calles hasta sus hermosas playas de aguas cristalinas. Ya sea que estés aquí para explorar la rica cultura local, disfrutar del sol y la arena, o simplemente relajarte y desconectar, el Hostal Ana es el punto de partida perfecto para tus aventuras.',
      textHome4: 'Nuestro equipo está comprometido en brindarte un servicio excepcional, siempre con una sonrisa y la calidez que caracteriza a los anfitriones de nuestra tierra. Desde consejos sobre los mejores lugares para visitar hasta recomendaciones de restaurantes locales, estamos aquí para que tu estancia sea inolvidable.',
      textHome5: 'Bienvenido a tu hogar lejos de casa, donde cada momento será un recuerdo imborrable. ¡Esperamos que disfrutes tu estadía en el Hostal Ana Nerja!',
      inicio: 'Inicio',
      cerrar: 'CERRAR',
    }
  }
};

i18n
.use(initReactI18next)
.init({
  resources,
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false 
  }
});

export default i18n;
