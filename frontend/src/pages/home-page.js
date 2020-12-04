import { html } from "lit-element";
import { PageDM } from "../utils/page-dm.js";

import "@polymer/paper-checkbox/paper-checkbox.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-card/paper-card.js";

import { styles } from "../xamix-info-styles.js";

class HomePage extends PageDM {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      testVertical: {
        type: Boolean,
        reflect: true,
      },
      testInput: {
        type: String,
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.testVertical = false;
    this.testInput = this.formatPunctuation(
      `qal-li-zikoalistli1 _ in _ "-xa-mix-tla'-qi-lo-lis-tli-" _ ka _ sen-ka _ ma-wi-so!l-li-mawkazalistli`
    );
  }

  formatPunctuation(text = "") {
    text = text
      .replace(/,/g, "zikoalistli1")
      .replace(/;/g, "zikoalistli2")
      .replace(/\.\.\./g, "nimanilistli")
      .replace(/\./g, "tlamilistli")
      .replace(/:/g, "tlanesemixnawalistli")
      .replace(/!!/g, "mawkazalistli")
      .replace(/\?/g, "tetlanilistli")
      .replace(/\[/g, `kaxtli1${this.testVertical ? "v" : "h"}a`)
      .replace(/\]/g, `kaxtli1${this.testVertical ? "v" : "h"}b`)
      .replace(/\(/g, `kaxtli2${this.testVertical ? "v" : "h"}a`)
      .replace(/\)/g, `kaxtli2${this.testVertical ? "v" : "h"}b`)
      .replace(/\{/g, `kaxtli3${this.testVertical ? "v" : "h"}a`)
      .replace(/\}/g, `kaxtli3${this.testVertical ? "v" : "h"}b`);

    return this.formatQuotes(text);
  }

  formatQuotes(text) {
    const matches = text.match(/"/g);

    if (matches) {
      const times = Math.floor(matches.length / 2);
      const openingQuote = "sasanili1a";
      const closingQuote = "sasanili1b";

      String.prototype.replaceAt = function (index, replacement) {
        return this.substr(0, index) + replacement + this.substr(index + 1);
      };

      for (let i = 0; i < times; i++) {
        const quoteA = text.indexOf(`"`);
        text = text.replaceAt(quoteA, openingQuote);
        const quoteB = text.indexOf(`"`);
        text = text.replaceAt(quoteB, closingQuote);
      }
    }

    return text;
  }

  setTestInput(e) {
    this.testInput = this.formatPunctuation(e.target.value);
    const testXamix = this.shadowRoot.querySelector("xamix-element#test-input");
    testXamix.textInput = this.testInput;
  }

  isTestVertical(e) {
    this.testVertical = e.target.checked;
  }

  setElementsAttribute(elements, attributes) {
    for (const element of elements) {
      for (const attribute of attributes) {
        element.setAttribute(attribute.name, attribute.value || "");
      }
    }
  }

  updated(_changedProperties) {
    super.updated(_changedProperties);

    const allXamixElements = this.shadowRoot.querySelectorAll("xamix-element");
    const bodyXamixElements = this.shadowRoot.querySelectorAll(
      ".body>xamix-element,.body>*>*>xamix-element,.body>*>*>*>xamix-element"
    );
    const headerXamixElements = this.shadowRoot.querySelectorAll(
      ".header>xamix-element"
    );
    const constructionXamixElements = this.shadowRoot.querySelectorAll(
      "xamix-element.construction"
    );
    const lettersXamixElements = this.shadowRoot.querySelectorAll(
      "xamix-element.letters"
    );

    this.setElementsAttribute(allXamixElements, [
      {
        name: "root",
        value: ".././node_modules/xamix-element/",
      },
      {
        name: "bold",
      },
      {
        name: "adaptable",
      },
    ]);

    this.setElementsAttribute(bodyXamixElements, [
      {
        name: "fontSize",
        value: document.body.clientWidth > 600 ? "2" : "3",
      },
    ]);

    this.setElementsAttribute(headerXamixElements, [
      {
        name: "fontSize",
        value: document.body.clientWidth > 600 ? "3" : "5",
      },
    ]);

    this.setElementsAttribute(constructionXamixElements, [
      {
        name: "fontSize",
        value: document.body.clientWidth > 600 ? "3" : "5",
      },
    ]);

    this.setElementsAttribute(lettersXamixElements, [
      {
        name: "fontSize",
        value: 5,
      },
    ]);
  }

  render() {
    const links = [
      {
        wordsIndexes: [25, 26, 27],
        href: "https://unifont.org/nahuatl/",
      },
    ];

    return html`
        <section class="principal-container">
            <div class="tri-set top justify">
                <div class="container">
                    <div class="header">
                        <xamix-element class="title" textInput="tla-zin-ti-lis-tli"></xamix-element>
                    </div>
                    <div class="body horizontal">
                        <xamix-element links="${JSON.stringify(links)}"
                            textInput="i-nin _ ma-tla-o-no-wa-yan _ ci-wa-lo _ ki-mac-tis-pam-pa _ yan-qik _ ma-ci-o-tla'-tol-lo-lis-tli _ me!-xi'-ka-tla'-tol-tec-zikoalistli1-_ i-nin _ ma-ci-o-tla'-tol-lo-lis-tli _ nex-ti-lo _ ok-se-tew _ tlen _ ka _ i-nin _ me-katl zikoalistli1-_ tel _ a-ci _ a'-mo _ ki-ne-new-ki _ qe-pa-lis-ko _ qi-lol-tin _ tlen _ kat-ka' _ me!-xi'-ka-tla'-tol-za-zi-lis-tin _ ok-se-kan _ a-ci _ a-yo-wi-tla'-qi-lo-tik-zikoalistli1 _ i-wan _ i-tla-me' _ na-wa-til-tin _ qi-lol-a-ki-lis-tli _ i-wan _ ka-to-na-lis-tli _ o-me-sel-ti-ka-kis-tin-tec-zikoalistli1 _ ye-hi-ka _ i-non _ za-zi-lis-tin _ a'-mo _ kat-ka' _ me!-xi'-ka-tla'-tol-ko _ i-wan-no-yo-ki _ ki-a-ya-wi _ ne-tla'-tol-ma-ci-ti-lis-tli-tlamilistli">
                        </xamix-element>
                        <xamix-element
                            textInput="in _ yan-qik _ ma-ci-o-tla'-tol-lo-lis-tli _ i-tla-nex-ti-a-niw _ ra-xi!d _ tle-nex-ko-yotl _ i-to-ka _ sasanili1a-xa-mix-tla'-qi-lo-lis-tli-sasanili1b _ i-wan _ ki-nes-ka-yo-ti-a _ i-ma-ci-o-tla'-tol-wan _ kiz-ki-ke' _ xa-mix-tew _ ne-ci-kol-ci-wa _ i-wan _ i-non _ ne-ci-kol-tin _ tla'-tol-tin _ ci-wa-tlamilistli">
                            <br slot="before" /></xamix-element>
                    </div>
                </div>
                <div class="container latin">
                    <div class="header">
                        <h2>Tlatsintilistli</h2>
                    </div>
                    <div class="body">
                        <p>Inin matlaonowayan chiwalo kimachtispampa yankwik machiotla'tolollistli mexi'katla'toltech, inin
                            machiotla'tollolistli nextilo oksetew tlen ka <a href="https://unifont.org/nahuatl/">inin
                                mekatl</a>,
                            tel achi a'mo kinenewki kwepalisko kwiloltin tlen katka' mexi'katla'toltsatsilistin oksekan achi
                            ayowitla'kwilotik, iwan itlame' nawatiltin kwilolakilistli iwan katonalistli omeseltikakistintec,
                            yehika inon tsatsilistin a'mo katka' mexi'katla'tolko iwannoyoki kiayawi netla'tolmachitilistli.</p>
                        <p>In yankwik machiotla'tollolistli itlanextianiw Rashīd Tlenexkoyotl itoka <i>xamixtla'kwilolistli</i>
                            iwan kineskayotia imachiotla'tolwan kitskike' xamixtew nechikolchiwa iwan inon nechikoltin
                            tla'toltin
                            chiwa.
                        </p>
                    </div>
                </div>
                <br />
                <div class="container latin center">
                    <div class="header">
                        <h2>Introducción</h2>
                    </div>
                    <div class="body">
                        <p>Este sitio web está hecho para enseñar un nuevo sistema de escritura para el lenguaje Mexicano
                            (Nawatl), este sistema fue diseñado a partir de otro sistema encontrado en <a
                                href="https://unifont.org/nahuatl/">este link</a>, sin embargo lo que lo diferencia es
                            principalmente el reemplazo de los símbolos que representan fonemas del Mexicano a favor de otros
                            símbolos más ergonómicos (que sean más fáciles de trazar), así como el cambio en algunas reglas de
                            interletrado y la eliminación de diptongos vocálicos, ya que por un lado tales sonidos no existen en
                            la lengua Mexika además de que nublan una percepción visual de las estructuras gramaticales del
                            lenguaje.</p>
                        <p>El nuevo sistema ha sido nombrado, por su autor Rashīd Tlenexkoyotl, como <i>Xamixtla'qilolistli</i>,
                            significando <i>escritura de ladrillos</i>, debido a que sus distintos letras y símbolos funcionan
                            como ladrillos que construyen sílabas y a su vez estas sílabas construyen palabras.</p>
                    </div>
                </div>
            </div>
            <br />
            <div class="tri-set top justify">
                <div class="container">
                    <div class="header">
                        <xamix-element class="title" textInput="ma-ci-o-tla'-tol-me'"></xamix-element>
                    </div>
                    <div class="body horizontal">
                        <xamix-element
                            textInput="ka-ke' _ pow-qa _ kaxtli2ha-cik-o-me-kaxtli2hb _ ma-ci-o-tla'-tol-tla-xe-lo-lis-me'-tlanesemixnawalistli">
                        </xamix-element>
                        <br />
                        <xamix-element
                            textInput="ni-man _ mo-i'-ti-ti _ no-cin-tin _ ma-ci-o-tla'-tol-me'-tlanesemixnawalistli">
                        </xamix-element>
                    </div>
                </div>
                <div class="container latin">
                    <div class="header">
                        <h2>Machiotla'tolme'</h2>
                    </div>
                    <div class="body">
                        <p>Kake' 7 (chikome) machiotla'toltlaxelolisme'.</p>
                        <p>Niman moi'titi nochintin machiotla'tolme'.</p>
                    </div>
                </div>
                <br />
                <div class="container latin">
                    <div class="header">
                        <h2>Letras</h2>
                    </div>
                    <div class="body">
                        <p>Hay 7 clases de caracteres.</p>
                        <p>A continuación se muestran todos los símbolos.</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <div class="cell">
                            <xamix-element class="construction v" textInput="sel-ti-ka-kis-me'">
                                <span slot="after">/</span>
                                <span slot="after">V: vocal grande</span>
                            </xamix-element>
                            <table class="letters" slot="after">
                                <tr>
                                    <td>
                                        <xamix-element class="letters construction v" textInput="a"></xamix-element>
                                        <br />
                                        <span>a</span>
                                        <br />
                                        <span>/a/</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction v" textInput="o"></xamix-element>
                                        <br />
                                        <span>o</span>
                                        <br />
                                        <span>/o/</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction v" textInput="i"></xamix-element>
                                        <br />
                                        <span>i</span>
                                        <br />
                                        <span>/i/</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction v" textInput="e"></xamix-element>
                                        <br />
                                        <span>e</span>
                                        <br />
                                        <span>/e/</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="cell">
                            <xamix-element class="construction s" textInput="e-he-ka-ton-tli">
                                <span slot="after">/</span>
                                <span slot="after">S: saltillo </span>
                            </xamix-element>
                            <table class="letters" slot="after">
                                <tr>
                                    <td>
                                        <xamix-element class="letters construction s" textInput="'1"></xamix-element>
                                        <br />
                                        <span>'</span>
                                        <br />
                                        <span>/ʔ/</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="cell">
                            <xamix-element class="construction a" textInput="we-yak-me'">
                                <span slot="after">/</span>
                                <span slot="after">A: acento </span>
                            </xamix-element>
                            <table class="letters" slot="after">
                                <tr>
                                    <td>
                                        <xamix-element class="letters construction a" textInput="!1"></xamix-element>
                                        <br />
                                        <span>:</span>
                                        <br />
                                        <span>/:/</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="cell">
                            <xamix-element class="construction" textInput="mo-kaw-tli">
                                <span slot="after">/</span>
                                <span slot="after">~: sin vocal</span>
                            </xamix-element>
                            <table class="letters" slot="after">
                                <tr>
                                    <td>
                                        <xamix-element class="letters construction" textInput="~1"></xamix-element>
                                        <br />
                                        <span>~</span>
                                        <br />
                                        <span>/∅/</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </li>
                    <li>
                        <xamix-element class="construction k" textInput="i-ka-kis-me'">
                            <span slot="after">/</span>
                            <span slot="after">K: consonante </span>
                        </xamix-element>
                        <table class="chart letters" slot="after">
                            <tr>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ma"></xamix-element>
                                    <br />
                                    <span>ma</span>
                                    <br />
                                    <span>/ma/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="na"></xamix-element>
                                    <br />
                                    <span>na</span>
                                    <br />
                                    <span>/na/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="pa"></xamix-element>
                                    <br />
                                    <span>pa</span>
                                    <br />
                                    <span>/pa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ta"></xamix-element>
                                    <br />
                                    <span>ta</span>
                                    <br />
                                    <span>/ta/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="tla"></xamix-element>
                                    <br />
                                    <span>tla</span>
                                    <br />
                                    <span>/t͡ɬa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="xa"></xamix-element>
                                    <br />
                                    <span>xa</span>
                                    <br />
                                    <span>/ʃa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ca"></xamix-element>
                                    <br />
                                    <span>cha</span>
                                    <br />
                                    <span>/t͡ʃa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="sa"></xamix-element>
                                    <br />
                                    <span>sa</span>
                                    <br />
                                    <span>/sa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="za"></xamix-element>
                                    <br />
                                    <span>tsa</span>
                                    <br />
                                    <span>/t͡sa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ka"></xamix-element>
                                    <br />
                                    <span>ka</span>
                                    <br />
                                    <span>/ka/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="qa"></xamix-element>
                                    <br />
                                    <span>kwa</span>
                                    <br />
                                    <span>/kʷa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ha"></xamix-element>
                                    <br />
                                    <span>ha</span>
                                    <br />
                                    <span>/ha/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="la"></xamix-element>
                                    <br />
                                    <span>la</span>
                                    <br />
                                    <span>/la/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="wa"></xamix-element>
                                    <br />
                                    <span>wa</span>
                                    <br />
                                    <span>/wa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ya"></xamix-element>
                                    <br />
                                    <span>ya</span>
                                    <br />
                                    <span>/ya/</span>
                                </td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <div class="cell">
                            <xamix-element class="construction b" textInput="sel-ti-ka-kis-to-ton-tin">
                                <span slot="after">/</span>
                                <span slot="after">B: vocal chica </span>
                            </xamix-element>
                            <table class="chart letters" slot="after">
                                <tr>
                                    <td>
                                        <xamix-element class="letters construction b" textInput="_o1"></xamix-element>
                                        <br />
                                        <span>o</span>
                                        <br />
                                        <span>/o/</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction b" textInput="_i1"></xamix-element>
                                        <br />
                                        <span>i</span>
                                        <br />
                                        <span>/i/</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction b" textInput="_e1"></xamix-element>
                                        <br />
                                        <span>e</span>
                                        <br />
                                        <span>/e/</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="cell">
                            <xamix-element class="construction" textInput="ma-ci-o-tlil-te-me'">
                                <span slot="after">/</span>
                                <span slot="after">puntuación </span>
                            </xamix-element>
                            <table class="chart letters" slot="after">
                                <tr>
                                    <td>
                                        <xamix-element class="letters construction" textInput="zikoalistli1">
                                        </xamix-element>
                                        <br />
                                        <span>|,|</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction" textInput="zikoalistli2">
                                        </xamix-element>
                                        <br />
                                        <span>|;|</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction" textInput="tlamilistli">
                                        </xamix-element>
                                        <br />
                                        <span>|.|</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction" textInput="nimanilistli">
                                        </xamix-element>
                                        <br />
                                        <span>|...|</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction" textInput="tlanesemixnawalistli">
                                        </xamix-element>
                                        <br />
                                        <span>|:|</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction" textInput="mawkazalistli">
                                        </xamix-element>
                                        <br />
                                        <span>|!|</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters construction" textInput="tetlanilistli">
                                        </xamix-element>
                                        <br />
                                        <span>|?|</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters" textInput="kaxtli1ha-_-kaxtli1hb ">
                                        </xamix-element>
                                        <br />
                                        <span>[ ]</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters" textInput="kaxtli2ha-_-kaxtli2hb ">
                                        </xamix-element>
                                        <br />
                                        <span>( )</span>
                                    </td>
                                    <td>
                                        <xamix-element class="letters" textInput="kaxtli3ha-_-kaxtli3hb ">
                                        </xamix-element>
                                        <br />
                                        <span>{ }</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </li>
                </ul>
            </div>
            <br />
            <div class="tri-set top justify">
                <div class="container">
                    <div class="header">
                        <xamix-element class="title" textInput="tla-ke-za-yotl"></xamix-element>
                    </div>
                    <div class="body horizontal">
                        <xamix-element textInput="in _ xa-mix-ma-ci-o-tla'-tol-lo-lis-tli _ mo-tla'-qi-lo-tlanesemixnawalistli">
                        </xamix-element>
                        <ul>
                            <li>
                                <xamix-element
                                    textInput="ya-ka-na-i-wik-pa _ o-poc-na-wak _ pam-pa _ ki-ix-ma-ti _ za-lan _ ok-se-kin-tin _ i-xa-ci-tlan _ i-ma-ci-o-tla'-tol-lo-lis-wan-tlamilistli">
                                </xamix-element>
                            </li>
                            <li>
                                <xamix-element
                                    textInput="ne-ci-kol-ci-wa'-tok _ xa-mix-tew _ pam-pa _ ki-pa-le-wi-a _ tla'-tol-po-wa _ me-la-wak _ a-ci _ a-yo-wi-ka-tlamilistli">
                                </xamix-element>
                            </li>
                        </ul>
                        <xamix-element textInput="ni-man _ mo-i'-ti-ti _ ke-nin _ ne-ci-kol-ci-was-tlanesemixnawalistli">
                        </xamix-element>
                    </div>
                </div>
                <div class="container latin">
                    <div class="header">
                        <h2>Tlaketsayotl</h2>
                    </div>
                    <div class="body">
                        <p>In xamixmachiotla'tollolistli motla'kwilo:</p>
                        <ul>
                            <li>yakanaiwikpa oponechnawak pampa kiixmati tsalan oksekintin Ixachitlan imachiotla'tolloliswan.
                            </li>
                            <li>nechikolchiwa'tok xamixtew pampa kipalewia tla'tolpowa melawak achi ayowika.</li>
                        </ul>
                        <p>Niman moi'titi kenin nechikolchiwas.</p>
                    </div>
                </div>
                <br />
                <div class="container latin center">
                    <div class="header">
                        <h2>Construcción</h2>
                    </div>
                    <div class="body">
                        <p>El Xamix se escribe:</p>
                        <ul>
                            <li>• de derecha a izquierda para distinguirlo de los demás sistemas de escritura utilizados en el
                                continente</li>
                            <li>• formando bloques silábicos, lo que ayuda a lograr una pronunciación y acentuación correcta más
                                fácilmente</li>
                        </ul>
                        <p>A continuación se explica cómo formar dichos bloques:</p>
                        <div>
                            <span class="construction v">V: vocal grande</span>
                            <span class="construction s">S: saltillo</span>
                            <span class="construction a">A: acento</span>
                            <span class="construction k">K: consonante</span>
                            <span class="construction b">B: vocal chica (que no sea a)</span>
                        </div>
                    </div>
                </div>
                <table class="construction">
                    <tr>
                        <th>
                            <xamix-element textInput="i-sel">
                                <br slot="after" />
                                <span slot="after">sola</span>
                            </xamix-element>
                        </th>
                        <th>
                            <xamix-element textInput="i-e-he-ka-ton">
                                <br slot="after" />
                                <span slot="after">con saltillo</span>
                            </xamix-element>
                        </th>
                        <th>
                            <xamix-element textInput="i-we-yak">
                                <br slot="after" />
                                <span slot="after">con acento</span>
                            </xamix-element>
                        </th>
                        <th>
                            <xamix-element textInput="i-we-yak _ i-wan _ i-e-he-ka-ton">
                                <br slot="after" />
                                <span slot="after">con acento y saltillo</span>
                            </xamix-element>
                        </th>
                        <th>
                            <xamix-element textInput="i-i-ka-ka-kis">
                                <br slot="after" />
                                <span slot="after">con consonante</span>
                            </xamix-element>
                        </th>
                        <th>
                            <xamix-element textInput="i-we-yak _ i-wan _ i-i-ka-ka-kis">
                                <br slot="after" />
                                <span slot="after">con consonante</span>
                            </xamix-element>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/construction_elements/v.svg" />
                            <br />
                            <span>a</span>
                            <br />
                            <span>/a/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/vs.svg" />
                            <br />
                            <span>a'<span>
                                    <br />
                                    <span>/aʔ/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/va.svg" />
                            <br />
                            <span>ā</span>
                            <br />
                            <span>/a:/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/vas.svg" />
                            <br />
                            <span>ā'</span>
                            <br />
                            <span>/a:ʔ/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/vk.svg" />
                            <br />
                            <span>atl</span>
                            <br />
                            <span>/at͡ɬ/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/vak.svg" />
                            <br />
                            <span>ātl</span>
                            <br />
                            <span>/a:t͡ɬ/</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/construction_elements/k.svg" />
                            <br />
                            <span>tla</span>
                            <br />
                            <span>/t͡ɬa/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/ks.svg" />
                            <br />
                            <span>tla'</span>
                            <br />
                            <span>/t͡ɬaʔ/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/ka.svg" />
                            <br />
                            <span>tlā</span>
                            <br />
                            <span>/t͡ɬa:/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/kas.svg" />
                            <br />
                            <span>tlā'</span>
                            <br />
                            <span>/t͡ɬa:ʔ/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/kk.svg" />
                            <br />
                            <span>tlatl</span>
                            <br />
                            <span>/t͡ɬat͡ɬ/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/kak.svg" />
                            <br />
                            <span>tlātl</span>
                            <br />
                            <span>/t͡ɬa:t͡ɬ/</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="/images/construction_elements/kb.svg" />
                            <br />
                            <span>tle</span>
                            <br />
                            <span>/t͡ɬe/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/kbs.svg" />
                            <br />
                            <span>tle'</span>
                            <br />
                            <span>/t͡ɬeʔ/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/kba.svg" />
                            <br />
                            <span>tlē</span>
                            <br />
                            <span>/t͡ɬe:/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/kbas.svg" />
                            <br />
                            <span>tlē'</span>
                            <br />
                            <span>/t͡ɬe:ʔ/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/kbk.svg" />
                            <br />
                            <span>tletl</span>
                            <br />
                            <span>/t͡ɬet͡ɬ/</span>
                        </td>
                        <td>
                            <img src="/images/construction_elements/kbak.svg" />
                            <br />
                            <span>tlētl</span>
                            <br />
                            <span>/t͡ɬe:t͡ɬ/</span>
                        </td>
                    </tr>
                </table>
                <div id="elements-div" class="center">
                    <img id="elements-svg" src="/images/construction_elements/elements.svg" />
                </div>
            </div>
            <div class="tri-set top justify">
                <div class="container">
                    <div class="header">
                        <xamix-element class="title" textInput="con-tal-za-zi-lis-me'"></xamix-element>
                    </div>
                    <div class="body horizontal">
                        <xamix-element
                            textInput="ka-ke' _ ma-ci-o-tla'-tol-me' _ se-ti-lil-tik _ i-ka _ con-tal-za-zi-lis-me'-zikoalistli1-_ ni-man _ mo-i'-ti-ti _ no-cin-tin i-non-tlanesemixnawalistli">
                        </xamix-element>
                    </div>
                </div>
                <div class="container latin">
                    <div class="header">
                        <h2>Chontaltsatsilisme'</h2>
                    </div>
                    <div class="body">
                        <p>Kake' machiotla'tolme' setililtik ika chontaltsatsilisme', niman moi'titi nochintin inon.</p>
                    </div>
                </div>
                <br />
                <div class="container latin center">
                    <div class="header">
                        <h2>Sonidos extranjeros</h2>
                    </div>
                    <div class="body">
                        <p>Hay carateres adicionales para los sonidos extranjeros, a continuación se muestran todos ellos.</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <div class="cell">
                            <xamix-element class="construction v" textInput="sel-ti-ka-kis-me'">
                                <span slot="after">/</span>
                                <span slot="after">V: vocal grande</span>
                            </xamix-element>
                            <table class="letters" slot="after">
                                <tr>
                                    <td>
                                        <xamix-element class="letters construction v" textInput="u"></xamix-element>
                                        <br />
                                        <span>u</span>
                                        <br />
                                        <span>/u/</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div class="cell">
                            <xamix-element class="construction b" textInput="sel-ti-ka-kis-to-ton-tin">
                                <span slot="after">/</span>
                                <span slot="after">B: vocal chica </span>
                            </xamix-element>
                            <table class="letters" slot="after">
                                <tr>
                                    <td>
                                        <xamix-element class="letters construction b" textInput="_u1"></xamix-element>
                                        <br />
                                        <span>u</span>
                                        <br />
                                        <span>/u/</span>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </li>
                    <li>
                        <xamix-element class="construction k" textInput="i-ka-kis-me'">
                            <span slot="after">/</span>
                            <span slot="after">K: consonante </span>
                        </xamix-element>
                        <table class="letters" slot="after">
                            <tr>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ba"></xamix-element>
                                    <br />
                                    <span>ba</span>
                                    <br />
                                    <span>/ba/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="da"></xamix-element>
                                    <br />
                                    <span>da</span>
                                    <br />
                                    <span>/da/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="fa"></xamix-element>
                                    <br />
                                    <span>fa</span>
                                    <br />
                                    <span>/fa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ga"></xamix-element>
                                    <br />
                                    <span>ga</span>
                                    <br />
                                    <span>/ga/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="kha"></xamix-element>
                                    <br />
                                    <span>kha</span>
                                    <br />
                                    <span>/xa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ja"></xamix-element>
                                    <br />
                                    <span>ja</span>
                                    <br />
                                    <span>/d͡ʒa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ra"></xamix-element>
                                    <br />
                                    <span>ra</span>
                                    <br />
                                    <span>/ra/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="z'a"></xamix-element>
                                    <br />
                                    <span>za</span>
                                    <br />
                                    <span>/za/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="va"></xamix-element>
                                    <br />
                                    <span>va</span>
                                    <br />
                                    <span>/va/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="ksa"></xamix-element>
                                    <br />
                                    <span>ksa</span>
                                    <br />
                                    <span>/ksa/</span>
                                </td>
                                <td>
                                    <xamix-element class="letters construction k" textInput="nya"></xamix-element>
                                    <br />
                                    <span>nya/ña/nga</span>
                                    <br />
                                    <span>/ɲa/</span>
                                </td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
            <div class="tri-set top justify">
                <div class="container">
                    <div class="header">
                        <xamix-element class="title" textInput="xik-ye-ye-ko-a-mawkazalistli"></xamix-element>
                    </div>
                    <div class="body horizontal">
                        <xamix-element
                            textInput="ax-kan _ ti-we-li-ti _ tik-ye-ye-ko-a _ in _ xa-mix-tla'-qi-lo-lis-tli-tlanesemixnawalistli">
                        </xamix-element>
                    </div>
                </div>
                <div class="container latin">
                    <div class="header">
                        <h2>Xikyeyekoa!</h2>
                    </div>
                    <div class="body">
                        <p>Axkan tiweliti tikyeyekoa in xamixtla'kwilolistli!</p>
                    </div>
                </div>
                <br />
                <div class="container latin center">
                    <div class="header">
                        <h2>Pruébalo!</h2>
                    </div>
                    <div class="body">
                        <p>Ahora puedes probar la escritura xamix!</p>
                        <paper-card id="test-example" class="header">
                            <p>Kwalli', in "Xamixtla'kwilolistli" ka senka mawisōlli!</p>
                            <p>↓</p>
                            <p>qal-li-, _ in _ "-xa-mix-tla'-qi-lo-lis-tli-" _ ka _ sen-ka _ ma-wi-so!l-li-!!</p>
                        </paper-card>
                    </div>
                </div>
                <div class="latin center">
                    <paper-checkbox @change=${
                      this.isTestVertical
                    }>Vertical?</paper-checkbox>
                    <paper-input class="container latin" @change=${
                      this.setTestInput
                    } value="${this.testInput}"></paper-input>
                </div>
                <paper-card id="test">
                    ${
                      this.testVertical
                        ? html`<xamix-element
                            id="test-input"
                            vertical
                            textInput="${this.testInput}"
                          ></xamix-element>`
                        : html`<xamix-element
                            id="test-input"
                            textInput="${this.testInput}"
                          ></xamix-element>`
                    }
                </paper-card>
            </div>
        </section>
        `;
  }
}

window.customElements.define("home-page", HomePage);
