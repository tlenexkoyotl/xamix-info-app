import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

import {styles} from '../xamix-info-styles.js';

class PunctuationPage extends PageDM {
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
        return html`
        <section class="principal-container">
            <div class="tri-set top justify">
                <div class="container">
                    <div class="header">
                        <xamix-element class="title"
                                       textInput="tla'-tol-ma-ci-o-yotl"></xamix-element>
                    </div>
                    <div class="body horizontal">
                        <xamix-element
                                textInput="ax-kan _ i'-ti-ti-lo _ no-ci _ sasanili1a-xa-mix-sasanili1b _ i-tla'-tol-ma-ci-o-wan _ i-ka _ i-ne-new-ki-me' _ la-tin _ ma-ci-o-tla'-tol-lo-lis-ko-tlamilistli"></xamix-element>
                    </div>
                </div>
                <div class="container latin">
                    <div class="header">
                        <h2>Tla'tolmachioyotl</h2>
                    </div>
                    <div class="body">
                        <p>Axkan i'titilo nochi <i>xamix</i> itla'tolmachiowan ika inenewkime' latin machiotla'tollolisko.</p>
                    </div>
                </div>
                <div class="container latin center">
                    <div class="header">
                        <h2>Puntuación</h2>
                    </div>
                    <div class="body">
                        <p>A continuación se muestran los signos de puntuación del <i>xamix</i> con sus equivalentes en el
                            alfabeto latín.</p>
                    </div>
                </div>
            </div>
        
            <div id="punctuation-chart1" class="table">
                <div class="row">
                    <div class="cell">
                        <p>
                            <svg id="Zikoalistli_1" data-name="Zikoalistli 1" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>zikoalistli1</title>
                                <g class="directions">
                                    <path d="M72.60645,170.02344v-36.002h3v32.749a92.93761,92.93761,0,0,0,35.44433-10.73438l1.42188,2.64063a95.90613,95.90613,0,0,1-38.25147,11.22265Z"/>
                                    <polygon points="112.8 161.848 117.34 154.106 108.366 154.044 112.8 161.848"/>
                                </g>
                                <path d="M90.9504,55c-1.5032,26.82822-1.00714,54.2383,0,82.26545.22683,6.31233,1.76152,8.0766,3.16266,7.6822,6.10853-1.71943,36.5568-16.216,55.887-37.09954"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="zi-ko-a-lis-tli 1">
                                <span slot="after">
                                    <p><i>|,|</i></p>
                                    <p>Tsikoalistli 1, pausa (corta)</p>
                                </span>
                        </xamix-element>
                    </div>
                    <div class="cell">
                        <p>
                            <svg id="Zikoalistli_2" data-name="Zikoalistli 2" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>zikoalistli2</title>
                                <path d="M90.9504,55c-1.5032,26.82822-1.00714,54.2383,0,82.26545.22683,6.31233,1.76152,8.0766,3.16266,7.6822,6.10853-1.71943,36.5568-16.216,55.887-37.09954"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                                <path d="M118.6971,85.32476c-.03262,4.67717,1.7749,27.07357,6.26883,36.04294,7.32308,14.60268,19.99222,21.12877,24.19982,23.07422"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="zi-ko-a-lis-tli 1">
                                <span slot="after">
                                    <p><i>|;|</i></p>
                                    <p>Tsikoalistli 2, pausa (media)</p>
                                </span>
                        </xamix-element>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <p>
                            <svg id="Tlamilistli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><title>
                                tlamilistli</title>
                                <g class="directions">
                                    <path d="M124.0791,61.1792c-8.88769-9.40772-23.31885-24.354-26.66357-27.0249-1.73926,1.3872-7.07178,6.59179-17.62158,17.728l-2.17774-2.06347C95.53467,30.9043,96.49561,30.9043,97.42529,30.9043c.76123,0,2.17871,0,28.83545,28.21435Zm-26.17187-27.373"/>
                                    <polygon points="76.377 46.828 74.277 55.553 82.883 53.011 76.377 46.828"/>
                                </g>
                                <path d="M60,90.07205c7.1053-7.60612,24.51774-26.1859,32.89863-34.40035a2.12037,2.12037,0,0,1,.52755-.406C101.31913,51.052,131.63588,97.66189,160,145"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="tla-mi-lis-tli">
                                <span slot="after">
                                    <p><i>|.|</i></p>
                                    <p>Tlamilistli, terminación</p>
                                </span>
                        </xamix-element>
                    </div>
                    <div class="cell">
                        <p>
                            <svg id="Nimanilistli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><title>
                                nimanilistli</title>
                                <path d="M60,90.07205c7.1053-7.60612,24.51774-26.1859,32.89863-34.40035a2.12037,2.12037,0,0,1,.52755-.406C101.31913,51.052,131.63588,97.66189,160,145"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                                <path d="M143.35541,78.529c-3.85,2.656-21.15938,16.9826-25.92907,25.80842-7.76152,14.37444-5.8407,28.49561-5.02095,33.05815"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="ni-ma-ni-lis-tli">
                                <span slot="after">
                                    <p><i>|...|</i></p>
                                    <p>Nimanilistli, suspensión</p>
                                </span>
                        </xamix-element>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <p>
                            <svg id="Tlanesemixnawalistli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><title>
                                tlanesemixnawalistli</title>
                                <g class="directions">
                                    <path d="M70.55811,88.06006C59.32031,64.5542,59.665,63.65625,59.99854,62.78809c.27294-.71045.78027-2.0337,36.67382-16.80909l1.1416,2.77442C85.84619,53.67969,66.72119,61.79688,63.02881,63.96191c.67187,2.1211,3.62012,8.96485,10.23633,22.8042Z"/>
                                    <polygon points="67.322 88.145 74.715 93.233 75.426 84.287 67.322 88.145"/>
                                </g>
                                <path d="M120.93223,55c-7.43377,3.21372-25.60757,11.10591-33.82573,15.10585a1.63553,1.63553,0,0,0-.43661.28248C81.48962,75.129,107.21818,110.69432,134,145"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="tla-ne-se-mix-na-wa-lis-tli">
                                <span slot="after">
                                    <p><i>|:|</i></p>
                                    <p>Tlanesemixnawalistli, definición</p>
                                </span>
                        </xamix-element>
                    </div>
                    <div class="cell">
                        <p>
                            <svg id="Mawkazalistli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><title>
                                mawkazalistli</title>
                                <g class="directions">
                                    <path d="M89.92188,74.93848a98.169,98.169,0,0,1-8.88672-11.22364,98.08811,98.08811,0,0,1-8.29737-14.8667l2.73731-1.22851a95.02313,95.02313,0,0,0,8.04248,14.41064,95.11887,95.11887,0,0,0,8.61426,10.87891Z"/>
                                    <polygon points="86.928 76.054 95.553 78.532 93.388 69.823 86.928 76.054"/>
                                    <path d="M144.68066,131.43262l-.21289-2.99219c.77442-.05566,19.04883-1.52148,27.03711-16.56934,2.127-4.00683,6.51367-14.41162,1.35157-24.48486-3.53418-6.897-10.6377-11.8125-19.00293-13.14844l.47265-2.96289c9.30664,1.48682,17.23145,6.99854,21.2002,14.74317,5.80664,11.32959.97558,22.8374-1.3711,27.2583C165.544,129.49805,146.791,131.28223,144.68066,131.43262Z"/>
                                    <polygon points="155.715 68.492 147.638 72.404 155.064 77.444 155.715 68.492"/>
                                    <path d="M44.94189,126.252l-2.61816-1.46484a70.96926,70.96926,0,0,1,20.00244-22.61426l1.77344,2.41992A67.95812,67.95812,0,0,0,44.94189,126.252Z"/>
                                    <polygon points="40.27 122.336 40.745 131.298 48.269 126.407 40.27 122.336"/>
                                </g>
                                <path d="M64.97888,135a181.51559,181.51559,0,0,1,28.05194-30.94977c15.051-13.13894,24.01-20.71426,36-20.069,18.1394.97621,25.063,6.98486,25.94806,15.23308a7.32541,7.32541,0,0,1,0,1.57135c-.88506,8.24822-8.9576,14.68242-25.94806,15.23308-12.15538.394-20.96492-6.95034-36-20.069A180.52762,180.52762,0,0,1,64.97888,65"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="maw-ka-za-lis-tli">
                                <span slot="after">
                                    <p><i>|!|</i></p>
                                    <p>Mawkatsalistli, exclamación</p>
                                </span>
                        </xamix-element>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <p>
                            <svg id="Tetlanilistli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><title>
                                tetlanilistli</title>
                                <g class="directions">
                                    <path d="M162.28125,132.94531a97.67033,97.67033,0,0,1-26.08984-17.18457l2.02929-2.209A94.75154,94.75154,0,0,0,163.50977,130.209Z"/>
                                    <polygon points="141.307 112.295 132.598 110.13 135.076 118.755 141.307 112.295"/>
                                    <path d="M82.68994,61.21484l-2.99219-.21191c.14942-2.10986,1.92774-20.86035,18.15479-29.47412,4.42187-2.34815,15.93066-7.17676,27.25976-1.37207,7.74512,3.96972,13.25684,11.895,14.74317,21.19971l-2.96289.47363c-1.33594-8.36426-6.252-15.46826-13.14942-19.00342-10.07324-5.16406-20.47851-.7749-24.48388,1.35156C84.20508,42.16992,82.74512,60.44092,82.68994,61.21484Z"/>
                                    <polygon points="133.686 50.619 138.726 58.045 142.638 49.968 133.686 50.619"/>
                                    <path d="M86.34277,163.36035l-1.46386-2.61914a67.95943,67.95943,0,0,0,21.6582-19.15723l2.41992,1.77344a71.00121,71.00121,0,0,1-22.61426,20.00293Z"/>
                                    <polygon points="84.723 157.414 79.832 164.938 88.794 165.413 84.723 157.414"/>
                                </g>
                                <path d="M145,145.02113a181.51559,181.51559,0,0,1-30.94977-28.05194c-13.13894-15.051-20.71426-24.01-20.069-36,.9762-18.13939,6.98486-25.063,15.23308-25.948a7.324,7.324,0,0,1,1.57134,0c8.24823.885,14.68242,8.95759,15.23309,25.948.394,12.15538-6.95035,20.96492-20.069,36A180.52752,180.52752,0,0,1,75,145.02113"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="te-tla-ni-lis-tli">
                                <span slot="after">
                                    <p><i>|?|</i></p>
                                    <p>Tetlanilistli, pregunta</p>
                                </span>
                        </xamix-element>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <p>
                            <svg id="Kaxtli_1ha" data-name="Kaxtli 1ha" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli1ha</title>
                                <path d="M95,40h29.98958L125,51.59883V158.89l-.01042,1.11H95"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                            <svg id="Kaxtli_1hb" data-name="Kaxtli 1hb" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli1hb</title>
                                <path d="M125,40H95.01042L95,51.59883V158.89l.01041,1.11H125"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="kax-tli _ 1 _ mo-te-kak">
                                <span slot="after">
                                    <p><i>|[ ]|</i></p>
                                    <p>Kaxtli 1 motekak, contenedor 1 horizontal</p>
                                </span>
                        </xamix-element>
                    </div>
                    <div class="cell">
                        <p>
                            <svg id="Kaxtli_1va" data-name="Kaxtli 1va" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli1va</title>
                                <path d="M50,115V85.01041L61.59884,85H168.89l1.11.01041V115"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                            <svg id="Kaxtli_1vb" data-name="Kaxtli 1vb" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli1vb</title>
                                <path d="M50,85v29.98959L61.59884,115H168.89l1.11-.01041V85"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="kax-tli _ 1 _ tel-ke-za-ki">
                                <span slot="after">
                                    <p><i>|[ ]|</i></p>
                                    <p>Kaxtli 1 telketsaki, contenedor 1 vertical</p>
                                </span>
                        </xamix-element>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <p>
                            <svg id="Kaxtli_2ha" data-name="Kaxtli 2ha" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>00176-kaxtli2ha</title>
                                <path d="M85,165V155c11.82471,0,25-22.58789,25-55S96.82471,45,85,45V35c19.626,0,35,28.55127,35,65C120,136.44824,104.626,165,85,165Z"/>
                            </svg>
                            <svg id="Kaxtli_2hb" data-name="Kaxtli 2hb" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>00178-kaxtli2hb</title>
                                <path d="M115,165c-19.626,0-35-28.55176-35-65,0-36.44873,15.374-65,35-65V45c-11.82422,0-25,22.58789-25,55s13.17578,55,25,55Z"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="kax-tli _ 2 _ mo-te-kak">
                                <span slot="after">
                                    <p><i>|( )|</i></p>
                                    <p>Kaxtli 2 motekak, contenedor 2 horizontal</p>
                                </span>
                        </xamix-element>
                    </div>
                    <div class="cell">
                        <p>
                            <svg id="Kaxtli_2va" data-name="Kaxtli 2va" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli2va</title>
                                <path d="M50,115c0-16.56854,26.86291-30,60-30s60,13.43146,60,30"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                            <svg id="Kaxtli_2vb" data-name="Kaxtli 2vb" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli2vb</title>
                                <path d="M170,85c0,16.56854-26.86292,30-60,30S50,101.56854,50,85"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="kax-tli _ 2 _ tel-ke-za-ki">
                                <span slot="after">
                                    <p><i>|( )|</i></p>
                                    <p>Kaxtli 2 telketsaki, contenedor 2 vertical</p>
                                </span>
                        </xamix-element>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <p>
                            <svg id="Kaxtli_3ha" data-name="Kaxtli 3ha" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli3ha</title>
                                <path d="M95,159.94288c2.9971-.05207,7.54367-.09443,13.1897,0,3.28514.05495,3.27182.09481,3.48538,0,8.36172-3.71209-7.70641-48.6188,5.21681-58.2336,2.78576-2.07259,6.19932-1.62785,8.10811-1.71907v.01958c-2.01014-.0179-5.32235.35352-8.10811-1.71907-12.92322-9.6148,3.14491-54.52151-5.21681-58.2336-.21356-.09481-.20024-.05495-3.48538,0-5.646.09443-10.1926.05207-13.1897,0"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                            <svg id="Kaxtli_3hb" data-name="Kaxtli 3hb" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli3hb</title>
                                <path d="M125,159.94288c-2.9971-.05207-7.54367-.09443-13.1897,0-3.28515.05495-3.27182.09481-3.48539,0-8.36172-3.71209,7.70641-48.6188-5.2168-58.2336-2.78577-2.07259-6.19933-1.62785-8.10811-1.71907v.01958c2.01013-.0179,5.32234.35352,8.10811-1.71907,12.92321-9.6148-3.14492-54.52151,5.2168-58.2336.21357-.09481.20024-.05495,3.48539,0,5.646.09443,10.1926.05207,13.1897,0"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="kax-tli _ 3 _ mo-te-kak">
                                <span slot="after">
                                    <p><i>|{ }|</i></p>
                                    <p>Kaxtli 3 motekak, contenedor 3 horizontal</p>
                                </span>
                        </xamix-element>
                    </div>
                    <div class="cell">
                        <p>
                            <svg id="Kaxtli_3va" data-name="Kaxtli 3va" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli3va</title>
                                <path d="M169.94289,115c-.05208-2.9971-.09444-7.54367,0-13.1897.05494-3.28515.0948-3.27182,0-3.48538-3.71209-8.36173-48.61881,7.70641-58.23361-5.21681-2.07259-2.78577-1.62785-6.19933-1.71906-8.10811h.01958c-.0179,2.01014.35352,5.32234-1.71907,8.10811-9.6148,12.92322-54.52151-3.14492-58.2336,5.21681-.09481.21356-.05495.20023,0,3.48538.09443,5.646.05207,10.1926,0,13.1897"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                            <svg id="Kaxtli_3vb" data-name="Kaxtli 3vb" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 200 200"><title>kaxtli3vb</title>
                                <path d="M169.94289,85c-.05208,2.9971-.09444,7.54367,0,13.1897.05494,3.28515.0948,3.27182,0,3.48538-3.71209,8.36173-48.61881-7.70641-58.23361,5.21681-2.07259,2.78577-1.62785,6.19933-1.71906,8.10811h.01958c-.0179-2.01014.35352-5.32234-1.71907-8.10811-9.6148-12.92322-54.52151,3.14492-58.2336-5.21681-.09481-.21356-.05495-.20023,0-3.48538.09443-5.646.05207-10.1926,0-13.1897"
                                      style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:10px"/>
                            </svg>
                        </p>
                        <xamix-element
                                textInput="kax-tli _ 3 _ tel-ke-za-ki">
                                <span slot="after">
                                    <p><i>|{ }|</i></p>
                                    <p>Kaxtli 3 telketsaki, contenedor 2 vertical</p>
                                </span>
                        </xamix-element>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

window.customElements.define('punctuation-page', PunctuationPage);
