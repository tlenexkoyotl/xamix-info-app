import { css } from "lit-element";

export const styles = css`
    :host {
        overflow-x: scroll;
        display: grid;
        min-height: 100vh;
        grid-template-areas: "header header header" "main   main   main" "footer footer footer";
        grid-template-rows: auto 1fr auto;
        direction: rtl;
        background-color: #eeeeee;
        color: #000000;
        --xamix-italic-color: #c8a6ff;
        --xamix-link-color: #00aaff;
        --xamix-link-unvisited-color: #00aaff;
        --xamix-link-visited-color: #ae7dff;
        --xamix-link-focused-color: #ae7dff;
        --xamix-link-hover-color: #ff0000;
        --xamix-link-active-color: #ffff00;
    }

    .header-app {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        grid-area: header;
        background-color: #794bc4;
        color: #ffffff;
    }

    .main-app {
        grid-area: main;
    }

    .footer {
        width: 100vw;
        padding-top: 3vw;
        padding-bottom: 3vw;
        text-align: center;
        vertical-align: center;
        background-color: #39245c;
        color: #ffffff;
    }

    .footer > div {
        font-size: 1.5vw;
        text-align: center;
        vertical-align: center;
        color: #ffffff;
    }

    i {
        --xamix-italic-color: #c8a6ff;
    }

    li {
        display: block;
        vertical-align: text-top;
        padding-bottom: 2vw;
    }

    a {
        color: #00aaff;
    }

    a:link {
        color: #00aaff;
    }

    a:visited {
        color: #ae7dff;
    }

    a:focus {
        color: #ae7dff;
    }

    a:hover {
        color: #ff0000;
    }

    a:active {
        color: #ffff00;
    }

    .footer-app {
        grid-area: footer;
        height: 6vh;
        display: flex;
        justify-content: flex-start;
    }

    .container-app {
        padding: 2vw;
        box-sizing: border-box;
        background-color: inherit;
    }

    .container-footer {
        padding: 2vw;
        box-sizing: border-box;
    }

    .title {
        padding: 0;
        padding-left: 2vw;
        padding-right: 2vw;
        font-weight: lighter;
        font-size: --latin-font-size;
        flex: 1 auto;
    }

    .navbar-principal {
        display: flex;
        flex-flow: row nowrap;
        line-height: 3vh;
    }

    .navbar-principal a {
        padding: 0 2vw;
        position: relative;
    }

    .latin {
        font-size: var(--latin-font-size, 1.5vw);
        direction: ltr;
    }

    xamix-element > h2.latin {
        font-size: 2vw;
    }

    .latin > div > h2,
    p {
        margin: 0;
    }

    i {
        color: #c8a6ff;
    }

    @media (max-width: 1280px) {
        .header-app {
        flex-flow: column nowrap;
        }
        .navbar-principal {
        flex: 1 auto;
        justify-content: center;
        }
        .navbar-principal a {
        flex: 1 auto;
        }
    }

    div.columns > div:not(.center) {
        display: table-cell;
    }

    div.tri-set > div:not(.center) {
        display: table-cell;
        max-width: 50vw;
    }

    div.tri-set > div:first-child {
        padding-left: 1.5vw;
    }

    .columns > * {
        display: table-cell;
        padding-left: 1.5vw;
        width: 33vw;
    }

    xamix-element {
        font-size: 1.5vw;
    }

    xamix-element.title > h2 {
        display: inline-block;
    }

    xamix-element > div {
        display: table-cell;
    }

    xamix-element > span {
        font-size: 1vw;
        vertical-align: top;
    }

    xamix-element > ::slotted(*) {
        text-align: center;
    }

    .top > * {
        vertical-align: top;
    }

    .center {
        display: block;
        align-self: center;
    }

    .header {
        vertical-align: top;
        text-align: center;
    }

    div.table {
        display: table;
    }

    div.row {
        display: table-row;
        text-align: justify;
        padding-bottom: 2vw;
    }

    div.cell {
        display: table-cell;
        text-align: center;
        padding-left: 3vw;
    }

    div.cell > svg {
        max-width: 10vw;
        fill: transparent;
    }

    div.cell > p:nth-of-type(1) > svg {
        width: 13vw;
    }

    div.cell > p:nth-of-type(2) > svg {
        width: 10vw;
        fill: transparent;
    }

    div.cell > xamix-element:not[.construction] > span {
        font-size: 1vw;
        vertical-align: top;
    }

    div.body.horizontal > xamix-element {
        padding-bottom: 2vw;
    }

    div.columns.header {
        max-width: 10vw;
    }

    div.columns.top.body {
        max-width: 10vw;
    }

    div.two-columns > div {
        min-width: 50vw;
    }

    .justify {
        text-align: justify;
    }

    svg:not(.space) > * {
        stroke: #000000;
    }

    svg:not(.space) > mask > * {
        stroke: #ffffff;
        fill: transparent;
    }

    svg:not(.space) > .directions {
        fill: #000000;
    }

    svg.space > * {
        stroke: transparent;
    }

    .examples {
        text-align: center;
    }

    .examples > div > div > xamix-element > span {
        font-size: 4vw;
    }

    span.colored-xamix > svg > * {
        stroke: transparent;
    }

    span.colored-xamix > span {
        vertical-align: top;
    }

    span.colored-xamix > span.latin {
        font-size: 4vw;
    }

    #phoneme-chart1 > div.row > div.cell > xamix-element > span {
        font-size: 1.6vw;
    }

    #punctuation-chart1 > div.row > div.cell > xamix-element > span {
        font-size: 1.5vw;
    }

    #example1 {
        padding-bottom: 2vw;
    }

    table.construction {
        margin-bottom: 3vw;
        margin-right: 8vw;
        max-width: 80vw;
    }

    table.construction,
    table.construction > tbody > tr > td,
    table.construction > tbody > tr > th,
    table.letters,
    table.letters > tbody > tr > td,
    table.letters > tbody > tr > th {
        padding: 1vw;
        border: 3px solid black;
        border-collapse: collapse;
        text-align: center;
        vertical-align: bottom;
    }

    table.construction > tbody > tr > th > xamix-element > span,
    table.letters > tbody > tr > th > xamix-element > span {
        font-size: 1.5vw;
        font-weight: normal;
    }

    table.letters > tbody > tr > td > span {
        font-size: 2vw;
        font-weight: normal;
    }

    table.construction > tbody > tr > td,
    table.letters > tbody > tr > td {
        direction: ltr;
    }

    img {
        width: 100%;
    }

    .construction {
        font-size: 2vw;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }

    li > * > * > .construction {
        font-size: 3vw;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: black;
    }

    .construction.v {
        color: #09a38b;
        -webkit-text-fill-color: #09a38b;
    }

    .construction.s {
        color: #fdf6bd;
        -webkit-text-fill-color: #fdf6bd;
    }

    .construction.a {
        color: #217b9a;
        -webkit-text-fill-color: #217b9a;
    }

    .construction.k {
        color: #ef4f3d;
        -webkit-text-fill-color: #ef4f3d;
    }

    .construction.b {
        color: #ed45fa;
        -webkit-text-fill-color: #ed45fa;
    }
    xamix-element.construction {
        --xamix-text-stroke: #000;
        --xamix-text-stroke-width: 3px;
    }

    xamix-element.construction > * {
        font-size: 2vw;
    }

    .chart,
    .chart > *,
    .chart > * > *,
    .chart > * > * > * {
        font-size: 2vw;
    }

    img#elements-svg {
        width: 50%;
    }

    div#elements-div {
        text-align: center;
    }
`;
