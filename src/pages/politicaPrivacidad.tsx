import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "../layout/LayoutApp";
import { WrapperPage } from "../components/WrapperPage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { switchroutes } from "../route/routes";
import { Link } from "react-router-dom";


export const PoliticaPrivacidadPage: React.FC = () => {

    useEffect(() => {
        document.title = t('pPrivacidad') + ' | Hostal Ana Nerja';
    }, [])

    const { t } = useTranslation();


    return(
        <Layout>
            <WrapperPage>
                <div className="flex flex-col gap-4 top-28 p-4 lg:w-9/12 text-grey-ligth">
                    <Link to={switchroutes.contact}>
                    <FontAwesomeIcon icon={faAngleLeft} size="2xl" className="left-40 cursor-pointe"/> 
                    </Link>
                    <p className="text-secundary font-extrabold">Política de Privacidad</p>
                    <p>Última actualización: 22/04/2024</p>
                    <p>Hostal Ana Nerja opera el sitio Web [URL del sitio Web](en adelante, "Servicios").</p>
                    <p>No usaremos ni compartiremos tu información con nadie, excepto como se describe en esta Política de Privacidad.</p>
                    <p>Utilizamos tu información personal para proporcionar y mejorar el Servicio. Al utilizar el Servicio, aceptas la recopilación y el uso de información de acuerdo con esta política. A menos que se defina lo contrario en esta Política de Privacidad, los términos utilizados en esta Política de Privacidad tienen los mismos significados que en nuestros Términos y Condiciones, disponibles en [enlace a los términos y condiciones].</p>
                    <p className="font-bold text-secundary">Recopilación y Uso de Información</p>
                    <p>Recopilamos varios tipos de información con diferentes propósitos para proporcionar y mejorar nuestro Servicio.</p>
                    <p className="font-bold text-secundary">Tipos de Datos Recopilados</p>
                    <p className="font-bold text-secundary">Datos Personales</p>
                    <p>Al utilizar nuestro Servicio, podemos solicitarte que nos proporciones cierta información personalmente identificable que puede incluir, entre otros, tu nombre, dirección de correo electrónico, dirección postal y número de teléfono ("Datos Personales").</p>
                    <p className="font-bold text-secundary">Datos de Uso</p>
                    <p>También podemos recopilar información sobre cómo accedes y utilizas el Servicio ("Datos de Uso"). Estos Datos de Uso pueden incluir información como la dirección del Protocolo de Internet de tu computadora (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las páginas de nuestro Servicio que visitas, la hora y la fecha de tu visita, el tiempo dedicado a esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.</p>
                    <p className="font-bold text-secundary">Seguimiento y Datos de Cookies</p>
                    <p>Utilizamos cookies y tecnologías de seguimiento similares para rastrear la actividad en nuestro Servicio y mantener cierta información.</p>
                    <p>Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador único anónimo. Las cookies se envían a tu navegador desde un sitio web y se almacenan en tu dispositivo. También se utilizan otras tecnologías de seguimiento, como balizas, etiquetas y scripts para recopilar y rastrear información y para mejorar y analizar nuestro Servicio.</p>
                    <p>Puedes instruir a tu navegador para que rechace todas las cookies o para que te avise cuando se envíe una cookie. Sin embargo, si no aceptas cookies, es posible que no puedas usar algunas partes de nuestro Servicio.</p>
                    <p>Ejemplos de Cookies que utilizamos:</p>
                    <div className="flex flex-row">
                        <p className="flex flex-row font-bold text-secundary">- Cookies de Sesión.</p>
                        <p> Utilizamos Cookies de Sesión para operar nuestro Servicio.</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="flex flex-row font-bold text-secundary">- Cookies de Preferencias.</p>
                        <p>Utilizamos Cookies de Preferencias para recordar tus preferencias y configuraciones variadas.</p>
                    </div>
                    <div className="flex flex-row">
                        <p className="flex flex-row font-bold text-secundary">- Cookies de Seguridad.</p>
                        <p>Utilizamos Cookies de Seguridad para fines de seguridad.</p>
                    </div>
                    <p className="font-bold text-secundary">Uso de Datos</p>
                    <p>Hostal Ana Nerja utiliza los datos recopilados para diversos fines:</p>
                    <ul>
                        <li>- Para proporcionar y mantener nuestro Servicio</li>
                        <li>- Para notificarte sobre cambios en nuestro Servicio</li>
                        <li>- Para permitirte participar en funciones interactivas de nuestro Servicio cuando decidas hacerlo</li>
                        <li>- Para proporcionar asistencia al cliente</li>
                        <li>- Para recopilar análisis o información valiosa para que podamos mejorar nuestro Servicio</li>
                        <li>- Para monitorear el uso de nuestro Servicio</li>
                        <li>- Para detectar, prevenir y abordar problemas técnicos</li>
                    </ul>
                    <p className="font-bold text-secundary">Transferencia de Datos</p>
                    <p>Tu información, incluidos los Datos Personales, puede transferirse a —y mantenirse en— computadoras ubicadas fuera de tu estado, provincia, país u otra jurisdicción gubernamental donde las leyes de protección de datos pueden diferir de las de tu jurisdicción.</p>
                    <p>Si te encuentras fuera de España y decides proporcionarnos información, ten en cuenta que transferimos los datos, incluidos los Datos Personales, a España y los procesamos allí.</p>
                    <p>Tu consentimiento a esta Política de Privacidad seguido de tu envío de dicha información representa tu acuerdo con dicha transferencia.</p>
                    <p>Hostal Ana Nerja tomará todas las medidas razonablemente necesarias para garantizar que tus datos se traten de forma segura y de acuerdo con esta Política de Privacidad y no se realizará ninguna transferencia de tus Datos Personales a una organización o país a menos que existan controles adecuados establecidos, incluida la seguridad de tus datos y otra información personal.</p>
                    <p className="font-bold text-secundary">Divulgación de Datos</p>
                    <p className="font-bold text-secundary">Requisitos Legales</p>
                    <p>Hostal Ana Nerja puede divulgar tus Datos Personales de buena fe cuando considere que esta acción es necesaria para:</p>
                    <ul>
                        <li>- Cumplir con una obligación legal</li>
                        <li>- Proteger y defender los derechos o la propiedad de Hostal Ana Nerja</li>
                        <li>- Prevenir o investigar posibles irregularidades en relación con el Servicio</li>
                        <li>- Proteger la seguridad personal de los usuarios del Servicio o del público</li>
                        <li>- Protegerse contra la responsabilidad legal</li>
                    </ul>
                    <p className="font-bold text-secundary">Seguridad de Datos</p>
                    <p>La seguridad de tus datos es importante para nosotros, pero recuerda que ningún método de transmisión a través de Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger tus Datos Personales, no podemos garantizar su seguridad absoluta.</p>
                    <p className="font-bold text-secundary">Proveedores de Servicios</p>
                    <p>Podemos emplear empresas e individuos de terceros para facilitar nuestro Servicio ("Proveedores de Servicios"), para proporcionar el Servicio en nuestro nombre, para realizar servicios relacionados con el Servicio o para ayudarnos a analizar cómo se utiliza nuestro Servicio.</p>
                    <p>Estos terceros tienen acceso a tus Datos Personales solo para realizar estas tareas en nuestro nombre y están obligados a no divulgarlos ni utilizarlos para ningún otro fin.</p>
                    <p className="font-bold text-secundary">Enlaces a Otros Sitios</p>
                    <p>Nuestro Servicio puede contener enlaces a otros sitios que no son operados por nosotros. Si haces clic en un enlace de un tercero, serás dirigido al sitio de ese tercero. Te recomendamos que revises la Política de Privacidad de cada sitio que visites.</p>
                    <p>No tenemos control ni asumimos responsabilidad alguna por el contenido, las políticas de privacidad o las prácticas de sitios o servicios de terceros.</p>
                    <p className="font-bold text-secundary">Privacidad de los Menores</p>
                    <p>Nuestro Servicio no está dirigido a personas menores de 18 años ("Menores").</p>
                    <p>No recopilamos de forma consciente información personalmente identificable de menores de 18 años. Si eres padre/madre o tutor y sabes que tu hijo nos ha proporcionado.</p>
                </div>
            </WrapperPage>
        </Layout>
    )
}