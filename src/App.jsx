import logo from './assets/logo_schwarz.png'
import facebook from './assets/facebook.png'
import email from './assets/email.png'
import instagram from './assets/instagram.png'

export default function App() {
  return (
    <>
      <div className="koerper">
      <img className="logo" src={logo} alt="logo" / >
      <hr />
      <h1>Willkommen bei Kahl fetzt. e.V.</h1>
        <p>..., dem Verein, der seit 2017 das Vereinsleben in Kahl am Main mit Energie und Herzblut bereichert! Unser Motto <b>Viele Hände, schnelles Ende!</b> sagt alles: Wir unterstützen Kahler Vereine und Veranstaltungen, wo immer Hilfe gebraucht wird - sei es beim Aufbau von Festbänken, beim Zapfen in der Biergondel oder beim Weltspieletag.</p>
        <h2>Unsere Geschichte</h2>
        <p>Gegründet wurde Kahl fetzt. e.V. während der Kahler Kerb 2017, als eine Gruppe Kahlerinnen und Kahler erkannte: Viele Vereine brauchen Unterstützung, um ihre Events zu stemmen. Am 29. Juli 2017 war es soweit - Kahl fetzt. war geboren! Seitdem sind wir ständig gewachsen und haben uns zu einem starken Partner für die Kahler Vereinskultur entwickelt.</p>
        <h2>Warum Kahl fetzt.?</h2>
        <p><b>Fetzen</b> steht für Schwung, Spaß und Gemeinschaft! Wir machen Kahl lebendiger, indem wir Vereine vernetzen und gemeinsam Traditionen pflegen. Ob beim Stadtradeln, beim Weltspieletag oder unserer internen "Get-Togethers" - bei uns ist immer etwas los.</p>
        <h2>Ihr braucht Hilfe?</h2>
        <p>... dann schreibt uns einfach per E-Mail oder über Social Media. Am besten packt ihr in eure Anfrage bereits das Datum, den Ort der Veranstaltung, wie viele Leute ihr benötigt und um welche Art von Hilfe es sich handelt (z.B. Bierbänkeaufbau, Zapfen, Bedienen, etc.)</p>
        <h2>Mitmachen?</h2>
        <p>Lust, Teil unseres Teams zu werden? Egal, ob du bei der nächsten Kerb mitaufbauen willst oder gerne mal wieder ein Bier zapfen möchtest - bei Kahl fetzt. e.V. bist du genau richtig! Schau auf unserer Facebook-Seite oder bei Instagramm vorbei, schreib uns eine E-Mail oder sprich uns einfach an. Wir sind meist an unseren <b>Kahl fetzt.-Shirts</b> deutlich zu erkennen.</p>
        <h2>Kahl fetzt. - Gemeinsam unschlagbar</h2>
        <hr />
      <ul className="social-media-contacts">
        <li><a target="_blank" href="https://www.instagram.com/kahl_fetzt/"><img src={instagram} alt="instagram" /></a></li>
        <li><a target="_blank" href="https://www.facebook.com/kahlfetzt/"><img src={facebook} alt="facebook" /></a></li>
        <li><a href="mailto:kahl-fetzt@gmx.de"><img src={email} alt="email"/></a></li>
      </ul>
      </div>
    </>
  )
}
