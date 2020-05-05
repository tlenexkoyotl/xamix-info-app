import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

import {styles} from '../xamix-info-styles.js';

class HomePage extends PageDM {
    static get styles() {
        return styles;
    }

    setElementsAttribute(elements, attributes) {
        for (const element of elements) {
            for (const attribute of attributes) {
                element.setAttribute(attribute.name, attribute.value || '');
            }
        }
    }

    updated(_changedProperties) {
        super.updated(_changedProperties);

        const allXamixElements = this.shadowRoot.querySelectorAll('xamix-element');
        const bodyXamixElements = this.shadowRoot.querySelectorAll('.body>xamix-element');
        const headerXamixElements = this.shadowRoot.querySelectorAll('.header>xamix-element');

        this.setElementsAttribute(allXamixElements,
            [
                {
                    name: 'root',
                    value: '.././node_modules/xamix-element/'
                },
                {
                    name: 'bold'
                },
                {
                    name: 'adaptable'
                }
            ]);

        this.setElementsAttribute(bodyXamixElements,
            [
                {
                    name: 'fontSize',
                    value: document.body.clientWidth > 600 ? '2' : '3'
                }
            ]);

        this.setElementsAttribute(headerXamixElements,
            [
                {
                    name: 'fontSize',
                    value: document.body.clientWidth > 600 ? '3' : '5'
                }
            ]);
    }

    render() {
        const links = [
            {
                wordsIndexes: [25, 26, 27],
                href: 'https://unifont.org/nahuatl/'
            }
        ];

        return html`
        <section class="principal-container">
          <div class="tri-set top justify">
            <div class="container">
              <div class="header">
                <xamix-element class="title" 
                    textInput="tla-zin-ti-lis-tli"></xamix-element>
              </div>
              <div class="body horizontal">
                <xamix-element
                    links="${JSON.stringify(links)}"
                    textInput="i-nin _ ma-tla-o-no-wa-yan _ ci-wa-lo _ ki-mac-tis-pam-pa _ yan-qik _ ma-ci-o-tla'-tol-lo-lis-tli _ me!-xi'-ka-tla'-tol-tec-zikoalistli1-_ i-nin _ ma-ci-o-tla'-tol-lo-lis-tli _ nex-ti-lo _ ok-se-tew _ tlen _ ka _ i-nin _ me-katl zikoalistli1-_ tel _ a-ci _ a'-mo _ ki-ne-new-ki _ qe-pa-lis-ko _ qi-lol-tin _ tlen _ kat-ka' _ me!-xi'-ka-tla'-tol-za-zi-lis-tin _ ok-se-kan _ a-ci _ a-yo-wi-tla'-qi-lo-tik-zikoalistli1 _ i-wan _ i-tla-me' _ na-wa-til-tin _ qi-lol-a-ki-lis-tli _ i-wan _ ka-to-na-lis-tli _ o-me-sel-ti-ka-kis-tin-tec-zikoalistli1 _ ye-hi-ka _ i-non _ za-zi-lis-tin _ a'-mo _ kat-ka' _ me!-xi'-ka-tla'-tol-ko _ i-wan-no-yo-ki _ ki-a-ya-wi _ ne-tla'-tol-ma-ci-ti-lis-tli-tlamilistli">                        
                </xamix-element>
                <xamix-element textInput="in _ yan-qik _ ma-ci-o-tla'-tol-lo-lis-tli _ i-tla-nex-ti-a-ni _ ra-xi!d _ tle-nex-ko-yotl _ i-to-ka _ sasanili1a-xa-mix-tla'-qi-lo-lis-tli-sasanili1b _ i-wan _ ki-nes-ka-yo-ti-a _ i-ma-ci-o-tla'-tol-wan _ kiz-ki _ xa-mix-tew _ ne-ci-kol-ci-wa _ i-wan _ i-non _ ne-ci-kol-tin _ tla'-tol-tin _ ci-wa-tlamilistli"><br slot="before"></xamix-element>
              </div>
            </div>
            <div class="container latin">
              <div class="header">
                <h2>Tlazintilistli</h2>
              </div>
              <div class="body">
                <p>Inin matlaonowayan ciwalo kimactispampa yanqik maciotla'tolollistli mexi'katla'toltec, inin maciotla'tollolistli nextilo oksetew tlen ka <a href="https://unifont.org/nahuatl/">inin mekatl</a>, tel aci a'mo kinenewki qepalisko qiloltin tlen katka' mexi'katla'tolzazilistin oksekan aci ayowitla'qilotik, iwan itlame' nawatiltin qilolakilistli iwan katonalistli omeseltikakistintec, yehika inon zazilistin a'mo katka' mexi'katla'tolko iwannoyoki kiayawi netla'tolmacitilistli.</p>
                <p>In yanqik maciotla'tollolistli itlanextiani Rashīd Tlenexkoyotl itoka <i>xamixtla'qilolistli</i> iwan kineskayotia imaciotla'tolwan kizki xamixtew necikolciwa iwan inon necikoltin tla'toltin ciwa.</p>
              </div>
            </div>
            <br>
            <div class="container latin center">
              <div class="header">
                <h2>Introducción</h2>
              </div>
              <div class="body">
                <p>Este sitio web está hecho para enseñar un nuevo sistema de escritura para el lenguaje Mexicano (Nawatl), este sistema fue diseñado a partir de otro sistema encontrado en <a href="https://unifont.org/nahuatl/">este link</a>, sin embargo lo que lo diferencia es principalmente el reemplazo de los símbolos que representan fonemas del Mexicano a favor de otros símbolos más ergonómicos (que sean más fáciles de trazar), así como el cambio en algunas reglas de interletrado y la eliminación de diptongos vocálicos, ya que por un lado tales sonidos no existen en la lengua Mexika además de que nublan una percepción visual de las estructuras gramaticales del lenguaje.</p>
                <p>El nuevo sistema ha sido nombrado, por su autor Rashīd Tlenexkoyotl, como <i>Xamixtla'qilolistli</i>, significando <i>escritura de ladrillos</i>, debido a que sus distintos letras y símbolos funcionan como ladrillos que construyen sílabas y a su vez estas sílabas construyen palabras.</p>
              </div>
            </div>
          </div>
        </section>
        `;
    }
}

window.customElements.define('home-page', HomePage);
