import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

import {styles} from '../xamix-info-styles.js';

class ForeignPage extends PageDM {
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
        const chartXamixElements = this.shadowRoot.querySelectorAll('div.table>div.row>div.cell>p>xamix-element');

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

        this.setElementsAttribute(chartXamixElements,
            [
                {
                    name: 'fontSize',
                    value: '11'
                }
            ]);
    }

    render() {
        return html`
        <section class="principal-container">
            <div class="tri-set top justify">
                <div class="container">
                    <div class="header">
                        <xamix-element class="title"
                                       textInput="con-tal-za-zi-lis-me'"></xamix-element>
                    </div>
                    <div class="body horizontal">
                        <xamix-element
                                textInput="ax-kan _ i'-ti-ti-lo _ in _ sasanili1a-xa-mix-sasanili1b _ i-ma-ci-o-tla'-tol-wan _ con-tal-za-zi-lis-me'-tec-tlamilistli"></xamix-element>
                    </div>
                </div>
                <div class="container latin">
                    <div class="header">
                        <h2>Contalzazilisme'</h2>
                    </div>
                    <div class="body">
                        <p>Axkan i'titilo in <i>xamix</i> imaciotla'tolwan contalzazilisme'tec.</p>
                    </div>
                </div>
                <div class="container latin center">
                    <div class="header">
                        <h2>Sonidos extranjeros</h2>
                    </div>
                    <div class="body">
                        <p>A continuación se muestran las letras empleadas para representar algunos sonidos extranjeros.</p>
                    </div>
                </div>
            </div>
        
            <div id="foreign-chart1" class="table">
                <div class="row">
                    <div class="cell">
                        <p>
                            <xamix-element textInput="b"></xamix-element>
                        </p>
                        <p><i>/b/</i></p>
                    </div>
                    <div class="cell">
                        <p>
                            <xamix-element textInput="d"></xamix-element>
                        </p>
                        <p><i>/d/</i></p>
                    </div>
                    <div class="cell">
                        <p>
                            <xamix-element textInput="f"></xamix-element>
                        </p>
                        <p><i>/f/</i></p>
                    </div>
                    <div class="cell">
                        <p>
                            <xamix-element textInput="g"></xamix-element>
                        </p>
                        <p><i>/g/</i></p>
                    </div>
                    <div class="cell">
                        <p>
                            <xamix-element textInput="kh"></xamix-element>
                        </p>
                        <p><i>/x/</i></p>
                    </div>
                    <div class="cell">
                        <p>
                            <xamix-element textInput="j"></xamix-element>
                        </p>
                        <p><i>/d͡ʒ/</i></p>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <p>
                            <xamix-element textInput="z'"></xamix-element>
                        </p>
                        <p><i>/z/</i></p>
                    </div>
                    <div class="cell">
                        <p>
                            <xamix-element textInput="u"></xamix-element>
                        </p>
                        <p><i>/u/</i></p>
                    </div>
                    <div class="cell">
                        <p>
                            <xamix-element textInput="v"></xamix-element>
                        </p>
                        <p><i>/v/</i></p>
                    </div>
                    <div class="cell">
                        <p>
                            <xamix-element textInput="ks"></xamix-element>
                        </p>
                        <p><i>/ks/</i></p>
                    </div>
                    <div class="cell">
                        <p>
                            <xamix-element textInput="ny"></xamix-element>
                        </p>
                        <p><i>/ɲ/</i></p>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

window.customElements.define('foreign-page', ForeignPage);
