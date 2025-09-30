const componentCSS = `
    /* Reset styles - usually applied globally, might not be needed in Shadow DOM unless specific to component */
    /* If you need reset styles for the component, ensure they are targeted to component elements */
    /* Example: * { margin: 0; padding: 0; box-sizing: border-box; } */

    /* MIXINS - these are SASS concepts, compile results are pure CSS */

    /* KEYFRAMES - compiled output, including vendor prefixes */
    @-webkit-keyframes rotating {
        0% { -webkit-transform: rotate3d(0, 0, 0, 0deg); transform: rotate3d(0, 0, 0, 0deg); }
        100% { -webkit-transform: rotate3d(0, 1, 0, 720deg); transform: rotate3d(0, 1, 0, 720deg); }
    }
    @keyframes rotating {
        0% { -webkit-transform: rotate3d(0, 0, 0, 0deg); transform: rotate3d(0, 0, 0, 0deg); }
        100% { -webkit-transform: rotate3d(0, 1, 0, 720deg); transform: rotate3d(0, 1, 0, 720deg); }
    }

    @-webkit-keyframes rotatingY {
        100% { -webkit-transform: rotateY(-360deg); transform: rotateY(-360deg); }
    }
    @keyframes rotatingY {
        100% { -webkit-transform: rotateY(-360deg); transform: rotateY(-360deg); }
    }

    @-webkit-keyframes fluttering {
        0%, 25%, 50%, 75%, 100% { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
        10%, 60% { -webkit-transform: translate3d(0, 150px, 0); transform: translate3d(0, 150px, 0); }
        30%, 80% { -webkit-transform: translate3d(0, 50px, 0); transform: translate3d(0, 50px, 0); }
    }
    @keyframes fluttering {
        0%, 25%, 50%, 75%, 100% { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); }
        10%, 60% { -webkit-transform: translate3d(0, 150px, 0); transform: translate3d(0, 150px, 0); }
        30%, 80% { -webkit-transform: translate3d(0, 50px, 0); transform: translate3d(0, 50px, 0); }
    }

    @-webkit-keyframes left-wing-flap {
        0% { -webkit-transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg); transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg); }
        50% { -webkit-transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, -70deg); transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, -70deg); }
        100% { -webkit-transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg); transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg); }
    }
    @keyframes left-wing-flap {
        0% { -webkit-transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg); transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg); }
        50% { -webkit-transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, -70deg); transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, -70deg); }
        100% { -webkit-transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg); transform: translate3d(0, 0, 0) scaleX(1) rotate3d(0, 1, 0, 60deg); }
    }

    @-webkit-keyframes right-wing-flap {
        0% { -webkit-transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg); transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg); }
        50% { -webkit-transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, -70deg); transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, -70deg); }
        100% { -webkit-transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg); transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg); }
    }
    @keyframes right-wing-flap {
        0% { -webkit-transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg); transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg); }
        50% { -webkit-transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, -70deg); transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, -70deg); }
        100% { -webkit-transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg); transform: translate3d(0, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 60deg); }
    }

    /* Core Styles */
    :host { /* Styles applied to the custom element itself */
        display: block; /* Custom elements are inline by default, make it block */
        position: absolute; /* Default for the overlay, can be overridden by user */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10; /* Default z-index for overlay */
        pointer-events: none; /* Allow mouse events to pass through by default */
        overflow: hidden; /* Hide anything overflowing the component bounds */
    }
    svg {
    border: solid 1px var(--dev-border-color, transparent); /* Default border for debugging */
    }

    .scene3d {
        -webkit-perspective: 1000px; perspective: 1000px;
        -webkit-perspective-origin: 50% 50%; perspective-origin: 50% 50%;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
    }

    .butterfly_container {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -50px;
        margin-top: -50px;
        -webkit-transform-origin: 50% 50%; transform-origin: 50% 50%;
        -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
        -webkit-animation: rotatingY 10s linear infinite; animation: rotatingY 10s linear infinite;
        border: solid 1px var(--dev-border-color, transparent);
    }

    .butterfly_container var {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
        -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
    }

    .butterfly_container var.scale {
        /* Default scale */
    }

    .butterfly_container var.rotate3d {
        -webkit-transform: rotate3d(1, 0.5, 0, 70deg); transform: rotate3d(1, 0.5, 0, 70deg);border: solid 1px var(--dev-border-color, transparent);
    }

    .butterfly_container var.translate3d {
        -webkit-transform: translate3d(-300px, 0px, 0px); transform: translate3d(-300px, 0px, 0px);border: solid 1px var(--dev-border-color, transparent);
    }

    .butterfly_container var.translate3d-1 {
        -webkit-animation: fluttering 10s ease-in-out infinite; animation: fluttering 10s ease-in-out infinite;border: solid 1px var(--dev-border-color, transparent);
    }

    .butterfly_container.scale_half var.scale {
        -webkit-transform: scale3d(0.5, 0.5, 0.5); transform: scale3d(0.5, 0.5, 0.5);
    }

    .butterfly_container.scale_third var.scale {
        -webkit-transform: scale3d(0.333, 0.333, 0.333); transform: scale3d(0.333, 0.333, 0.333);
    }

    .butterfly_container.scale_quarter var.scale {
        -webkit-transform: scale3d(0.25, 0.25, 0.25); transform: scale3d(0.25, 0.25, 0.25);
    }

    figure.butterfly {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        margin-top: -50px;
        -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
        -webkit-transform-origin: 50% 50%; transform-origin: 50% 50%;
    }

    .wing {
        position: absolute;
        width: 50px;
        height: 100px;
        -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
        -webkit-transform-origin: 50% 50%; transform-origin: 50% 50%;
        -webkit-transform: translate3d(0, 0, 0) rotate3d(1, 0.5, 0, 45deg); transform: translate3d(0, 0, 0) rotate3d(1, 0.5, 0, 45deg);
    }

    .wing.right {
        -webkit-transform-origin: 50px 50px; transform-origin: 50px 50px;
        -webkit-transform: translate3d(0px, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 45deg); transform: translate3d(0px, 0, 0) scaleX(-1) rotate3d(0, 1, 0, 45deg);
        -webkit-animation: right-wing-flap 0.5s ease-in-out infinite; animation: right-wing-flap 0.5s ease-in-out infinite;
        filter: FlipH;
        -ms-filter: 'FlipH';
    }

    .wing.left {
        -webkit-transform-origin: 50px 50px; transform-origin: 50px 50px;
        -webkit-animation: left-wing-flap 0.5s ease-in-out infinite; animation: left-wing-flap 0.5s ease-in-out infinite;
    }

    .wing use {
        display: block;
        -webkit-transform-style: preserve-3d; transform-style: preserve-3d;
        fill: url(#image); /* Reference to the pattern defined inside the SVG */
        stroke: var(--butterfly-stroke-color, black); /* Default stroke color */
    }

    /* .svg-defs { /* These styles are for the original external SVG; not directly needed in Shadow DOM */
    /* position: absolute; */
    /* height: 0; */
    /* width: 0; */
    /* } */
`;

const componentHTML = `
    <style>${componentCSS}</style>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve"
        xmlns:xml="http://www.w3.org/XML/1998/namespace" class="svg-defs" style="position: absolute; height: 0; width: 0; overflow: hidden;">
        <defs>
            <pattern id='image' width="1" height="1" viewBox="0 0 400 300" preserveAspectRatio="none">
                <image href="https://th.bing.com/th/id/OIP.UfnjS85q3xMHAuu7a8XXAgHaE7?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3" width="400" height="300" preserveAspectRatio="none"></image>
            </pattern>

            <g id="shape-butterfly-1">
                <path class="path" clip-rule="evenodd" d="M410.2,452.4c-4.7-7.7-7.1-15.7-8.9-24c-3.8-18-3.5-36.2-2.6-54.5c0.4-9.9,1.2-19.7,1.8-29.7c-3.2,12.4-5.9,24.6-9.5,36.6c-10.9,35.9-27.4,69-51.4,98c-9,10.9-18.8,20.9-30.7,28.7c-16.2,10.6-34.1,6.8-44.5-9.7c-3.3-5.3-7.1-9.9-13.4-11.7c-9.5-2.8-19.4,1.2-25.3,10.7c-2.7,4.3-4.5,9.3-6.2,14.1c-3.9,11.6-8.9,22.7-18.3,30.9c-3.4,2.9-7.4,5.4-11.5,7.2c-4.2,1.8-9,2.2-12.8-1.5c-3.9-3.8-3.8-8.7-2.6-13.5c1.2-4.8,4.8-8,8.7-10.7c14.7-10.1,25.2-23.4,30.6-40.3c4.5-14.2,4.6-28.1-4.6-40.9c-1-1.3-1.9-2.8-3.2-3.7c-6.2-4.7-6.7-10.8-4.8-17.7c1.1-4,1.8-8.1,2.8-12.2c0.9-3.9,0-7.4-2.6-10.2c-14.9-16.1-12.4-40.1,1.9-56.7c12.7-14.7,28.9-24,46.6-31.1c22.2-9,45.3-14.6,68.9-18.4c1.6-0.3,3.2-0.7,4.8-1l-0.2-0.6l0,0c-8.3,0.9-16.6,1.9-24.8,2.7c-14.1,1.5-28.2,3-42.3,4.2c-11.6,1-23.2,1.8-34.9,2.1c-5.4,0.1-10.9-0.7-16.1-1.9c-14.5-3.3-23.2-13.2-27.2-26.9c-3.9-13.4-6.9-27.1-10-40.8c-6.4-28.2-13.6-56.2-27.3-81.9c-9-17.1-20.4-32.3-34.9-45c-3-2.7-5.8-5.7-8.2-8.9c-6.9-9-5.4-17.9,3.9-24.5c9-6.3,19.3-8.8,30-9.4c22.1-1.3,42.8,4.8,62.9,13.2c37.9,15.9,71.6,38.4,102.1,66c38.4,34.8,68.8,75.9,95.2,120.1c2.4,4,4.9,7.9,7.6,12.3l4.9-2.6c-7.4-5.9-5.8-14.3-7-21.8c-3.7-23.1-8.5-45.9-17-67.8c-6.7-17.2-18-30.6-33.9-40.1c-1.5-0.9-3-1.9-4.4-3c-3.9-3.2-4.4-6.9-1.7-10.2c3-3.5,7.6-4,11.1-0.9c1.4,1.2,2.7,2.8,3.3,4.5c3.7,11.2,10.8,20.5,17,30.3c12,18.9,18.5,40,24.6,61.3c2.5,8.7,4.8,17.5,7.3,26.7c4.9-3,3.5-1.5,7.8,2 M420.1,343.4 M277,422.7c2.7-9.5,4.9-19.8,8.6-29.4c3.7-9.6,9-18.6,13.6-28c-3,0.5-6.4,0.6-9.4,1.6c-9.8,3.1-20.1,5.5-29.1,10.2c-14.4,7.6-14.2,19.3-0.6,27.9C267.6,409.7,274.5,414.8,277,422.7L277,422.7z M328.2,253.5c-3-1.3-5.9-2.7-9-3.9c-17.4-6.7-35.4-10.8-53.9-12.8c-10.4-1.1-21-1.7-31.3,1.4c-3.3,1-6.7,2.4-9.5,4.4c-4.2,3.1-3.6,6.5,1.3,8.4c2.1,0.8,4.4,1.6,6.6,1.5c13.3-0.2,26.5-0.4,39.8-1.2C290.9,250.4,309.6,249.4,328.2,253.5L328.2,253.5z M305.4,218.7c-0.2-0.2-0.4-0.4-0.7-0.6c-0.6-0.4-1.3-0.8-2-1.2c-21.6-13-45.2-19.1-70.3-19.3c-7.7-0.1-15.5,1.5-23.2,2.8c-2.4,0.4-4.6,2.4-6.8,3.6l0.3,1.4c1.6,0.6,3.2,1.6,4.8,1.7c10,0.6,19.9,0.9,29.9,1.6c13.7,1,27.5,1.9,41.1,3.8C287.6,213.8,296.6,216.6,305.4,218.7L305.4,218.7z M262.2,364c23-4.5,41.8-15.6,57.9-32.1c-7.4,0.6-14.6,1.5-21.7,3C281.8,338.5,269,347.2,262.2,364L262.2,364z M284.5,442c14.8-1.3,43.5-22.8,47.5-35.5c-8.7-1.2-16.9,0.2-24.4,4.8C295.9,418.5,290,430,284.5,442L284.5,442z M296.8,188.8c-22.6-18-85.7-30.2-100.7-18c7.6,0.8,14.8,1.4,21.9,2.2c13.7,1.6,27.5,2.5,40.9,5.2C272.2,180.9,285.1,185.5,296.8,188.8z M360.8,398l-1.2-0.7c-20.4,10.7-28.4,33.7-25.3,49.6C343.1,430.6,352,414.3,360.8,398L360.8,398z M167.7,98.7c16.9,2.5,32.6,8.5,47.8,16.2c15.1,7.7,29,17.3,42.1,27.8C232.4,118.2,204.4,99.5,167.7,98.7z" />
            </g>
        </defs>
    </svg>

    <section class="scene3d">
        <div class="butterfly_container" data-idx="0">
            <var class="rotate3d">
                <var class="scale">
                    <var class="translate3d">
                        <var class="translate3d-1">
                            <figure class="butterfly">
                                <svg class="wing left" viewBox="0 0 400 300">
                                    <use class="left" xlink:href="#shape-butterfly-1"></use>
                                </svg>
                                <svg class="wing right" viewBox="0 0 400 300">
                                    <use class="left" xlink:href="#shape-butterfly-1"></use>
                                </svg>
                            </figure>
                        </var>
                    </var>
                </var>
            </var>
        </div>

    </section>
`;

class ButterflyAnimation extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = componentHTML;
        this._applyDynamicStyles();
    }

    static get observedAttributes() {
        return [
            'data-top',
            'data-left',
            'data-main-animation-duration',
            'data-wing-animation-duration',
            'data-scale',
            'data-fill-color',
            'data-stroke-color'
        ];
    }

    attributeChangedCallback(_, oldValue, newValue) {
        if (oldValue !== newValue) {
            this._applyDynamicStyles();
        }
    }

    _applyDynamicStyles() {
        const container = this.shadowRoot.querySelector('.butterfly_container');

        if (this.hasAttribute('dev')) {
            container.style.setProperty('--dev-border-color', 'black');
        }

        if (!container) return;

        const top = this.getAttribute('data-top');
        const left = this.getAttribute('data-left');
        const mainAnimDuration = this.getAttribute('data-main-animation-duration');
        const wingAnimDuration = this.getAttribute('data-wing-animation-duration');
        const scaleClass = this.getAttribute('data-scale');
        const fillColor = this.getAttribute('data-fill-color');
        const strokeColor = this.getAttribute('data-stroke-color');

        if (fillColor) container.style.color = fillColor;
        if (strokeColor) container.style.setProperty('--butterfly-stroke-color', strokeColor);

        if (top) container.style.marginTop = top;
        if (left) container.style.marginLeft = left;

        if (mainAnimDuration) {
            container.style.animationDuration = mainAnimDuration;
            container.style.webkitAnimationDuration = mainAnimDuration;
            container.style.mozAnimationDuration = mainAnimDuration;
            container.style.msAnimationDuration = mainAnimDuration;
            container.style.oAnimationDuration = mainAnimDuration;
        }

        if (wingAnimDuration) {
            const wings = container.querySelectorAll('.wing');
            wings.forEach(wing => {
                wing.style.animationDuration = wingAnimDuration;
                wing.style.webkitAnimationDuration = wingAnimDuration;
                wing.style.mozAnimationDuration = wingAnimDuration;
                wing.style.msAnimationDuration = wingAnimDuration;
                wing.style.oAnimationDuration = wingAnimDuration;
            });
            const uses = container.querySelectorAll('.wing use');
            uses.forEach(use => {
                use.style.fill = 'currentColor' || 'url(#image)';
            });
        }

        container.classList.remove('scale_half', 'scale_third', 'scale_quarter');
        if (scaleClass === 'half') {
            container.classList.add('scale_half');
        } else if (scaleClass === 'third') {
            container.classList.add('scale_third');
        } else if (scaleClass === 'quarter') {
            container.classList.add('scale_quarter');
        }
    }
}

customElements.define('custom-butterfly-animation', ButterflyAnimation);