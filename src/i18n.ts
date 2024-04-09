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
      despripcionHabDoble: 'Upgraded rooms feature a sitting area and kitchenette. They can accommodate 4 people upon request.',
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
      labelMensaje: 'Message*',
      labelAsunto: 'Subject*',
      textReservar: 'Reserve',
      textInformación: 'Information',
      textOtros: 'Others',
      politicaPrivacidad: 'I have read and accept the privacy policy.*',
      enviar: 'Submit',
      cabeceraUbicaion: 'Perfect location',
      textUbicacion1: 'Hostal Ana is a charming accommodation located less than 12 minutes walk from Burriana Beach. Located in the very heart of Nerja, this pension is relatively close to the Nerja Museum. The Balcón de Europa Square is a 10-minute walk from the hotel and Malaga Airport is 75 km away. Nature lovers will appreciate the proximity of Playa El Salón, which is 1 km away. The location 2 km from the Águila Aqueduct is an advantage for guests staying at the accommodation.',
      textUbicacion2: 'A 6-minute walk from the nearest beach, this down-to-earth hotel is a 3-minute walk from historical exhibits at the Nerja Museum and a 4-minute walk from Verano Azul Park.',
      textUbicacion3: 'The hotel has a roof terrace with sun loungers and shaded seating.',
      textGaleria: 'In our hostel you will find all the comforts and a family environment, with a terrace where you can see the fantastic views of one of the most beautiful and charming towns in all of southern Spain.',
      textHome: ' Featuring WiFi throughout the property, the 2-star Hostal Ana - Adults Recommended Nerja is less than a 12-minute walk from Burriana Beach. Located in the very heart of Nerja, this pension is relatively close to the Nerja Museum. The Balcón de Europa Square is a 10-minute walk from the hotel and Malaga Airport is 75 km away. Nature lovers will appreciate the proximity to Playa El Salón, which is about 1 km away. The location 2 km from the Águila Aqueduct is an advantage for guests staying at the accommodation. Hostal Ana - Adults Recommended is well connected to many places of interest, within walking distance of the Fuente Hostal Ermita bus stop.',
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
      despripcionHabSimple: 'Las habitaciones son sencillas y disponen en algunos casos, balcón francés o terraza cerada.',
      despripcionHabDoble: 'Las habitaciones superiores cuentan con zona de descanso y cocina básica. Tienen capacidad para 4 personas previa solicitud.',
      cabeceraHabitaciones: 'Caracteristicas de las habitaciones',
      iconInternet: 'Internet Wifi gratis',
      iconTelevision: 'Televisión por satélite',
      iconRadio: 'Hilo musical',
      iconAireAcondicionado: 'Aire acondicionado',
      iconTelefono: 'Teléfono',
      iconBaño: 'Baño privado',
      cabeceraContacto: 'Contacta con nosotros',
      pContacto: 'Puedes realizar tus consultasa o sugerencias tanto por teléfono como por correo electrónico o utilizando el formulario de contacto que ponemos a su disposición',
      labelNombre: 'Nombre*',
      labelTelefono: 'Telélefono*',
      labelMensaje: 'Mensaje*',
      labelAsunto: 'Asunto*',
      textReservar: 'Reservar',
      textInformación: 'Información',
      textOtros: 'Otros',
      politicaPrivacidad: 'He leído y acepto la política de privacidad.*',
      enviar: 'Enviar',
      cabeceraUbicaion: 'Locaclización perfecta',
      textUbicacion1: 'El Hostal Ana es un encantador alojamiento situado a menos de 12 minutos a pie de la Playa de Burriana. Situado en el mismísimo corazón de Nerja, esta pensión está relativamente cerca del Museo de Nerja. La plaza Balcón de Europa se encuentra a 10 minutos andando del hotel y el aeropuerto Málaga se sitúa a 75 km. Los amantes de la naturaleza apreciarán la proximidad de la Playa El Salón, que está a 1 km de distancia. La ubicación a 2 km del Acueducto del Águila es una ventaja para los huéspedes que se alojen en el alojamiento.',
      textUbicacion2: 'Este hotel sencillo se encuentra a 6 minutos a pie de la playa más cercana, a 3 minutos a pie de las exposiciones hitóricas del Museo de Nerja y a 4 minutos a pie del parque Verano Azul.',
      textUbicacion3: 'El hotel cuenta con una terraza en la azotea con tumbonas y asientos a la sombra.',
      textGaleria: 'En nuestro hostal encontrarás todas las comodidades y entorno familiar, contando con una terraza donde podrás ver las fantasticas vistas a uno de los pueblos más bonitos y con encanto de todo el sur de España',
      textHome: 'Teniendo WiFi en toda la propiedad, el Hostal Ana - Adults Recommended Nerja, de 2 estrellas, está a menos de 12 minutos a pie de la Playa de Burriana. Situado en el mismísimo corazón de Nerja, esta pensión está relativamente cerca del Museo de Nerja. La plaza Balcón de Europa se encuentra a 10 minutos andando del hotel y el aeropuerto Málaga se sitúa a 75 km. Los amantes de la naturaleza apreciarán la proximidad de la Playa El Salón, que está a unos 1 km de distancia. La ubicación a 2 km del Acueducto del Águila es una ventaja para los huéspedes que se alojen en el alojamiento. El Hostal Ana - Adults Recommended está bien conectado con numerosos lugares de interés, a poca distancia andando de la parada de autobús la Fuente Hostal Ermita.'
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
