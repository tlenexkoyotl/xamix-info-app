import {LitElement, html} from 'lit-element';

import {styles} from './xamix-info-styles.js';
import {fadeInTransitionPage} from './utils/xamix-info-transitions.js';

import '@polymer/paper-button/paper-button.js';
import 'xamix-element';

import './pages/home-page';
import './pages/calligraphy-page';
import './pages/punctuation-page';
import './pages/example-page';
import './pages/foreign-page';

class XamixInfo extends LitElement {
    static get properties() {
        return {
            appTitle: {type: String},
            _page: {type: String}
        };
    }

    static get styles() {
        return [
            styles,
            fadeInTransitionPage
        ];
    }

    setElementsAttribute(elements, attributes) {
        for (const element of elements) {
            for (const attribute of attributes) {
                element.setAttribute(attribute.name, attribute.value || '');
            }
        }
    }

    render() {
        return html`
        <style>
        .main-app.out {
              animation: ${this._config.transition.type}TransitionPage ${this._config.transition.delay / 1000}s;
          }
          
          main-role{
            max-height: 80vh;
          }
        </style>
        <header class="header-app">
        <div class="title container-app">
            <xamix-element class="title"
                textInput="xa-mix-tla'-qi-lo-lis-tli">
                <span slot="after" style="font-size: ${document.body.clientWidth > 600 ? '1.5' : '1'}vw">Xamixtla'qilolistli</span>  
            </xamix-element>
        </div>
        <nav class="navbar-principal">
          <paper-button @click="${this.changePage}" page="home">
              <xamix-element class="title"
                textInput="pe-wal-tli">
                <span slot="after">inicio</span>  
              </xamix-element>
          </paper-button>
          <paper-button @click="${this.changePage}" page="calligraphy">
            <xamix-element class="title"
                textInput="tla-tek-pa-na-lis-tli">
                <span slot="after">caligrafía</span>  
            </xamix-element>
          </paper-button>
          <paper-button @click="${this.changePage}" page="punctuation">
            <xamix-element class="title"
                textInput="tla'-tol-ma-ci-o-yotl">
                <span slot="after">puntuación</span>  
            </xamix-element>
          </paper-button>
          <paper-button @click="${this.changePage}" page="example">
            <xamix-element class="title"
                textInput="ma-ci-o-me'">
                <span slot="after">ejemplos</span>  
            </xamix-element>
          </paper-button>
          <paper-button @click="${this.changePage}" page="foreign">
            <xamix-element class="title"
                textInput="con-tal-tli">
                <span slot="after">extranjero</span>  
            </xamix-element>
          </paper-button>
        </nav>
        </header>
        <main role="main" class="container-app main-app">
        ${this._page === 'home' ?
            html`<home-page class="page" active></home-page>` :
            ''}
        ${this._page === 'calligraphy' ?
            html`<calligraphy-page class="page" active></calligraphy-page>` :
            ''}
        ${this._page === 'punctuation' ?
            html`<punctuation-page class="page" active></punctuation-page>` :
            ''}
        ${this._page === 'example' ?
            html`<example-page class="page" active></example-page>` :
            ''}
        ${this._page === 'foreign' ?
            html`<foreign-page class="page" active></foreign-page>` :
            ''}
        </main>
        `;
    }

    constructor() {
        super();
        this._page = 'home';
        this._config = {
            type: 'app',
            transition: {
                type: 'fadeIn',
                delay: 300
            }
        }
    }

    changePage(event) {
        this._page = event.currentTarget.getAttribute('page');
    }

    updated(changedProps) {
        const allXamixElements = this.shadowRoot.querySelectorAll('xamix-element');
        const buttonXamixElements = this.shadowRoot.querySelectorAll('nav>paper-button>xamix-element');

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
                },
                {
                    name: 'fontSize',
                    value: document.body.clientWidth > 600 ? '2' : '1.8'
                }
            ]);

        this.setElementsAttribute(buttonXamixElements,
            [
                {
                    name: 'fontSize',
                    value: document.body.clientWidth > 600 ? '2' : '1.8'
                }
            ]);

        if (changedProps.has('_page')) {
            const pageOut = this.shadowRoot.querySelector('.main-app');
            pageOut.classList.add('out');
            setTimeout(() => {
                pageOut.classList.remove('out');
            }, this._config.transition.delay);
        }
    }
}

window.customElements.define('xamix-info-app', XamixInfo);
