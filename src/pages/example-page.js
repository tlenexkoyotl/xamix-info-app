import {html, css} from 'lit-element';
import {PageDM} from '../utils/page-dm.js';

import {styles} from '../xamix-info-styles.js';

class ExamplePage extends PageDM {
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
        const titleXamixElements = this.shadowRoot.querySelectorAll('xamix-element.title');
        const authorXamixElements = this.shadowRoot.querySelectorAll('xamix-element.author');

        this.setElementsAttribute(allXamixElements,
            [
                {
                    name: 'root',
                    value: '.././node_modules/xamix-element/'
                },
                {
                    name: 'bold'
                }
            ]);

        this.setElementsAttribute(bodyXamixElements,
            [
                {
                    name: 'fontSize',
                    value: document.body.clientWidth > 600 ? '2' : '3'
                }
            ]);

        this.setElementsAttribute(titleXamixElements,
            [
                {
                    name: 'fontSize',
                    value: document.body.clientWidth > 600 ? '4' : '6'
                }
            ]);

        this.setElementsAttribute(authorXamixElements,
            [
                {
                    name: 'fontSize',
                    value: document.body.clientWidth > 600 ? '3' : '4'
                }
            ]);
    }

    render() {
        return html`
        <section class="principal-container">
            <div class="two-columns top main">
                <div class="columns top">
                    <div class="columns top header">
                        <xamix-element class="title" vertical
                                       textInput="ma-lin-zin _ i-tla'-tol"></xamix-element>
                        <xamix-element class="top author" vertical
                                       textInput="re-fukh-yo _ na-va _ na-va"></xamix-element>
                    </div>
                    <div class="columns top body">
                        <xamix-element vertical
                                       textInput="i-ka _ i-nin _ a-mox-tli _ tik-pe-wal-ti-a' _ se _ we-yi _ a-mox-me-ka-yo-te-kitl _ i-to-ka' _ to-tla'-tol-tlamilistli-_ in _ sen-tetl _ a-mox-tli _ o-ki'-qi-lo' _ re-fukh-yo _ na-va _ na-va-tlamilistli-_ i-pan _ i-a-mox _ ye' _ ki-te-tla-po-wi-a _ i-ka _ tlax-kal-tlan _ na-wa-tla'-tol _ se-kin _ tla-man-tli _ tlen _ kin-pak-tis _ in _ ko-ne-zi-zin _ wan _ no-yo-ki _ in _ we-we-zi-zin-tlamilistli _ i-nik _ o-mo-ciw _ i-nin _ te-kitl _ o-mo-sen-tla-li'-ke' _ in _ tla'-tol tla-mat-ke' _ tlen _ te-ki-ti' _ i-pan _ we-yi _ te-mac-til-kal-me' _ me!-xi'-ko _ wan _ po-lo!n-ya-tlamilistli-_ i-nin-ke' _ te-mac-ti'-ke' _ ki-ne-ki' _ tla-pa-le-wis-ke' _ i-nik _ in _ na-watl _ a'-mo _ mo-mi-ki-lis-zikoalistli1 _ ok-se-pa _ wel _ mo-ka-kis-tlamilistli"></xamix-element>
                        <xamix-element vertical
                                       textInput="i-pan _ i-nin _ a-mox-me-ka-yotl _ tik-ten-kix-tis-ke' _ no-ci _ in _ tlen _ in _ na-wa-tla'-tol-ke' _ ki-i'-qi-los-ke'-tlamilistli-_ a'-mo _ tik-ten-kix-tis-ke' _ san _ yen _ in _ tla-man-tli _ tlen _ kin-pak-ti-a _ in _ ko-ne-zi-zin-zikoalistli1-_ no-yo-ki _ ok-se-kin _ a-ma-me' _ tlen _ kin-po-was-ke' _ in _ zo-wa-zi-zin _ wan _ in _ tla-ka-zi-zin-tlamilistli-_ yo-kon _ ti-kil-wi-kix-tis-ke' _ i-nin _ tla'-tol-tlamilistli"></xamix-element>
                        <xamix-element vertical
                                       textInput="ti-nen-pa-ki' _ pam-pa _ i-nin _ a-mox-me-ka-yotl _ tik-pe-wal-ti-a' _ i-ka _ i-a-mox _ re-fukh-yo _ na-va-tlamilistli-_ ye' _ qal-li _ ki-a'-si'-ka-ma-ti _ in _ i-min-tla'-tol _ wan _ i-min-ne-mi-lis _ in _ a-ki'-ke' _ ki-yo-li-ti-a' _ in _ na-wa-tla'-tol-tlamilistli-_ i-nin _ te-mac-ti'-ka-zin _ mo-te-ki-til-ti-a _ i-nik _ a'-mo _ po-li-wis _ in _ na-watl _ pam-pa _ i-nin _ tla'-tol-zin _ ki-nel-wa-yo-ti-a _ i-nin _ tlal-li _ wan _ ki-ix-ma-ti' _ ik _ no-ci _ in _ se-ma-na-wak-tlamilistli"></xamix-element>
                        <xamix-element vertical
                                       textInput="ti-nen-pa-ki' _ pam-pa _ i-nin _ a-mox-me-ka-yotl _ tik-pe-wal-ti-a' _ i-ka _ i-a-mox _ re-fukh-yo _ na-va-tlamilistli-_ ye' _ qal-li _ ki-a'-si'-ka-ma-ti _ in _ i-min-tla'-tol _ wan _ i-min-ne-mi-lis _ in _ a-ki'-ke' _ ki-yo-li-ti-a' _ in _ na-wa-tla'-tol-tlamilistli-_ i-nin _ te-mac-ti'-ka-zin _ mo-te-ki-til-ti-a _ i-nik _ a'-mo _ po-li-wis _ in _ na-watl _ pam-pa _ i-nin _ tla'-tol-zin _ ki-nel-wa-yo-ti-a _ i-nin _ tlal-li _ wan _ ki-ix-ma-ti' _ ik _ no-ci _ in _ se-ma-na-wak-tlamilistli"></xamix-element>
                        <xamix-element vertical
                                       textInput="i-min-tla'-tol-zin _ tlax-kal-tlan-tla-ka' _ yo-we-kaw-tlamilistli-_ a'-mo _ yan-qik-zikoalistli1-_ a'-mo _ ye-kin _ o-pew-tlamilistli-_ i-min-tla-ix-tla-ma-ci-lis _ ni-kan _ yo-qe-pon-ti-ye-ya _ i'-qak _ a-ye-mo _ o-wal-la-ya' _ in _ we'-ka-ca-ne-ke'-tlamilistli-_ i-pan _ in _ a-mox-me-ka-yotl _ i-to-ka' _ to-tla'-tol _ ti-ki'-qi-lo-a' _ yo-kon _ ke-me _ o-tla'-qi-lo-lis-tli-zikoalistli1-_ no-yo-ki _ o-ti-kan-ke' _ in _ tlen _ ax-kan _ yo-te-mac-ti'-ke' _ in _ yan-qik _ tla-ma-tin-me'-tlamilistli-_"></xamix-element>
                    </div>
                </div>
                <div class="container">
                    <div class="header">
                        <xamix-element class="title"
                                       textInput="ma-lin-zin _ i-tla'-tol"></xamix-element>
                        <br>
                        <xamix-element class="author"
                                       textInput="re-fukh-yo _ na-va _ na-va"></xamix-element>
                        <br>
                    </div>
                    <div class="body horizontal">
                        <xamix-element
                                textInput="i-ka _ i-nin _ a-mox-tli _ tik-pe-wal-ti-a' _ se _ we-yi _ a-mox-me-ka-yo-te-kitl _ i-to-ka' _ to-tla'-tol-tlamilistli-_ in _ sen-tetl _ a-mox-tli _ o-ki'-qi-lo' _ re-fukh-yo _ na-va _ na-va-tlamilistli-_ i-pan _ i-a-mox _ ye' _ ki-te-tla-po-wi-a _ i-ka _ tlax-kal-tlan _ na-wa-tla'-tol _ se-kin _ tla-man-tli _ tlen _ kin-pak-tis _ in _ ko-ne-zi-zin _ wan _ no-yo-ki _ in _ we-we-zi-zin-tlamilistli _ i-nik _ o-mo-ciw _ i-nin _ te-kitl _ o-mo-sen-tla-li'-ke' _ in _ tla'-tol tla-mat-ke' _ tlen _ te-ki-ti' _ i-pan _ we-yi _ te-mac-til-kal-me' _ me!-xi'-ko _ wan _ po-lo!n-ya-tlamilistli-_ i-nin-ke' _ te-mac-ti'-ke' _ ki-ne-ki' _ tla-pa-le-wis-ke' _ i-nik _ in _ na-watl _ a'-mo _ mo-mi-ki-lis-zikoalistli1 _ ok-se-pa _ wel _ mo-ka-kis-tlamilistli"></xamix-element>
                        <xamix-element
                                textInput="i-pan _ i-nin _ a-mox-me-ka-yotl _ tik-ten-kix-tis-ke' _ no-ci _ in _ tlen _ in _ na-wa-tla'-tol-ke' _ ki-i'-qi-los-ke'-tlamilistli-_ a'-mo _ tik-ten-kix-tis-ke' _ san _ yen _ in _ tla-man-tli _ tlen _ kin-pak-ti-a _ in _ ko-ne-zi-zin-zikoalistli1-_ no-yo-ki _ ok-se-kin _ a-ma-me' _ tlen _ kin-po-was-ke' _ in _ zo-wa-zi-zin _ wan _ in _ tla-ka-zi-zin-tlamilistli-_ yo-kon _ ti-kil-wi-kix-tis-ke' _ i-nin _ tla'-tol-tlamilistli"></xamix-element>
                        <xamix-element
                                textInput="ti-nen-pa-ki' _ pam-pa _ i-nin _ a-mox-me-ka-yotl _ tik-pe-wal-ti-a' _ i-ka _ i-a-mox _ re-fukh-yo _ na-va-tlamilistli-_ ye' _ qal-li _ ki-a'-si'-ka-ma-ti _ in _ i-min-tla'-tol _ wan _ i-min-ne-mi-lis _ in _ a-ki'-ke' _ ki-yo-li-ti-a' _ in _ na-wa-tla'-tol-tlamilistli-_ i-nin _ te-mac-ti'-ka-zin _ mo-te-ki-til-ti-a _ i-nik _ a'-mo _ po-li-wis _ in _ na-watl _ pam-pa _ i-nin _ tla'-tol-zin _ ki-nel-wa-yo-ti-a _ i-nin _ tlal-li _ wan _ ki-ix-ma-ti' _ ik _ no-ci _ in _ se-ma-na-wak-tlamilistli"></xamix-element>
                        <xamix-element
                                textInput="ti-nen-pa-ki' _ pam-pa _ i-nin _ a-mox-me-ka-yotl _ tik-pe-wal-ti-a' _ i-ka _ i-a-mox _ re-fukh-yo _ na-va-tlamilistli-_ ye' _ qal-li _ ki-a'-si'-ka-ma-ti _ in _ i-min-tla'-tol _ wan _ i-min-ne-mi-lis _ in _ a-ki'-ke' _ ki-yo-li-ti-a' _ in _ na-wa-tla'-tol-tlamilistli-_ i-nin _ te-mac-ti'-ka-zin _ mo-te-ki-til-ti-a _ i-nik _ a'-mo _ po-li-wis _ in _ na-watl _ pam-pa _ i-nin _ tla'-tol-zin _ ki-nel-wa-yo-ti-a _ i-nin _ tlal-li _ wan _ ki-ix-ma-ti' _ ik _ no-ci _ in _ se-ma-na-wak-tlamilistli"></xamix-element>
                    </div>
                </div>
            </div>
        </section>
        `;
    }
}

window.customElements.define('example-page', ExamplePage);
