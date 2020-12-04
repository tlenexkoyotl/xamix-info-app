import { html, css } from 'lit-element';

import { PageDM } from '../utils/page-dm.js';

import { styles } from '../xamix-info-styles.js';

class CalligraphyPage extends PageDM {
    static get styles() {
        css`
        .principal-container > *{
          max-width: 600px;
          margin-left:auto;
          margin-right: auto;
        }
      `;

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
        const bodyXamixElements = this.shadowRoot.querySelectorAll('.body>xamix-element,.body>ul>li>xamix-element');
        const headerXamixElements = this.shadowRoot.querySelectorAll('.header>xamix-element');
        const letterOrigin = this.shadowRoot.querySelectorAll('div.cell > p:nth-of-type(1) > svg');
        const exampleXamixElements = this.shadowRoot.querySelectorAll('.examples>div>div>xamix-element');
        const coloredExampleXamixElements = this.shadowRoot.querySelectorAll('.examples>div>div>span.colored-xamix>svg');

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

        this.setElementsAttribute(letterOrigin,
            [
                {
                    name: 'viewBox',
                    value: '100 0 300 500'
                }
            ]);

        this.setElementsAttribute(exampleXamixElements,
            [
                {
                    name: 'fontSize',
                    value: document.body.clientWidth > 600 ? '7' : '11'
                }
            ]);

        this.setElementsAttribute(coloredExampleXamixElements,
            [
                {
                    name: 'height',
                    value: `${document.body.clientWidth > 600 ? '7' : '11'}vw`
                }
            ]);
    }

    render() {
        return html`
            <section class="principal-container">
                <div class="tri-set top justify">
                    <div class="container">
                        <div class="header">
                            <xamix-element class="title" textInput="tla-te-ma-ci-wa-tek-pa-na-lis-tli"></xamix-element>
                        </div>
                        <div class="body horizontal">
                            <xamix-element
                                textInput="no-ci _ ok-se _ ma-ci-o-tla'-tol-lo-lis-tew-zikoalistli1 _ sasanili1a-xa-mix-sasanili1b _ ki-pi-a _ ix-ko-yan _ i-tla-te-ma-ci-wa-tek-pa-na-lis _ pam-pa _ i-na-mik _ tla'-qi-lo-a _ se-sen _ i-ma-ci-o-tla'-tol-wan-tlamilistli _ i-pam-pa _ xa-mix _ i-ma-ci-o-tla'-tol-wan _ yo-lix-nex-ti-lo _ pam-pa _ a-ci _ a-yo-wi-tla'-qi-lo-tik _ i-wan _ a-ci _ i-siw-kak-tlamilistli">
                            </xamix-element>
                            <xamix-element
                                textInput="ax-kan _ i'-ti-ti-lo _ no-ci _ sasanili1a-xa-mix-sasanili1b _ i-ma-ci-o-tla'-tol-wan-zikoalistli1 _ i-na-wak _ i-tla-te-ma-ci-wa-tek-pa-na-lis-zikoalistli1 _ in _ ma-ci-o-tla'-tol-wan _ mo-o-li-nik _ pam-pa _ ki-mac-ti-a _ ke-nin _ ki-tla'-qi-lo-a-zikoalistli1 _ xi-ki-ka-pa-ni-li-a _ se _ ma-ci-o-tla'-tol-tli _ pam-pa _ ki-o-li-ni-li-a _ ok-se-pa-tlamilistli">
                                <br slot="before">
                            </xamix-element>
                        </div>
                    </div>
                    <div class="container latin">
                        <div class="header">
                            <h2>Tlatemachiwatekpanalistli</h2>
                        </div>
                        <div class="body">
                            <p>Nochi okse machiotla'tollolistew, <i>xamix</i> kipia ixkoyan itlatemachiwatekpanalis pampa
                                inamik tla'kwiloa sesen imachiotla'tolwan. Ipampa <i>xamix</i> imachiotla'tolwan
                                yolixnextilo pampa achi ayowitla'kwilotik iwan achi isiwkak.</p>
                            <p>Axkan i'titilo noci <i>xamix</i> imachiotla'tolwan, inawak itlatemachiwatekpanalis, in
                                machiotla'tolwan moolinik pampa kimachtia kenin kitla'kwiloa, xikikapanilia se
                                machiotla'toltli pampa kiolinilia oksepa.</p>
                        </div>
                    </div>
                    <div class="container latin center">
                        <div class="header">
                            <h2>Caligrafía</h2>
                        </div>
                        <div class="body">
                            <p>Como todo sistema de escritura, el <i>Xamix</i> también tiene su propio orden de trazo para
                                escribir
                                cada
                                una de sus letras de forma adecuada, es decir su propia caligrafía. Al ser el <i>Xamix</i>
                                un
                                sistema
                                construido artificialmente, su caligrafía está diseñada específicamente de forma
                                ergonómica para
                                lograr la mayor facilidad, comodidad y rapidez en su empleo.</p>
                            <p>A continuación, se muestran todas las letras del alfasilabario <i>Xamix</i>, con su
                                respectivo order
                                de trazo, las letras están animadas para ilustrar cómo dibujarlas, haga click en una letra
                                para
                                repetir la animación.</p>
                        </div>
                    </div>
                </div>
            
                <div id="phoneme-chart1" class="table">
                    <div class="row">
                        <div class="cell">
                            <p>
                                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Ākatl</title>
                                    <path
                                        d="M278.23665,31.80476c-2.00661,3.02843,2.168,8.90544,5.20106,11.84685,2.81776,2.73258,8.2043,6.3781,10.69107,4.62317,1.68421-1.18856,1.32054-4.34773,1.15578-5.779-.6323-5.49277-4.9627-11.78023-10.98-12.42475C283.78056,30.015,279.71136,29.57909,278.23665,31.80476Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M243.46659,64.2512c-2.00661,3.02843,3.60065,9.70006,6.63376,12.64147,2.81775,2.73257,8.20429,6.37809,10.69106,4.62317"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M278.14034,31.94923s-6.41314,12.72916-14.06213,19.504A72.46606,72.46606,0,0,1,243.32213,64.2873s-4.52159,10.721-17.96292,22.85095c-11.84685,10.69107-20.443,13.3518-20.443,13.3518l.07219-.024c-2.0066,3.02843,3.60066,9.70006,6.63376,12.64147,2.81776,2.73257,8.2043,6.37809,10.69107,4.62316l-.03608-.07228s3.37106-8.9935,14.49555-18.67325a141.64034,141.64034,0,0,1,23.64556-16.90344,67.66,67.66,0,0,1,16.66265-20.80424,164.06741,164.06741,0,0,1,17.04792-13.00265"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M243.37029,64.07059a34.43232,34.43232,0,0,0-7.65712-14.30292,40.07857,40.07857,0,0,0-17.77028-10.98,35.65938,35.65938,0,0,1,14.59186,4.76763,36.72735,36.72735,0,0,1,7.07921,5.779c1.87073,1.947,8.63883,8.99112,6.64581,12.7137a4.77841,4.77841,0,0,1-2.81725,1.99855"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M233.25712,47.69689a9.20409,9.20409,0,0,1-5.68264,4.2379c-3.27362.70051-6.09608-1.725-10.01685-4.91212a38.193,38.193,0,0,1-5.779-5.97158,40.88885,40.88885,0,0,1-4.04527-6.26053A134.55448,134.55448,0,0,1,226.12974,34.02a12.10722,12.10722,0,0,1,5.29738,1.34843c.97746.51954,4.407,2.34244,4.81579,5.77895a6.47207,6.47207,0,0,1-.77052,3.75633"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M223.57135,39.73276a4.00331,4.00331,0,0,1-1.0053-2.438,2.98067,2.98067,0,0,1,.48158-1.73369"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path d="M231.06593,42.7306a7.49126,7.49126,0,0,1-1.9504-3.4132,5.705,5.705,0,0,1,0-3.27474"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M225.54884,41.95405a9.614,9.614,0,0,0-4.52384-.5177,7.29669,7.29669,0,0,0-3.56369,1.2521"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M207.96215,35.10358c2.84365,1.18985,5.84167,2.37048,9.04166,3.40718.77663.2516,1.61953.42,2.38382.65013"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M294.12878,218.27478c1.68421-1.18856,1.32054-4.34773,1.15578-5.779-.6323-5.49277-4.9627-11.78023-10.98-12.42475-.524-.05612-4.59319-.492-6.0679,1.73369"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M243.46659,234.2512c-2.00661,3.02843,3.60065,9.70006,6.63376,12.64147,2.81775,2.73257,8.20429,6.37809,10.69106,4.62317"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M278.14034,201.94923s-6.41314,12.72916-14.06213,19.504a72.46606,72.46606,0,0,1-20.75608,12.83409s-4.52159,10.721-17.96292,22.851c-11.84685,10.69107-20.443,13.3518-20.443,13.3518l.07219-.024c-2.0066,3.02843,3.60066,9.70006,6.63376,12.64147,2.81776,2.73257,8.2043,6.37809,10.69107,4.62316l-.03608-.07228s3.37106-8.9935,14.49555-18.67325a141.64034,141.64034,0,0,1,23.64556-16.90344,67.66,67.66,0,0,1,16.66265-20.80424,164.06741,164.06741,0,0,1,17.04792-13.00265"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M243.37029,234.07059a34.43232,34.43232,0,0,0-7.65712-14.30292q-.9261-1.01129-1.88961-1.91122"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M233.25712,217.69689c1.73368-2.31158,3.18321-4.88984,2.98579-6.54949-.40879-3.43651-3.83833-5.25941-4.81579-5.779a12.10722,12.10722,0,0,0-5.29738-1.34843,134.55448,134.55448,0,0,0-18.39634.77054,40.88885,40.88885,0,0,0,4.04527,6.26053,38.193,38.193,0,0,0,5.779,5.97158c3.92077,3.18716,6.74323,5.61263,10.01685,4.91212a9.20409,9.20409,0,0,0,5.68264-4.2379"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M282.16952,370s-15.79581,39.68216-64.339,60.4864"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M231.7,382.7137s25.04213,4.2379,27.739,20.03371"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M227.48616,43.60462a4.0063,4.0063,0,0,0-2.0708.38527,3.96223,3.96223,0,0,0-1.25211.96316"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path d="M233.55405,43.65278a7.26026,7.26026,0,0,1-.626-4.47869"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path d="M229.79774,45.0012a12.5565,12.5565,0,0,0-4.4787,2.84132"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M226.95424,41.13882a4.0062,4.0062,0,0,1-.80472-1.94654,3.96224,3.96224,0,0,1,.12582-1.57468"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M219.47959,45.44568a7.49124,7.49124,0,0,1,2.97834-2.56581,5.705,5.705,0,0,1,3.21459-.62483"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                </svg>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="a" data-name="a">
                                    <title>a</title>
                                    <g class="directions">
                                        <path
                                            d="M154.36621,109.55176l-2.07422-2.166a70.15557,70.15557,0,0,0,12.23926-15.58252,70.87378,70.87378,0,0,0,9.24805-30.5l2.99414.20215a73.91619,73.91619,0,0,1-9.64453,31.79785A73.08456,73.08456,0,0,1,154.36621,109.55176Z" />
                                        <polygon points="151.231 104.185 148.468 112.723 157.244 110.848 151.231 104.185" />
                                        <path
                                            d="M83.63574,112.167A39.78076,39.78076,0,0,1,73.18115,84.08545l2.999.084a36.77523,36.77523,0,0,0,9.6665,25.97022Z" />
                                        <polygon points="80.762 113.439 89.489 115.532 86.94 106.927 80.762 113.439" />
                                        <text transform="translate(172.56832 57.31892)"
                                            style="font-size:12px;font-family:Roboto-Black, Roboto;font-weight:800">1
                                        </text>
                                        <text transform="translate(70.95095 79.02161)"
                                            style="font-size:12px;font-family:Roboto-Black, Roboto;font-weight:800">2
                                        </text>
                                    </g>
                                    <mask id="aakatl_mask0" maskunits="objectBoundingBox">
                                        <path d="M155,55a119.721,119.721,0,0,1-30.65144,56.16667A124.30255,124.30255,0,0,1,65,145"
                                            style="fill:none;stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="133.97857666015625 133.97857666015625"
                                            stroke-dashoffset="133.97857666015625">
                                            <animate id="aakatl_animation0" attributename="stroke-dashoffset"
                                                from="133.97857666015625" to="0" begin="1s;aakatl_child0.click+1s"
                                                dur="1.5311837332589286s"></animate>
                                        </path>
                                    </mask>
                                    <mask id="aakatl_mask1" maskunits="objectBoundingBox">
                                        <path
                                            d="M95.30857,81.47917c1.4143,4.45833,10.05426,25.2,17.09995,32.34166,11.47716,11.625,25.5429,13.91667,30.14576,14.46667"
                                            style="fill:none;stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="70.84213256835938 70.84213256835938"
                                            stroke-dashoffset="70.84213256835938">
                                            <animate id="aakatl_animation1" attributename="stroke-dashoffset"
                                                from="70.84213256835938" to="0" begin="aakatl_animation0.end;aakatl_child1.click+1s"
                                                dur="0.8096243722098214s"></animate>
                                        </path>
                                    </mask>
                                    <path d="M155,55a119.721,119.721,0,0,1-30.65144,56.16667A124.30255,124.30255,0,0,1,65,145"
                                        style="fill:none;stroke-miterlimit:10;stroke-width:10px" id="aakatl_child0">
                                        <set attributename="mask" to="url(#aakatl_mask0)"
                                            begin="0s;aakatl_child0.click+1s;aakatl_child0.click+1s;aakatl_child0.click;"
                                            end="aakatl_animation0.end;indefinite"></set>
                                    </path>
                                    <path
                                        d="M95.30857,81.47917c1.4143,4.45833,10.05426,25.2,17.09995,32.34166,11.47716,11.625,25.5429,13.91667,30.14576,14.46667"
                                        style="fill:none;stroke-miterlimit:10;stroke-width:10px" id="aakatl_child1">
                                        <set attributename="mask" to="url(#aakatl_mask1)"
                                            begin="0s;aakatl_animation0.end;aakatl_child0.click+1s;aakatl_child1.click+1s;aakatl_child0.click;aakatl_child1.click;"
                                            end="aakatl_animation1.end;indefinite"></set>
                                    </path>
                                </svg>
                                <svg id="Otonqilotontli_1" data-name="Otonqilotontli 1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200">
                                    <path
                                        d="M143.26661,150c-7.8125,0-12.4043-6.28613-14.61817-9.31836-4.1914-5.72168-5.90722-15.0918-6.38379-18.2334-2.89257-.16113-5.82128-.29492-8.67382-.30176-5.07178.00684-10.105.18848-14.9668.59473-3.36182.28125-6.749.47461-10.335.67969-2.4082.13769-4.85059.27734-7.30957.44726l-2.62305.17872c-4.27392.29-8.69336.58886-12.87451.99414l-.96387-9.95313c4.32471-.41894,8.81739-.72363,13.16211-1.01855l2.61084-.17774c2.49854-.17187,4.98-.31445,7.42774-.4541,3.51806-.20117,6.8413-.39062,10.07177-.66113,5.146-.43067,10.4751-.63477,15.82471-.62989,2.61133.00684,5.21973.10743,7.793.24122-.34863-5.94043-.44043-11.793-.30859-18.40088.29785-14.875,3.86035-38.72217,4.01171-39.73L135,55.74316c-.03614.24024-3.61719,24.21875-3.90235,38.44385-.13672,6.85987-.03222,12.69776.36133,18.769a77.97157,77.97157,0,0,1,14.75879,2.21094c2.54492.65528,9.335,2.40332,12.39941,9.12207,3.3711,7.39258-.4375,15.28516-.88379,16.16114-2.92773,5.74414-8.543,9.49023-14.30566,9.54882C143.374,149.999,143.32032,150,143.26661,150Zm-10.74414-26.94238c.7041,3.585,2.09179,8.8457,4.19726,11.7207,1.94141,2.66016,4.03125,5.25391,6.60254,5.2207,2.05567-.0205,4.26465-1.66308,5.5-4.08691.59082-1.1875,1.88184-4.874.69727-7.47363-.95508-2.0918-3.47168-2.98926-5.80664-3.59082A65.28459,65.28459,0,0,0,132.52247,123.05762Z" />
                                </svg>
                            </p>
                            <xamix-element textInput="a!-katl">
                                <span slot="after">
                                    <p><i>/a/</i></p>
                                    <p>Ākatl, carrizo</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Oconetli</title>
                                    <path
                                        d="M279.699,52.20532a51.20885,51.20885,0,0,1,4.22364,15.67988,56.94722,56.94722,0,0,1-3.22984,24.95529c-2.22865,6.2346-4.23963,11.86031-9.93795,17.44662-2.46981,2.42126-11.39,11.16615-22.11194,10.1588-2.39275-.22481-5.57036-1.54855-11.92554-4.196-8.50133-3.54152-10.31759-5.479-10.93174-6.18362-1.61337-1.851-1.36648-2.57717-3.72674-9.71711-2.938-8.88769-3.80365-9.2239-4.969-14.57566a54.98881,54.98881,0,0,1-1.24224-9.49626,50.7219,50.7219,0,0,1,.4969-9.49627,44.48213,44.48213,0,0,1,5.96277-16.56324c.82836-1.34445,11.9355-18.8301,29.071-20.11246a22.18023,22.18023,0,0,1,10.60048,1.47229c1.09982.47071,3.71611,1.71839,8.44726,7.067A53.445,53.445,0,0,1,279.699,52.20532Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M255.1879,43.5031c2.0774.561,4.22713,2.02179,7.28783,7.65591A43.031,43.031,0,0,1,267.776,65.88189a36.52087,36.52087,0,0,1-.82815,17.66747,37.71106,37.71106,0,0,1-5.79715,11.04217c-3.23592,4.32068-7.68918,10.26682-13.41623,10.01157a12.23423,12.23423,0,0,1-5.96276-2.20844,13.57148,13.57148,0,0,1-4.14082-4.85855,24.7014,24.7014,0,0,1-3.31265-8.981c-.47275-3.26495-.05508-5.378.4969-9.27543,1.40573-9.92578.53653-9.21154,1.4907-13.98674,1.21695-6.09031,3.56772-17.85489,12.2568-21.201A10.871,10.871,0,0,1,255.1879,43.5031Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <ellipse cx="256.17738" cy="47.26218" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="251.31193" cy="47.26218" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="246.44647" cy="48.7038" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="254.2312" cy="51.29871" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="249.69011" cy="52.16368" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="244.17592" cy="53.02865" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="259.42102" cy="51.29871" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="261.69157" cy="55.91188" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="256.82611" cy="55.04691" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="252.28502" cy="55.91188" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="247.41956" cy="56.48853" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="242.22974" cy="57.3535" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="263.63775" cy="60.23674" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="258.88272" cy="60.82565" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="249.27603" cy="60.33488" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="254.46585" cy="59.2552" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="244.5279" cy="61.41456" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="239.89019" cy="62.29794" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="239.4485" cy="67.00926" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="238.89639" cy="72.01504" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="237.79218" cy="76.62821" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="237.68175" cy="81.33954" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="236.79838" cy="86.05086" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="237.79218" cy="90.61496" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="239.22766" cy="94.83552" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="242.20904" cy="99.25239" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="246.29465" cy="101.21544" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="251.1532" cy="100.52837" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="254.68669" cy="98.07456" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="257.55766" cy="94.73737" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="260.09735" cy="91.10572" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="262.63705" cy="87.57223" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="263.63085" cy="83.44982" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="264.95591" cy="79.57279" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="265.50802" cy="75.25408" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="265.39759" cy="71.32797" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="264.95591" cy="66.5185" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="260.20778" cy="65.34067" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="255.45964" cy="64.06468" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="250.82193" cy="64.55545" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="246.40507" cy="65.24251" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="243.75495" cy="69.26677" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="249.49687" cy="68.87416" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="254.46585" cy="68.5797" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="259.87651" cy="69.95384" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="260.09735" cy="74.66516" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="255.45964" cy="72.89842" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="250.71151" cy="73.29103" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="245.52169" cy="73.58548" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="242.42989" cy="77.11898" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="248.28224" cy="78.29681" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="254.24501" cy="77.41344" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="258.99314" cy="79.47464" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="258.33061" cy="83.79335" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="254.13458" cy="82.12476" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="248.50308" cy="82.90998" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="243.09242" cy="82.32107" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="242.65073" cy="86.63978" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="248.06139" cy="87.52315" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="253.80332" cy="88.11207" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="243.5341" cy="91.64556" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="252.58868" cy="92.92155" rx="1.82196" ry="1.61952" />
                                    <ellipse cx="247.0676" cy="94.78645" rx="1.82196" ry="1.61952" />
                                    <path
                                        d="M279.699,222.20532a51.20885,51.20885,0,0,1,4.22364,15.67988,56.94722,56.94722,0,0,1-3.22984,24.95529c-2.22865,6.2346-4.23963,11.86031-9.93795,17.44662-2.46981,2.42126-11.39,11.16615-22.11194,10.1588-2.39275-.22481-5.57036-1.54855-11.92554-4.196-8.50133-3.54152-10.31759-5.479-10.93174-6.18362-1.61337-1.851-1.36648-2.57717-3.72674-9.71711-2.938-8.88769-3.80365-9.2239-4.969-14.57566a54.98881,54.98881,0,0,1-1.24224-9.49626,50.7219,50.7219,0,0,1,.4969-9.49627,44.48213,44.48213,0,0,1,5.96277-16.56324c.82836-1.34445,11.9355-18.8301,29.071-20.11246a22.18023,22.18023,0,0,1,10.60048,1.47229c1.09982.47071,3.71611,1.71839,8.44726,7.067A53.445,53.445,0,0,1,279.699,222.20532Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M255.1879,213.5031c2.0774.561,4.22713,2.02179,7.28783,7.65591a43.031,43.031,0,0,1,5.30023,14.72288,36.52087,36.52087,0,0,1-.82815,17.66747,37.71106,37.71106,0,0,1-5.79715,11.04217c-3.23592,4.32068-7.68918,10.26682-13.41623,10.01157a12.23423,12.23423,0,0,1-5.96276-2.20844,13.57148,13.57148,0,0,1-4.14082-4.85855,24.7014,24.7014,0,0,1-3.31265-8.981c-.47275-3.265-.05508-5.378.4969-9.27543,1.40573-9.92578.53653-9.21154,1.4907-13.98674,1.21695-6.09031,3.56772-17.85489,12.2568-21.201A10.871,10.871,0,0,1,255.1879,213.5031Z"
                                        style="stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M279.699,392.20532a51.20885,51.20885,0,0,1,4.22364,15.67988,56.94722,56.94722,0,0,1-3.22984,24.95529c-2.22865,6.2346-4.23963,11.86031-9.93795,17.44662-2.46981,2.42126-11.39,11.16615-22.11194,10.1588-2.39275-.22481-5.57036-1.54855-11.92554-4.196-8.50133-3.54152-10.31759-5.479-10.93174-6.18362-1.61337-1.851-1.36648-2.57717-3.72674-9.71711-2.938-8.88769-3.80365-9.2239-4.969-14.57566a54.98881,54.98881,0,0,1-1.24224-9.49626,50.7219,50.7219,0,0,1,.4969-9.49627,44.48213,44.48213,0,0,1,5.96277-16.56324c.82836-1.34445,11.9355-18.8301,29.071-20.11246a22.18023,22.18023,0,0,1,10.60048,1.47229c1.09982.47071,3.71611,1.71839,8.44726,7.067A53.445,53.445,0,0,1,279.699,392.20532Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="o" data-name="o">
                                    <title>o</title>
                                    <g class="directions">
                                        <path
                                            d="M161.21777,89.50928a58.95233,58.95233,0,0,0-6.23632-23.25586c-2.9502-5.81153-9.8584-19.419-25.03516-24.79688a40.54814,40.54814,0,0,0-21.667-1.30615l-.60157-2.93945a43.56756,43.56756,0,0,1,23.27051,1.41748c16.30664,5.77881,23.59571,20.13574,26.708,26.26611a61.93606,61.93606,0,0,1,6.55566,24.43213Z" />
                                        <polygon points="158.131 88.201 162.787 95.872 167.104 88.004 158.131 88.201" />
                                    </g>
                                    <mask id="ochonetli_mask0" maskunits="objectBoundingBox">
                                        <ellipse cx="109.99934" cy="100" rx="36.5" ry="45"
                                            style="fill:none;stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="256.32281494140625 256.32281494140625"
                                            stroke-dashoffset="256.32281494140625">
                                            <animate id="ochonetli_animation0" attributename="stroke-dashoffset"
                                                from="256.32281494140625" to="0" begin="1s;ochonetli_child0.click+1s"
                                                dur="1.4647017996651785s">
                                            </animate>
                                        </ellipse>
                                    </mask>
                                    <ellipse cx="109.99934" cy="100" rx="36.5" ry="45"
                                        style="fill:none;stroke-miterlimit:10;stroke-width:10px" id="ochonetli_child0">
                                        <set attributename="mask" to="url(#ochonetli_mask0)"
                                            begin="0s;ochonetli_child0.click+1s;ochonetli_child0.click+1s;ochonetli_child0.click;"
                                            end="ochonetli_animation0.end;indefinite"></set>
                                    </ellipse>
                                </svg>
                                <svg id="Otonqilotontli_1" data-name="Otonqilotontli 1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M161.21777,89.50928a58.95233,58.95233,0,0,0-6.23632-23.25586c-2.9502-5.81153-9.8584-19.419-25.03516-24.79688a40.54814,40.54814,0,0,0-21.667-1.30615l-.60157-2.93945a43.56756,43.56756,0,0,1,23.27051,1.41748c16.30664,5.77881,23.59571,20.13574,26.708,26.26611a61.93606,61.93606,0,0,1,6.55566,24.43213Z" />
                                        <polygon points="158.131 88.201 162.787 95.872 167.104 88.004 158.131 88.201" />
                                    </g>
                                    <circle cx="92.74572" cy="83" r="15" style=";stroke-miterlimit:10;stroke-width:6px"
                                        id="oconetontli_child0">
                                        <set attributename="mask" to="url(#oconetontli_mask0)"
                                            begin="0s;oconetontli_child0.click+1s;oconetontli_child0.click+1s;oconetontli_child0.click;"
                                            end="oconetontli_animation0.end;indefinite"></set>
                                    </circle>
                                    <mask id="oconetontli_mask0" maskunits="objectBoundingBox">
                                        <circle cx="92.74572" cy="83" r="15" style=";stroke-miterlimit:10;stroke-width:6px"
                                            stroke-dasharray="93.64047241210938 93.64047241210938"
                                            stroke-dashoffset="93.64047241210938">
                                            <animate id="oconetontli_animation0" attributename="stroke-dashoffset"
                                                from="93.64047241210938" to="0" begin="1s;oconetontli_child0.click+1s"
                                                dur="1.0701768275669643s">
                                            </animate>
                                        </circle>
                                    </mask>
                                    <path
                                        d="M143.26661,150c-7.8125,0-12.4043-6.28613-14.61817-9.31836-4.1914-5.72168-5.90722-15.0918-6.38379-18.2334-2.89257-.16113-5.82128-.29492-8.67382-.30176-5.07178.00684-10.105.18848-14.9668.59473-3.36182.28125-6.749.47461-10.335.67969-2.4082.13769-4.85059.27734-7.30957.44726l-2.62305.17872c-4.27392.29-8.69336.58886-12.87451.99414l-.96387-9.95313c4.32471-.41894,8.81739-.72363,13.16211-1.01855l2.61084-.17774c2.49854-.17187,4.98-.31445,7.42774-.4541,3.51806-.20117,6.8413-.39062,10.07177-.66113,5.146-.43067,10.4751-.63477,15.82471-.62989,2.61133.00684,5.21973.10743,7.793.24122-.34863-5.94043-.44043-11.793-.30859-18.40088.29785-14.875,3.86035-38.72217,4.01171-39.73L135,55.74316c-.03614.24024-3.61719,24.21875-3.90235,38.44385-.13672,6.85987-.03222,12.69776.36133,18.769a77.97157,77.97157,0,0,1,14.75879,2.21094c2.54492.65528,9.335,2.40332,12.39941,9.12207,3.3711,7.39258-.4375,15.28516-.88379,16.16114-2.92773,5.74414-8.543,9.49023-14.30566,9.54882C143.374,149.999,143.32032,150,143.26661,150Zm-10.74414-26.94238c.7041,3.585,2.09179,8.8457,4.19726,11.7207,1.94141,2.66016,4.03125,5.25391,6.60254,5.2207,2.05567-.0205,4.26465-1.66308,5.5-4.08691.59082-1.1875,1.88184-4.874.69727-7.47363-.95508-2.0918-3.47168-2.98926-5.80664-3.59082A65.28459,65.28459,0,0,0,132.52247,123.05762Z" />
                                </svg>
                            </p>
                            <xamix-element textInput="o-co-ne-tli">
                                <span slot="after">
                                    <p><i>/o/</i></p>
                                    <p>Ochonetli, papaya</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_3" data-name="Layer 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Imeztli</title>
                                    <path
                                        d="M251.66232,33.977A140.46443,140.46443,0,0,1,254.38247,68.451c-.1237,2.34047-.22189,7.54758-3.96152,6.01352a8.86124,8.86124,0,0,1-1.73416-1.04474"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M232.02891,30c-1.39959,7.02319-2.07879,14.42205-.135,21.41337,1.11158,3.99809,2.03831,8.45567,3.81392,12.21475,1.45992,3.09072,4.63438,5.70218,4.40167,9.40378-.31383,4.9919-3.337,8.26566-2.66615,13.68946a51.13977,51.13977,0,0,0,4.9186,16.41677c3.32759,6.70087-3.71046,8.14585-3.14814,14.27938a4.94594,4.94594,0,0,0,6.33514,3.99868c4.21419-1.55335,7.87772-2.49725,12.034-.43968,1.689.83616,3.74048,1.58685,5.38184.65986,1.7749-1.00266,4.1589-2.02375,5.6823-3.37789a2.592,2.592,0,0,0,.666-3.03564c-1.68494.8513-3.44835.37327-5.13425-.22-3.152-1.1092-9.73365-1.92548-11.79083-4.71478-2.64532-3.58986-1.03313-8.16045-1.05688-12.232-.02818-4.83206.71994-13.58346.71994-13.58346a9.25489,9.25489,0,0,0,1.25214-6.43769c-.10757-.90946-.282-2.15754-.575-3.64155"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M248.5117,200c1.5,7.51279,2.70667,13.21388,3.44989,16.67446a76.7741,76.7741,0,0,1,1.15,19.35771c-.09623,1.34648-.59894,4.21653-.59894,4.21653s.683,2.54043.7906,3.44989c.34925,2.95285.15988,3.74279,0,4.21653a5.77766,5.77766,0,0,1-1.725,2.49159s.38332,11.71525-.19166,19.19,2.72525,7.85919,2.72525,7.85919l8.62472,2.41492,2.75991,1.72494"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M253.8466,370c-3.16377,32.67821-6.1085,53.12871-9.19972,63.30221-.72637,2.39053-2.82749,8.71139,1.15,13.54227,2.88951,3.5095,7.8176,4.81227,10.733,5.35391"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="i" data-name="i">
                                    <title>i</title>
                                    <g class="directions">
                                        <path
                                            d="M118.50879,100.85449a42.22587,42.22587,0,0,1-4.85059-15.54443c-1.56152-14.42627,2.30957-26.11231,4.31446-29.22852l2.52343,1.624c-1.55664,2.41748-5.36132,13.37451-3.85546,27.28173a39.23033,39.23033,0,0,0,4.50878,14.44434Z" />
                                        <polygon points="115.403 101.346 123.319 105.574 123.025 96.605 115.403 101.346" />
                                    </g>
                                    <mask id="imeztli_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M101.45049,55a89.83858,89.83858,0,0,0,0,52.6575A105.00628,105.00628,0,0,0,122.50048,145"
                                            style="fill:none;stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="96.6122055053711 96.6122055053711"
                                            stroke-dashoffset="96.6122055053711">
                                            <animate id="imeztli_animation0" attributename="stroke-dashoffset"
                                                from="96.6122055053711" to="0" begin="1s;imeztli_child0.click+1s"
                                                dur="1.1041394914899554s"></animate>
                                        </path>
                                    </mask>
                                    <path
                                        d="M101.45049,55a89.83858,89.83858,0,0,0,0,52.6575A105.00628,105.00628,0,0,0,122.50048,145"
                                        style="fill:none;stroke-miterlimit:10;stroke-width:10px" id="imeztli_child0">
                                        <set attributename="mask" to="url(#imeztli_mask0)"
                                            begin="0s;imeztli_child0.click+1s;imeztli_child0.click+1s;imeztli_child0.click;"
                                            end="imeztli_animation0.end;indefinite"></set>
                                    </path>
                                </svg>
                                <svg id="Imezqilotontli_1" data-name="Imezqilotontli 1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M101.86719,74.49219A31.63732,31.63732,0,0,1,89.54492,56.38574l2.91016-.72851a28.925,28.925,0,0,0,5.58105,11.16211,28.63021,28.63021,0,0,0,5.5752,5.23144Z" />
                                        <polygon points="99.388 76.377 108.362 76.447 103.936 68.64 99.388 76.377" />
                                    </g>
                                    <path d="M80.42858,68A42.77939,42.77939,0,0,0,90.90286,81.6,44.95,44.95,0,0,0,107,90.5"
                                        style=";stroke-miterlimit:10;stroke-width:6px" id="imeztontli_child0">
                                        <set attributename="mask" to="url(#imeztontli_mask0)"
                                            begin="0s;imeztontli_child0.click+1s;imeztontli_child0.click+1s;imeztontli_child0.click;"
                                            end="imeztontli_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="imeztontli_mask0" maskunits="objectBoundingBox">
                                        <path d="M80.42858,68A42.77939,42.77939,0,0,0,90.90286,81.6,44.95,44.95,0,0,0,107,90.5"
                                            style=";stroke-miterlimit:10;stroke-width:6px"
                                            stroke-dasharray="35.80778503417969 35.80778503417969"
                                            stroke-dashoffset="35.80778503417969">
                                            <animate id="imeztontli_animation0" attributename="stroke-dashoffset"
                                                from="35.80778503417969" to="0" begin="1s;imeztontli_child0.click+1s"
                                                dur="0.40923182896205357s">
                                            </animate>
                                        </path>
                                    </mask>
                                    <path
                                        d="M143.26661,150c-7.8125,0-12.4043-6.28613-14.61817-9.31836-4.1914-5.72168-5.90722-15.0918-6.38379-18.2334-2.89257-.16113-5.82128-.29492-8.67382-.30176-5.07178.00684-10.105.18848-14.9668.59473-3.36182.28125-6.749.47461-10.335.67969-2.4082.13769-4.85059.27734-7.30957.44726l-2.62305.17872c-4.27392.29-8.69336.58886-12.87451.99414l-.96387-9.95313c4.32471-.41894,8.81739-.72363,13.16211-1.01855l2.61084-.17774c2.49854-.17187,4.98-.31445,7.42774-.4541,3.51806-.20117,6.8413-.39062,10.07177-.66113,5.146-.43067,10.4751-.63477,15.82471-.62989,2.61133.00684,5.21973.10743,7.793.24122-.34863-5.94043-.44043-11.793-.30859-18.40088.29785-14.875,3.86035-38.72217,4.01171-39.73L135,55.74316c-.03614.24024-3.61719,24.21875-3.90235,38.44385-.13672,6.85987-.03222,12.69776.36133,18.769a77.97157,77.97157,0,0,1,14.75879,2.21094c2.54492.65528,9.335,2.40332,12.39941,9.12207,3.3711,7.39258-.4375,15.28516-.88379,16.16114-2.92773,5.74414-8.543,9.49023-14.30566,9.54882C143.374,149.999,143.32032,150,143.26661,150Zm-10.74414-26.94238c.7041,3.585,2.09179,8.8457,4.19726,11.7207,1.94141,2.66016,4.03125,5.25391,6.60254,5.2207,2.05567-.0205,4.26465-1.66308,5.5-4.08691.59082-1.1875,1.88184-4.874.69727-7.47363-.95508-2.0918-3.47168-2.98926-5.80664-3.59082A65.28459,65.28459,0,0,0,132.52247,123.05762Z" />
                                </svg>
                            </p>
                            <xamix-element textInput="i-mez-tli">
                                <span slot="after">
                                    <p><i>/i/</i></p>
                                    <p>Imetstli, pierna</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_4" data-name="Layer 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Etl</title>
                                    <path
                                        d="M221.82214,223.86789c.18082-7.11188,2.385-11.19195,7.0354-15.517,2.99616-2.78656,8.92-6.38866,12.11432-7.17217,12.71447-3.11864,25.81273.28056,33.38974,6.32838,16.85517,13.45342,12.68514,38.36242,11.9335,42.85216-.6384,3.81343-3.93313,23.49406-21.69729,34.7157-2.63034,1.66159-16.146,11.92005-34.41432,7.353-4.33946-1.08488-11.79872-4.89764-13.39115-16.99624-.277-2.10473-1.20531-14.26708,4.05316-21.09459,3.5642-4.62766,3.19228-7.67691,5.2396-8.31729a5.84161,5.84161,0,0,0,2.41081,3.73674c2.8259,1.78189,5.90231,1.06111,6.69.42191.5857-.4753,1.50676-3.19433,1.86838-6.32839a19.30791,19.30791,0,0,0-.39176-6.14757c-.992-1.83622-5.24727-5.00426-8.46967-2.56244-2.22831,1.68852-2.25844,4.55136-2.13789,10.72906"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M217.96247,389.771c1.99644-3.21559,9.20116-13.97217,22.67692-18.045,2.60077-.786,18.46229-5.57995,31.603,5.30735,11.93423,9.88776,13.06278,25.61619,13.50963,31.84415.35082,4.88926,1.14191,24.91364-12.54466,39.80517-10.20273,11.101-29.57862,20.57678-44.63012,10.88009-10.17055-6.5522-13.52331-18.73819-14.47464-22.82164"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M217.23874,399.855a24.78538,24.78538,0,0,1,4.34238,11.94153,25.91555,25.91555,0,0,1-4.82487,17.24894"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M226.69105,67.58611c-.42517.37077-2.57634-7.27312-2.67081-7.91508-.81182-5.51654-.54957-12.09831,2.215-17.08007a23.24789,23.24789,0,0,1,9.33119-9.05756c7.22711-3.87569,16.50943-4.27812,24.43132-2.58058a33.93791,33.93791,0,0,1,17.93611,10.0009c7.15456,7.83483,9.691,18.97764,9.44392,29.58478-.344,14.76546-5.89416,29.683-16.62031,39.8362a48.267,48.267,0,0,1-26.08592,12.62273,35.3897,35.3897,0,0,1-16.51625-1.206,23.27331,23.27331,0,0,1-12.78644-10.19307c-3.1794-5.63466-3.37875-12.58376-1.79311-18.85622,1.74062-6.88552,5.91271-13.55322,12.41952-16.39956,1.60289,2.40572,3.87025,5.12246,6.723,4.65468,2.11509-.34683,3.54177-2.40235,4.1659-4.45281.92282-3.03176.76165-7.517-1.38075-10.0744a5.42855,5.42855,0,0,0-7.82717-.42618c-2.60914,2.6692-.916,6.60891-1.49747,9.88972"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M231.45241,52.94043a6.60922,6.60922,0,0,0-.18081,2.35054,6.71975,6.71975,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M238.53417,45.85866a6.60928,6.60928,0,0,0-.18081,2.35055A6.71985,6.71985,0,0,0,239.619,51.4638"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M243.49141,37.36055a6.609,6.609,0,0,0-.18082,2.35054,6.71983,6.71983,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M250.57317,33.81966a6.6093,6.6093,0,0,0-.18081,2.35055A6.71975,6.71975,0,0,0,251.658,39.4248"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M232.86876,42.31778a6.60924,6.60924,0,0,0-.18081,2.35054,6.71979,6.71979,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M249.15682,43.73413a6.60924,6.60924,0,0,0-.18082,2.35055,6.71983,6.71983,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M258.36311,36.65237a6.60924,6.60924,0,0,0-.18081,2.35054,6.71979,6.71979,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M265.44487,42.31778a6.60924,6.60924,0,0,0-.18081,2.35054,6.71989,6.71989,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M272.52664,40.90143a6.609,6.609,0,0,0-.18082,2.35054,6.71988,6.71988,0,0,0,1.26568,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M279.6084,47.98319a6.609,6.609,0,0,0-.18081,2.35055,6.71975,6.71975,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M283.14928,57.89766a6.60924,6.60924,0,0,0-.18081,2.35054,6.71979,6.71979,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M274.65117,54.35678a6.609,6.609,0,0,0-.18082,2.35054,6.71978,6.71978,0,0,0,1.26568,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M257.65493,46.56684a6.60924,6.60924,0,0,0-.18081,2.35054,6.71989,6.71989,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M264.7367,54.35678a6.609,6.609,0,0,0-.18082,2.35054,6.71988,6.71988,0,0,0,1.26568,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M254.11405,54.35678a6.60924,6.60924,0,0,0-.18081,2.35054,6.71979,6.71979,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M244.90776,50.8159a6.60922,6.60922,0,0,0-.18081,2.35054,6.71975,6.71975,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M237.826,57.89766a6.609,6.609,0,0,0-.18082,2.35054,6.71988,6.71988,0,0,0,1.26568,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M246.32411,63.56307a6.60924,6.60924,0,0,0-.18081,2.35054,6.71989,6.71989,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M259.77946,64.27125a6.60922,6.60922,0,0,0-.18081,2.35054,6.71985,6.71985,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M253.40588,69.22848a6.609,6.609,0,0,0-.18082,2.35054,6.71974,6.71974,0,0,0,1.26568,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M270.40211,63.56307a6.609,6.609,0,0,0-.18082,2.35054,6.71988,6.71988,0,0,0,1.26568,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M278.90022,63.56307a6.60924,6.60924,0,0,0-.18081,2.35054,6.71989,6.71989,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M280.31658,75.60207a6.609,6.609,0,0,0-.18082,2.35054,6.71969,6.71969,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M266.86123,72.06119a6.609,6.609,0,0,0-.18082,2.35054,6.71973,6.71973,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path d="M273.943,79.143a6.609,6.609,0,0,0-.18081,2.35054,6.71979,6.71979,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M259.77946,79.143a6.60924,6.60924,0,0,0-.18081,2.35054,6.71989,6.71989,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M245.61594,74.18572a6.609,6.609,0,0,0-.18082,2.35054,6.71983,6.71983,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M252.6977,81.26748a6.609,6.609,0,0,0-.18081,2.35054,6.71979,6.71979,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M266.86123,83.392a6.609,6.609,0,0,0-.18082,2.35054,6.71973,6.71973,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M278.90022,86.22471a6.60928,6.60928,0,0,0-.18081,2.35055,6.71985,6.71985,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M271.81846,93.30648a6.60922,6.60922,0,0,0-.18081,2.35054,6.71975,6.71975,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M259.77946,91.182a6.60924,6.60924,0,0,0-.18081,2.35054,6.71985,6.71985,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M266.86123,98.26371a6.609,6.609,0,0,0-.18082,2.35054,6.71978,6.71978,0,0,0,1.26568,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M259.77946,105.34547a6.60928,6.60928,0,0,0-.18081,2.35055,6.71985,6.71985,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M248.44864,91.182a6.60924,6.60924,0,0,0-.18081,2.35054,6.71975,6.71975,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M241.36688,82.68383a6.60924,6.60924,0,0,0-.18082,2.35055,6.71983,6.71983,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path d="M237.826,91.182a6.609,6.609,0,0,0-.18082,2.35054,6.71983,6.71983,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M228.61971,84.10018a6.609,6.609,0,0,0-.18082,2.35055,6.71985,6.71985,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M220.12159,84.80836a6.60921,6.60921,0,0,0-.18082,2.35054,6.71988,6.71988,0,0,0,1.26568,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path d="M225.787,92.5983a6.609,6.609,0,0,0-.18081,2.35054,6.71979,6.71979,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M216.58071,93.30648a6.609,6.609,0,0,0-.18082,2.35054,6.71983,6.71983,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M222.9543,102.51277a6.609,6.609,0,0,0-.18082,2.35054,6.71989,6.71989,0,0,0,1.26567,3.2546"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M232.86876,98.97189a6.60922,6.60922,0,0,0-.18081,2.35054,6.71975,6.71975,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M244.19958,97.55553a6.60928,6.60928,0,0,0-.18081,2.35055,6.71985,6.71985,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M254.82223,96.13918a6.60924,6.60924,0,0,0-.18082,2.35055,6.71983,6.71983,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M250.57317,104.6373a6.60924,6.60924,0,0,0-.18081,2.35054,6.71975,6.71975,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M239.95053,104.6373a6.609,6.609,0,0,0-.18082,2.35054,6.71973,6.71973,0,0,0,1.26568,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M230.74423,107.47a6.60928,6.60928,0,0,0-.18081,2.35055,6.71985,6.71985,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M237.11782,112.42724a6.60922,6.60922,0,0,0-.18081,2.35054,6.71975,6.71975,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M246.32411,112.42724a6.60922,6.60922,0,0,0-.18081,2.35054,6.71985,6.71985,0,0,0,1.26567,3.25459"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                </svg>
                            </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" id="e" data-name="e">
                                    <title>e</title>
                                    <g class="directions">
                                        <path
                                            d="M160.46289,72.28613a44.56454,44.56454,0,0,0-6.76172-18.147c-8.40527-12.88232-21.02832-17.18457-25.78125-18.8042-26.71387-9.10449-52.06445,7.03809-56.875,10.3667l-1.707-2.4668c5.01856-3.47265,31.47363-20.3081,59.55078-10.73974,5.01953,1.71093,18.35449,6.25586,27.32422,20.00439a47.544,47.544,0,0,1,7.21875,19.35889Z" />
                                        <polygon points="157.297 71.161 162.447 78.511 166.238 70.377 157.297 71.161" />
                                        <text transform="translate(56.8445 47.87204)"
                                            style="font-size:12px;font-family:Roboto-Black, Roboto;font-weight:800">1
                                        </text>
                                        <path
                                            d="M69.66016,110.28711l-2.97559-.38086q.17358-1.35645.31152-2.77441a90.88036,90.88036,0,0,0,.335-12.72559l2.99708-.13184a93.9101,93.9101,0,0,1-.34571,13.14649Q69.84034,108.88574,69.66016,110.28711Z" />
                                        <polygon points="63.878 108.103 67.128 116.468 72.748 109.472 63.878 108.103" />
                                        <text transform="translate(65.35516 89.23355)"
                                            style="font-size:12px;font-family:Roboto-Black, Roboto;font-weight:800">2
                                        </text>
                                    </g>
                                    <mask id="etl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M73.5,64.49388a137.3451,137.3451,0,0,1,19.8423-5.7165c18.80905-3.91656,32.54457-6.77482,42.42552,1.90828a32.77716,32.77716,0,0,1,10.60484,20.58276,32.63492,32.63492,0,0,1,0,5.71651c-2.42537,37.67395-7.01629,50.08195-8.64348,54.20684C136.99291,143.05,136.35565,144.5,136.13289,145"
                                            style="fill:none;stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="153.35337829589844 153.35337829589844"
                                            stroke-dashoffset="153.35337829589844">
                                            <animate id="etl_animation0" attributename="stroke-dashoffset" from="153.35337829589844"
                                                to="0" begin="1s;etl_child0.click+1s" dur="1.7526100376674107s"></animate>
                                        </path>
                                    </mask>
                                    <mask id="etl_mask1" maskunits="objectBoundingBox">
                                        <path
                                            d="M94.53952,81.26842a32.63493,32.63493,0,0,1,0,5.71651c-2.42537,37.67395-7.01629,50.08194-8.64348,54.20682C85.15976,143.05,84.5225,144.5,84.29974,145"
                                            style="fill:none;stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="64.92268371582031 64.92268371582031"
                                            stroke-dashoffset="64.92268371582031">
                                            <animate id="etl_animation1" attributename="stroke-dashoffset" from="64.92268371582031"
                                                to="0" begin="etl_animation0.end;etl_child1.click+1s" dur="0.7419735281808035s">
                                            </animate>
                                        </path>
                                    </mask>
                                    <path
                                        d="M73.5,64.49388a137.3451,137.3451,0,0,1,19.8423-5.7165c18.80905-3.91656,32.54457-6.77482,42.42552,1.90828a32.77716,32.77716,0,0,1,10.60484,20.58276,32.63492,32.63492,0,0,1,0,5.71651c-2.42537,37.67395-7.01629,50.08195-8.64348,54.20684C136.99291,143.05,136.35565,144.5,136.13289,145"
                                        style="fill:none;stroke-miterlimit:10;stroke-width:10px" id="etl_child0">
                                        <set attributename="mask" to="url(#etl_mask0)"
                                            begin="0s;etl_child0.click+1s;etl_child0.click+1s;etl_child0.click;"
                                            end="etl_animation0.end;indefinite"></set>
                                    </path>
                                    <path
                                        d="M94.53952,81.26842a32.63493,32.63493,0,0,1,0,5.71651c-2.42537,37.67395-7.01629,50.08194-8.64348,54.20682C85.15976,143.05,84.5225,144.5,84.29974,145"
                                        style="fill:none;stroke-miterlimit:10;stroke-width:10px" id="etl_child1">
                                        <set attributename="mask" to="url(#etl_mask1)"
                                            begin="0s;etl_animation0.end;etl_child0.click+1s;etl_child1.click+1s;etl_child0.click;etl_child1.click;"
                                            end="etl_animation1.end;indefinite"></set>
                                    </path>
                                </svg>
                                <svg id="Elinqilotontli_1" data-name="Elinqilotontli 1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M111.86719,75.49219A31.63732,31.63732,0,0,1,99.54492,57.38574l2.91016-.72851a28.9433,28.9433,0,0,0,5.58008,11.16211,28.6407,28.6407,0,0,0,5.57617,5.23144Z" />
                                        <polygon points="109.388 77.377 118.362 77.447 113.936 69.64 109.388 77.377" />
                                        <path
                                            d="M85.86768,82.49219A31.62113,31.62113,0,0,1,79.709,76.7124a31.94665,31.94665,0,0,1-6.16406-12.32666l2.91016-.72851a28.925,28.925,0,0,0,5.58105,11.16211,28.616,28.616,0,0,0,5.57471,5.23144Z" />
                                        <polygon points="83.388 84.377 92.362 84.447 87.936 76.64 83.388 84.377" />
                                        <text transform="translate(95.39772 52.74499)"
                                            style="font-size:12px;font-family:Roboto-Black, Roboto;font-weight:800">1
                                        </text>
                                        <text transform="translate(69.52538 59.5535)"
                                            style="font-size:12px;font-family:Roboto-Black, Roboto;font-weight:800">2
                                        </text>
                                    </g>
                                    <path
                                        d="M90.56854,67.96516a42.97778,42.97778,0,0,0,10.36288,13.70813,44.37837,44.37837,0,0,0,15.92573,8.97487"
                                        style=";stroke-miterlimit:10;stroke-width:6px" id="etontli_child0">
                                        <set attributename="mask" to="url(#etontli_mask0)"
                                            begin="0s;etontli_child0.click+1s;etontli_child0.click+1s;etontli_child0.click;"
                                            end="etontli_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="etontli_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M90.56854,67.96516a42.97778,42.97778,0,0,0,10.36288,13.70813,44.37837,44.37837,0,0,0,15.92573,8.97487"
                                            style=";stroke-miterlimit:10;stroke-width:6px"
                                            stroke-dasharray="35.71323013305664 35.71323013305664"
                                            stroke-dashoffset="35.71323013305664">
                                            <animate id="etontli_animation0" attributename="stroke-dashoffset"
                                                from="35.71323013305664" to="0" begin="1s;etontli_child0.click+1s"
                                                dur="0.4081512015206473s"></animate>
                                        </path>
                                    </mask>
                                    <mask id="etontli_mask1" maskunits="objectBoundingBox">
                                        <path
                                            d="M71.0666,79.30666A42.97778,42.97778,0,0,0,81.42948,93.01479a44.37837,44.37837,0,0,0,15.92573,8.97487"
                                            style=";stroke-miterlimit:10;stroke-width:6px"
                                            stroke-dasharray="35.7132568359375 35.7132568359375"
                                            stroke-dashoffset="35.7132568359375">
                                            <animate id="etontli_animation1" attributename="stroke-dashoffset"
                                                from="35.7132568359375" to="0"
                                                begin="etontli_animation0.end;etontli_child1.click+1s" dur="0.4081515066964286s">
                                            </animate>
                                        </path>
                                    </mask>
                                    <path
                                        d="M71.0666,79.30666A42.97778,42.97778,0,0,0,81.42948,93.01479a44.37837,44.37837,0,0,0,15.92573,8.97487"
                                        style=";stroke-miterlimit:10;stroke-width:6px" id="etontli_child1">
                                        <set attributename="mask" to="url(#etontli_mask1)"
                                            begin="0s;etontli_animation0.end;etontli_child0.click+1s;etontli_child1.click+1s;etontli_child0.click;etontli_child1.click;"
                                            end="etontli_animation1.end;indefinite"></set>
                                    </path>
                                    <path
                                        d="M143.26661,150c-7.8125,0-12.4043-6.28613-14.61817-9.31836-4.1914-5.72168-5.90722-15.0918-6.38379-18.2334-2.89257-.16113-5.82128-.29492-8.67382-.30176-5.07178.00684-10.105.18848-14.9668.59473-3.36182.28125-6.749.47461-10.335.67969-2.4082.13769-4.85059.27734-7.30957.44726l-2.62305.17872c-4.27392.29-8.69336.58886-12.87451.99414l-.96387-9.95313c4.32471-.41894,8.81739-.72363,13.16211-1.01855l2.61084-.17774c2.49854-.17187,4.98-.31445,7.42774-.4541,3.51806-.20117,6.8413-.39062,10.07177-.66113,5.146-.43067,10.4751-.63477,15.82471-.62989,2.61133.00684,5.21973.10743,7.793.24122-.34863-5.94043-.44043-11.793-.30859-18.40088.29785-14.875,3.86035-38.72217,4.01171-39.73L135,55.74316c-.03614.24024-3.61719,24.21875-3.90235,38.44385-.13672,6.85987-.03222,12.69776.36133,18.769a77.97157,77.97157,0,0,1,14.75879,2.21094c2.54492.65528,9.335,2.40332,12.39941,9.12207,3.3711,7.39258-.4375,15.28516-.88379,16.16114-2.92773,5.74414-8.543,9.49023-14.30566,9.54882C143.374,149.999,143.32032,150,143.26661,150Zm-10.74414-26.94238c.7041,3.585,2.09179,8.8457,4.19726,11.7207,1.94141,2.66016,4.03125,5.25391,6.60254,5.2207,2.05567-.0205,4.26465-1.66308,5.5-4.08691.59082-1.1875,1.88184-4.874.69727-7.47363-.95508-2.0918-3.47168-2.98926-5.80664-3.59082A65.28459,65.28459,0,0,0,132.52247,123.05762Z" />
                                </svg>
                            </p>
                            <xamix-element textInput="etl">
                                <span slot="after">
                                    <p><i>/e/</i></p>
                                    <p>Etl, frijol</p>
                                </span>
                            </xamix-element>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <p>
                                <svg id="Layer_7" data-name="Layer 7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Maitl</title>
                                    <path
                                        d="M243.3639,128.54947c7.10936.801,14.23034,1.615,21.38182,1.01865,8.54533-.71211,17.1734-.88115,25.73772-1.32058,6.81781-.34981,13.82986-.21785,18.76018-5.78686,5.91293-6.6789,3.73433-16.582,3.06249-19.63591a28.19118,28.19118,0,0,0-1.62133-5.0441c.914-4.35032,2.17866-13.70459-2.52094-23.05649a64.458,64.458,0,0,1-5.53813-16.61908c-.92006-4.62137-1.27656-10.36257-2.83976-14.751-2.37993-6.68135-6.6589-13.814-11.16905-13.3308-5.04409.54044-3.80644,7.92709-2.522,15.3124a39.44519,39.44519,0,0,0,.36029,5.40439,67.26694,67.26694,0,0,1-.63614,16.13433c-.10185.50376-2.12563,1.16522-2.63954,1.17283l-9.76967.14446c-5.48594.08116-10.64472.89483-16.04422-.44528a37.40944,37.40944,0,0,0-13.33482-.61305c-6.5863.75764-13.31175.69476-19.9301.79856-5.56175.08723-11.12416.13132-16.68648.16206-3.90785.0216-14.22533-1.07642-14.00445,5.50212.06,1.78573,2.49135,3.8931,5.94483,4.14335l30.5935,1.39062c2.02259.09193,13.013-.95386,13.54364,1.92563.38586,2.09406-4.68888,3.1908-6.12655,3.39118-4.306.60016-8.9261.34123-13.2905.50838l-12.79238.48992c-5.03525.19283-10.14922.14171-15.17035.581-4.63312.40534-8.28672,2.9498-8.28672,5.53949,0,4.48115,2.37531,4.12068,6.30512,4.864l42.6946.18014c3.568.28958,6.23293,1.28666,6.30512,2.3419.075,1.0963-2.62862,2.54458-6.66541,3.24263H193.58988c-4.10583-.32226-6.84555,1.91957-6.84555,5.20172,0,3.3327,2.47166,3.83654,5.94487,3.96321l17.74852.83079c7.55344.35356,15.40728-.45354,22.98847.82622,1.42557.24064,8.71258,1.33,6.97906,3.19708-1.11856,1.20477-4.72952,1.33434-6.2812,1.45092-8.49482.63823-17.08161.68512-25.59425,1.048-2.40734.10262-4.99513.27-6.8739,1.77863a3.57516,3.57516,0,0,0-1.2542,1.7331c-1.56437,5.40008,7.96267,5.12091,10.991,4.99737A208.956,208.956,0,0,1,243.3639,128.54947Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M210.89727,295.97015c10.57526,2.59386,15.85477,2.33577,31.97124,2.57933,10.75486.16252,9.337,2.02236,21.38182,1.01864,8.54533-.7121,17.1734-.88115,25.73772-1.32058,6.8178-.34982,13.82986-.21784,18.76018-5.78687,5.91292-6.67888,3.73432-16.582,3.06248-19.63591a28.19222,28.19222,0,0,0-1.62132-5.04409c.914-4.35033,2.17866-13.7046-2.52093-23.0565a64.45717,64.45717,0,0,1-5.53814-16.61908c-.92006-4.62136-1.27656-10.36256-2.83977-14.751-2.37993-6.68135-6.65889-13.814-11.169-13.3308-5.04409.54044-3.80645,7.92709-2.522,15.3124a39.44645,39.44645,0,0,0,.36028,5.40438,67.26669,67.26669,0,0,1-.63613,16.13435c-.10185.50375-2.12564,1.16521-2.63954,1.17282l-9.76968.14447c-5.48594.08115-10.64472.89482-16.04421-.44529a37.40991,37.40991,0,0,0-13.33482-.61306c-6.58629.75765-13.31175.69477-19.9301.79857-5.56176.08723-11.12416.13131-16.68649.16206-3.32912.01839-11.31-.77576-13.46425,3.05592a5.52643,5.52643,0,0,0-.54019,2.4462c-.72822,6.91788-4.60753,8.41795-5.51371,13.39693-1.28758,7.07462,5.62982,9.07224,3.83326,15.546-.42976,1.54857-1.72366,4.67042-.85183,8.62482a13.67359,13.67359,0,0,0,.42591,1.49072c1.388,3.974,4.67055,6.80616,7.24059,8.62482A28.10192,28.10192,0,0,0,210.89727,295.97015Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M200.4017,462.22392c-1.56437,5.40008,7.96267,5.12091,10.991,4.99737a208.956,208.956,0,0,1,31.97124,1.32818c7.10936.801,14.23034,1.615,21.38182,1.01865,8.54533-.71211,17.1734-.88115,25.73772-1.32058,6.81781-.34981,13.82986-.21785,18.76018-5.78686,5.91293-6.6789,3.73433-16.582,3.06249-19.63591a28.19118,28.19118,0,0,0-1.62133-5.0441c.914-4.35032,2.17866-13.70459-2.52094-23.05649a64.458,64.458,0,0,1-5.53813-16.61908c-.92006-4.62137-1.27656-10.36257-2.83976-14.751-2.37993-6.68135-6.6589-13.814-11.16905-13.3308"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Mailqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <title>m</title>
                                    <g class="directions">
                                        <path
                                            d="M146.05273,91.91162l-2.99609-.14355a118.11485,118.11485,0,0,1,6.76563-34.14551l2.82421,1.00976a115.24531,115.24531,0,0,0-6.59375,33.2793Z" />
                                        <polygon points="140.156 90.404 144.426 98.298 149.128 90.654 140.156 90.404" />
                                        <path
                                            d="M148.38379,160.28711,147.27637,157.5a30.32154,30.32154,0,0,0,14.918-12.63867c5.55566-9.51758,4.66992-17.15235,2.94921-21.88086a23.2226,23.2226,0,0,0-6.81738-9.71289l1.957-2.27344a26.18121,26.18121,0,0,1,7.67871,10.96094c1.94141,5.332,2.96582,13.89648-3.17773,24.418A33.31959,33.31959,0,0,1,148.38379,160.28711Z" />
                                        <polygon points="162.895 109.325 153.957 108.511 157.72 116.658 162.895 109.325" />
                                        <path
                                            d="M68.59814,141.42383l-.76269-2.90235a79.1544,79.1544,0,0,1,36.73291-.83886l-.62695,2.93359a76.15151,76.15151,0,0,0-35.34327.80762Z" />
                                        <polygon points="68.213 135.356 62.043 141.872 70.771 143.959 68.213 135.356" />
                                    </g>
                                    <mask id="maitl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M131.05555,55s-3.66234,24.36411-3.95689,39.08667a215.561,215.561,0,0,0,.99315,26.78569s1.412,11.151,5.59389,16.8598c1.92411,2.63357,5.36119,7.32565,10.69132,7.2673,4.07325-.04166,7.88273-2.85857,9.89994-6.81725.17066-.33336,3.21205-6.5089.79139-11.81768-1.92411-4.217-6.26112-5.62549-9.10856-6.35889a75.35482,75.35482,0,0,0-15.11471-2.13355c-5.41017-.27639-10.82653-.71234-16.24171-.72522-5.05868-.012-10.25652.18251-15.39579.61236-5.59014.46755-11.53244.70322-17.57239,1.12035-5.09446.35183-10.51365.68864-15.63518,1.18487"
                                            style="fill:none;stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="214.11183166503906 214.11183166503906"
                                            stroke-dashoffset="214.11183166503906">
                                            <animate id="maitl_animation0" attributename="stroke-dashoffset"
                                                from="214.11183166503906" to="0" begin="1s;maitl_child0.click+1s"
                                                dur="1.2234961809430804s"></animate>
                                        </path>
                                    </mask>
                                    <path
                                        d="M131.05555,55s-3.66234,24.36411-3.95689,39.08667a215.561,215.561,0,0,0,.99315,26.78569s1.412,11.151,5.59389,16.8598c1.92411,2.63357,5.36119,7.32565,10.69132,7.2673,4.07325-.04166,7.88273-2.85857,9.89994-6.81725.17066-.33336,3.21205-6.5089.79139-11.81768-1.92411-4.217-6.26112-5.62549-9.10856-6.35889a75.35482,75.35482,0,0,0-15.11471-2.13355c-5.41017-.27639-10.82653-.71234-16.24171-.72522-5.05868-.012-10.25652.18251-15.39579.61236-5.59014.46755-11.53244.70322-17.57239,1.12035-5.09446.35183-10.51365.68864-15.63518,1.18487"
                                        style="fill:none;stroke-miterlimit:10;stroke-width:10px" id="maitl_child0">
                                        <set attributename="mask" to="url(#maitl_mask0)"
                                            begin="0s;maitl_child0.click+1s;maitl_child0.click+1s;maitl_child0.click;"
                                            end="maitl_animation0.end;indefinite"></set>
                                    </path>
                                </svg>
                            </p>
                            <xamix-element textInput="ma-itl">
                                <span slot="after">
                                    <p><i>/m/</i></p>
                                    <p>Maitl, mano</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_8" data-name="Layer 8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Nakastli</title>
                                    <path
                                        d="M221.85374,47.88674c2.34353-3.92674,4.88026-8.17719,9.69168-11.63,11.28457-8.09818,32.07111-9.64841,44.38792,3.29518C287.82543,52.04913,286.3277,72.28412,278.647,82.1953c-4.53415,5.85088-10.7386,7.47892-12.793,14.9252-1.5312,5.54979,2.39957,7.52877,2.326,15.5067-.02291,2.486-.11037,11.97063-6.20269,17.05737-7.38161,6.16324-21.02956,3.7418-28.88121-3.68284-7.18816-6.79722-7.69328-16.062-7.75336-18.41421"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M222.40834,75.64666a45.72623,45.72623,0,0,1,6.25114-23.84154c1.75764-2.94505,3.66019-6.13289,7.26876-8.72252,8.46344-6.07364,24.05333-7.23631,33.291,2.47138,8.91906,9.37293,7.79577,24.54917,2.03525,31.98256-3.40061,4.38816-8.054,5.60919-9.59478,11.1939"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M229.171,68.15852c1.48813-.02658,5.22069.125,7.75335,2.71367,3.69921,3.781,3.61761,11.513-1.55067,17.8327"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M240.0257,46.2553a37.19192,37.19192,0,0,0,10.07937,11.24236,37.48393,37.48393,0,0,0,17.83269,6.978"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M251.65574,62.34351a54.61115,54.61115,0,0,0,.77533,22.097"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M245.82458,82.06608c1.61466,2.77124,4.04973,5.78349,7.49491,6.3319,2.02051.32163,3.16624-.39874,4.13511.38767,2.1134,1.71536.71468,8.43223-2.326,12.01769-4.42111,5.21319-14.0012,5.79652-24.16459,2.06756"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M219.82783,214.1362c15.58521-17.1776,38.68707-18.054,51.26036-6.12546,9.75939,9.25892,11.30426,30.59069-5.80308,63.18889L273.9897,306.018h-49.326"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M273.61978,370q-2.7903,6.7342-6.67791,14.17113l9.74463,38.97851H221.46694"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Neliwqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <title>n</title>
                                    <g class="directions">
                                        <polygon
                                            points="168.33 164.819 126.65 164.819 126.65 161.819 165.33 161.819 165.33 110.894 168.33 110.894 168.33 164.819" />
                                        <polygon points="127.963 158.831 120.192 163.319 127.963 167.807 127.963 158.831" />
                                    </g>
                                    <mask id="nakastli_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M150,55c-1.37383,19.1316-2.48657,33.02144-2.73511,43.8655-.5444,23.75278,0,44.62828,0,44.62828l-13.67522-.7627C121.224,142.04143,104.58458,141.55307,70,145"
                                            style="fill:none;stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="165.9823760986328 165.9823760986328"
                                            stroke-dashoffset="165.9823760986328">
                                            <animate id="nakastli_animation0" attributename="stroke-dashoffset"
                                                from="165.9823760986328" to="0" begin="1s;nakastli_child0.click+1s"
                                                dur="1.896941441127232s">
                                            </animate>
                                        </path>
                                    </mask>
                                    <path
                                        d="M150,55c-1.37383,19.1316-2.48657,33.02144-2.73511,43.8655-.5444,23.75278,0,44.62828,0,44.62828l-13.67522-.7627C121.224,142.04143,104.58458,141.55307,70,145"
                                        style="fill:none;stroke-miterlimit:10;stroke-width:10px" id="nakastli_child0">
                                        <set attributename="mask" to="url(#nakastli_mask0)"
                                            begin="0s;nakastli_child0.click+1s;nakastli_child0.click+1s;nakastli_child0.click;"
                                            end="nakastli_animation0.end;indefinite"></set>
                                    </path>
                                </svg>
                            </p>
                            <xamix-element textInput="na-kas-tli">
                                <span slot="after">
                                    <p><i>/n/</i></p>
                                    <p>Nakastli, oreja</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_9" data-name="Layer 9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Papalotl</title>
                                    <path
                                        d="M242.4327,55.9922c-.949-1.74789-14.75637-28.29868-24.11263-25.83033-8.93936,2.35837-13.574,29.75316-3.1113,40.447,5.43819,5.55832,14.78,6.42573,14.7787,10.88957-.00032,1.16893-.64121,2.09816-4.667,6.02816-5.89209,5.752-8.8631,8.002-9.9173,9.13946-3.28923,3.54912-3.23676,12.79678,10.88958,37.53013-.55818-5.50607-1.66461-23.42017,10.3062-36.94676,1.68593-1.90505,6.57936-2.80144,7.58382-6.61153,1.2059-4.57419-3.73917-7.4688-2.4999-12.44522,1.09674-4.40409,5.63134-4.79359,5.63924-8.36164.0075-3.389-4.08152-3.90433-5.25033-8.16718C240.848,57.2002,244.464,54.602,245.18314,49.60754c1.30516-9.06416-7.96369-16.08485-7.38936-16.52881.47241-.36517,6.501,4.35652,7.82688,11.81323a17.12333,17.12333,0,0,1,.24307,3.79191,3.9483,3.9483,0,0,1,4.18082-2.18764"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M257.56731,55.9922c.949-1.74789,14.75636-28.29868,24.11262-25.83033,8.93936,2.35837,13.574,29.75316,3.1113,40.447-5.43819,5.55832-14.77995,6.42573-14.7787,10.88957.00033,1.16893.64121,2.09816,4.667,6.02816,5.89208,5.752,8.86309,8.002,9.91729,9.13946,3.28924,3.54912,3.23677,12.79678-10.88958,37.53013.55818-5.50607,1.66461-23.42017-10.30619-36.94676-1.68593-1.90505-6.57937-2.80144-7.58382-6.61153-1.20591-4.57419,3.73916-7.4688,2.4999-12.44522-1.09675-4.40409-5.63135-4.79359-5.63924-8.36164-.00751-3.389,4.08151-3.90433,5.25032-8.16718,1.22387-4.46365-2.39214-7.06185-3.11131-12.05631-1.30516-9.06416,7.96369-16.08485,7.38936-16.52881-.47241-.36517-6.501,4.35652-7.82688,11.81323a17.12333,17.12333,0,0,0-.24307,3.79191,3.9483,3.9483,0,0,0-4.18081-2.18764"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M244.305,90.52446c-1.17426,8.1416.15,14.72634,3.75949,16.33436a4.67454,4.67454,0,0,0,1.94457.38891h-.0278a4.67446,4.67446,0,0,0,1.94456-.38891c3.6095-1.608,4.93375-8.19276,3.7595-16.33436"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M254.88412,226.825c3.57-12.9441,13.41619-21.2885,21.94772-20.61754,12.47326.981,20.577,21.10958,15.962,31.92394-3.96117,9.28216-16.3264,9.43882-16.95958,16.95958-.555,6.59194,8.78305,8.3901,10.30876,17.29214,1.56308,9.12-5.58487,22.71175-16.29452,23.27787-6.58572.34813-13.1607-4.301-16.95959-11.30639"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M250.1177,226.1599v70.33242" style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M245.11588,226.825c-3.57-12.9441-13.41619-21.2885-21.94772-20.61754-12.47326.981-20.577,21.10958-15.962,31.92394,3.96117,9.28216,16.3264,9.43882,16.95958,16.95958.555,6.59194-8.783,8.3901-10.30876,17.29214-1.56308,9.12,5.58487,22.71175,16.29452,23.27787,6.58572.34813,13.1607-4.301,16.95959-11.30639"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M248.34412,223.27788a27.89372,27.89372,0,0,0-3.87965-12.304A28.22358,28.22358,0,0,0,232.16045,200"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M251.69725,223.27788a27.89358,27.89358,0,0,1,3.87965-12.304A28.22358,28.22358,0,0,1,267.88092,200"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M231.38735,390.65523c3.57-12.94411,13.4162-21.28851,21.94772-20.61755,12.47326.981,20.577,21.10958,15.962,31.92395-3.96118,9.28215-16.3264,9.43882-16.95959,16.95958-.555,6.59193,8.78305,8.3901,10.30877,17.29213,1.56307,9.12-5.58487,22.71175-16.29453,23.27788-6.58571.34813-13.1607-4.301-16.95958-11.30639"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Pokalqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <title>p</title>
                                    <g class="directions">
                                        <path
                                            d="M155.71875,136.67969l-2.53711-1.60156a40.41194,40.41194,0,0,0,6.53125-21.86622c-.0459-3.26074-.12207-8.71972-3.52051-14.20947a25.52982,25.52982,0,0,0-14.14746-10.59131l-3.94433-1.22461,3.81054-1.59228c9.81836-4.10156,17.123-11.3794,20.042-19.96631,1.72265-5.07031,1.59863-9.9209-.33985-13.30859-3.47754-6.07764-13.61523-8.99561-24.65723-7.0962l-.50781-2.957c12.25684-2.10742,23.67578,1.4126,27.76856,8.563,2.36621,4.13428,2.57617,9.87988.57617,15.76416-2.85645,8.40381-9.48731,15.63623-18.44238,20.24268a27.66829,27.66829,0,0,1,12.39257,10.5874c3.835,6.1958,3.919,12.17432,3.96973,15.74658A43.082,43.082,0,0,1,155.71875,136.67969Z" />
                                        <polygon points="151.472 132.169 150.66 141.106 158.807 137.343 151.472 132.169" />
                                    </g>
                                    <mask id="papalotl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M84.40068,55.50911c3.36865-.35836,45.75329-2.80548,49.06054,7.46438,2.5813,8.01626-17.642,22.3355-23.4612,26.35244l-6.50368,3.711-.90856.16544.90856-.16544s7.68916-.16979,7.69782-.16356c13.47449.66081,20.97275,10.2271,26.43284,19.1207,4.40893,7.18142,1.40564,15.1446.97241,16.2396-5.031,12.716-29.0846,19.79112-58.59937,15.519"
                                            style="fill:none;stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="220.13955688476562 220.13955688476562"
                                            stroke-dashoffset="220.13955688476562">
                                            <animate id="papalotl_animation0" attributename="stroke-dashoffset"
                                                from="220.13955688476562" to="0" begin="1s;papalotl_child0.click+1s"
                                                dur="1.2579403250558037s">
                                            </animate>
                                        </path>
                                    </mask>
                                    <path
                                        d="M84.40068,55.50911c3.36865-.35836,45.75329-2.80548,49.06054,7.46438,2.5813,8.01626-17.642,22.3355-23.4612,26.35244l-6.50368,3.711-.90856.16544.90856-.16544s7.68916-.16979,7.69782-.16356c13.47449.66081,20.97275,10.2271,26.43284,19.1207,4.40893,7.18142,1.40564,15.1446.97241,16.2396-5.031,12.716-29.0846,19.79112-58.59937,15.519"
                                        style="fill:none;stroke-miterlimit:10;stroke-width:10px" id="papalotl_child0">
                                        <set attributename="mask" to="url(#papalotl_mask0)"
                                            begin="0s;papalotl_child0.click+1s;papalotl_child0.click+1s;papalotl_child0.click;"
                                            end="papalotl_animation0.end;indefinite"></set>
                                    </path>
                                </svg>
                            </p>
                            <xamix-element textInput="pa-pa-lotl">
                                <span slot="after">
                                    <p><i>/p/</i></p>
                                    <p>Papalotl, mariposa</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_10" data-name="Layer 10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Tekolotl</title>
                                    <path
                                        d="M257.05065,95.51773c8.66182-1.40729,20.43924-4.82,29.59659-14.18681,5.33136-5.4533,4.41167-7.43907,11.76268-17.98641,6.95483-9.97884,15.49271-21.94329,29.88017-28.581A54.2093,54.2093,0,0,1,346.91106,30c-2.32489,13.53034-7.6859,21.12374-12.12531,25.54969C322.39692,67.901,304.35422,68.37747,301.87431,79.80023a13.555,13.555,0,0,0,.433,6.92874"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M247.026,91.32a6.90425,6.90425,0,0,1-3.42439,6.3596c-2.09612,1.14857-3.62056-.35253-5.05507.4892a3.2422,3.2422,0,0,0-1.31018,1.88379,9.28448,9.28448,0,0,0-.38643,2.30171,19.03574,19.03574,0,0,0,.0775,2.91142,30.81822,30.81822,0,0,0,.52468,3.3687c.25941,1.23881.582,2.46425.9551,3.67357q.59914,1.942,1.36875,3.826.79555,1.95162,1.76564,3.826.66187,1.27582,1.40773,2.50574a40.80363,40.80363,0,0,0,2.62432,3.81051q1.208,1.55751,2.56049,2.99539.515.54774,1.04933,1.07684c.17515.17347.35355.34353.52987.51578a.43007.43007,0,0,0,.52945.01207c.09564-.08206.18337-.17607.27368-.26395q.287-.27927.56873-.5639.61759-.624,1.20881-1.27345,1.37133-1.50662,2.59052-3.14283,1.14074-1.53215,2.13486-3.16646c5.9282-9.75208,7.88024-22.25646,4.40279-24.297-1.43451-.84173-2.95895.65937-5.05507-.4892a6.90425,6.90425,0,0,1-3.42439-6.3596"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M314.50478,118.44954c-.12832-3.89346-.405-7.94071-.86607-12.12527A159.69173,159.69173,0,0,0,308.133,78.8782q-.85271-2.90672-1.8129-5.78045"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M242.94935,95.51773c-8.66182-1.40729-20.43924-4.82-29.59659-14.18681-5.33136-5.4533-4.41167-7.43907-11.76268-17.98641-6.95483-9.97884-15.49271-21.94329-29.88017-28.581A54.2093,54.2093,0,0,0,153.08894,30c2.32489,13.53034,7.6859,21.12374,12.12531,25.54969,12.38883,12.35129,30.43153,12.82778,32.91144,24.25054a13.555,13.555,0,0,1-.433,6.92874"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M198.97182,59.71007a22.74082,22.74082,0,0,1,4.94558-6.15753,65.33338,65.33338,0,0,1,46.14923-16.5088h-.16471a65.33338,65.33338,0,0,1,46.14923,16.5088,22.74063,22.74063,0,0,1,4.94558,6.15753"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M185.89728,118.44954c.12832-3.89346.405-7.94071.86607-12.12527A159.69173,159.69173,0,0,1,192.269,78.8782q.85271-2.90672,1.8129-5.78045"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <circle cx="220.17304" cy="99.43163" r="10.68179"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <circle cx="220.17304" cy="99.43163" r="3.39219" style="stroke:#000;stroke-miterlimit:10" />
                                    <circle cx="279.53641" cy="99.43163" r="10.68179"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <circle cx="279.53641" cy="99.43163" r="3.39219" style="stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M262.15072,230.77025c15.5086-2.5197,36.59554-8.63,52.99136-25.40084A52.905,52.905,0,0,0,319.79705,200"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M244.202,223.25435a12.36175,12.36175,0,0,1-6.13123,11.38658c-3.753,2.05645-6.48244-.6312-9.05086.87588a5.80492,5.80492,0,0,0-2.34582,3.37284,16.62337,16.62337,0,0,0-.69189,4.12111,34.08111,34.08111,0,0,0,.13876,5.21276,55.178,55.178,0,0,0,.93942,6.03151c.46447,2.218,1.042,4.41213,1.71,6.57736q1.07276,3.47711,2.45069,6.85028,1.42442,3.4943,3.1613,6.85031,1.18506,2.28431,2.52048,4.48641a73.056,73.056,0,0,0,4.69872,6.82255q2.16287,2.78865,4.58445,5.36311.92207.9807,1.87878,1.928c.3136.31059.633.61507.94869.92348a.77.77,0,0,0,.948.02161c.17123-.14693.32831-.31525.49-.47259q.51387-.5,1.01827-1.00964,1.10578-1.1173,2.16434-2.28006,2.45529-2.69751,4.6382-5.62709,2.04245-2.74321,3.82237-5.66941c10.61417-17.46064,14.10921-39.84917,7.883-43.50257-2.56843-1.50709-5.29787,1.18057-9.05087-.87588a12.36175,12.36175,0,0,1-6.13123-11.38658"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M293.75766,254.83843a19.1329,19.1329,0,0,1,.40352-34.32015"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <circle cx="302.41045" cy="237.77791" r="2.41023" style="stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M237.84928,230.77025c-15.5086-2.5197-36.59554-8.63-52.99136-25.40084A52.905,52.905,0,0,1,180.20295,200"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M206.24234,254.83843a19.1329,19.1329,0,0,0-.40352-34.32015"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <circle cx="197.58955" cy="237.77791" r="2.41023" style="stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M200.47216,422.87358c26.64895-4.32969,62.88338-14.82924,91.05688-43.64714A90.90822,90.90822,0,0,0,299.52784,370"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M254.78345,464.23077a32.87673,32.87673,0,0,1,.69339-58.9735"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <circle cx="269.65184" cy="434.91509" r="4.14158" style="stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Tekolqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M169.13672,90.9541a59.20586,59.20586,0,0,1-2.21192-31.84521,56.09035,56.09035,0,0,1,3.749-11.3628c2.98047-6.70849,4.90332-10.69629,6.21289-13.063-1.874.22509-4.45215.52783-7.51074.88281-6.4961.7539-15.15918,1.74316-23.82227,2.728-17.32324,1.96875-34.64746,3.91748-34.64746,3.91748L110.57031,39.23c18.084-2.03369,64.50489-7.28027,68.85059-7.88525a1.38555,1.38555,0,0,1,.67383-.082l1.37988.07226.05273,1.38379a1.30876,1.30876,0,0,1-.75,1.31787c-.97949,1.17383-4.47265,8.42334-7.36621,14.937a53.11659,53.11659,0,0,0-3.55273,10.76319,56.247,56.247,0,0,0,2.11816,30.25048ZM180.6875,34.07959a2.8688,2.8688,0,0,1-.55176.17529A1.3122,1.3122,0,0,0,180.6875,34.07959Z" />
                                        <polygon points="165.953 90.829 172.927 96.477 174.333 87.614 165.953 90.829" />
                                    </g>
                                    <path
                                        d="M65,63.70418C134.47239,55.50949,155,55,155,55s-19.53844.49182-33.09616,16.64557c-7.707,9.18277-13.67278,24.02067-12.49783,40.73695A57.17378,57.17378,0,0,0,122.29662,145"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="tekolotl_child0">
                                        <set attributename="mask" to="url(#tekolotl_mask0)"
                                            begin="0s;tekolotl_child0.click+1s;tekolotl_child0.click+1s;tekolotl_child0.click;"
                                            end="tekolotl_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="tekolotl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M65,63.70418C134.47239,55.50949,155,55,155,55s-19.53844.49182-33.09616,16.64557c-7.707,9.18277-13.67278,24.02067-12.49783,40.73695A57.17378,57.17378,0,0,0,122.29662,145"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="207.74923706054688 207.74923706054688"
                                            stroke-dashoffset="207.74923706054688">
                                            <animate id="tekolotl_animation0" attributename="stroke-dashoffset"
                                                from="207.74923706054688" to="0" begin="1s;tekolotl_child0.click+1s"
                                                dur="1.1871384974888393s">
                                            </animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="te-ko-lotl">
                                <span slot="after">
                                    <p><i>/t/</i></p>
                                    <p>Tekolotl, búho</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_11" data-name="Layer 11" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Tlacalotl</title>
                                    <path
                                        d="M267.05418,125.17886c1.1566-.145,1.396.62721,2.585.68172,1.41209.0644,2.45574-.99983,3.31485-1.97911,2.99518-3.41408,6.99325-6.4365,8.91485-10.65052,1.12075-2.45779,2.36576-5.29494,1.34127-8.28432a7.382,7.382,0,0,0-.86788-1.73576"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M226.38352,82.25127a3.33187,3.33187,0,0,1-.31782-.55034c-.6292-1.38141.05456-2.43308-.33659-4.20754a6.41488,6.41488,0,0,0-1.683-3.02943c-1.73839,1.62544-2.095,2.93609-2.06171,3.87094a8.85265,8.85265,0,0,0,1.43023,3.88815"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path d="M212.38144,100.47949c.66272-.14155,2.29056-.695,3.74044-3.28078"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M221.95743,77.76847a8.2259,8.2259,0,0,0-.87429.01945c-3.06169.23305-5.29125,2.08472-7.63985,4.03522-.27342.22707-1.499,1.38574-3.04149,3.00325a20.74649,20.74649,0,0,0-2.36045,3.12011c-1.14367,1.78074-1.21633,2.62293-2.75726,6.00333-.414.90819-.84053,1.811-1.29056,2.7019a1.97036,1.97036,0,0,0-.35766,1.19915c.02628.16521.196.917,1.99859,1.57783a16.74149,16.74149,0,0,0,3.53538.78771c.87571.11774,1.76107.26865,2.64543.30295.629.02439,1.25862.029,1.8875.05632.64521.02805,1.29167.04639,1.93722.01795a10.64979,10.64979,0,0,0,1.35127-.14048,12.50884,12.50884,0,0,0,3.18794-1.05947c3.08857-1.45967,4.83.61725,5.91634,3.23532.39093.94216,2.24789,5.41755-.15779,9.94116a11.51985,11.51985,0,0,1-4.93546,4.90226c-2.98032,1.44874-4.29755-.47419-7.53255,1.09509a8.13829,8.13829,0,0,0-3.99578,4.08682c-.09049.21625-.41448.99065-.25244,1.094.19167.12218.93456-.82121,1.90873-1.28058"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M273.34082,104.62611a24.55165,24.55165,0,0,0,12.46607-3.3138c10.138-5.93912,14.53121-19.85634,14.20117-30.97837A32.65843,32.65843,0,0,0,293.60044,51.498c-4.68617-6.11668-11.63192-10.08777-18.7046-13.14575-20.32035-8.78579-43.73119-11.18123-64.86155-4.57711-4.054,1.26707-8.48545,3.34086-9.73214,7.40123-.95212,3.101.30267,6.47034,2.08239,9.18239,2.88388,4.39465,7.61352,7.96288,12.86987,7.9409,3.43278-.01436,6.65509-1.51821,9.83436-2.813a89.662,89.662,0,0,1,21.93452-5.82717c7.58751-1.012,15.42989-1.028,22.759,1.18078s14.12578,6.82535,17.89632,13.48695a22.71408,22.71408,0,0,1,2.9194,11.79882c-.08433,2.73353-1.01118,10.27019-4.52495,10.85147-2.11756.35031-3.19939-2.92436-7.10085-6.7458-9.204-9.01521-22.13317-9.3517-24.32039-9.40862-4.54811-.11836-12.50568-.32546-18.4622,4.79307-3.19335,2.7441-2.954,6.18758-5.18928,6.37165a4.01,4.01,0,0,1-3.09281-1.56629,9.77381,9.77381,0,0,0-1.17231-1.21294,4.76971,4.76971,0,0,0-.91477-.51178"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M205.18228,98.86069c-.12376-1.0874.01947-1.25463.10519-1.2833.15916-.05322.42723.26858.589.46283.37564.45092.33609.67247.547.77839.37246.18708,1.04261-.22935,1.38849-.69424a2.33879,2.33879,0,0,0,.23143-2.01962"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M212.68661,89.17649a1.0894,1.0894,0,0,1,.72253-.37464c2.28614.21725,4.06595-.62471,4.38867-1.60561.09661-.29365.3109-1.35464,0-1.71265a.89317.89317,0,0,1-.24085-.45492c-.02792-.17137.03188-.24043,0-.29437-.27943-.47279-2.58385-.17783-3.77318,1.231a4.92851,4.92851,0,0,0-.84963,2.93358"
                                        style="stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M266.104,257.51011c-10.23584,2.714-13.91468,11.3566-13.42753,15.0693.67526,5.14643,8.70031,7.51533,12.93866,7.08252a19.08631,19.08631,0,0,1,3.08668-.26485,3.34019,3.34019,0,0,1,2.66643,1.3467,3.42348,3.42348,0,0,1,.39976,2.161,7.52086,7.52086,0,0,1-2.62511,4.83142c-2.207,1.92542-5.72475,1.83416-7.54937,4.09277-1.54993,1.9186-.6773,4.20951,1.89038,4.42005,1.09848.09007,1.69369-.6,2.6482-.90592,1.51893-.48688,2.14826.45518,3.50706.51747,1.41209.0644,2.45574-.99983,3.31485-1.97911,2.99518-3.41408,6.99325-6.4365,8.91485-10.65052,1.12075-2.45779,2.36576-5.29494,1.34127-8.28432a7.382,7.382,0,0,0-.86788-1.73576"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M273.34082,274.62611a24.55165,24.55165,0,0,0,12.46607-3.3138c10.138-5.93912,14.53121-19.85634,14.20117-30.97837a32.65843,32.65843,0,0,0-6.40762-18.836c-4.68617-6.11668-11.63192-10.08777-18.7046-13.14575-20.32035-8.78579-43.73119-11.18123-64.86155-4.57711-4.054,1.26707-8.48545,3.34086-9.73214,7.40123-.95212,3.101.30267,6.47034,2.08239,9.18239,2.88388,4.39465,7.61352,7.96288,12.86987,7.9409,3.43278-.01436,6.65508-1.51821,9.83435-2.813a91.29552,91.29552,0,0,1,21.93452-5.82717c7.55783-1.008,15.40187-1.03649,22.759,1.18078,7.32909,2.20883,14.12578,6.82535,17.89632,13.487A22.71411,22.71411,0,0,1,290.598,246.126a19.58262,19.58262,0,0,1-2.80748,9.556c-1.04929,1.516-2.52313,1.84353-3.94033.54265-1.74047-1.59762-2.81437-3.74363-4.39009-5.483-5.56611-6.14412-13.861-9.39778-21.9897-10.17163-7.83593-.746-18.44653.274-22.942,7.69031a16.38491,16.38491,0,0,1-1.47032,2.30273c-2.89439,3.35018-9.11991-2.6906-12.86321-2.0282a15.3615,15.3615,0,0,0-7.69939,4.19019,38.07557,38.07557,0,0,0-7.6954,10.68028c-1.42788,2.96467-1.8218,5.56446,1.95073,6.57722a22.96431,22.96431,0,0,0,12.74749-.33812c7.18262-2.34274,8.731,7.61463,6.71847,12.397a9.23568,9.23568,0,0,1-5.27185,5.1212c-2.56523.98981-5.96679.20922-8.19675,1.907-1.0804.82258-2.724,3.00076-1.58613,4.33936a2.42776,2.42776,0,0,0,1.96655.74425c1.06093-.04833,2.06187-.84666,3.10876-.78306.966.05868,1.50366.8506,2.44177.95582.76013.08527,1.31535-.65344,1.97238-1.26229,1.34578-1.24663,3.36841-1.66558,5.05154-2.28886,3.05156-1.13,6.96728-.88464,8.89471-3.89314,2.09849-3.27549,1.51585-5.50769,3.33254-7.94086,1.83965-2.46391,6.61622-4.18479,19.46324-.9961"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M215.15415,119.54076a5.2797,5.2797,0,0,0-2.7349,1.17811A5.94406,5.94406,0,0,0,210.61,123.9166c-.135.47543-.31685,1.287-.16829,1.34642.17934.0717.61321-1.04353,1.43055-1.97755a7.70794,7.70794,0,0,1,3.519-2.10872,4.92569,4.92569,0,0,0-2.4671,1.98249,4.39125,4.39125,0,0,0-1.0519,2.44038c-.00438.06326-.061.95018.1683,1.00981.26063.0678.63733-.99938,1.17813-1.80924a6.1675,6.1675,0,0,1,2.56967-2.09563,5.58962,5.58962,0,0,1,.941-.402.13319.13319,0,0,1,.06666-.00535c.15427.04052-.15439.29514-.18643.33416-.13753.16746-.27748.33293-.41478.50058a4.20663,4.20663,0,0,0-.69.981c-.40658.98571-.81156,2.37732-.58905,2.48245.12886.06088.43828-.33727,1.05189-1.136a16.06935,16.06935,0,0,1,1.72983-2.19236,8.2489,8.2489,0,0,1,3.81342-2.05164c.9499-.20178,1.91971-.26715,2.87379-.44048,3.00786-.54644,8.70117-1.53324,10.21307-3.89314,2.09849-3.27549,1.51585-5.50769,3.33254-7.94086,1.83965-2.46391,6.61622-4.18479,19.46324-.9961"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M266.104,87.51011c-10.23584,2.71405-13.91468,11.3566-13.42753,15.0693.67526,5.14643,8.70031,7.51533,12.93866,7.08252a19.08631,19.08631,0,0,1,3.08668-.26485,3.34019,3.34019,0,0,1,2.66643,1.3467,3.42348,3.42348,0,0,1,.39976,2.161,7.52083,7.52083,0,0,1-2.62512,4.83142,8.27267,8.27267,0,0,1-2.72628,1.44528c-.9809.349-1.9585.66825-2.9105,1.09214-.27827.1239-.5695.21511-.85058.33208a6.7587,6.7587,0,0,0-.75381.38051,8.57174,8.57174,0,0,0-1.272.88779,8.13756,8.13756,0,0,0-1.62962,1.86465,7.08282,7.08282,0,0,0-.55031,1.0475c-.09049.21625-.41448.99065-.25244,1.094.19167.12218.99926-.817,1.84077-1.33239"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M264.13,121.67258a5.2797,5.2797,0,0,0-2.7349,1.17811,5.944,5.944,0,0,0-1.80924,3.19773c-.135.47543-.31686,1.287-.1683,1.34642.17934.0717.61321-1.04353,1.43055-1.97755a7.708,7.708,0,0,1,3.519-2.10872,4.92575,4.92575,0,0,0-2.4671,1.98249,4.39125,4.39125,0,0,0-1.0519,2.44038c-.00438.06327-.061.95018.1683,1.00981.26063.0678.63733-.99938,1.17813-1.80924a6.1675,6.1675,0,0,1,2.56967-2.09563,5.59044,5.59044,0,0,1,.941-.402.1333.1333,0,0,1,.06666-.00535c.15427.04052-.15439.29515-.18643.33416-.13753.16747-.27747.33293-.41478.50058a4.20663,4.20663,0,0,0-.69.981c-.40658.98571-.81156,2.37732-.589,2.48245.12886.06088.43828-.33726,1.05189-1.136a16.06942,16.06942,0,0,1,1.72984-2.19236,8.249,8.249,0,0,1,3.81341-2.05164"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <circle cx="215.69451" cy="257.02622" r="2.52453" />
                                    <path
                                        d="M220.115,370h82.13121a45.39212,45.39212,0,0,1,0,7.62969c-2.14637,25.37956-24.824,50.03387-49.39016,55.8014-11.24569,2.64021-28.02949,1.17115-34.54071-9.896-4.28153-7.27939,3.92385-15.391,9.01649-19.64915a55.60589,55.60589,0,0,1,27.1201-12.04826c11.20158-1.754,21.51126,3.29615,29.74134,10.56041,10.48555,9.25506,11.45352,31.11877-1.00977,50.82711"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M235.37434,433.7302c4.46893,3.97341,7.41574,9.94418,2.48019,14.90338-7.836,7.87351-19.51294,8.72282-29.85739,6.86424"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <ellipse cx="209.79721" cy="412.68444" rx="13.46413" ry="7.18087"
                                        transform="translate(-178.23461 160.18766) rotate(-29.99997)"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Tlachalqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M165.82715,99.45605l-2.6582-1.38964a173.26669,173.26669,0,0,0,13.46972-34.209,173.116,173.116,0,0,0,5.61426-31.813c-23.873-.13037-58.56152-.23632-60.43066-.01318l-.10938-.92334-.502-2.00977c1.39453-.34912,44.293-.147,62.66992-.04492l1.60254.00879-.11524,1.59912a175.603,175.603,0,0,1-19.541,68.79492Z" />
                                        <polygon points="161.12 95.456 161.404 104.426 169.031 99.695 161.12 95.456" />
                                        <path
                                            d="M51.23877,137.96582c-1.12061-1.60352-10.75391-16.16309-3.90918-33.41309a35.65552,35.65552,0,0,1,19.521-19.56054l1.19043,2.7539a32.712,32.712,0,0,0-17.92286,17.91309c-6.373,16.06152,3.16993,30.002,3.57959,30.58789Z" />
                                        <polygon points="67.715 91.138 73.574 84.34 64.758 82.663 67.715 91.138" />
                                        <path
                                            d="M138.73926,154.30664a44.813,44.813,0,0,0-14.55078-14.56348l1.58007-2.55078A47.81735,47.81735,0,0,1,141.292,152.73047Z" />
                                        <polygon points="135.366 154.551 143.021 159.234 143.25 150.263 135.366 154.551" />
                                    </g>
                                    <path
                                        d="M65,55h87.35974c0,9.4867-8.66682,60.654-46.55657,84.92742-9.14242,5.85914-27.214,8.66368-33.07666-2.9893-3.288-6.544-2.96821-18.08821,1.08233-25.44747a17.62428,17.62428,0,0,1,9.75737-8.2397c27.64861-10.979,67.87521,36.8178,71.43379,40.39418"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="tlacalotl_child0">
                                        <set attributename="mask" to="url(#tlacalotl_mask0)"
                                            begin="0s;tlacalotl_child0.click+1s;tlacalotl_child0.click+1s;tlacalotl_child0.click;"
                                            end="tlacalotl_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="tlacalotl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M65,55h87.35974c0,9.4867-8.66682,60.654-46.55657,84.92742-9.14242,5.85914-27.214,8.66368-33.07666-2.9893-3.288-6.544-2.96821-18.08821,1.08233-25.44747a17.62428,17.62428,0,0,1,9.75737-8.2397c27.64861-10.979,67.87521,36.8178,71.43379,40.39418"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="350.0254211425781 350.0254211425781"
                                            stroke-dashoffset="350.0254211425781">
                                            <animate id="tlacalotl_animation0" attributename="stroke-dashoffset"
                                                from="350.0254211425781" to="0" begin="1s;tlacalotl_child0.click+1s"
                                                dur="2.000145263671875s">
                                            </animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="tla-ca-lotl">
                                <span slot="after">
                                    <p><i>/t͡ɬ/</i></p>
                                    <p>Tlachalotl, ardilla</p>
                                </span>
                            </xamix-element>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <p>
                                <svg id="Layer_12" data-name="Layer 12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Xocitl</title>
                                    <path
                                        d="M237.55872,95.5966a123.82983,123.82983,0,0,1,1.90733-34.6922c2.99544-14.67847,7.97144-23.66594,10.49031-27.66595h.22213c2.51887,4,7.49487,12.98748,10.49031,27.666a123.82983,123.82983,0,0,1,1.90733,34.6922"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M277.7625,110.21251a29.21293,29.21293,0,0,0,8.7714-9.36846c7.44527-12.80161,2.89434-28.12127,1.7889-31.84246-1.92051-6.46493-3.33366-6.36923-7.87117-18.24681-5.56064-14.55582-5.54651-20.58412-7.87117-20.75126-3.7782-.27165-9.59692,15.23656-10.01786,30.41134a69.92435,69.92435,0,0,0,8.94452,35.42026"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M222.2375,110.21251a29.21293,29.21293,0,0,1-8.7714-9.36846c-7.44527-12.80161-2.89434-28.12127-1.7889-31.84246,1.92051-6.46493,3.33366-6.36923,7.87117-18.24681,5.56064-14.55582,5.54651-20.58412,7.87117-20.75126,3.7782-.27165,9.59692,15.23656,10.01786,30.41134a69.92435,69.92435,0,0,1-8.94452,35.42026"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M248.10832,134.81828a54.24563,54.24563,0,0,0,.11925-11.56823,3.30929,3.30929,0,0,0-.35777-1.43112c-.97357-1.70539-3.5215-1.395-5.16584-1.34718a24.13917,24.13917,0,0,1-7.58048-.56538,5.64582,5.64582,0,0,1-2.30722-1.23171c-.585-.56275-1.0056-1.28492-1.58172-1.86082a13.72554,13.72554,0,0,0-3.90727-2.49338c-3.474-1.64362-5.72986-2.37886-8.229-1.90818-1.61406.304-2.88167,1.0266-2.9815.83483-.13156-.25272,1.87131-1.88838,3.9356-2.62373,4.37305-1.55781,8.97622,1.07149,10.49487,1.90816,3.56526,1.96419,5.58171,4.50508,5.963,4.17411.47729-.41426-2.86088-4.23973-2.14669-5.00893.56881-.61262,3.60581.82365,5.60522,3.10076,1.55847,1.77493,1.44961,3.49005,2.02742,3.45855.78822-.043,1.8664-3.12451.83483-5.486-.72862-1.668-2.2112-2.29316-2.02742-2.62372.21675-.38988,2.58049-.062,4.17411,1.43112,2.58274,2.41978,2.10618,6.92871,2.26594,6.91708.13918-.01012-.49487-3.3588.59629-6.67856a11.36022,11.36022,0,0,1,.8632-1.96842,12.46453,12.46453,0,0,1,1.192-1.76311q.29635-.36782.61764-.71455.14848-.16053.30173-.31656c.04081-.04158.08568-.10684.14049-.12767a.19864.19864,0,0,1,.07526-.01248h.113a.19868.19868,0,0,1,.07526.01248c.05481.02083.09968.08609.14049.12767q.15319.156.30173.31656.32073.34674.61764.71455a12.46453,12.46453,0,0,1,1.192,1.76311,11.36022,11.36022,0,0,1,.8632,1.96842c1.09116,3.31976.45711,6.66844.59629,6.67856.15976.01163-.3168-4.4973,2.26594-6.91708,1.59362-1.49308,3.95736-1.821,4.17411-1.43112.18378.33056-1.2988.95574-2.02742,2.62372-1.03157,2.36146.04661,5.443.83483,5.486.57781.0315.469-1.68362,2.02742-3.45855,1.99941-2.27711,5.03641-3.71338,5.60522-3.10076.71419.7692-2.624,4.59467-2.14669,5.00893.38131.331,2.39776-2.20992,5.963-4.17411,1.51865-.83667,6.12182-3.466,10.49487-1.90816,2.06429.73535,4.06716,2.371,3.9356,2.62373-.09984.19177-1.36744-.53085-2.9815-.83483-2.49913-.47068-4.755.26456-8.229,1.90818a13.72554,13.72554,0,0,0-3.90727,2.49338c-.57612.5759-.99675,1.29807-1.58172,1.86082a5.64582,5.64582,0,0,1-2.30722,1.23171,24.13917,24.13917,0,0,1-7.58048.56538c-1.64434-.04778-4.19227-.35821-5.16584,1.34718a3.30929,3.30929,0,0,0-.35777,1.43112,54.24563,54.24563,0,0,0,.11925,11.56823"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M237.661,265.59839a123.82991,123.82991,0,0,1,1.90733-34.69221c2.99544-14.67846,7.97144-23.66593,10.49031-27.66594h.22213c2.51887,4,7.49487,12.98748,10.49031,27.66594a123.82991,123.82991,0,0,1,1.90733,34.69221"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M228.59514,265.83691a69.92432,69.92432,0,0,0,8.9445-35.42027c-.42092-15.17477-6.23966-30.683-10.01786-30.41133-2.32465.16714-2.31051,6.19544-7.87117,20.75126-4.53749,11.87758-5.95064,11.78187-7.87116,18.24681-1.10543,3.72118-5.65636,19.04086,1.7889,31.84245a29.21316,29.21316,0,0,0,8.77139,9.36847,56.34886,56.34886,0,0,0,28.18067,7.74c5.54229.00062,16.98459.00188,27.34435-7.74a31.28835,31.28835,0,0,0,8.77139-9.36847c.00008-.00012,7.59059-12.83906,1.78889-31.84245-.5266-1.72484-1.167-3.35368-1.167-3.3538a55.43577,55.43577,0,0,0-3.21448-6.6152,79.98615,79.98615,0,0,1-3.48965-8.27781c-5.37251-13.83737-5.66332-20.53634-7.87117-20.75126-3.37837-.32888-9.58164,14.68581-10.01784,30.41133a69.92429,69.92429,0,0,0,8.94452,35.42027"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M228.59514,435.83513a69.92439,69.92439,0,0,0,8.9445-35.42028c-.42092-15.17477-6.23966-30.683-10.01786-30.41133-2.32465.16714-2.31051,6.19544-7.87117,20.75126-4.53749,11.87758-5.95064,11.78188-7.87116,18.24681-1.10543,3.72118-5.65636,19.04086,1.7889,31.84246a29.21312,29.21312,0,0,0,8.77139,9.36846,56.34886,56.34886,0,0,0,28.18067,7.74c5.54229.00062,16.98459.00188,27.34435-7.74a31.28842,31.28842,0,0,0,8.77139-9.36846c.00008-.00012,7.59059-12.83907,1.78889-31.84246-.5266-1.72483-1.167-3.35368-1.167-3.3538a55.43654,55.43654,0,0,0-3.21448-6.6152,79.98615,79.98615,0,0,1-3.48965-8.27781c-5.37251-13.83737-5.66332-20.53633-7.87117-20.75126"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Xocilqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M160.61914,122.43457l-2.67969-1.34961a79.512,79.512,0,0,0,8.45606-31.55078,80.36193,80.36193,0,0,0-6.01465-35.08594l2.76953-1.15136A83.3756,83.3756,0,0,1,169.3916,89.7002,82.51991,82.51991,0,0,1,160.61914,122.43457Z" />
                                        <polygon points="155.923 118.433 156.149 127.404 163.806 122.724 155.923 118.433" />
                                        <path
                                            d="M61.40479,92.98926c-.84034-3.99805-2.895-17.85791,5.9375-28.33887C78.76758,51.09277,99.0918,53.62646,109.96875,58.6377a38.80687,38.80687,0,0,1,11.00684,7.66259L118.87012,68.437a35.81057,35.81057,0,0,0-10.15723-7.07471c-10.04-4.62744-28.73193-7.05419-39.07666,5.22168-7.958,9.44288-6.06543,22.126-5.2959,25.78809Z" />
                                        <polygon points="115.623 69.455 124.149 72.255 122.312 63.471 115.623 69.455" />
                                    </g>
                                    <path
                                        d="M139.75094,55a89.95978,89.95978,0,0,1,6.57022,29.99734c.39419,9.30505,1.89078,44.52693-19.718,56.204-11.88482,6.422-28.398,4.44661-39.44319-4.00422a30.78015,30.78015,0,0,1-6.86951-7.04742c-12.352-17.75587-6.71623-51.48282,7.76747-56.837,7.33674-2.70761,17.33077,1.70846,22.711,9.47283,6.58484,9.49573,3.35084,21.02788,2.08786,25.57359-4.76708,17.2067-19.76906,27.41938-23.00307,28.99819"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="xocitl_child0">
                                        <set attributename="mask" to="url(#xocitl_mask0)"
                                            begin="0s;xocitl_child0.click+1s;xocitl_child0.click+1s;xocitl_child0.click;"
                                            end="xocitl_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="xocitl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M139.75094,55a89.95978,89.95978,0,0,1,6.57022,29.99734c.39419,9.30505,1.89078,44.52693-19.718,56.204-11.88482,6.422-28.398,4.44661-39.44319-4.00422a30.78015,30.78015,0,0,1-6.86951-7.04742c-12.352-17.75587-6.71623-51.48282,7.76747-56.837,7.33674-2.70761,17.33077,1.70846,22.711,9.47283,6.58484,9.49573,3.35084,21.02788,2.08786,25.57359-4.76708,17.2067-19.76906,27.41938-23.00307,28.99819"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="299.0767822265625 299.0767822265625"
                                            stroke-dashoffset="299.0767822265625">
                                            <animate id="xocitl_animation0" attributename="stroke-dashoffset"
                                                from="299.0767822265625" to="0" begin="1s;xocitl_child0.click+1s"
                                                dur="1.7090101841517857s"></animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="xo-citl">
                                <span slot="after">
                                    <p><i>/ʃ/</i></p>
                                    <p>Xochitl, flor</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_13" data-name="Layer 13" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Cakaltli</title>
                                    <path
                                        d="M275.52385,102.17219c-3.0411-10.24345-7.34994-16.899-11.02693-16.55987a4.21825,4.21825,0,0,0-2.81516,1.756l-9.84729,7.21346L230.067,114.40647l3.676-.47972-6.18511,4.17192,17.84346-4.46489q9.64568-3.00339,10.10563-1.95967.71677,1.6269-20.88425,13.0867l18.45524-6.7345,4.242-5.14675-.63911,3.28795,3.06387-4.3521-.51129,2.63036,3.70087-4.996-.65508,3.37014,3.42231-4.87956-.63911,3.28795,3.42694-4.02561Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <circle cx="251.99366" cy="111.86557" r="1.48028"
                                        style="stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M275.52385,102.17218l13.5545-9.14262c-3.04111-10.24344-7.34994-16.89895-11.02693-16.55986a4.21825,4.21825,0,0,0-2.81516,1.756L265.1214,85.69106"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M289.02469,92.97652a13.79109,13.79109,0,0,0,5.10171-4.08395c3.87632-5.089,2.63932-11.17366,2.41381-12.19851l-16.37948-7.2358a12.81461,12.81461,0,0,0-3.08332,3.79384,12.67675,12.67675,0,0,0-1.386,4.48484"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M296.24888,85.028a13.791,13.791,0,0,0,3.87085-5.26522c2.42708-5.91891-.3426-11.476-.82569-12.40759l-17.69413-2.74987a12.8145,12.8145,0,0,0-1.99633,4.46259q-.12542.54518-.19783,1.07412"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M301.08362,73.69764a16.56852,16.56852,0,0,0,2.08175-6.82131c.36781-6.38662-4.0602-10.73924-4.82026-11.46277l-17.62539,3.16065a12.8145,12.8145,0,0,0-.43467,4.86941,12.44167,12.44167,0,0,0,.53892,2.53112"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M302.35515,61.56015a13.21357,13.21357,0,0,0,.103-2.37852c-.30179-6.39008-5.16053-10.256-5.99206-10.89612L279.2676,53.27123a12.81465,12.81465,0,0,0,.07671,4.88817,12.46913,12.46913,0,0,0,.9614,2.80863"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M279.56,53.26733c-.60282-1.81165-2.51171-6.27845-7.15-7.98a11.036,11.036,0,0,0-5.4345-.51255L274.174,34.402A35.70365,35.70365,0,0,1,290.721,42.25688a34.2,34.2,0,0,1,5.48878,5.99324"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M273.30061,35.62174c-1.1527-.5174-2.52634-1.098-4.08466-1.68764a53.70713,53.70713,0,0,0-14.70219-3.79617c-8.44744-.72515-15.5702,1.58782-15.55346,2.77741.00786.55882,1.58921.72824,2.04823,2.18953.33218,1.05747-.30829,1.56611.07777,2.233.71667,1.238,3.35763.23471,4.08028,1.39026.63764,1.0196-.94835,2.5524-.37653,3.25369.72423.88819,3.546-1.23,5.32-.16017,1.1263.67923.77644,2.13492,1.36329,3.08005.973,1.56705,4.69383,2.20173,16.31616-1.4349"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <polyline points="274.096 79.054 263.085 80.297 262.894 78.418 275.703 77.453"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="263.336 80.217 252.212 87.563 251.188 85.975 262.95 78.821"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="252.178 87.598 241.153 94.879 240.129 93.291 251.412 86.428"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M241.18263,94.89271l-.05755-.03133q-4.74886-2.58624-4.6507-2.78508.08465-.17185,3.786,1.4377"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="277.198 73.052 270.324 72.864 270.37 71.648 277.742 72.123"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="270.496 72.852 262.736 76.544 262.225 75.438 270.375 71.927"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="262.711 76.563 255.02 80.222 254.509 79.116 262.327 75.748"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M255.03786,80.23319l-.03393-.02517a16.20107,16.20107,0,0,1-2.719-2.19513,10.50668,10.50668,0,0,1,2.28789,1.25744"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="279.468 69.604 272.068 69.402 272.115 68.186 279.701 68.675"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="272.235 69.373 264.475 73.065 263.964 71.96 272.114 68.448"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="264.451 73.084 256.759 76.743 256.248 75.638 264.067 72.269"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M256.77718,76.75453l-.03392-.02516a16.19994,16.19994,0,0,1-2.719-2.19513,10.50694,10.50694,0,0,1,2.28788,1.25743"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="280.834 65.748 274.504 65.576 274.55 64.359 280.495 64.742"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="274.671 65.547 266.91 69.239 266.399 68.133 274.549 64.621"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="266.886 69.258 259.194 72.917 258.683 71.811 266.502 68.442"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M259.21224,72.928l-.03393-.02516a16.20006,16.20006,0,0,1-2.719-2.19513,10.50722,10.50722,0,0,1,2.28788,1.25743"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="280.212 62.234 275.199 62.097 275.246 60.88 280.24 61.202"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="275.366 62.068 267.606 65.76 267.095 64.654 275.245 61.143"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="267.581 65.779 259.89 69.438 259.379 68.333 267.198 64.964"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M259.908,69.44936l-.03392-.02517a16.19994,16.19994,0,0,1-2.719-2.19513A10.50706,10.50706,0,0,1,259.443,68.4865"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="279.382 58.356 276.243 58.271 276.29 57.054 279.166 57.239"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="276.41 58.242 268.65 61.933 268.139 60.828 276.289 57.316"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <polyline points="268.625 61.953 260.934 65.611 260.423 64.506 268.241 61.137"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M260.95157,65.62284l-.03393-.02517a16.20006,16.20006,0,0,1-2.719-2.19513A10.50706,10.50706,0,0,1,260.48656,64.66"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M242.94128,102.72253c-10.39684,2.28484-16.60924.44958-20.50481-2.09124-3.80437-2.48133-4.73113-5.19988-8.408-5.80269-8.49829-1.39325-19.40921,10.52906-17.40807,15.987,1.61745,4.41143,10.84248,2.34247,14.21067,8.408,1.98845,3.58085.81956,7.987-.23685,10.77642"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M247.30657,98.74594c-7.73728,2.71091-12.73115,1.86009-15.98843.34586-5.47861-2.54686-6.24436-7.0651-14.21067-10.77642-3.49861-1.62992-7.2794-3.32327-11.36853-1.89475a11.346,11.346,0,0,0-7.579,10.1843c-.08982,5.915,4.88128,10.88747,8.88167,11.01327,2.662.08371,3.44729-2.024,6.98691-2.01318.56716.00173,4.595.07516,6.86849,3.079,2.00638,2.65091,1.95689,6.67307-.11843,10.06589"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M228.249,287.70567c.41526.14024,15.7691-3.4268,17.15238-3.77294.14017-.00354,4.02243-.97864,4.329-.2828.47787,1.0846-.707,3.77-15.10764,11.40983l18.45526-6.7345L268.48885,277.502c8.015-5.62906,17.08268-10.61629,24.3118-17.24616,7.52207-6.89853,10.53371-18.7486,9.588-28.638-.54232-5.67124-2.46788-11.36877-6.34924-15.53916-3.84876-4.13536-9.25071-6.43254-14.59577-8.26134a199.17258,199.17258,0,0,0-23.30953-6.1583c-4.6732-.98872-9.42666-1.90367-14.19363-1.59975-1.529.09748-3.32831.52931-3.86651,1.96375a3.553,3.553,0,0,0-.10914,1.69421c.69147,5.44078,5.87915,9.36776,11.214,10.64031s10.90909.53243,16.38959.32176a12.17541,12.17541,0,0,1,6.34375.98109,10.47284,10.47284,0,0,1,3.97806,4.57123,25.95928,25.95928,0,0,1-2.81492,27.80758,31.3177,31.3177,0,0,1-10.09627,8.06373,115.10388,115.10388,0,0,0-13.14463,8.7778q-6.75795,6.15477-13.51627,12.30991C234.95041,280.25774,229.66927,283.11932,228.249,287.70567Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <circle cx="248.24366" cy="283.41451" r="1.48028"
                                        style="stroke:#000;stroke-miterlimit:10;stroke-width:2px" />
                                    <path
                                        d="M231.969,387.15605c2.36686-3.13614,11.41712-14.34843,26.7506-16.71914,19.03677-2.94326,36.58756,9.46864,43.09819,22.66372,12.49184,25.31719-10.36246,58.45208-33.80977,70.22034-10.20683,5.12284-30.27768,11.0913-39.38285,1.85767a16.15051,16.15051,0,0,1-4.0869-14.4899c2.651-11.19328,19.22952-15.45252,28.23675-15.97606,21.782-1.26608,37.01938,17.12111,39.38285,20.06294"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Chakalqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M153.20215,54.68018a65.46962,65.46962,0,0,0-70.5459-13.39942l-1.14258-2.77441a68.4723,68.4723,0,0,1,73.76074,14.00488Z" />
                                        <polygon points="150.048 55.823 158.681 58.277 156.49 49.574 150.048 55.823" />
                                        <path
                                            d="M114.88281,156.9834a60.14893,60.14893,0,0,1-9.89551-.8252l.49415-2.959a53.68786,53.68786,0,0,0,31.12988-3.86133,52.89348,52.89348,0,0,0,19.8584-15.89062l2.3789,1.82812a55.89,55.89,0,0,1-20.99121,16.791A55.07937,55.07937,0,0,1,114.88281,156.9834Z" />
                                        <polygon points="107.47 150.478 98.936 153.255 105.608 159.258 107.47 150.478" />
                                        <path
                                            d="M63.666,106.39258l-2.99122-.23242c.29346-3.78516,1.82422-13.35205,9.68555-20.40479,10.88281-9.76318,25.30127-7.02392,29.46094-5.95264A34.83173,34.83173,0,0,1,114.415,87.68018L112.417,89.91846A31.84881,31.84881,0,0,0,99.07275,82.708c-3.79589-.978-16.936-3.48731-26.70947,5.28076C65.31006,94.31689,63.93115,102.9668,63.666,106.39258Z" />
                                        <polygon points="109.198 91.055 117.83 93.511 115.642 84.807 109.198 91.055" />
                                        <path
                                            d="M47.78662,137.97266q-2.18481,0-4.36767-.17774l.24316-2.99023a50.5352,50.5352,0,0,0,25.0376-4.36231L69.939,133.1748a53.50879,53.50879,0,0,1-22.15234,4.79786Z" />
                                        <polygon points="45.439 131.946 37.149 135.383 44.27 140.845 45.439 131.946" />
                                    </g>
                                    <path
                                        d="M87.57,61.99088c3.0051-1.92481,14.28362-8.67549,28.58245-6.59835,17.6939,2.56871,28.54418,16.984,31.69451,28.75441,5.83425,21.796-11.28617,47.43478-32.99447,50.6751-12.999,1.94558-25.27156,1.29475-30.99875-9.76943-.53521-1.03857-2.92856-4.34815-.74934-11.86043.17586-.61623,2.56155-8.32932,10.69738-8.93857,7.58532-.57469,13.78658,3.01182,14.61237,9.22247C110.09633,126.16044,94.123,140.27109,71,145"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="cakaltli_child0">
                                        <set attributename="mask" to="url(#cakaltli_mask0)"
                                            begin="0s;cakaltli_child0.click+1s;cakaltli_child0.click+1s;cakaltli_child0.click;"
                                            end="cakaltli_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="cakaltli_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M87.57,61.99088c3.0051-1.92481,14.28362-8.67549,28.58245-6.59835,17.6939,2.56871,28.54418,16.984,31.69451,28.75441,5.83425,21.796-11.28617,47.43478-32.99447,50.6751-12.999,1.94558-25.27156,1.29475-30.99875-9.76943-.53521-1.03857-2.92856-4.34815-.74934-11.86043.17586-.61623,2.56155-8.32932,10.69738-8.93857,7.58532-.57469,13.78658,3.01182,14.61237,9.22247C110.09633,126.16044,94.123,140.27109,71,145"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="276.6460266113281 276.6460266113281"
                                            stroke-dashoffset="276.6460266113281">
                                            <animate id="cakaltli_animation0" attributename="stroke-dashoffset"
                                                from="276.6460266113281" to="0" begin="1s;cakaltli_child0.click+1s"
                                                dur="1.5808344377790178s">
                                            </animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="ca-kal-tli">
                                <span slot="after">
                                    <p><i>/t͡ʃ/</i></p>
                                    <p>Chakaltli, camarón</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_14" data-name="Layer 14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Sakalikpatli</title>
                                    <path
                                        d="M185.42827,123.04159c1.96839-.91825,5.02455-2.27977,8.84274-3.708a120.31836,120.31836,0,0,1,43.66075-6.96275c7.25811.14353,14.07129.502,18.05135,7.35441,1.7009,2.92843,3.00246,6.20148,5.51822,8.46858,2.83041,2.55065,6.74715,3.42679,10.47586,4.21029a18.1275,18.1275,0,0,0-8.10127-7.87717,17.10886,17.10886,0,0,0,14.03214.4304,12.05208,12.05208,0,0,0-9.11951-5.12585c2.63788-2.38025,6.721-2.24569,10.10682-1.16871s6.51988,2.93967,10.00474,3.6323a15.6056,15.6056,0,0,0,9.70976-1.22482,16.86967,16.86967,0,0,0-9.95054-3.396,6.39029,6.39029,0,0,1,5.64957-1.33958c2.45928.622,4.45369,2.69987,6.98243,2.9008,2.46706.196,4.67922-1.4512,6.46091-3.16888a16.38486,16.38486,0,0,0-15.84072-3.81122,7.21817,7.21817,0,0,1-2.2536.48763,1.8988,1.8988,0,0,1-1.81958-1.17622c4.5353-.46245,9.6381-1.24017,12.27769-4.95707a1.19787,1.19787,0,0,0,.292-.76108c-.06252-.71955-1.08948-.78354-1.794-.62458a114.76734,114.76734,0,0,0-15.449,4.6487,4.96606,4.96606,0,0,0-2.63314,1.74462c-.44008.71394-.50506,1.616-.9736,2.31162-1.02031,1.51475-3.24545,1.32043-5.069,1.21948a18.74,18.74,0,0,0-7.68777,1.19789c-1.65123.62992-3.38344,1.51221-5.09522,1.07271-1.93048-.49565-3.03561-2.4511-4.08884-4.14324-3.07506-4.94044-8.30351-6.95493-13.96247-6.63939-7.21548.40232-14.41613-.76438-21.64226-.38691a84.18181,84.18181,0,0,0-17.74475,2.99666c-6.10095,1.66509-8.46408,3.69915-9.13226,2.92319-1.37153-1.59276,7.60108-10.61895,20.97168-25.73322,19.40214-21.93237,26.889-32.74676,35.34475-31.21815,2.26487.40944,6.24544,2.002,12.91584,2.098a44.1366,44.1366,0,0,0,8.12593-.63847,12.60579,12.60579,0,0,0-5.54475-4.19316,12.8018,12.8018,0,0,0-4.19992-.77554,13.4896,13.4896,0,0,0,7.48012.59869,11.98961,11.98961,0,0,0,6.03462-3.757,20.17059,20.17059,0,0,0-5.59376-1.38506c-5.69708-.55556-9.43967,1.62112-9.7318,1.00057-.33408-.70967,3.87369-5.0158,9.09919-4.991,6.39725.0304,10.35985,6.533,10.75892,7.21017a13.023,13.023,0,0,0,5.67606,3.37617,13.258,13.258,0,0,0,8.31753-.44,13.64447,13.64447,0,0,0,3.3088-1.81491c-3.49751-2.325-6.12462-2.58824-7.91752-2.36192-1.63609.20651-3.1573.89389-4.33121.04145-.89921-.653-1.48454-2.12946-1.002-2.9435,1.10344-1.86146,8.37017-1.236,12.82559,2.79871,2.72842,2.4708,2.30968,4.32487,4.57809,5.9319,2.29263,1.6242,6.22628,2.21408,13.35486-.70327-3.76037-2.99427-6.82029-3.76425-8.944-3.90136-1.32068-.08526-2.86539.03638-2.921-.28506-.06283-.363,1.77243-1.29353,3.76865-1.33871,2.49075-.05639,3.318,1.30892,5.24275,1.37893,1.2807.04657,3.165-.47605,5.55843-3.29718a31.23078,31.23078,0,0,0-13.72283-5.03812c-5.00006-.56655-9.97679.97564-10.07464.52644-.09-.41333,4.25248-.82592,7.55975-3.96448a13.76444,13.76444,0,0,0,3.74761-6.84c-5.07431-.403-8.28267.81766-10.21615,1.92844a31.017,31.017,0,0,0-4.62647,3.54752c-4.06885,3.50485-4.61427,4.98664-6.64619,5.26786-2.74136.3794-5.63952-1.77927-5.45225-2.78708.19188-1.03258,3.5151-.27733,6.70806-2.10669,3.0112-1.72522,4.43219-4.90449,5.15983-7.28349a22.85549,22.85549,0,0,0-6.32642.35775,17.13665,17.13665,0,0,0-8.37266,3.59919c-2.18687,1.90274-1.7481,2.8135-3.57752,3.7999-2.54127,1.37021-4.3057.10767-7.15361.81148-3.8601.95394-6.01389,4.59743-6.29109,5.04-1.87319,2.9905-1.23907,5.15748-3.15033,6.14816-1.00566.52127-1.83653.261-4.21217-.07351-2.554-.35961-5.15174-.30864-7.71414-.60277-3.34317-.38377-18.92981,14.41669-61.27153,63.771"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M182.52279,113.07951c-.8759.2846-1.13255,2.97015-.25877,5.65931s2.29216,4.63843,3.16805,4.35383.87762-2.69531.00385-5.38446S183.39869,112.79491,182.52279,113.07951Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M261.22753,288.56569c.30249-.08019.589-.285.8709-.38934q.51008-.1893,1.01974-.37968,1.12123-.41881,2.24052-.84282,2.61906-.99212,5.22746-2.01209,3.0638-1.19788,6.11276-2.43323.91-.3687,1.81869-.74072c12.40341-5.07814,16.19648-7.17345,21.0328-5.57774,5.19671,1.71461,10.12291,7.20414,9.06386,10.57448-1.97862,6.29682-23.28218.2103-31.49109,11.73654-2.08829,2.93218-2.49535,5.83342-5.22914,6.62358-2.60391.75261-5.2408-.94178-7.17219-2.50906a30.48041,30.48041,0,0,1-5.06444-4.985,57.18791,57.18791,0,0,1-3.67429-6.34678c-3.98006-6.85242-10.79325-7.21087-18.05135-7.3544a120.31816,120.31816,0,0,0-43.66075,6.96274c-1.42466.53425-2.82224,1.13877-4.21317,1.75457-.74766.331-1.52354.59142-2.28245.89441-.48225.19255-.97743.512-1.48908.7324a2.0456,2.0456,0,0,1-1.633.12038,3.1056,3.1056,0,0,1-1.37581-1.63373,15.823,15.823,0,0,1-1.01347-2.46281,8.93759,8.93759,0,0,1-.42792-3.77211,4.36332,4.36332,0,0,1,.47815-1.5866,9.25429,9.25429,0,0,1,1.21525-1.44312q.87429-1.02432,1.7557-2.04256,1.70668-1.98364,3.41739-3.96385,3.22488-3.73271,6.46576-7.45159,2.985-3.42429,5.98663-6.83407,2.75292-3.12621,5.523-6.23725,2.52854-2.83851,5.07491-5.66108,2.31184-2.56125,4.64229-5.10564,2.10286-2.29443,4.22519-4.57091,1.90155-2.038,3.82357-4.05685,1.708-1.79211,3.43749-3.56349,1.522-1.5567,3.06689-3.09083,1.34372-1.33188,2.71182-2.63887,1.173-1.11772,2.37222-2.20759,1.01-.9144,2.04817-1.797c.56962-.48144,1.14756-.95342,1.73959-1.40714.471-.361.95083-.7114,1.44651-1.03794a11.684,11.684,0,0,1,1.16895-.68947,4.58918,4.58918,0,0,1,.90691-.36168,1.68335,1.68335,0,0,1,.60779-.062c2.5624.29413,5.16013.24316,7.71415.60277a17.28931,17.28931,0,0,0,3.26232.35536c2.12938-.19954,1.96322-5.06952,4.53353-7.42011,3.41151-3.11987,6.65194-3.16716,11.73651-4.76434,10.005-3.14277,9.258-6.66612,17.0819-8.599,2.13025-.52628,9.79339-2.30431,17.66287,1.39444.96171.452,12.64314,6.13821,12.55,15.68744-.00284.29065-.11359,5.13776-3.25372,8.36663-6.98574,7.18317-24.05546-10.95642-35.09336-4.64813-3.63751,2.07889-2.94123,4.52012-7.08823,6.85589a15.02313,15.02313,0,0,1-5.49864,1.77806,21.13891,21.13891,0,0,1-5.82166-.13568,33.57035,33.57035,0,0,1-5.71322-1.435c-4.04164-1.37183-7.921-2.68339-11.85452-.30974a23.55364,23.55364,0,0,0-2.28121,1.584c-.84155.65444-1.64932,1.35167-2.43547,2.07141-.90215.82594-1.77608,1.68239-2.63337,2.55465-.97661.99368-1.93161,2.00845-2.8749,3.03374q-1.59858,1.73752-3.16008,3.50869-1.75463,1.98078-3.48888,3.97948-1.93323,2.22082-3.86133,4.44612-2.1344,2.458-4.27741,4.90862-1.51992,1.73557-3.04816,3.46384c-13.37059,15.11427-22.3432,24.14044-20.97167,25.73322.66817.77594,3.03131-1.25812,9.13226-2.9232a84.18127,84.18127,0,0,1,17.74476-2.99667c7.22612-.37747,14.42678.78924,21.64224.38692,5.659-.31554,10.88741,1.69894,13.96248,6.63939a23.69012,23.69012,0,0,0,1.42091,2.11805,8.77372,8.77372,0,0,0,.85813.95451C260.2638,288.256,260.65508,288.71745,261.22753,288.56569Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M259.6574,446.92237a57.18791,57.18791,0,0,1-3.67429-6.34678c-3.98006-6.85242-10.79325-7.21087-18.05135-7.3544a120.31863,120.31863,0,0,0-43.66075,6.96274c-1.42466.53425-2.82224,1.13878-4.21317,1.75457-.74766.331-1.52354.59142-2.28245.89441-.48225.19255-.97743.512-1.48908.73241a2.04568,2.04568,0,0,1-1.633.12038,3.10563,3.10563,0,0,1-1.37581-1.63373,15.82383,15.82383,0,0,1-1.01347-2.46281,8.93761,8.93761,0,0,1-.42792-3.77211,4.36331,4.36331,0,0,1,.47815-1.58661,9.25475,9.25475,0,0,1,1.21525-1.44312q.87429-1.02432,1.7557-2.04256,1.70668-1.98364,3.41739-3.96385,3.22488-3.73271,6.46576-7.45159,2.985-3.42429,5.98663-6.83406,2.75292-3.12622,5.523-6.23725,2.52854-2.83853,5.07491-5.66108,2.31184-2.56126,4.64229-5.10565,2.10286-2.29443,4.22519-4.57091,1.90155-2.038,3.82357-4.05685,1.708-1.7921,3.43749-3.56349,1.522-1.5567,3.06689-3.09083,1.34372-1.33188,2.71182-2.63886,1.173-1.11774,2.37222-2.20759,1.01-.91442,2.04817-1.797c.56962-.48145,1.14756-.95343,1.73959-1.40714.471-.361.95083-.71141,1.44651-1.038a11.68784,11.68784,0,0,1,1.16895-.68947,4.58979,4.58979,0,0,1,.90691-.36168,1.68357,1.68357,0,0,1,.60779-.062c2.5624.29414,5.16013.24317,7.71415.60277a17.28931,17.28931,0,0,0,3.26232.35536"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Senzonqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M92.61572,164.83594a65.43991,65.43991,0,0,0-58.67627-4.9541L29.686,161.58105l2.42431-3.88574c5.38721-8.63672,32.34033-51.79883,33.91358-53.373l2.15136,2.08984c-1.32959,1.5332-18.60351,28.98633-31.21972,49.18555a68.37758,68.37758,0,0,1,57.2207,6.67578Z" />
                                        <polygon points="89.787 166.631 98.745 167.17 94.734 159.142 89.787 166.631" />
                                    </g>
                                    <path
                                        d="M133.86074,55Q99.80833,97.92825,65.74879,140.85654L65,141.74413a57.8648,57.8648,0,0,1,34.1712-15.27848c30.132-2.88,51.336,13.55322,55.8288,18.53435"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="sakalikpatli_child0">
                                        <set attributename="mask" to="url(#sakalikpatli_mask0)"
                                            begin="0s;sakalikpatli_child0.click+1s;sakalikpatli_child0.click+1s;sakalikpatli_child0.click;"
                                            end="sakalikpatli_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="sakalikpatli_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M133.86074,55Q99.80833,97.92825,65.74879,140.85654L65,141.74413a57.8648,57.8648,0,0,1,34.1712-15.27848c30.132-2.88,51.336,13.55322,55.8288,18.53435"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="209.49050903320312 209.49050903320312"
                                            stroke-dashoffset="209.49050903320312">
                                            <animate id="sakalikpatli_animation0" attributename="stroke-dashoffset"
                                                from="209.49050903320312" to="0" begin="1s;sakalikpatli_child0.click+1s"
                                                dur="1.197088623046875s">
                                            </animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="sa-ka-lik-pa-tli">
                                <span slot="after">
                                    <p><i>/s/</i></p>
                                    <p>Sakalikpatli, cilantro</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_15" data-name="Layer 15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Zontli</title>
                                    <path
                                        d="M213.97635,207.95085a72.25052,72.25052,0,0,1,15.90654-4.99029c9.32535-1.77209,24.15389-4.59,37.11528,3.43083,9.7578,6.03833,16.6901,17.26549,18.0898,28.69416,2.74225,22.39074-16.71907,37.235-9.66869,48.34342,2.49532,3.93158,7.11789,5.51441,10.60437,6.23787"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M215.53581,212.31736a53.8019,53.8019,0,0,1,29.31795-6.86165c6.59725.40361,20.771,1.27073,29.318,12.16383,8.91077,11.35675,6.04978,26.40281,5.61408,28.69416-1.76458,9.28-5.69462,10.47494-8.733,24.32766-2.60541,11.8786-.831,16.08473.3119,18.08979,3.14529,5.51817,9.07306,7.63922,11.85193,8.42112"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M215.53581,217.93143c2.0214-1.42234,17.42894-11.9101,33.99635-6.23786a30.35137,30.35137,0,0,1,14.659,10.29247c5.12544,6.8269,5.63319,14.13265,5.926,19.33737.30969,5.5052-.54139,7.18221-3.74272,24.63955-2.79563,15.245-2.90111,18.08067-1.87135,21.52062,2.12337,7.09325,7.5578,11.69219,11.54,14.34708"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M218.65475,221.05036a38.97978,38.97978,0,0,1,20.273-1.55947c3.19078.62522,16.29522,3.19294,21.83252,13.7233,2.81033,5.34444,2.38937,10.30171,1.55946,18.71359-1.79889,18.23354-8.04159,22.70514-7.17354,32.43688.55142,6.182,3.99514,14.74348,17.466,24.32765"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M251.62712,94.281c-.18411,7.62679-2.40974,10.5819-4.44714,11.85878-2.352,1.474-5.39862,1.07419-8.00159.70563a28.2017,28.2017,0,0,0-9.37.29805c-2.84111.54151-5.57649,1.57248-8.454,1.93512-2.15469.27154-4.56188.09334-6.29453-1.34944a3.94441,3.94441,0,0,1-1.509-2.80963c-.03163-1.23073.88651-2.284.69911-3.53509a3.19024,3.19024,0,0,0-1.348-1.82328c-1.16687-1.04093-.50958-2.59056-.45088-3.90468.0426-.97633-.9826-1.54872-1.34227-2.36063-1.22732-2.77084,2.26689-5.36451.73341-8.06768-.67105-1.1829-2.30261-1.70417-3.2029-3.01761a4.22514,4.22514,0,0,1-.847-2.647,3.92051,3.92051,0,0,1,.74116-1.90586c1.44532-2.253,2.82954-3.98682,2.8588-4.02348,2.33116-2.92018,3.49674-4.38027,3.17644-5.82347-.17008-.76632-.58258-.89873-.95293-2.32939a5.92,5.92,0,0,1-.21164-2.54193c1.35442-8.12668,5.363-15.25962,8.88066-22.59163.07937-.13445.27983-.46691.56911-.86028,3.91378-5.322,12.39983-5.90167,17.64153-6.25971,1.9142-.13075,3.993-.15129,3.99306-.15129s.91734-.00907,1.81811.00518c19.091.30205,26.99966,7.30576,26.99971,7.30581,3.7966,3.36217,5.38986,9.759,8.57639,22.55271,1.991,7.99386,3.17855,7.975,2.54114,14.71748-.57088,6.03883-2.31029,10.385-4.76465,16.51748-4.62572,11.55788-7.49977,12.85467-8.894,18.741-1.25793,5.31076-1.07071,13.34169,6.03523,24.77621"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M217.18959,68.61869a13.51611,13.51611,0,0,1,3.4016-1.68481,7.7883,7.7883,0,0,1,3.26741-.57833,6.63552,6.63552,0,0,1,4.23331,2.35993,7.58145,7.58145,0,0,1-2.21716,1.83415c-.217.11773-3.97265,2.083-6.89866.11517A5.44241,5.44241,0,0,1,217.18959,68.61869Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <ellipse cx="220.52808" cy="69.21277" rx="1.38969" ry="1.31028"
                                        transform="translate(110.50774 272.48246) rotate(-78.99987)"
                                        style="stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M211.154,81.20467c-.07529-.19987-.23957-.68388-.07494-.80735.05792-.04345.16347-.04743.90154.37806.80339.46316.9286.61217.99848.70766a1.04237,1.04237,0,0,1,.26173.92093.73.73,0,0,1-.57194.475.751.751,0,0,1-.75613-.40714"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M212.85473,78.49146a7.69627,7.69627,0,0,1,1.50881.47646,3.59418,3.59418,0,0,1,1.78674,1.19117,2.39454,2.39454,0,0,1,.2978,2.10438,2.31978,2.31978,0,0,1-1.84631,1.42941"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M222.126,37.22424a56.44166,56.44166,0,0,1,30.17615-7.147c6.71532.36207,18.92965,1.02064,27.79383,10.1646,6.99076,7.21141,8.57137,16.26907,9.52932,21.7586.69617,3.98942.46412,9.91248,0,21.7586-.28,7.14639.8377,14.47771-.79411,21.44094-.59628,2.54441-2.3953,9.32378.31764,11.27635,1.07447.77333,2.6939.67238,3.01761,1.74705.3779,1.25455-1.537,2.362-1.11175,3.97055.25084.94888,1.01048.91649,1.11175,1.747.17914,1.4692-2.12715,2.15181-2.06468,3.65291.04807,1.15534,1.43461,1.24005,1.747,2.54115.41058,1.70982-1.44385,3.81245-3.17644,4.76466a7.15734,7.15734,0,0,1-5.71758.31764c3.37847-.97637,4.0904-1.89225,4.12936-2.54115.03946-.65716-.62144-.87113-1.90586-2.54115-1.11363-1.448-2.14259-2.822-1.90586-4.28819.15259-.945.66282-.88661.79411-1.747.28578-1.87284-2.06513-2.58493-2.38233-4.76466-.307-2.10983,1.69251-2.83781,1.27058-4.76466-.395-1.80381-2.61992-3.32408-3.81173-2.85878-1.70111.66413-1.161,5.32-1.11175,5.71758a15.95018,15.95018,0,0,0,1.58821,5.24112c.77407,1.40021,1.59613,2.25,1.27058,3.17644-.26593.75676-.96861.62837-1.58822,1.58822a4.26933,4.26933,0,0,0-.31764,3.33526c.4978,1.55584,1.74814,2.11933,1.58822,2.38233-.21619.35555-2.8775-.05589-4.28819-1.90587-1.08663-1.425-.57175-2.57643-1.11176-6.67051-.39372-2.98495-.69939-5.3024-1.747-5.55877-1.11635-.27318-2.65976,1.89559-3.33526,3.49408-.09177.21718-1.61059,3.96925.31765,7.147,1.319,2.17379,3.38926,2.65846,3.17643,3.33525-.22669.72086-2.77579.80858-4.92347.15883-2.31147-.69932-5.70822-2.7219-6.35288-6.03524-.42347-2.17648.491-4.1368,1.747-6.82933,1.52769-3.27486,2.95757-4.34835,2.54115-5.87641-.53688-1.97013-3.28656-3.08084-3.6529-2.7-.32193.3347,1.44836,1.57523,1.27058,3.33525-.19668,1.94706-2.51918,1.973-3.81173,4.447-1.09714,2.1-.68773,4.50057-.31764,6.67052.48814,2.86218,1.27211,3.08809,1.11175,4.76465-.20256,2.11776-1.7897,5.27305-4.60584,5.39994a4.94239,4.94239,0,0,1-4.76465-3.81172c-.511-2.33992,1.13381-4.53294,1.42939-4.447.25734.0748-.5817,1.8554.31765,3.33525.712,1.17156,2.37883,1.933,3.17644,1.4294.88415-.55827.69284-2.66641,0-4.12937-1.05768-2.23331-2.75851-1.85316-4.12937-3.97055a8.0669,8.0669,0,0,1-.63529-6.67052c.45907-1.3499.88657-1.26313,2.7-4.447a12.987,12.987,0,0,0,1.747-3.65291c.09984-.68859.12787-1.84922-2.06468-6.194a46.939,46.939,0,0,0-2.8588-5.0823c-2.51526-3.8522-3.19387-3.66992-4.12937-5.87641a17.66683,17.66683,0,0,1-1.11175-6.67052,38.93773,38.93773,0,0,1,.31764-6.19406c.54919-5.07267,1.20952-5.51392.63529-7.147-.8643-2.458-2.74613-2.55575-3.01761-4.76465-.24307-1.97781,1.20463-2.39546,1.42939-4.447.41127-3.75385-4.141-5.04493-4.92347-9.52931-.70947-4.06609,2.60646-5.45013,1.58822-7.78228-2.08772-4.78164-16.74007-.59624-19.69392-6.35287A5.008,5.008,0,0,1,222.126,37.22424Z"
                                        style="stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M212.71576,95.20746c1.01056-.21858,2.12582-.41338,3.33526-.55587a35.33183,35.33183,0,0,1,3.57349-.23824"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M207.7459,384.16868c25.27615-10.844,50.26105-18.92336,56.18653-10.96323,9.86324,13.25-41.13292,60.12507-31.06247,74.00179,4.08287,5.62606,18.49447,6.229,59.38414-10.50645"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M218.43862,63.12283a2.74127,2.74127,0,0,0-.50014.21777c-.16486.09189-1.85,1.46589-1.85493,1.4819-.1576.51194,2.40673.54239,2.6795.54835a25.662,25.662,0,0,0,4.95744-.72121,5.47114,5.47114,0,0,1,2.071-.03619,19.70939,19.70939,0,0,1,2.00729.75347,7.48937,7.48937,0,0,0,2.82525.67965,6.47055,6.47055,0,0,0-1.47913-1.19381c-.83692-.65386-1.83062-1.73734-2.9191-1.92183a13.60381,13.60381,0,0,0-2.71849.02677c-.91072.02974-1.82345.02917-2.73456.04341A7.81678,7.81678,0,0,0,218.43862,63.12283Z"
                                        style="stroke:#000;stroke-miterlimit:10;stroke-width:0.1px" />
                                    <path
                                        d="M229.92618,107.13219a27.36576,27.36576,0,0,1,5.6671,13.97665,27.72669,27.72669,0,0,1-3.437,16.15385"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Zopilqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M139.80762,90.19043l-2.29492-1.93262a96.24267,96.24267,0,0,0,22.2666-53.50244H107.78711v-3H163.0166l-.11621,1.60742a99.23,99.23,0,0,1-23.09277,56.82764Z" />
                                        <polygon points="136.125 85.226 134.34 94.021 142.85 91.17 136.125 85.226" />
                                        <path
                                            d="M63.186,160.62207l-1.69141-2.47852a63.13183,63.13183,0,0,1,36.10058-10.98437,61.73019,61.73019,0,0,1,23.35694,4.94824l-1.17188,2.76172a58.74446,58.74446,0,0,0-22.22607-4.71A60.19569,60.19569,0,0,0,63.186,160.62207Z" />
                                        <polygon points="117.225 157.04 126.17 156.319 121.074 148.932 117.225 157.04" />
                                    </g>
                                    <path
                                        d="M65,55h68.86074c0,12.62381-16.9563,41.22046-68.112,85.85657L65,141.74414a57.86489,57.86489,0,0,1,34.17118-15.2785c30.132-2.88,51.336,13.55322,55.82882,18.53436"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="zontli_child0">
                                        <set attributename="mask" to="url(#zontli_mask0)"
                                            begin="0s;zontli_child0.click+1s;zontli_child0.click+1s;zontli_child0.click;"
                                            end="zontli_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="zontli_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M65,55h68.86074c0,12.62381-16.9563,41.22046-68.112,85.85657L65,141.74414a57.86489,57.86489,0,0,1,34.17118-15.2785c30.132-2.88,51.336,13.55322,55.82882,18.53436"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="280.1637268066406 280.1637268066406"
                                            stroke-dashoffset="280.1637268066406">
                                            <animate id="zontli_animation0" attributename="stroke-dashoffset"
                                                from="280.1637268066406" to="0" begin="1s;zontli_child0.click+1s"
                                                dur="1.6009355817522322s"></animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="zon-tli">
                                <span slot="after">
                                    <p><i>/t͡s/</i></p>
                                    <p>Tsontli, cabello</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_16" data-name="Layer 16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Koatl</title>
                                    <path
                                        d="M232.25315,214.09682a3.18652,3.18652,0,0,1-.50778-.99035,4.68076,4.68076,0,0,1,.17252-3.06845,49.8113,49.8113,0,0,0,4.01005-3.48527c1.87924-1.82045,2.13652-2.36381,3.34423-3.041,1.6966-.95138,2.09076-.38481,4.77572-1.36669,2.37825-.86972,2.634-1.52084,4.4766-1.92927a10.23893,10.23893,0,0,1,3.84653-.06074c6.13257.8704,12.64718,1.38321,18.59212,3.361a29.7969,29.7969,0,0,1,6.8281,3.21155c7.14733,4.62213,12.45072,11.8002,16.03626,19.42591,5.37621,11.43408,9.06538,24.1089,6.88374,36.81862q-.10471.6101-.22639,1.2172-.11985.5983-.25622,1.19324c-2.75988,12.03983-10.92979,22.01557-21.12473,28.70115a69.90959,69.90959,0,0,1-32.72328,11.08978c-9.639.73369-19.42249-1.46322-27.1549-7.44947-8.78029-6.7975-13.98656-18.1204-10.18452-29.04166-.3301,6.03082,2.47843,11.94427,6.64023,16.32142,12.07369,12.69841,31.86726,14.77567,47.509,8.1059,10.9861-4.68455,20.62985-13.22847,25.4214-24.297,4.25386-9.82649,4.17513-20.98721,1.198-31.15518-3.30227-11.27859-11.2337-23.012-21.9931-26.85446a22.822,22.822,0,0,0-17.04842.758,43.56765,43.56765,0,0,1-5.92935,2.2507c-.69184.19988-2.30447.512-5.52972,1.13618-2.2999.44512-3.63066.67213-5.23334.16676a7.0371,7.0371,0,0,1-1.46641-.65628"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.75px" />
                                    <path
                                        d="M240.43018,205.79307a1.34079,1.34079,0,1,1-1.91,1.75668,1.35068,1.35068,0,0,1-.08033-.1822"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M240.10527,208.09335a4.74153,4.74153,0,0,1-.97562-1.83657l.00053-.00028a4.74152,4.74152,0,0,1,.977,1.83581" />
                                    <path
                                        d="M363.45632,102.83875c-30.1482-13.20466-64.90875-15.91049-103.49257-2.62733-7.84117,2.69946-19.05808,7.29572-36.835,11.11142-4.27142.91683-14.16261,2.12315-33.945,4.53577-14.1067,1.72043-22.25611,2.53109-31.74117-1.20545a42.69165,42.69165,0,0,1-8.59653-4.59215"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M146.84216,107.72262a19.33132,19.33132,0,0,1-2.65386-6.20817c-1.97721-8.02825.81819-15.24818,2.34253-18.49633a302.17031,302.17031,0,0,0,25.7425-19.39485c12.143-10.22154,13.92986-13.40091,21.52512-16.98822,10.66994-5.03952,12.81548-1.444,29.47959-6.24984,14.76044-4.25685,16.58346-8.089,27.9074-9.781a62.11369,62.11369,0,0,1,23.30374,1.26019c36.74409,7.86256,75.9515,13.72274,111.09152,28.20732"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M175.56693,73.7924a17.82735,17.82735,0,0,0,8.976-2.40976,19.27938,19.27938,0,0,0,7.696-9.24431,23.0325,23.0325,0,0,0,1.79464-6.26423"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M191.60629,63.78627a21.50952,21.50952,0,0,0,3.0575-.65613,22.40675,22.40675,0,0,0,8.35313-4.60059"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M199.841,60.93114A8.13386,8.13386,0,1,1,187.5391,70.7538a8.19913,8.19913,0,0,1-.40906-1.1366"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M197.0387,75.4262a24.59815,24.59815,0,0,1-3.19961-5.47094,24.53119,24.53119,0,0,1-1.92731-6.05625l.0033-.00148a24.53111,24.53111,0,0,1,3.21113,5.48466,24.59785,24.59785,0,0,1,1.92482,6.03852" />
                                    <path
                                        d="M151.53673,108.537c2.54706-1.134,4.99918-1.53532,8.25419-2.33551,14.12213-3.47048,14.03575-7.21593,22.84767-7.818,7.78656-.53226,8.75685,2.32939,14.823,1.62405,8.07322-.943,14.52973-6.95942,19.57194-14.12072"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M151.53673,108.537a.83214.83214,0,0,0-.05132-.11525c-.2853-.43918-1.27205-.09651-1.83059-.17236a21.87,21.87,0,0,1-2.78709-.56818c-4.24724,4.48038-8.18489,5.45331-9.99021,5.72543a15.02116,15.02116,0,0,1-2.8186.19849c-3.80257-.08844-5.16347-1.85781-9.28261-1.246-.87865.13572-6.79158,1.01452-9.24133,5.9651a9.435,9.435,0,0,0-.73906,6.85423c.77521,2.29944,2.29147,2.6808,3.549,6.00148.81354,2.13737.75358,3.476,1.10392,3.47193.51943.0035,1.39437-2.8235.64389-5.48611-.62594-2.2278-2.38539-3.29495-2.18315-3.52309s2.1652.58268,3.24685,2.34519c1.29771,2.10823.61841,4.41312,1.02772,4.47946.35871.06125,1.31057-1.709,1.20426-3.62269-.13288-2.3921-2.80506-2.56262-3.6511-5.42435a6.02428,6.02428,0,0,1-.07381-3.1434,6.42015,6.42015,0,0,1,3.12938-3.85838c1.77349-.94844,3.501-.744,5.50391-.51026,2.27259.26557,2.68538.75847,4.3521,1.059,3.72289.6694,6.94477-.84106,9.203-1.89485,3.55355-1.665,3.9254-3.032,6.84725-4.96823A19.32037,19.32037,0,0,1,151.53673,108.537Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path d="M151.547,108.56009l-.01026-.023"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M150.11951,86.06278a8.84208,8.84208,0,0,1,.44921,3.38469c-.10429,1.49036-.56838,2.185-.13965,3.118a2.30818,2.30818,0,0,0,1.90871,1.38326c1.24564.00459,2.19556-1.52566,2.38024-2.7052a4.457,4.457,0,0,0-2.57021-4.32084"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M237.89605,212.218a10.28335,10.28335,0,0,1-2.15912,1.04381c-1.51194.52161-1.94445.26647-3.02869.84422-1.16549.621-1.12028,1.158-1.9929,1.29261-.80483.12411-1.11749-.29041-2.0887-.07716a1.70139,1.70139,0,0,0-1.25171.72,1.48781,1.48781,0,0,0,.33863,1.65039c.21542.18709.41009.19343.51232.4106a.99515.99515,0,0,1-.16257.867"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M236.83731,208.24947a2.28662,2.28662,0,0,0,1.60007-.88073c.33705-.5003.29661-1.0664.73162-1.24161.26443-.10651.41186.04933.79149-.03054a1.56393,1.56393,0,0,0,.854-.55574"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M232.75771,384.73152a3.18646,3.18646,0,0,1-.542-.972,4.68079,4.68079,0,0,1,.06532-3.0726,49.80924,49.80924,0,0,0,3.886-3.62311c1.81456-1.88493,2.05272-2.43693,3.23605-3.1559,1.66237-1.01,2.07606-.45754,4.72512-1.53254,2.34644-.95219,2.57927-1.61184,4.40654-2.08433a10.23867,10.23867,0,0,1,3.84207-.195c6.15921.65584,12.68774.941,18.69809,2.71a29.79654,29.79654,0,0,1,6.936,2.97129c7.3043,4.36986,12.855,11.35847,16.70448,18.85439,5.772,11.23947,9.90129,23.77782,8.16456,36.55594q-.08337.61336-.18377,1.22436-.09889.60213-.21442,1.20145c-2.338,12.12882-10.15476,22.38363-20.11015,29.42094a69.90955,69.90955,0,0,1-32.3163,12.22511c-9.60749,1.06965-19.46173-.78446-27.39835-6.4972-9.01218-6.48691-14.61046-17.62121-11.1919-28.66851"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.75px" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Coalqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M151.29688,58.38086c-2.81934-6.81592-9.7002-18.95361-24.10352-23.65723-14.958-4.88574-27.87158,1.40869-31.47461,3.45313l-1.48047-2.60938c3.87256-2.19775,17.7627-8.96191,33.88672-3.69531,15.54492,5.07666,22.92676,18.06934,25.94336,25.36231Z" />
                                        <polygon points="147.914 58.09 154.723 63.936 156.383 55.117 147.914 58.09" />
                                    </g>
                                    <path
                                        d="M81.88724,64.45828s11.53245-7.69563,19.07539-8.82015c11.32126-1.6878,23.19816-.31186,31.32452,7.58114,10.35974,10.06226,15.94905,27.30511,13.73126,43.321-3.50757,25.33066-25.49946,38.06093-44.6267,38.4473-13.79649.27869-24.61612-4.167-27.8917-9.0078"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="koatl_child0">
                                        <set attributename="mask" to="url(#koatl_mask0)"
                                            begin="0s;koatl_child0.click+1s;koatl_child0.click+1s;koatl_child0.click;"
                                            end="koatl_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="koatl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M81.88724,64.45828s11.53245-7.69563,19.07539-8.82015c11.32126-1.6878,23.19816-.31186,31.32452,7.58114,10.35974,10.06226,15.94905,27.30511,13.73126,43.321-3.50757,25.33066-25.49946,38.06093-44.6267,38.4473-13.79649.27869-24.61612-4.167-27.8917-9.0078"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="196.01730346679688 196.01730346679688"
                                            stroke-dashoffset="196.01730346679688">
                                            <animate id="koatl_animation0" attributename="stroke-dashoffset"
                                                from="196.01730346679688" to="0" begin="1s;koatl_child0.click+1s"
                                                dur="1.120098876953125s"></animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="ko-atl">
                                <span slot="after">
                                    <p><i>/k/</i></p>
                                    <p>Koatl, serpiente</p>
                                </span>
                            </xamix-element>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <p>
                                <svg id="Layer_17" data-name="Layer 17" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Qaqawitl</title>
                                    <path
                                        d="M248.915,52.8788a37.25732,37.25732,0,0,0-5.92452-6.82895c-8.102-7.2993-17.60173-9.23954-25.87865-10.82789-11.65648-2.23689-19.551-1.40254-19.59847-2.27385-.04934-.90521,8.41866-2.77231,17.54117-2.92353,7.01775-.11634,20.99705-.16731,35.73156,8.44547a61.22692,61.22692,0,0,1,16.70935,14.28459,56.17664,56.17664,0,0,1,6.1637,9.39088c1.69974,3.26975,2.73212,6.96928,5.03973,9.89126a36.07637,36.07637,0,0,0,11.91068,9.63681,22.88631,22.88631,0,0,1,6.92978,5.17609,8.3887,8.3887,0,0,1,.86629,1.32064c1.02494,1.90311.595,1.7454,1.62419,7.79608a43.18919,43.18919,0,0,0,3.898,11.69412c2.577,5.5,4.34834,6.236,10.06993,15.26732,3.18651,5.02982,3.60873,5.6986,3.898,6.49673a22.17394,22.17394,0,0,1-.32484,14.94248c-.93583,2.534-1.548,4.19169-3.24837,5.52223-2.82422,2.21-5.47358,1.03153-7.14639,3.24836-1.364,1.80761-.94466,4.36974-.64968,6.1719.59935,3.66177,2.19343,3.84205,2.27386,6.82156a11.146,11.146,0,0,1-1.949,6.17189,14.14236,14.14236,0,0,1-2.59869,2.92354c-1.76386,1.63166-5.09683,4.89312-6.1719,4.22287-1.14068-.71116,2.35724-6.44707,1.29934-7.14641-.42883-.28349-1.50763.30615-2.0573,1.08279-.77355,1.093-.25481,2.21115-.64966,2.38214-.70265.30426-3.70308-2.64837-3.14009-5.30567a7.18238,7.18238,0,0,1,2.27385-3.24836c1.17547-1.18022,2.16639-1.72038,2.0573-1.949-.13487-.28265-1.54314-.18025-2.707.5414-1.39013.862-1.42706,1.98562-2.27387,2.05729-.85832.07266-1.82852-.9964-2.05729-2.05729-.38743-1.79658,1.41874-3.25764,1.84074-3.5732,1.31664-.98456,2.51827-.32944,2.81524-.97452.26894-.58419-.49575-1.39521-3.14008-4.5477-1.45444-1.73394-1.41932-1.717-1.62419-1.949-8.02752-9.09317-19.38187-12.99345-19.38191-12.99346a46.792,46.792,0,0,0-18.4074-3.03181c-3.90492.21045-7.48253.97524-10.39477-1.29935-2.1534-1.6819-2.8868-4.20064-3.68148-6.92984-1.10584-3.79781-.65555-5.6219-1.08279-11.04445a73.56932,73.56932,0,0,0-1.5159-10.17821c-1.42825-6.25948-2.77125-12.14535-5.84706-12.7769-1.829-.37556-4.39553,1.98739-9.52855,6.71329-4.39272,4.04431-4.62083,4.93792-6.28017,5.19738-3.44075.538-4.55286-2.97694-11.261-5.84706-5.10276-2.18324-7.61931-1.50141-8.22919-3.24837-.99961-2.8633,4.79247-7.469,8.01264-9.52853a34.69966,34.69966,0,0,1,12.99345-4.76427c6.549-1.0501,9.56619.258,14.50937-2.38214,1.55926-.83281,1.58717-1.13823,4.33116-2.81525a29.405,29.405,0,0,1,4.03007-2.08364c2.57542-1.07632,3.00686-.7566,3.40013-1.216,1.69685-1.98234-3.7446-11.12646-11.73773-18.24782a52.84748,52.84748,0,0,0-23.0634-12.34379c-14.70123-3.5675-26.25972.40971-26.6366-1.29935-.29876-1.3548,6.81031-4.55382,13.968-6.17189a59.52607,59.52607,0,0,1,27.936.97451c1.91255.51269,18.94515,5.25321,29.23529,16.56666,1.23753,1.3606,5.27246,5.99907,12.019,13.3183,1.78814,1.93995,3.26316,3.52185,4.22287,4.54772"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M271.55244,100.6224a25.02635,25.02635,0,0,1,2.38214,4.98082,24.72937,24.72937,0,0,1,1.08279,12.12723,23.31927,23.31927,0,0,1-3.03181,8.01264"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M300.57117,125.95965c.26574.04625-.24829,1.28342.43312,2.59869.79268,1.53006,2.3107,1.44321,5.41394,3.46492,1.26916.82684,2.29986,1.49832,2.16558,1.949-.19255.64625-2.71526.62023-4.76427,0-1.48433-.4493-3.56554-1.07927-4.33116-3.03181C298.56552,128.58691,300.17314,125.89037,300.57117,125.95965Z" />
                                    <path
                                        d="M318.63885,140.57825a12.59585,12.59585,0,0,1-3.68147,3.46492c-4.21269,2.56888-8.84426,1.78426-11.47756,1.29935-3.39689-.62553-6.01826-1.93293-11.261-4.54772-4.30318-2.14618-6.75488-3.79015-10.39477-3.46492a11.47227,11.47227,0,0,0-3.89805,1.08279"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.75px" />
                                    <path d="M299.35495,91.15033a12.07968,12.07968,0,0,1,1.4218,7.89244"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M301.61861,102.80164c.30039-.30233.62348-.60259.97256-.897,2.9761-2.50966,4.44383-1.72589,4.79953-3.734.583-3.29139-2.79512-8.5857-4.67323-10.95312a16.77106,16.77106,0,0,0-7.57822-5.47655c-2.50158-.79057-4.1196-.41836-5.74829-.91993"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M251.61666,98.85383a3.17923,3.17923,0,0,0-.21656,1.0467,4.02935,4.02935,0,0,0,.46921,2.15656"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M265.78314,99.10649a4.02039,4.02039,0,0,1,.406.92037,4.2916,4.2916,0,0,1,.1534.81209,3.63508,3.63508,0,0,1,0,.83014,2.80073,2.80073,0,0,1-.57749,1.33544"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <ellipse cx="259.53907" cy="101.61495" rx="2.03925" ry="1.75051" />
                                    <path
                                        d="M263.7958,103.9511a11.65049,11.65049,0,0,1-5.333.76855,14.41111,14.41111,0,0,1-3.2841-.74149,11.39457,11.39457,0,0,1-2.19137-1.03579,15.61532,15.61532,0,0,0-1.94815-1.38156c-1.4877-.63738-2.51479-.29331-2.5987-.64967-.16024-.68052,3.37984-2.80746,7.43515-3.03181,2.85434-.15791,5.43771-.64258,8.28334.41507,2.37156.88145,3.88932,3.18279,5.14324,3.91608,1.79491,1.4557,2.21169,1.88568,2.16558,1.949-.092.12637-1.80188-1.51484-4.04242-1.44372a6.30916,6.30916,0,0,0-2.38216.72188C264.63023,103.62416,264.21465,103.79649,263.7958,103.9511Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.5px" />
                                    <path
                                        d="M288.73981,281.58356a82.72529,82.72529,0,0,0-4.48839-34.62474c-11.19245-31.1049-39.45661-48.79458-41.67792-46.8075-.72809.65131,1.62283,3.16516,7.69438,14.74758,5.78119,11.02849,11.6319,22.1896,14.74758,35.26591,3.28424,13.78383,2.95438,27.28222,1.28239,27.57154-1.86762.32318-3.46792-16.17047-14.74758-37.83071-7.05516-13.548-14.712-23.001-24.36553-30.13634-6.1853-4.57187-14.65664-9.27609-16.03-7.69438-1.2639,1.45568,4.55159,7.0058,11.54155,17.95356,4.72792,7.40492,11.90314,18.84774,14.74758,33.34233a71.69782,71.69782,0,0,1,0,26.93034"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M263.30854,371.294a137.90251,137.90251,0,0,1,5.1296,36.54834c.08312,19.8415-4.218,36.03706-5.45021,35.90711-1.32166-.13937,4.15445-18.71473-3.206-39.1131-8.19239-22.704-27.7421-35.07037-28.21273-34.62474-.41018.38837,14.081,10.12136,18.27416,26.60973,4.45982,17.537-4.68165,35.04184-13.14456,47.12811"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Qaqawqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M169.94141,136.57422l-3-.01563c.25488-46.60156.25293-76.687-.00489-78.51611l.99414-.13965,1.89649-.63232C169.97461,57.71191,170.36621,58.88574,169.94141,136.57422Z" />
                                        <polygon points="163.952 135.229 168.404 143.021 172.927 135.27 163.952 135.229" />
                                        <path
                                            d="M122.27539,62.73975a52.39158,52.39158,0,0,0-17.86816-14.89063A51.83869,51.83869,0,0,0,83.3833,42.32275l.14649-2.99609a54.82134,54.82134,0,0,1,22.23291,5.8457,55.41663,55.41663,0,0,1,18.89746,15.74707Z" />
                                        <polygon points="84.771 36.405 77 40.894 84.772 45.381 84.771 36.405" />
                                        <path
                                            d="M65.17139,122.03906l-2.169-2.07226a26.80113,26.80113,0,0,0,7.39649-20.73389C69.20215,85.09668,56.89111,78.24072,56.36768,77.95557l1.43457-2.63477c1.45752.79346,14.27734,8.19727,15.58593,23.65918A29.80043,29.80043,0,0,1,65.17139,122.03906Z" />
                                        <polygon points="62.061 116.667 59.128 125.149 67.94 123.45 62.061 116.667" />
                                    </g>
                                    <path
                                        d="M146.5,55v76.99115C146.50441,93.71967,73.5,55,73.5,55c11.2943,6.59071,31.035,25.81538,30.92505,47.5947-.13424,26.59874-22.80226,39.037-26.92795,42.10146"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="qaqawitl_child0">
                                        <set attributename="mask" to="url(#qaqawitl_mask0)"
                                            begin="0s;qaqawitl_child0.click+1s;qaqawitl_child0.click+1s;qaqawitl_child0.click;"
                                            end="qaqawitl_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="qaqawitl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M146.5,55v76.99115C146.50441,93.71967,73.5,55,73.5,55c11.2943,6.59071,31.035,25.81538,30.92505,47.5947-.13424,26.59874-22.80226,39.037-26.92795,42.10146"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="298.38916015625 298.38916015625" stroke-dashoffset="298.38916015625">
                                            <animate id="qaqawitl_animation0" attributename="stroke-dashoffset"
                                                from="298.38916015625" to="0" begin="1s;qaqawitl_child0.click+1s"
                                                dur="1.7050809151785715s"></animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="qa-qa-witl">
                                <span slot="after">
                                    <p><i>/kʷ/</i></p>
                                    <p>Kwakwawitl, cornamenta</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_18" data-name="Layer 18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Ehekatl</title>
                                    <path
                                        d="M248.91019,44.86218a19.68683,19.68683,0,0,1,3.40592-6.93963c5.91513-7.696,15.16123-7.87753,17.22163-7.918,6.50108-.12762,15.60953,2.40486,19.00315,9.10568.461.91019,1.20653,2.66747,1.1877,11.679-.01488,7.12269.04744,12.458-.79179,15.638-4.52738,17.15516-49.152,28.73544-63.64082,14.74724-2.8406-2.74245-6.22747-8.11344-14.35135-12.47081a33.42819,33.42819,0,0,0-10.39235-3.86c-12.40481-2.09751-27.96242,4.78775-33.55246,16.09991-3.4142,6.90906-.85138,10.89857-5.80652,16.8917-4.38657,5.30544-10.38681,7.00693-12.66878,7.654-10.0685,2.85514-20.60138-.18876-20.58676-1.84754.00712-.80772,3.6942-.328,9.50158-2.6393,2.12158-.84436,8.99562-3.58012,12.70174-9.43558,3.07568-4.8594,1.47989-7.9339,2.77129-13.85648C155.46688,65.99506,165.88179,58.897,169.936,56.134c12.89267-8.78669,26.332-8.08874,31.86989-7.72,14.44957.96205,24.66827,7.5094,28.90064,10.29338q1.20483.79251,2.28425,1.57511"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M249.25031,43.73316a10.18231,10.18231,0,0,0-4.85218-1.45572c-6.70837-.21086-10.42055,6.79706-10.68928,7.32414a14.15943,14.15943,0,0,0-1.38565,7.72c.06375.61432,1.16411,9.78041,8.70978,12.075,5.45018,1.65731,12.85909-.57459,14.64828-6.13646.99957-3.10729.60361-7.53095-2.57335-10.09542-2.85693-2.30616-7.82859-3.03577-10.49133-.19795-1.94593,2.0739-2.7953,6.19864-.39589,8.51184a6.14237,6.14237,0,0,0,7.12618.59385"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M339.46743,116.69316a24.94471,24.94471,0,0,1-1.34019,6.41375c-4.6425,12.83442-20.98149,23.81459-35.89484,18.47532-11.34835-4.06292-19.59421-16.76223-17.41958-27.713.21277-1.07141,2.16688-10.14424,10.29335-13.46058.83819-.34206,7.8229-3.05715,13.98845,1.05574,1.15174.76828,7.04127,4.80147,6.42285,11.22315-.54068,5.61442-5.6023,8.41709-5.88552,8.56783-5.34069,2.8425-12.88434.99549-14.76369-3.09855a6.32021,6.32021,0,0,1,0-4.74684,6.89992,6.89992,0,0,1,7.38183-4.27542,6.384,6.384,0,0,1,3.64535,2.36948"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M334.27393,56.8166a31.00046,31.00046,0,0,1,11.77131-1.54043c1.11.07962,15.70951,1.35817,22.69822,13.19665,7.40635,12.546.25385,26.76906-.7918,28.76868-7.208,13.78417-23.31,21.82527-36.42273,19.26711a31.36353,31.36353,0,0,1-4.76564-1.35439"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M289.201,41.76637a20.22242,20.22242,0,0,1,9.60023-6.813c7.60115-2.46625,14.12883.59859,18.47531,2.63932,3.65444,1.71582,12.70957,5.96733,16.09991,15.836,4.04031,11.76065-3.07855,22.43419-4.48688,24.54574-8.67988,13.014-26.55225,18.86278-29.03261,15.57205a1.69091,1.69091,0,0,1-.24994-.48851"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M235.567,103.68979a30.58691,30.58691,0,0,1-11.98664-6.71222c-3.84551-3.61235-5.21633-7.15363-12.14091-13.19665-4.79539-4.18489-7.11936-6.4628-10.55731-7.654-6.53617-2.26476-15.0584-1.24379-20.58677,3.695-1.37927,1.23218-3.40415,3.45149-6.59832,13.19665-3.70215,11.295-3.32894,15.474-5.01472,20.85069-5.543,17.679-26.49041,26.43828-27.18509,25.60148-.43818-.52784,7.07663-5.0005,12.93271-15.836a40.29359,40.29359,0,0,0,5.54259-20.58677,36.47635,36.47635,0,0,0-.26911-3.70368"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M284.731,120.96968c-14.331,9.95681-36.996-7.41243-58.51132,1.8733a41.71286,41.71286,0,0,0-17.15564,14.51632c-4.9405,7.02015-3.42271,9.52079-7.918,13.98843-7.76743,7.71969-21.24745,9.14693-29.82442,4.48686-2.36028-1.28239-4.84437-3.2948-4.48685-4.22293.7128-1.85042,11.48437,3.81919,19.795-.26393,4.78234-2.34961,5.80427-6.48163,10.29338-15.572,6.93371-14.04065,10.86025-21.99186,16.8917-26.65721,12.36515-9.56446,31.74283-3.89984,37.115-3.09115"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M220.85862,200.00457c6.50108-.12762,15.60953,2.40486,19.00315,9.10568.461.91019,1.20653,2.66747,1.1877,11.679-.01488,7.12269.04744,12.458-.79179,15.638-4.52738,17.15516-49.152,28.73544-63.64082,14.74724"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M285.59481,226.8166a31.00046,31.00046,0,0,1,11.77131-1.54043c1.11.07962,15.70951,1.35817,22.69822,13.19665,7.40635,12.546.25385,26.76906-.7918,28.76868-7.208,13.78417-23.31,21.82527-36.42273,19.26711"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M240.5219,211.76637a20.22242,20.22242,0,0,1,9.60023-6.813c7.60115-2.46625,14.12883.59859,18.47531,2.63932,3.65444,1.71582,12.70957,5.96733,16.09991,15.836,4.04031,11.76065-3.07855,22.43419-4.48688,24.54574-8.67988,13.014-26.55225,18.86278-29.03261,15.57205a1.69091,1.69091,0,0,1-.24994-.48851"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M217.46753,370.00457c6.50109-.12762,15.60953,2.40486,19.00315,9.10568.461.91019,1.20654,2.66747,1.1877,11.679-.01488,7.12269.04744,12.458-.79179,15.638-1.23152,4.66647-5.42994,8.92045-11.18167,12.35951"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M237.13081,381.76637a20.22247,20.22247,0,0,1,9.60023-6.813c7.60116-2.46625,14.12884.59859,18.47532,2.63932,3.65443,1.71582,12.70956,5.96733,16.0999,15.836,4.04032,11.76065-3.07854,22.43419-4.48688,24.54574-8.67987,13.014-26.55225,18.86278-29.03261,15.572a1.69091,1.69091,0,0,1-.24994-.48851"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Hekalqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <rect x="46.66958" y="72.94837" width="41.81222" height="3.00023"
                                            transform="translate(-13.60363 133.76939) rotate(-83.92754)" />
                                        <polygon points="61.04 93.457 64.681 101.66 69.966 94.406 61.04 93.457" />
                                        <path
                                            d="M158.70313,97.62061l-2.94922-.5459.05957-.32617C159.65332,76.02,164.00488,52.5249,142.16992,42.251a31.03817,31.03817,0,0,0-33.6084,4.87841l-1.97461-2.25878a34.04081,34.04081,0,0,1,36.86036-5.33448c23.92968,11.25977,19.15332,37.04248,15.3164,57.75879Z" />
                                        <polygon points="153.017 95.268 156.085 103.702 161.856 96.829 153.017 95.268" />
                                    </g>
                                    <path
                                        d="M88.758,55c-.61088,7.47734-1.68333,18.6174-3.62226,32.16928C84.21447,93.60815,83,106.13637,83,106.13637s.09289-34.39329,20.41459-42.44319c11.05244-4.37813,22.65963-4.3755,28.84293,4.64773,9.37468,13.68037,3.983,37.79546-8.57985,76.65909"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="ehekatl_child0">
                                        <set attributename="mask" to="url(#ehekatl_mask0)"
                                            begin="0s;ehekatl_child0.click+1s;ehekatl_child0.click+1s;ehekatl_child0.click;"
                                            end="ehekatl_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="ehekatl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M88.758,55c-.61088,7.47734-1.68333,18.6174-3.62226,32.16928C84.21447,93.60815,83,106.13637,83,106.13637s.09289-34.39329,20.41459-42.44319c11.05244-4.37813,22.65963-4.3755,28.84293,4.64773,9.37468,13.68037,3.983,37.79546-8.57985,76.65909"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="212.08238220214844 212.08238220214844"
                                            stroke-dashoffset="212.08238220214844">
                                            <animate id="ehekatl_animation0" attributename="stroke-dashoffset"
                                                from="212.08238220214844" to="0" begin="1s;ehekatl_child0.click+1s"
                                                dur="1.2118993268694196s">
                                            </animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="eh-e-katl">
                                <span slot="after">
                                    <p><i>/h/</i></p>
                                    <p>Ehekatl, viento</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_19" data-name="Layer 19" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Lalaxtli</title>
                                    <path
                                        d="M245.2466,56.09729a34.79218,34.79218,0,0,1,10.63176,1.67182,35.91167,35.91167,0,0,1,17.81418,13.09867c9.84181,14.12738,4.10194,31.29255,3.40565,33.27062a41.631,41.631,0,0,1-34.3185,27.24522c-17.64968,1.89652-37.048-8.0903-42.70166-25.67339-4.051-12.59867-.0406-25.9725,6.81131-34.58047A39.38456,39.38456,0,0,1,223.13168,59.341c6.57409-2.63763,10.96968-2.22,12.05079-2.09578a22.16748,22.16748,0,0,1,5.23945,1.30987c.38163.16231.68863.30955.88663.40764"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M250.80133,64.82324a51.90623,51.90623,0,0,1,6.2213.06365,4.35655,4.35655,0,0,1,2.736,1.0209,10.62381,10.62381,0,0,1,1.64806,2.0065c.10895.15786.36908.008.259-.15141-.9919-1.43711-2.08956-2.84619-3.928-3.10522a37.63626,37.63626,0,0,0-6.93639-.13442c-.19222.00906-.19332.30911,0,.3Z" />
                                    <path
                                        d="M245.78676,67.695a4.45223,4.45223,0,0,1,3.93952,3.97294c.01487.19124.315.19284.3,0a4.75846,4.75846,0,0,0-4.23952-4.27294c-.19233-.01653-.19123.28356,0,.3Z" />
                                    <path
                                        d="M238.29057,67.55867a25.33461,25.33461,0,0,1-3.43719,3.57875c-.14695.12567.06609.337.21214.21213a25.33454,25.33454,0,0,0,3.43718-3.57875c.11818-.15-.0927-.36377-.21213-.21213Z" />
                                    <path
                                        d="M234.78142,65.02209A11.58043,11.58043,0,0,0,224.382,69.3c-.118.15011.09282.36384.21213.21213a11.31044,11.31044,0,0,1,10.18726-4.19c.19111.02379.18938-.27642,0-.3Z" />
                                    <path
                                        d="M234.84969,61.93335a19.76214,19.76214,0,0,0-9.11448.04979c-.18753.04552-.10811.33489.07975.28928a19.41556,19.41556,0,0,1,8.955-.04979c.18788.04342.26809-.24576.07975-.28928Z" />
                                    <path
                                        d="M242.03056,64.47045c5.21066-8.01639,5.81188-25.452,2.80575-34.47045l-5.01024,2.20451s3.20655,9.41925,3.20655,15.43153-2.20451,14.22908-2.20451,14.22908-.62628,1.22751.17537,1.929S242.03056,64.47045,242.03056,64.47045Z"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M301.42271,73.4907a.079.079,0,0,0,.07.01437c.406-.1699-1.73466-6.29633-2.23327-7.49951-7.28489-17.5789-29.27215-32.39316-44.63669-26.42182-2.25565.87665-3.81166,3.24311-7.40019,7.97564"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M247.21462,47.76368c.00191-.075.0048-.14333.008-.2043a65.24952,65.24952,0,0,1,16.5065-.41142c8.69772.89253,19.3149,1.72946,25.9687,9.22919a80.42152,80.42152,0,0,1,9.64011,13.55611,21.947,21.947,0,0,0,2.08479,3.55744"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M301.09493,73.55391c-7.7-10.81865-15.96246-14.08847-21.233-15.06045-3.53054-.65109-3.51554.22866-11.06073-.45914-8.152-.74311-18.813-1.82849-21.125-7.60287a6.76191,6.76191,0,0,1-.4616-2.66777"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M259.71591,46.73059a9.70715,9.70715,0,0,1,6.78331-5.08571"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M267.21964,47.61487a5.42021,5.42021,0,0,0,.67977,2.45309,5.918,5.918,0,0,0,3.77869,2.71619"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M277.95886,49.35275a8.62224,8.62224,0,0,1,4.276-.94148,8.2496,8.2496,0,0,1,1.85434.30234"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path d="M257.17885,46.88434a9.46056,9.46056,0,0,0,2.72516,4.92779"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M268.97509,47.66317a5.76668,5.76668,0,0,1,1.52265-1.47417,6.50152,6.50152,0,0,1,4.863-.78639"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path d="M279.53918,50.091a3.97165,3.97165,0,0,0,2.85585,3.407"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:0.25px" />
                                    <path
                                        d="M264.46758,77.46959a1.4936,1.4936,0,0,1,1.80353.123.99634.99634,0,0,1,.34255.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43344,1.43344,0,0,0-1.23991-1.72782,1.73243,1.73243,0,0,0-1.30934.25163c-.15706.10985-.0073.37.15142.259Z" />
                                    <path
                                        d="M253.47844,82.17922a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43344,1.43344,0,0,0-1.23991-1.72782,1.73242,1.73242,0,0,0-1.30934.25163c-.15706.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M261.32783,85.319a1.4936,1.4936,0,0,1,1.80353.123.99634.99634,0,0,1,.34255.85115,1.22317,1.22317,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15012.15012,0,0,0-.15142.25905,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.0073.37005.15142.259Z" />
                                    <path
                                        d="M269.17721,90.02861a1.49358,1.49358,0,0,1,1.80353.123.9963.9963,0,0,1,.34255.85115,1.22319,1.22319,0,0,1-.52381.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73234,1.73234,0,0,0-1.30934.25163c-.15706.10985-.0073.37.15142.259Z" />
                                    <path
                                        d="M253.47844,90.02861a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73233,1.73233,0,0,0-1.30934.25163c-.15706.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M237.77968,82.17923a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10986-.0073.37.15141.25905Z" />
                                    <path
                                        d="M245.62906,86.10392a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10986-.0073.37005.15141.25905Z" />
                                    <path
                                        d="M229.93029,90.02861a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22317,1.22317,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M222.08091,82.17923a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22315,1.22315,0,0,1-.52382.81118.92266.92266,0,0,1-1.01326.09041.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73236,1.73236,0,0,0-1.30934.25162c-.15707.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M214.23153,74.32985a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22315,1.22315,0,0,1-.52382.81118.92266.92266,0,0,1-1.01326.09041.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73239,1.73239,0,0,0-1.30935.25162c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M210.30684,82.17923a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22315,1.22315,0,0,1-.52382.81118.92266.92266,0,0,1-1.01326.09041.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73239,1.73239,0,0,0-1.30935.25162c-.15706.10985-.00729.37.15142.259Z" />
                                    <path
                                        d="M205.59721,90.02861a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22317,1.22317,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73236,1.73236,0,0,0-1.30934.25162c-.15707.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M218.15622,90.02861a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22317,1.22317,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73236,1.73236,0,0,0-1.30934.25162c-.15707.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M210.30684,97.878a1.4936,1.4936,0,0,1,1.80353.123.99633.99633,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73239,1.73239,0,0,0-1.30935.25162c-.15706.10986-.00729.37005.15142.259Z" />
                                    <path
                                        d="M226.0056,97.878a1.4936,1.4936,0,0,1,1.80353.123.99633.99633,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73236,1.73236,0,0,0-1.30934.25162c-.15707.10986-.0073.37005.15141.259Z" />
                                    <path
                                        d="M240.91943,94.73824a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34255.85116,1.22317,1.22317,0,0,1-.52381.81118.92266.92266,0,0,1-1.01326.09041.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.0073.37.15142.259Z" />
                                    <path
                                        d="M217.37128,104.94244a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43344,1.43344,0,0,0-1.23991-1.72782,1.73237,1.73237,0,0,0-1.30934.25163c-.15706.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M217.37128,112.00688a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10985-.0073.37005.15141.259Z" />
                                    <path
                                        d="M234.63992,100.23281a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91761,1.43343,1.43343,0,0,0-1.2399-1.72782,1.73244,1.73244,0,0,0-1.30935.25163c-.15706.10985-.00729.37.15142.259Z" />
                                    <path
                                        d="M226.79054,108.08219a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22318,1.22318,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91761,1.43344,1.43344,0,0,0-1.2399-1.72782,1.73244,1.73244,0,0,0-1.30935.25163c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M208.737,105.72738a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10986-.0073.37005.15141.25905Z" />
                                    <path
                                        d="M207.16709,75.11479a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22322,1.22322,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43342,1.43342,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M203.2424,82.96417a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22322,1.22322,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15012.15012,0,0,0-.15142.25905,1.407,1.407,0,0,0,1.94024-.91762,1.43342,1.43342,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M211.87672,91.59849a1.4936,1.4936,0,0,1,1.80353.123.99632.99632,0,0,1,.34255.85115,1.22317,1.22317,0,0,1-.52381.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.0073.37005.15142.259Z" />
                                    <path
                                        d="M218.94116,97.878a1.4936,1.4936,0,0,1,1.80353.123.99633.99633,0,0,1,.34256.85115,1.22321,1.22321,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10986-.00729.37005.15142.259Z" />
                                    <path
                                        d="M223.65079,114.36169a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22324,1.22324,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43342,1.43342,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M230.71523,116.71651a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91761,1.43344,1.43344,0,0,0-1.2399-1.72782,1.73244,1.73244,0,0,0-1.30935.25163c-.15706.10985-.00729.37.15142.259Z" />
                                    <path
                                        d="M238.56461,108.86713a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91761,1.43343,1.43343,0,0,0-1.2399-1.72782,1.73236,1.73236,0,0,0-1.30934.25163c-.15707.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M246.414,101.01775a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73232,1.73232,0,0,0-1.30934.25163c-.15707.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M254.26337,98.66293a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22315,1.22315,0,0,1-.52382.81118.92264.92264,0,0,1-1.01325.09041.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M262.11275,93.9533a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22319,1.22319,0,0,1-.52381.81119.92268.92268,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10985-.0073.37005.15141.259Z" />
                                    <path
                                        d="M270.74707,82.17923a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22315,1.22315,0,0,1-.52382.81118.92266.92266,0,0,1-1.01326.09041.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M270.74707,97.878a1.4936,1.4936,0,0,1,1.80353.123.99633.99633,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10986-.0073.37005.15141.259Z" />
                                    <path
                                        d="M262.11275,101.80269a1.49358,1.49358,0,0,1,1.80353.123.99633.99633,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10986-.0073.37005.15141.25905Z" />
                                    <path
                                        d="M264.46757,111.22194a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22322,1.22322,0,0,1-.52382.81118.92266.92266,0,0,1-1.01326.09041.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43342,1.43342,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.00729.37.15142.259Z" />
                                    <path
                                        d="M268.39226,105.72738a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22324,1.22324,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10986-.00729.37005.15142.25905Z" />
                                    <path
                                        d="M255.04831,108.08219a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22315,1.22315,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91761,1.43343,1.43343,0,0,0-1.2399-1.72782,1.73244,1.73244,0,0,0-1.30935.25163c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M255.04831,115.93157a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22315,1.22315,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91761,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73239,1.73239,0,0,0-1.30935.25162c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M247.19893,111.22194a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22319,1.22319,0,0,1-.52382.81118.92266.92266,0,0,1-1.01326.09041.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73239,1.73239,0,0,0-1.30935.25162c-.15706.10985-.00729.37.15142.259Z" />
                                    <path
                                        d="M244.05918,118.28638a1.4936,1.4936,0,0,1,1.80353.123.99633.99633,0,0,1,.34256.85115,1.22324,1.22324,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43342,1.43342,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10986-.00729.37005.15142.259Z" />
                                    <path
                                        d="M237.77967,115.93157a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10985-.0073.37005.15141.259Z" />
                                    <path
                                        d="M229.14535,83.74911a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43344,1.43344,0,0,0-1.23991-1.72782,1.73242,1.73242,0,0,0-1.30934.25163c-.15706.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M251.24162,121.36457a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.2232,1.2232,0,0,1-.52382.81118.92266.92266,0,0,1-1.01326.09041.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43342,1.43342,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.00729.37.15142.259Z" />
                                    <path
                                        d="M239.95493,123.41671a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43344,1.43344,0,0,0-1.23991-1.72782,1.73242,1.73242,0,0,0-1.30934.25163c-.15706.10985-.0073.37005.15141.259Z" />
                                    <path
                                        d="M227.64218,123.41671a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22321,1.22321,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91761,1.43344,1.43344,0,0,0-1.23991-1.72782,1.73243,1.73243,0,0,0-1.30934.25163c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M218.40761,118.28639a1.49358,1.49358,0,0,1,1.80353.123.99633.99633,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92268.92268,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73237,1.73237,0,0,0-1.30934.25162c-.15706.10985-.0073.37005.15141.259Z" />
                                    <path
                                        d="M210.19911,112.13a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91761,1.43343,1.43343,0,0,0-1.2399-1.72782,1.7324,1.7324,0,0,0-1.30935.25163c-.15706.10985-.00729.37.15142.259Z" />
                                    <path
                                        d="M204.04273,97.76514a1.49358,1.49358,0,0,1,1.80353.123.99634.99634,0,0,1,.34256.85115,1.22319,1.22319,0,0,1-.52381.81119.92266.92266,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91761,1.43344,1.43344,0,0,0-1.23991-1.72782,1.73237,1.73237,0,0,0-1.30934.25163c-.15706.10985-.0073.37.15141.259Z" />
                                    <path
                                        d="M203.01667,103.92151a1.4936,1.4936,0,0,1,1.80353.123.99633.99633,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73239,1.73239,0,0,0-1.30935.25162c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M200.96455,92.63482a1.4936,1.4936,0,0,1,1.80353.123.99638.99638,0,0,1,.34255.85116,1.22317,1.22317,0,0,1-.52381.81118.92266.92266,0,0,1-1.01326.09041.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.0073.37.15142.259Z" />
                                    <path
                                        d="M233.79856,126.4949a1.49358,1.49358,0,0,1,1.80353.123.9963.9963,0,0,1,.34255.85115,1.22319,1.22319,0,0,1-.52381.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15142.259,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73234,1.73234,0,0,0-1.30934.25163c-.15706.10985-.0073.37.15142.259Z" />
                                    <path
                                        d="M246.11131,125.46883a1.4936,1.4936,0,0,1,1.80353.123.99636.99636,0,0,1,.34256.85116,1.22317,1.22317,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73239,1.73239,0,0,0-1.30935.25162c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M260.47619,118.28639a1.49358,1.49358,0,0,1,1.80353.123.99633.99633,0,0,1,.34256.85115,1.22317,1.22317,0,0,1-.52382.81119.92267.92267,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91762,1.43342,1.43342,0,0,0-1.2399-1.72781,1.73239,1.73239,0,0,0-1.30935.25162c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M220.45974,123.41671a1.4936,1.4936,0,0,1,1.80353.123.99635.99635,0,0,1,.34256.85115,1.22321,1.22321,0,0,1-.52382.81119.92265.92265,0,0,1-1.01326.0904.15011.15011,0,0,0-.15141.259,1.407,1.407,0,0,0,1.94023-.91761,1.43344,1.43344,0,0,0-1.23991-1.72782,1.73243,1.73243,0,0,0-1.30934.25163c-.15706.10985-.00729.37005.15142.259Z" />
                                    <path
                                        d="M212.25124,117.26033a1.4936,1.4936,0,0,1,1.80353.123.99632.99632,0,0,1,.34255.85116,1.22317,1.22317,0,0,1-.52381.81118.92264.92264,0,0,1-1.01326.0904.15012.15012,0,0,0-.15142.25905,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.0073.37005.15142.259Z" />
                                    <path
                                        d="M205.0688,110.07789a1.4936,1.4936,0,0,1,1.80353.123.99632.99632,0,0,1,.34255.85116,1.22317,1.22317,0,0,1-.52381.81118.92264.92264,0,0,1-1.01326.0904.15012.15012,0,0,0-.15142.25905,1.407,1.407,0,0,0,1.94024-.91762,1.43343,1.43343,0,0,0-1.23991-1.72781,1.73238,1.73238,0,0,0-1.30934.25162c-.15706.10985-.0073.37005.15142.259Z" />
                                    <path
                                        d="M245.2466,226.09729a34.79239,34.79239,0,0,1,10.63175,1.67182,35.9116,35.9116,0,0,1,17.81419,13.09867c9.84182,14.12737,4.10194,31.29254,3.40567,33.27062a41.63112,41.63112,0,0,1-34.31853,27.24523c-17.64966,1.89651-37.048-8.09031-42.70166-25.67339-4.05094-12.59868-.04059-25.97251,6.81132-34.58048A39.38456,39.38456,0,0,1,223.13168,229.341c6.57409-2.63763,10.96967-2.22,12.05079-2.09578a22.17186,22.17186,0,0,1,5.23926,1.30978l.00019.00009a32.1485,32.1485,0,0,1,3.44047,1.78461"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M242.03056,234.47045c5.21066-8.01639,5.81188-25.452,2.80575-34.47045"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M301.42271,243.4907a.079.079,0,0,0,.07.01437c.406-.1699-1.73466-6.29633-2.23327-7.49951-7.28489-17.5789-29.27215-32.39316-44.63669-26.42182-2.25565.87665-3.81166,3.24311-7.40019,7.97564"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M301.09493,243.55391c-7.7-10.81865-15.96246-14.08847-21.233-15.06045-3.53054-.65109-3.51554.22866-11.06073-.45914-8.152-.74311-18.813-1.82849-21.125-7.60287a6.76191,6.76191,0,0,1-.4616-2.66777"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M245.2466,396.09729a34.79239,34.79239,0,0,1,10.63175,1.67182,35.9116,35.9116,0,0,1,17.81419,13.09867c9.84182,14.12737,4.10194,31.29254,3.40567,33.27062a41.63112,41.63112,0,0,1-34.31853,27.24523,42.13263,42.13263,0,0,1-13.31871-.73782"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M242.03056,404.47045c5.21066-8.01639,5.81188-25.452,2.80575-34.47045"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Limonqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M69.01807,94.459l-2.86231-.89746C72.14551,74.46,79.52441,51.21436,80.6582,48.94629l2.6836,1.3418C82.5498,51.87158,77.19531,68.38428,69.01807,94.459Z" />
                                        <polygon points="63.713 91.41 65.66 100.17 72.274 94.105 63.713 91.41" />
                                        <path
                                            d="M150.67676,125.12793l-2.4961-1.66406a26.72628,26.72628,0,0,0,3.84668-8.82324c2.95606-12.79493-3.50879-26.78125-15.03808-32.53223-9.54883-4.76319-19.14746-2.25147-22.83008-.94922l-1-2.8291c4.04395-1.42822,14.5918-4.18262,25.16992,1.09375,12.73535,6.353,19.88086,21.7832,16.62207,35.89258A29.71428,29.71428,0,0,1,150.67676,125.12793Z" />
                                        <polygon points="146.65 120.401 145.319 129.277 153.671 125.992 146.65 120.401" />
                                    </g>
                                    <path
                                        d="M106.326,55C88.37257,95.97071,86.5,107.47887,86.5,107.47887a13.83674,13.83674,0,0,1,5.12525-6.84507c7.53915-5.71536,21.0912-9.04013,31.20152-4.05634.53856.26549,7.588,3.8507,9.90047,10.39437,3.98427,11.27418-7.68043,26.837-29.40142,38.02817"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="lalaxtli_child0">
                                        <set attributename="mask" to="url(#lalaxtli_mask0)"
                                            begin="0s;lalaxtli_child0.click+1s;lalaxtli_child0.click+1s;lalaxtli_child0.click;"
                                            end="lalaxtli_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="lalaxtli_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M106.326,55C88.37257,95.97071,86.5,107.47887,86.5,107.47887a13.83674,13.83674,0,0,1,5.12525-6.84507c7.53915-5.71536,21.0912-9.04013,31.20152-4.05634.53856.26549,7.588,3.8507,9.90047,10.39437,3.98427,11.27418-7.68043,26.837-29.40142,38.02817"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="164.11293029785156 164.11293029785156"
                                            stroke-dashoffset="164.11293029785156">
                                            <animate id="lalaxtli_animation0" attributename="stroke-dashoffset"
                                                from="164.11293029785156" to="0" begin="1s;lalaxtli_child0.click+1s"
                                                dur="1.8755763462611608s">
                                            </animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="la-lax-tli">
                                <span slot="after">
                                    <p><i>/l/</i></p>
                                    <p>Lalaxtli, naranja</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_20" data-name="Layer 20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Wizmetl</title>
                                    <path
                                        d="M159.14341,71.47088a20.29177,20.29177,0,0,0,10.41063-1.5438c2.15828-.96477,5.053-2.25874,5.5518-4.65352.69729-3.3478-3.76525-6.55456-3.25277-7.10721.39367-.42452,3.01694,1.4784,7.76378,4.52315,3.65179,2.34235,5.49873,3.52035,6.52981,3.85495,6.10213,1.98023,11.6604-1.11277,11.94017-1.2741,1.74477-1.00612,5.29823-2.78215,5.48741-5.56606.22492-3.30978-4.38747-5.94-4.06241-6.34877.27666-.34787,3.4007,1.82986,8.02083,4.34317,3.48436,1.89546,5.26006,2.84671,6.90242,3.01945,5.40594.5686,9.33491-3.36232,9.66486-3.703,1.10693-1.14283,2.48272-2.56327,2.33862-4.3189-.26206-3.19281-5.34009-4.92513-5.12906-5.41035.19023-.43736,4.28812,1.20553,9.64006,2.82629,5.42152,1.64184,7.05121,1.72565,8.26467,1.68257,2.813-.09985,7.31594-1.021,7.7627-3.13719.50251-2.3801-4.40748-4.93926-3.95947-5.65472.46844-.74808,5.98149,1.81827,7.23651,2.40249,4.25677,1.98154,4.23476,2.47107,5.8099,2.82683,4.883,1.10285,11.15962-2.23177,11.28412-5.21985.12906-3.09746-6.35913-5.66757-6.14454-6.04.18678-.3242,4.55127,2.581,10.617,3.67446,2.62988.47407,8.13091,1.46572,10.62915-1.50527a5.53839,5.53839,0,0,0,1.169-4.07454c-.53084-3.15336-4.47406-4.71482-4.29357-5.03774.21991-.39342,5.30208,3.30382,11.491,3.82857,4.62479.39213,5.50665-1.357,10.48768-1.98081,8.32525-1.04257,15.34944,2.65566,21.28522,5.78084a55.04935,55.04935,0,0,1,11.813,8.39129,26.3072,26.3072,0,0,0-15.42356-.69191c-8.25282,2.3712-12.7941,8.97349-15.76873,12.76513-4.318,5.504-14.05952,12.13666-33.54253,25.402-7.59671,5.17235-27.52217,18.49607-55.431,25.59783a160.85842,160.85842,0,0,1-62.73455,3.132"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M154.61634,97.14519a20.2919,20.2919,0,0,0,10.41063-1.5438c2.15828-.96477,5.053-2.25874,5.5518-4.65352.69728-3.34781-3.76525-6.55456-3.25277-7.10721.39367-.42453,3.01694,1.47839,7.76378,4.52314,3.65179,2.34235,5.49873,3.52036,6.52981,3.855,6.10213,1.98023,11.6604-1.11278,11.94016-1.2741,1.74477-1.00612,5.29824-2.78215,5.48742-5.56607.22491-3.30977-4.38747-5.94-4.06241-6.34876.27665-.34788,3.4007,1.82985,8.02083,4.34316,3.48436,1.89547,5.26006,2.84672,6.90242,3.01946,5.40594.5686,9.33491-3.36232,9.66486-3.703,1.10693-1.14282,2.48272-2.56326,2.33862-4.31889-.26206-3.19281-5.34009-4.92514-5.12906-5.41035.19022-.43736,4.28812,1.20553,9.64006,2.82629,5.42152,1.64183,7.05121,1.72565,8.26467,1.68257,2.813-.09985,7.31594-1.021,7.7627-3.13719.50251-2.38011-4.40748-4.93926-3.95947-5.65472.46844-.74809,5.98148,1.81826,7.23651,2.40248,4.25677,1.98155,4.23476,2.47108,5.8099,2.82683,4.883,1.10286,11.15962-2.23177,11.28412-5.21984.12906-3.09746-6.35913-5.66757-6.14454-6.04.18678-.3242,4.55126,2.581,10.617,3.67445,2.62988.47408,8.1309,1.46573,10.62914-1.50527a5.53831,5.53831,0,0,0,1.16906-4.07454c-.53084-3.15335-4.47406-4.71482-4.29357-5.03773.19185-.34323,5.946,4.84177,11.491,3.82856,2.72937-.4987,2.68961-2.00083,9.24658-7.71947,7.2115-6.28952,11.09575-7.81826,13.21161-8.48475a25.86175,25.86175,0,0,1,5.37236-1.08039"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M198.67928,226.41729c6.73867-.2475,15.39607-1.31788,16.86888-5.72905,1.55084-4.64483-5.471-11.17631-4.77421-11.77639.79327-.68316,7.62964,9.73235,18.142,11.77639,1.18747.2309,10.46108,2.62578,13.04951-1.59141,2.36843-3.85876-5.08115-11.94613-4.45592-12.41294.66328-.49523,6.32564,10.41973,15.914,12.41294,6.0778,1.26345,13.63647-1.07788,15.27747-5.41077,1.988-5.249-5.175-12.18984-4.13765-13.0495,1.09483-.90726,7.04448,8.50415,16.23231,9.23014,3.29472.26035,6.01585-.78128,11.45812-2.86452A71.631,71.631,0,0,0,305.9399,200a138.65,138.65,0,0,1-8.27531,25.46246c-4.89932,11.23862-14.05289,32.23614-35.64745,48.37866A101.98134,101.98134,0,0,1,213.95675,292.938"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M209.5161,379.45133c6.68665,9.43182,14.00131,13.42433,18.37757,15.22711C248.0799,402.99407,275.23246,393.34392,295.103,370a94.063,94.063,0,0,1-14.702,50.93213c-22.19387,34.35483-59.70929,40.97563-66.15925,42.00584"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Weyilqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M163.55859,90.30957l-2.4082-1.78809a111.87366,111.87366,0,0,0,21.03125-51.25537h-58.543v-3h61.9541l-.21093,1.686a114.88325,114.88325,0,0,1-21.82325,54.35742Z" />
                                        <polygon points="159.6 85.601 158.362 94.489 166.679 91.118 159.6 85.601" />
                                    </g>
                                    <path
                                        d="M65,55h90c-1.94479,12.54815-11.56438,34.24311-30.40462,54.52429A123.36765,123.36765,0,0,1,65,145"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="wizmetl_child0">
                                        <set attributename="mask" to="url(#wizmetl_mask0)"
                                            begin="0s;wizmetl_child0.click+1s;wizmetl_child0.click+1s;wizmetl_child0.click;"
                                            end="wizmetl_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="wizmetl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M65,55h90c-1.94479,12.54815-11.56438,34.24311-30.40462,54.52429A123.36765,123.36765,0,0,1,65,145"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="223.50479125976562 223.50479125976562"
                                            stroke-dashoffset="223.50479125976562">
                                            <animate id="wizmetl_animation0" attributename="stroke-dashoffset"
                                                from="223.50479125976562" to="0" begin="1s;wizmetl_child0.click+1s"
                                                dur="1.2771702357700894s">
                                            </animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="wiz-metl">
                                <span slot="after">
                                    <p><i>/w/</i></p>
                                    <p>Witsmetl, alóe</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p>
                                <svg id="Layer_21" data-name="Layer 21" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                                    <title>Yolotl</title>
                                    <path
                                        d="M283.18759,39.1419a53.18259,53.18259,0,0,0-6.95207,11.2424c-2.05787,4.0963-3.344,6.723-3.53326,10.36423-.21624,4.16032,1.17984,6.17387,2.35551,10.59979A48.05521,48.05521,0,0,1,276,87.36577c-1.10205,9.65192-6.62985,16.06531-13.8975,24.49728-8.0582,9.34917-12.43035,14.42176-18.84406,14.36859-7.07184-.05863-12.17624-6.312-16.253-11.30643a39.90385,39.90385,0,0,1-1.17776-50.64342,52.7676,52.7676,0,0,1,9.30563-9.01023"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M239.72514,65.224a32.59136,32.59136,0,0,0-4.23991-10.12869c-6.0545-9.49612-15.48907-12.99515-18.93909-14.10493"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M220.43774,33.131c3.60755.33576,10.50033,2.39527,14.81194,5.94689,6.02269,4.96109,7.50352,12.20861,10.12869,11.77754.82266-.13509,1.54716-.98964,3.06215-5.65322a86.14909,86.14909,0,0,0,3.29772-14.133"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M262.73728,33.10738c-.72314,2.6275-1.80907,6.3726-3.29771,10.83533-2.13231,6.39237-3.55966,9.66675-2.59106,10.36423.80815.582,2.82817-.99445,5.18211-2.8266a25.10689,25.10689,0,0,0,6.59543-6.831,23.03883,23.03883,0,0,0,3.2977-9.18649"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M260.21806,65.93065a51.74085,51.74085,0,0,0-9.65757,14.133,52.91288,52.91288,0,0,0-4.47548,27.32389"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M249.58912,82.12457a28.32674,28.32674,0,0,0-4.9174-5.35859,28.85475,28.85475,0,0,0-13.8975-6.35987"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <ellipse cx="218.44305" cy="37.04578" rx="4.39369" ry="1.55905"
                                        transform="translate(86.26406 214.86161) rotate(-63.00004)"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <ellipse cx="257.22129" cy="32.23508" rx="1.99775" ry="5.61529"
                                        transform="translate(176.49787 278.5796) rotate(-78.99989)"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <ellipse cx="277.61318" cy="37.12402" rx="1.97119" ry="5.96885"
                                        transform="translate(156.51846 289.67766) rotate(-71.99989)"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M273.77893,231.35181c.397,1.18816.8524,2.47614,1.27884,4.08149A48.05533,48.05533,0,0,1,276,251.45076c-1.10205,9.65192-6.62985,16.06531-13.8975,24.49728-8.0582,9.34916-12.43035,14.42176-18.84406,14.36859-7.07184-.05863-12.17624-6.312-16.253-11.30644a39.90384,39.90384,0,0,1-1.17776-50.64341,52.7676,52.7676,0,0,1,9.30563-9.01023"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M275.04817,202.99822a53.18217,53.18217,0,0,0-6.95207,11.2424c-2.05787,4.0963-3.344,6.723-3.53327,10.36423a16.02021,16.02021,0,0,0,1.07667,6.5183"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M243.53166,224.23362a32.591,32.591,0,0,0-4.23992-10.12868c-6.05449-9.49613-15.48906-12.99515-18.93909-14.10494"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path d="M259.67317,200.31038a41.21963,41.21963,0,0,0-7.45106,28.83234"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                    <path
                                        d="M273.77893,381.99526c.397,1.18816.8524,2.47614,1.27884,4.08149A48.05533,48.05533,0,0,1,276,402.09421c-1.10205,9.65192-6.62985,16.06531-13.8975,24.49728-8.0582,9.34916-12.43035,14.42176-18.84406,14.36859-7.07184-.05863-12.17624-6.312-16.253-11.30644a39.90384,39.90384,0,0,1-1.17776-50.64341A52.7676,52.7676,0,0,1,235.13328,370"
                                        style="fill:none;stroke:#000;stroke-miterlimit:10" />
                                </svg>
                            </p>
                            <p>
                                <svg id="Yololqiloli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <g class="directions">
                                        <path
                                            d="M167.04492,118.67285l-2.84375-.95508a85.21818,85.21818,0,0,0,4.28125-33.20947,86.15847,86.15847,0,0,0-10.03711-34.62646l2.64063-1.42286a89.16057,89.16057,0,0,1,10.38867,35.84131A88.17424,88.17424,0,0,1,167.04492,118.67285Z" />
                                        <polygon points="161.832 115.387 163.34 124.234 170.249 118.506 161.832 115.387" />
                                    </g>
                                    <path
                                        d="M136.46811,55c3.4345,6.3,7.79543,17.35,9.35828,32.1,1.14171,10.8,2.0869,30.63334-8.2072,45.4-8.71256,12.5-24.42512,12.5-27.7473,12.5h.262c-3.32217,0-19.02537,0-27.74729-12.5-10.29411-14.75835-9.34893-34.59167-8.20721-45.4C75.74225,72.34166,80.10321,61.29168,83.5377,55"
                                        style=";stroke-miterlimit:10;stroke-width:10px" id="yolotl_child0">
                                        <set attributename="mask" to="url(#yolotl_mask0)"
                                            begin="0s;yolotl_child0.click+1s;yolotl_child0.click+1s;yolotl_child0.click;"
                                            end="yolotl_animation0.end;indefinite"></set>
                                    </path>
                                    <mask id="yolotl_mask0" maskunits="objectBoundingBox">
                                        <path
                                            d="M136.46811,55c3.4345,6.3,7.79543,17.35,9.35828,32.1,1.14171,10.8,2.0869,30.63334-8.2072,45.4-8.71256,12.5-24.42512,12.5-27.7473,12.5h.262c-3.32217,0-19.02537,0-27.74729-12.5-10.29411-14.75835-9.34893-34.59167-8.20721-45.4C75.74225,72.34166,80.10321,61.29168,83.5377,55"
                                            style=";stroke-miterlimit:10;stroke-width:10px"
                                            stroke-dasharray="225.1535186767578 225.1535186767578"
                                            stroke-dashoffset="225.1535186767578">
                                            <animate id="yolotl_animation0" attributename="stroke-dashoffset"
                                                from="225.1535186767578" to="0" begin="1s;yolotl_child0.click+1s"
                                                dur="1.2865915352957589s"></animate>
                                        </path>
                                    </mask>
                                </svg>
                            </p>
                            <xamix-element textInput="yo-lotl">
                                <span slot="after">
                                    <p><i>/j/</i></p>
                                    <p>Yolotl, corazón</p>
                                </span>
                            </xamix-element>
                        </div>
                    </div>
                    <div class="row">
                        <div class="cell">
                            <p></p>
                            <p>
                                <svg id="Hekalqilotontli" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                    <title>'</title>
                                    <g class="directions">
                                        <polygon
                                            points="66.436 55.818 63.436 55.818 63.436 40.776 84.936 40.776 84.936 43.776 66.436 43.776 66.436 55.818" />
                                        <polygon points="60.448 54.505 64.936 62.277 69.424 54.505 60.448 54.505" />
                                    </g>
                                    <path
                                        d="M143.26661,150c-7.8125,0-12.4043-6.28613-14.61817-9.31836-4.1914-5.72168-5.90722-15.0918-6.38379-18.2334-2.89257-.16113-5.82128-.29492-8.67382-.30176-5.07178.00684-10.105.18848-14.9668.59473-3.36182.28125-6.749.47461-10.335.67969-2.4082.13769-4.85059.27734-7.30957.44726l-2.62305.17872c-4.27392.29-8.69336.58886-12.87451.99414l-.96387-9.95313c4.32471-.41894,8.81739-.72363,13.16211-1.01855l2.61084-.17774c2.49854-.17187,4.98-.31445,7.42774-.4541,3.51806-.20117,6.8413-.39062,10.07177-.66113,5.146-.43067,10.4751-.63477,15.82471-.62989,2.61133.00684,5.21973.10743,7.793.24122-.34863-5.94043-.44043-11.793-.30859-18.40088.29785-14.875,3.86035-38.72217,4.01171-39.73L135,55.74316c-.03614.24024-3.61719,24.21875-3.90235,38.44385-.13672,6.85987-.03222,12.69776.36133,18.769a77.97157,77.97157,0,0,1,14.75879,2.21094c2.54492.65528,9.335,2.40332,12.39941,9.12207,3.3711,7.39258-.4375,15.28516-.88379,16.16114-2.92773,5.74414-8.543,9.49023-14.30566,9.54882C143.374,149.999,143.32032,150,143.26661,150Zm-10.74414-26.94238c.7041,3.585,2.09179,8.8457,4.19726,11.7207,1.94141,2.66016,4.03125,5.25391,6.60254,5.2207,2.05567-.0205,4.26465-1.66308,5.5-4.08691.59082-1.1875,1.88184-4.874.69727-7.47363-.95508-2.0918-3.47168-2.98926-5.80664-3.59082A65.28459,65.28459,0,0,0,132.52247,123.05762Z" />
                                    <mask id="hekaltontli_mask0" maskunits="objectBoundingBox">
                                        <path d="m 108.42351,55 h -30 v 30" style=";stroke-miterlimit:10;stroke-width:6px"
                                            stroke-dasharray="60 60" stroke-dashoffset="60">
                                            <animate id="hekaltontli_animation0" attributename="stroke-dashoffset" from="60" to="0"
                                                begin="1s;hekaltontli_child0.click+1s" dur="0.6857142857142857s"></animate>
                                        </path>
                                    </mask>
                                    <path d="m 108.42351,55 h -30 v 30" style=";stroke-miterlimit:10;stroke-width:6px"
                                        id="hekaltontli_child0">
                                        <set attributename="mask" to="url(#hekaltontli_mask0)"
                                            begin="0s;hekaltontli_child0.click+1s;hekaltontli_child0.click+1s;hekaltontli_child0.click;"
                                            end="hekaltontli_animation0.end;indefinite"></set>
                                    </path>
                                </svg>
                            </p>
                            <xamix-element textInput="eh-e-ka-ton-tli">
                                <span slot="after">
                                    <p><i>/ʔ/</i></p>
                                    <p>Ehekatontli, saltillo</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p></p>
                            <p>
                                <svg id="Weyakqiloli_1" data-name="Weyakqiloli 1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200">
                                    <title>!</title>
                                    <g class="directions">
                                        <rect x="80.60742" y="23.88281" width="44.09473" height="3" />
                                        <polygon points="81.921 20.895 74.149 25.383 81.921 29.871 81.921 20.895" />
                                    </g>
                                    <path
                                        d="M143.26661,150c-7.8125,0-12.4043-6.28613-14.61817-9.31836-4.1914-5.72168-5.90722-15.0918-6.38379-18.2334-2.89257-.16113-5.82128-.29492-8.67382-.30176-5.07178.00684-10.105.18848-14.9668.59473-3.36182.28125-6.749.47461-10.335.67969-2.4082.13769-4.85059.27734-7.30957.44726l-2.62305.17872c-4.27392.29-8.69336.58886-12.87451.99414l-.96387-9.95313c4.32471-.41894,8.81739-.72363,13.16211-1.01855l2.61084-.17774c2.49854-.17187,4.98-.31445,7.42774-.4541,3.51806-.20117,6.8413-.39062,10.07177-.66113,5.146-.43067,10.4751-.63477,15.82471-.62989,2.61133.00684,5.21973.10743,7.793.24122-.34863-5.94043-.44043-11.793-.30859-18.40088.29785-14.875,3.86035-38.72217,4.01171-39.73L135,55.74316c-.03614.24024-3.61719,24.21875-3.90235,38.44385-.13672,6.85987-.03222,12.69776.36133,18.769a77.97157,77.97157,0,0,1,14.75879,2.21094c2.54492.65528,9.335,2.40332,12.39941,9.12207,3.3711,7.39258-.4375,15.28516-.88379,16.16114-2.92773,5.74414-8.543,9.49023-14.30566,9.54882C143.374,149.999,143.32032,150,143.26661,150Zm-10.74414-26.94238c.7041,3.585,2.09179,8.8457,4.19726,11.7207,1.94141,2.66016,4.03125,5.25391,6.60254,5.2207,2.05567-.0205,4.26465-1.66308,5.5-4.08691.59082-1.1875,1.88184-4.874.69727-7.47363-.95508-2.0918-3.47168-2.98926-5.80664-3.59082A65.28459,65.28459,0,0,0,132.52247,123.05762Z" />
                                    <line x1="138.34287" y1="40" x2="58.34287" y2="40"
                                        style=";stroke-miterlimit:10;stroke-width:6px" />
                                </svg>
                            </p>
                            <xamix-element textInput="we-yak-tli">
                                <span slot="after">
                                    <p><i>/:/</i></p>
                                    <p>Weyaktli, prolongación</p>
                                </span>
                            </xamix-element>
                        </div>
                        <div class="cell">
                            <p></p>
                            <p>
                                <svg id="Mokawqilotontli_1" data-name="Mokawqilotontli 1" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 200 200">
                                    <title>~</title>
                                    <mask id="mokawtontli_mask0" maskUnits="objectBoundingBox">
                                        <path d="M78.93716,65.00026v30h30" style=";stroke-miterlimit:10;stroke-width:6px"
                                            stroke-dasharray="60 60" stroke-dashoffset="60">
                                            <animate id="mokawtontli_animation0" attributeName="stroke-dashoffset" from="60" to="0"
                                                begin="1s;mokawtontli_child0.click+1s" dur="0.6857142857142857s"></animate>
                                        </path>
                                    </mask>
                                    <g class="directions">
                                        <polygon
                                            points="84.137 115.032 59.989 115.032 59.989 85.958 62.989 85.958 62.989 112.032 84.137 112.032 84.137 115.032">
                                        </polygon>
                                        <polygon points="82.824 118.02 90.596 113.532 82.824 109.044 82.824 118.02">
                                        </polygon>
                                    </g>
                                    <path
                                        d="M143.26661,150c-7.8125,0-12.4043-6.28613-14.61817-9.31836-4.1914-5.72168-5.90722-15.0918-6.38379-18.2334-2.89257-.16113-5.82128-.29492-8.67382-.30176-5.07178.00684-10.105.18848-14.9668.59473-3.36182.28125-6.749.47461-10.335.67969-2.4082.13769-4.85059.27734-7.30957.44726l-2.62305.17872c-4.27392.29-8.69336.58886-12.87451.99414l-.96387-9.95313c4.32471-.41894,8.81739-.72363,13.16211-1.01855l2.61084-.17774c2.49854-.17187,4.98-.31445,7.42774-.4541,3.51806-.20117,6.8413-.39062,10.07177-.66113,5.146-.43067,10.4751-.63477,15.82471-.62989,2.61133.00684,5.21973.10743,7.793.24122-.34863-5.94043-.44043-11.793-.30859-18.40088.29785-14.875,3.86035-38.72217,4.01171-39.73L135,55.74316c-.03614.24024-3.61719,24.21875-3.90235,38.44385-.13672,6.85987-.03222,12.69776.36133,18.769a77.97157,77.97157,0,0,1,14.75879,2.21094c2.54492.65528,9.335,2.40332,12.39941,9.12207,3.3711,7.39258-.4375,15.28516-.88379,16.16114-2.92773,5.74414-8.543,9.49023-14.30566,9.54882C143.374,149.999,143.32032,150,143.26661,150Zm-10.74414-26.94238c.7041,3.585,2.09179,8.8457,4.19726,11.7207,1.94141,2.66016,4.03125,5.25391,6.60254,5.2207,2.05567-.0205,4.26465-1.66308,5.5-4.08691.59082-1.1875,1.88184-4.874.69727-7.47363-.95508-2.0918-3.47168-2.98926-5.80664-3.59082A65.28459,65.28459,0,0,0,132.52247,123.05762Z" />
                                    <path d="M78.93716,65.00026v30h30" style=";stroke-miterlimit:10;stroke-width:6px"
                                        id="mokawtontli_child0">
                                        <set attributeName="mask" to="url(#mokawtontli_mask0)"
                                            begin="0s;mokawtontli_child0.click+1s;mokawtontli_child0.click+1s;mokawtontli_child0.click;"
                                            end="mokawtontli_animation0.end;indefinite"></set>
                                    </path>
                                </svg>
                            </p>
                            <xamix-element textInput="mo-kaw-tli">
                                <span slot="after">
                                    <p><i>/∅/</i></p>
                                    <p>Mokawtli, silencioso <br />(sin vocal)</p>
                                </span>
                            </xamix-element>
                        </div>
                    </div>
                </div>
            
                <div class="columns top justify">
                    <div class="container">
                        <div class="header">
                            <xamix-element class="title" textInput="ma-ci-o-me'"></xamix-element>
                        </div>
                        <div class="body horizontal">
                            <xamix-element textInput="ax-kan-zikoalistli1-_ i'-ti-ti-lo _ a-ka-me' _ ma-ci-o-me'-tlamilistli">
                            </xamix-element>
                        </div>
                    </div>
                    <div class="container latin">
                        <div class="header">
                            <h2>Machiome'</h2>
                        </div>
                        <div class="body">
                            <p>Axkan, i'titilo akame' machiome'.</p>
                        </div>
                    </div>
                    <div class="container latin">
                        <div class="header">
                            <h2>Ejemplos</h2>
                        </div>
                        <div class="body">
                            <p>Ahora, se muestran algunos ejemplos.</p>
                        </div>
                    </div>
                </div>
            
                <div class="body horizontal examples">
                    <div>
                        <div>
                            <xamix-element textInput="me!-xi'-katl">
                                <span class="latin" slot="after">&emsp;Mēxi'katl</span>
                            </xamix-element>
                        </div>
                        <div>
                            <span class="colored-xamix">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="37.81186447143554 0 123.18543090820312 200"
                                    id="me!" data-name="me!">
                                    <title>me!</title>
                                    <rect x="58.34277" y="37" width="80" height="6" style="fill: #34abeb"></rect>
                                    <path
                                        d="M144.2666,150c-7.8125,0-12.4043-6.28613-14.61816-9.31836-4.19141-5.72168-5.90723-15.0918-6.38379-18.2334-2.89258-.16113-5.82129-.29492-8.67383-.30176-5.06348.01172-10.10547.18848-14.9668.59473-3.36132.28125-6.74853.47461-10.335.67969-2.40869.13769-4.85058.27734-7.30957.44726l-2.623.17872c-4.27393.29-8.69336.58886-12.87452.99414l-.96386-9.95313c4.3247-.41894,8.81738-.72363,13.16211-1.01855l2.61084-.17774c2.498-.17187,4.98-.31445,7.42773-.4541,3.51807-.20117,6.84131-.39062,10.07178-.66113,5.146-.43067,10.45947-.63867,15.8247-.62989,2.61133.00684,5.21973.10743,7.793.24122-.34863-5.94043-.44043-11.793-.30859-18.40088.29785-14.875,3.86035-38.72217,4.01172-39.73L136,55.74316c-.03613.24024-3.61719,24.21875-3.90234,38.44385-.13672,6.85987-.03223,12.69776.36132,18.769a77.97144,77.97144,0,0,1,14.75879,2.21094c2.54493.65528,9.335,2.40332,12.39942,9.12207,3.37109,7.39258-.4375,15.28516-.88379,16.16114-2.92774,5.74414-8.543,9.49023-14.30567,9.54882C144.374,149.999,144.32031,150,144.2666,150Zm-10.74414-26.94238c.7041,3.585,2.0918,8.8457,4.19629,11.7207,1.94238,2.66016,4.043,5.25391,6.60352,5.2207,2.05566-.0205,4.26464-1.66308,5.5-4.08691.59082-1.1875,1.88183-4.874.69726-7.47363-.95508-2.0918-3.47168-2.98926-5.80664-3.59082A65.28442,65.28442,0,0,0,133.52246,123.05762Z"
                                        style="fill: #ff0000"></path>
                                    <path
                                        d="M115.9502,93.50781a47.01886,47.01886,0,0,1-17.00245-9.58447A45.72672,45.72672,0,0,1,87.86182,69.25879l5.41308-2.58691a39.78924,39.78924,0,0,0,9.64014,12.751,41.06755,41.06755,0,0,0,14.84961,8.36524Z"
                                        style="fill: #00ff00"></path>
                                    <path
                                        d="M96.44824,104.84863a47.00955,47.00955,0,0,1-17.00244-9.584A45.727,45.727,0,0,1,68.35986,80.6001L73.773,78.01318a39.78356,39.78356,0,0,0,9.64062,12.751,41.04888,41.04888,0,0,0,14.84815,8.36523Z"
                                        style="fill: #00ff00"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-24.98614015579224 0 176.45484008789063 200"
                                    id="xi'" data-name="xi'">
                                    <title>xi'</title>
                                    <polygon points="10.423 85 4.423 85 4.423 52 37.423 52 37.423 58 10.423 58 10.423 85"
                                        style="fill: #835C3B"></polygon>
                                    <path
                                        d="M110.64258,150.03809A44.02868,44.02868,0,0,1,84.12207,141.168a35.52247,35.52247,0,0,1-7.93555-8.16309c-9.17822-13.19336-9.16064-32.22851-5.07177-45.2417,3.09912-9.86279,8.50048-16.66015,15.20947-19.14062,9.40527-3.4707,21.67969,1.394,28.55469,11.31543,7.90039,11.39355,4.19922,24.70752,2.80566,29.72021-3.69043,13.32227-12.89062,22.87012-19.42773,28.042,8.60058,3.30566,18.5039,3.13769,25.96972-.89747,8.60157-4.64843,18.54981-17.37207,17.09961-51.58984a84.79854,84.79854,0,0,0-6.21-28.33643l9.26953-3.75292a94.78828,94.78828,0,0,1,6.93067,31.66406c1.34082,31.61865-6.17383,52.07861-22.33594,60.812A38.60091,38.60091,0,0,1,110.64258,150.03809ZM92.74512,77.50928a8.51391,8.51391,0,0,0-2.95606.49414c-3.63037,1.34179-7.0459,6.11181-9.13427,12.75781C76.68408,103.39746,78.22217,118.4209,84.395,127.294a24.87359,24.87359,0,0,0,4.46826,4.873c4.19531-2.66992,15.43067-11.62793,19.17481-25.14258,1.16113-4.17578,3.85058-13.85009-1.37793-21.38964C103.26758,80.73877,97.47705,77.50928,92.74512,77.50928Z"
                                        style="fill: #ff00ff"></path>
                                    <path
                                        d="M53.11279,93.36572a48.17194,48.17194,0,0,1-17.17431-9.498A45.55822,45.55822,0,0,1,24.73145,69.313L30.126,66.687a39.6029,39.6029,0,0,0,9.7417,12.646,42.12337,42.12337,0,0,0,15.01953,8.30127Z"
                                        style="fill: #ff7000"></path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="37.28535842895508 0 110.9773063659668 200"
                                    id="katl" data-name="katl">
                                    <title>katl</title>
                                    <path
                                        d="M93.11328,174.98828c-6.6748,0-13.0918-2.168-16.416-7.832-3.562-6.07617-3.145-15.82617.94726-22.19824a18.32593,18.32593,0,0,1,9.97852-7.45313l.17968-.0625c9.83106-3.3457,21.78321-.626,35.71094,8.084A77.46083,77.46083,0,0,0,137.291,115H75V105h72.94629v5c0,4.56152-3.29395,23.93164-16.209,41.19434a183.10189,183.10189,0,0,1,15.458,13.12207c.51074.47949.8711.82226,1.06739.99218l-6.5254,7.57618c-.25585-.21973-.72851-.66016-1.3916-1.28321a170.40013,170.40013,0,0,0-15.13379-12.79492A69.09243,69.09243,0,0,1,109.1416,171.001,34.75349,34.75349,0,0,1,93.11328,174.98828Zm3.19483-28.8916a16.239,16.239,0,0,0-5.25684.80371l-.19189.06543a8.45157,8.45157,0,0,0-4.8003,3.39551c-2.24219,3.49121-2.23681,9.1748-.73633,11.73535,2.59082,4.415,13.354,3.24414,19.00538.13965a59.25416,59.25416,0,0,0,12.41406-9.11426C107.61816,147.68164,100.9624,146.09668,96.30811,146.09668Z"
                                        style="fill: #afa0f0"></path>
                                    <path
                                        d="M101.93848,95c-11.56885,0-21.8418-3.0918-25.77784-7.811l7.67872-6.40527c1.25732,1.50586,8.31005,4.40088,19.00341,4.2085,14.03614-.23,29.47852-7.67969,31.833-21.47315a26.01111,26.01111,0,0,0-9.45117-24.11181c-4.74512-3.73731-12.58008-5.166-22.05176-4.01807-4.29053.519-11.65722,4.1001-13.89941,5.314L84.51367,31.9082c1.05567-.57129,10.51514-5.60693,17.458-6.44677,8.585-1.0376,20.66406-.8252,29.44043,6.09033a35.78789,35.78789,0,0,1,13.12109,33.6499c-3.27148,19.16357-23.36718,29.4917-41.52636,29.78955C102.65039,94.99707,102.293,95,101.93848,95Z"
                                        style="fill: #00ffff"></path>
                                </svg>
                                <span id="colored-example1" class="latin">
                                    &emsp;/
                                    <span style="color: #ff0000;">m</span>
                                    <span style="color: #00ff00;">e</span>
                                    <span style="color: #34abeb;">:</span>
                                    <span style="color: #ff00ff;">x</span>
                                    <span style="color: #ff7000;">i</span>
                                    <span style="color: #835C3B;">ʔ</span>
                                    <span style="color: #00ffff;">ka</span>
                                    <span style="color: #afa0f0;">t͡ɬ</span>
                                    /
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            
                <div class="tri-set top justify">
                    <div class="container">
                        <div class="body horizontal">
                            <xamix-element
                                textInput="ke-nin _ tla-ci-a-lo-_-zikoalistli1-_ sasanili1a-xa-mix-sasanili1b _ tla'-qi-lo-lo _ i-wik-pa _ yek-te-wik-pa-o-poc-tli-_-zikoalistli1-_ ix-ma-ti-lo _ a-ci-mo-cin-tin-qak _ i-xa-ci-tlan _ i-ma-ci-o-tla'-tol-lo-lis-wan-_-tlamilistli">
                            </xamix-element>
                            <xamix-element textInput="ma-ci-o-ka _ tik-tla-ci-a'-_-tlanesemixnawalistli-_"></xamix-element>
                            <ul>
                                <li>
                                    <xamix-element
                                        textInput="i-nik _ se-tlanesemixnawalistli _ cil-tik _ ma-ci-o-tla'-tol-tli _ ka _ sasanili1a-ma-itl-sasanili1b-zikoalistli1 _ tlen _ mo-za-zi _ <i>/m/</i>-zikoalistli1 _ i'-qak _ in _ i-ka-ka-kis-tli _ i-sel _ mo-za-zi _ i-ka _ za-zi-lis-tli _ <i>/a/</i> _-kaxtli2ha-sasanili1a-ma-itl-sasanili1b _ mo-za-zi _ <i>/ma/</i> _ i'-qak _ i-sel-kaxtli2hb-zikoalistli1 _ tel-zikoalistli1 _ i-nin _ ma-ci-o-ko _ sasanili1a-ma-itl-sasanili1b _ ki-kiz-ki _ sasanili1a-e-ton-tli-sasanili1b _ kaxtli2ha-o-me _ tla-xo-tlal-tin _ i-o-poc-ko-kaxtli2hb _ i-wan _ sasanili1a-we-yak-tli-sasanili1b _ kaxtli2ha-in _ te-xo-tik _ mo-te-kak _ me-la-wak _ tla-xo-tlal-tli _ sasanili1a-ma-sasanili1b-ix-pan-kaxtli2hb _ tlen _ tla-xe-xe-lo-lis-tli _ tlen _ ki-we-ya-ka _ sel-ti-ka-kis-tli-zikoalistli1 _ i-nin _ e-yi _ ma-ci-o-tla'-tol-tin _ ki-ci-wa' _ in _ za-zi-lis-tli _ <i>/me:/</i>-tlamilistli">
                                    </xamix-element>
                                </li>
                                <li>
                                    <xamix-element
                                        textInput="i-nik _ o-me-tlanesemixnawalistli _ tla-za-le-wal-tik _ ma-ci-o-tla'-tol-tli _ ka _ sasanili1a-xo-citl-sasanili1b-zikoalistli1 _ tlen _ mo-za-zi _ <i>/ʃ/</i>-zikoalistli1 _ i-nin _ tla-ni-ka-lo _ i-ka _ cil-kos-tik _ sasanili1a-i-mez-ton-tli-sasanili1b _ tlen _ mo-za-zi _ <i>/i/</i> _ i-wan _ i-nin _ tla-ni-ka-lo _ i-ka _ tlal-tik _ sasanili1a-e-he-ka-ton-tli-sasanili1b _ tlen _ mo-za-zi _ <i>/h/</i>-tlamilistli">
                                    </xamix-element>
                                </li>
                                <li>
                                    <xamix-element
                                        textInput="i-nik _ e-yi-tlanesemixnawalistli _ xiw-tik _ ma-ci-o-tla'-tol-tli _ ka _ sasanili1a-ko-atl-sasanili1b-zikoalistli1 _ tlen _ mo-za-zi _ <i>/k/</i>-zikoalistli1 _ ken _ i'-ti-ti-lo _ ac-to-pan-zikoalistli1 _ i-nin _ ye' _ ki-kiz-ki _ in _ za-zi-lis-tli _ <i>/a/</i> _ is-ka-ti-ki _ mo-za-zi _ <i>/ka/</i> _ i-wan _ i-ci _ ka _ sasanili1a-tla-ca-lotl-sasanili1b _ tlen _ mo-za-zi _ <i>/t͡ɬ/</i>-zikoalistli1 _ sa-tla-zon-ko _ mo-za-zi _ <i>/kat͡ɬ/</i>-tlamilistli">
                                    </xamix-element>
                                </li>
                            </ul>
                            <xamix-element
                                textInput="no-ci _ i-nin _ ix-tla-li-a' _ sasanili1a-xa-mix-sasanili1b _ i-tla-pa-na-wi-lis-wan-zikoalistli1 _ ki-a-yo-wi-ka _ me!-xi'-ka-tla'-tol-ik-no-ma-ti-lis-tli _ aw _ ki-tla-qi'-ta _ ma-ci-o-tla'-tol-tin _ i-ka _ a-ma-tla-kaw-tli-zikoalistli1 _ ki-pa-le-wi-li-a _ ki-ix-ma-ti-li-a _ me!-xi'-ka-tla'-tol-tli _ i-ne-tla'-tol-ma-ci-ti-lis-tin-tlamilistli">
                            </xamix-element>
                        </div>
                    </div>
                    <div class="container latin">
                        <div class="body">
                            <p>Kenin tlachialo, <i>xamix</i> tla'kwilolo yakanaiwikpa opochnawak, ixmatilo achimochintinkwak
                                Ixachitlan imachiotla'tolloliswan.</p>
                            <p>Machioka tiktlachia':</p>
                            <ul>
                                <li>
                                    inik se: chiltik machiotla'toltli ka <i>maitl</i>, tlen motsatsi <i>/m/</i>, i'kwak
                                    in ikakakistli isel motsatsi ika tsatsilistli <i>/a/</i> (<i>maitl</i> motsatsi
                                    <i>/ma/</i> i'kwak isel), tel, inin machioko, <i>maitl</i> kikitski <i>etontli</i>
                                    (ome tlaxotlaltin iopochko) iwan <i>weyaktli</i> (in texotik motekak melawak
                                    tlaxotlaltli <i>ma</i>ixpan) tlen tlaxexelolistli tlen kiweyaka seltikakistli, inin
                                    eyi machiotla'toltin kichiwa' in tsatsilistli <i>/me:/</i>.
                                </li>
                                <li>inik ome: tlatsalewaltik machiotla'toltli ka <i>xochitl</i>, tlen motsatsi <i>/ʃ/</i>, inin
                                    tlanikalo ika
                                    chilkostik <i>imetstontli</i> tlen motsatsi <i>/i/</i> iwan inin ome tlanikalo ika
                                    tlaltik <i>ehekatontli</i>
                                    tlen motsatsi
                                    <i>/h/</i>.
                                </li>
                                <li>
                                    inik eyi: xiwtik machiotla'toltli ka <i>koatl</i>, tlen motsatsi <i>/k/</i>, ken i'titilo
                                    achtopan,
                                    inin ye'
                                    kikitski in tsatsilistli <i>/a/</i> iskatiki motsatsi <i>/ka/</i> iwan ichi ka
                                    <i>tlachalotl</i> tlen
                                    motsatsi <i>/t͡ɬ/</i>,
                                    satlasonko motsatsi <i>/kat͡ɬ/</i>.
                                </li>
                            </ul>
                            <p>Nochi inin ixtlalia' <i>xamix</i> itlapanawiliswan, kiayowika mexikatla'toliknomatilistli aw
                                kitlakwi'ta
                                machiotla'toltin ika amatlakawtli, kipalewilia kiixmatilia mexikatla'toltli
                                inetla'tolmachitilistin.</p>
                        </div>
                    </div>
                    <div class="container latin center">
                        <div class="body">
                            <p>Como se observa, el <i>xamix</i> se escribe de derecha a izquierda, distinguiéndolo de la
                                vasta
                                mayoría de los sistemas de escritura empleados en el continente.</p>
                            <p>En el ejemplo anterior observamos:</p>
                            <ul>
                                <li>
                                    <b>en el primer espacio</b> en rojo está la letra <i>maitl</i>, representando el
                                    sonido
                                    <i>/m/</i>, cuando una consonante es escrita por sí sola de esta manera, ya carga
                                    consigo el
                                    fonema <i>/a/</i> (<i>maitl</i> teniendo el sonido <i>/ma/</i> al ser escrita por sí
                                    sola), sin
                                    embargo, en este ejemplo,
                                    <m>maitl</m>
                                    es acompañada de <i>etontli</i> (las dos líneas en verde a su izquierda) y
                                    <i>weyaktli</i> (la
                                    línea recta horizontal en azul por encima) que es un diacrítico que denota
                                    prolongación de la
                                    vocal, formando los tres símbolos en conjunto, el sonido <i>/me:/</i>
                                </li>
                                <li>
                                    <b>en el segundo espacio</b> está <i>xocitl</i> en rosa, que representa el fonema
                                    <i>/ʃ/</i>, a
                                    este le acompaña de color naranja <i>imeztontli</i> que representa el fonema
                                    <i>/i/</i> y les
                                    acompaña en amarillo <i>hekatontli</i> que representa el fonema <i>/ʔ/</i>.
                                </li>
                                <li>
                                    <b>en el tercer y último espacio</b> encontramos a <i>koatl</i> en turquesa como el
                                    fonema <i>/k/</i>,
                                    como ya se vio anteriormente, éste ya carga consigo al fonema <i>/a/</i> resultando
                                    en el sonido
                                    <i>/ka/</i> y <i>por último</i> debajo de <i>koatl</i> se halla <i>tlacalotl</i> que
                                    representa
                                    el fonema <i>/t͡ɬ/</i>, totalizando en el sonido <i>/kat͡ɬ/</i>.
                                </li>
                            </ul>
                            <p>Esto demuestra las ventajas del xamix, la facilitación de la comprensión y ahorro de espacio
                                al
                                formar sílabas, permitiendo reconocer con mayor simpleza las estructuras gramaticales del
                                lenguaje
                                <i>mexika</i>.</p>
                        </div>
                    </div>
                </div>
            </section>
            `;
    }
}

window.customElements.define('calligraphy-page', CalligraphyPage);
