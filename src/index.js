import React from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./style.scss";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render( <
//     React.StrictMode >
//     <
//     App / >
//     <
//     /React.StrictMode>
// );

export function MFE() {
    class MFEElement extends HTMLElement {
        connectedCallback() {
            this.mountPoint = document.createElement('div');
            this.appendChild(this.mountPoint);
            const root = createRoot(this.mountPoint);
            root.render( < App / > );
        }
    }
    customElements.define("simple-mfe", MFEElement)
}

MFE();