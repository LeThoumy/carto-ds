/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CartoAccentBtn {
        "icon": string;
        "service": string;
        "variant": string;
    }
}
declare global {
    interface HTMLCartoAccentBtnElement extends Components.CartoAccentBtn, HTMLStencilElement {
    }
    var HTMLCartoAccentBtnElement: {
        prototype: HTMLCartoAccentBtnElement;
        new (): HTMLCartoAccentBtnElement;
    };
    interface HTMLElementTagNameMap {
        "carto-accent-btn": HTMLCartoAccentBtnElement;
    }
}
declare namespace LocalJSX {
    interface CartoAccentBtn {
        "icon"?: string;
        "service"?: string;
        "variant"?: string;
    }
    interface IntrinsicElements {
        "carto-accent-btn": CartoAccentBtn;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "carto-accent-btn": LocalJSX.CartoAccentBtn & JSXBase.HTMLAttributes<HTMLCartoAccentBtnElement>;
        }
    }
}
