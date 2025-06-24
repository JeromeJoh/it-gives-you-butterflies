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
        border: solid 1px black;
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
        -webkit-transform: rotate3d(1, 0.5, 0, 70deg); transform: rotate3d(1, 0.5, 0, 70deg);border: solid 1px black;
    }

    .butterfly_container var.translate3d {
        -webkit-transform: translate3d(-300px, 0px, 0px); transform: translate3d(-300px, 0px, 0px);border: solid 1px black;
    }

    .butterfly_container var.translate3d-1 {
        -webkit-animation: fluttering 10s ease-in-out infinite; animation: fluttering 10s ease-in-out infinite;border: solid 1px black;
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

// HTML 结构和 SVG 定义
const componentHTML = `
    <style>${componentCSS}</style>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xml:space="preserve"
        xmlns:xml="http://www.w3.org/XML/1998/namespace" class="svg-defs" style="position: absolute; height: 0; width: 0; overflow: hidden;">
        <defs>
            <pattern id='image' width="1" height="1" viewBox="0 0 100 100" preserveAspectRatio="none">
                <image href="/css/clouds_back.jpg" width="100" height="100" preserveAspectRatio="none"></image>
            </pattern>

            <g id="shape-butterfly-1">
                <path class="path" fill="currentColor" clip-rule="evenodd" d="M8.65,2.85c0.934-0.2,2.15-0.333,3.65-0.4c1.534-0.1,2.667-0.083,3.4,0.05
                c1.533,0.267,3.45,0.767,5.75,1.5c2.466,0.8,4.35,1.617,5.65,2.45c2.066,1.2,3.883,2.383,5.45,3.55c2.567,2.1,4.35,3.8,5.35,5.1
                l2.1,2.5c0.933,1.167,1.517,1.983,1.75,2.45c0.333,0.767,1.083,2.117,2.25,4.05c0.233,0.467,0.717,1.683,1.45,3.65
                c0.733,2.067,1.2,3.45,1.4,4.15c0.467,1.733,0.917,3.767,1.35,6.1l0.4,3.85l-0.25-3.4c-0.6-5.967-1.267-10.25-2-12.85
                c-0.733-2.434-2.167-5.467-4.3-9.1c-0.966-1.667-1.566-3-1.8-4c-0.233-0.933-0.1-1.267,0.4-1c1.3,0.733,2.917,3.867,4.85,9.4
                c1.667,4.7,2.85,11.2,3.55,19.5c0.567,6.934,0.667,11.917,0.3,14.95l0.2,0.05c0.231,0,0.348-0.05,0.35-0.15v0.05l0.1,0.05v27.4
                c-0.032-0.018-0.065-0.035-0.1-0.05v-0.05c-0.7,0.267-0.983,0.117-0.85-0.45c0.067-0.333,0.017-0.817-0.15-1.45
                c-0.2-0.6-0.316-0.983-0.35-1.15l-0.5-1.65c-0.533-2.967-0.833-5.034-0.9-6.2c-0.1-1.533-0.133-2.4-0.1-2.6
                c0-0.933,0.167-1.667,0.5-2.2c0.567-0.9,0.684-1.75,0.35-2.55c-0.167-0.367-0.367-0.6-0.6-0.7c-0.333-0.133-0.517,0.283-0.55,1.25
                c-0.033,1.533-0.167,2.9-0.4,4.1c-0.1,2.3-0.267,3.684-0.5,4.15c-0.333,0.667-1.25,2.95-2.75,6.85c-1.167,2.8-2.233,4.817-3.2,6.05
                c-0.9,1.2-1.583,2.1-2.05,2.7c-0.8,1-1.434,1.667-1.9,2c-2.067,1.333-3.633,2.067-4.7,2.2c-3.033,0.267-4.95,0.317-5.75,0.15
                c-0.8-0.167-1.383-0.217-1.75-0.15c-0.533,0.1-1.033,0.45-1.5,1.05c-0.5,0.667-1.217,1.284-2.15,1.85
                c-0.934,0.567-1.85,0.934-2.75,1.1c-2.467,0.433-4.45,0.25-5.95-0.55c-0.7-0.4-1.467-1.15-2.3-2.25c-0.6-0.867-1.033-1.567-1.3-2.1
                c-0.267-0.667-0.483-1.483-0.65-2.45c-0.3-1.467-0.383-2.717-0.25-3.75c0.267-1.9,0.45-3.05,0.55-3.45
                c0.233-1.233,0.566-2.333,1-3.3C9.25,77.45,9.767,76.4,10,76c0.667-1.233,1.55-2.583,2.65-4.05c1.1-1.434,2.184-2.583,3.25-3.45
                c0.367-0.3,1.15-0.867,2.35-1.7c0.767-0.566,1.917-1.25,3.45-2.05c1.733-0.933,3.267-1.633,4.6-2.1
                c2.133-0.733,4.534-1.467,7.2-2.2c0.467-0.1,1.517-0.3,3.15-0.6c0.967-0.233,0.4-0.4-1.7-0.5c-2.434-0.1-4.534-0.3-6.3-0.6
                c-1.566-0.267-3.383-0.7-5.45-1.3c-2.8-0.8-4.467-1.317-5-1.55c-1.567-0.667-3.2-1.75-4.9-3.25c-1.733-1.533-3-3.1-3.8-4.7
                c-0.533-1.067-0.967-2.434-1.3-4.1c-0.233-1.067-0.3-2.133-0.2-3.2c0.133-0.833,0.183-1.3,0.15-1.4v-0.6
                c-2.467-3.233-3.983-5.433-4.55-6.6c-0.533-1.033-0.883-1.833-1.05-2.4c-0.3-0.867-0.466-1.85-0.5-2.95
                c-0.033-2.367,0.034-4.117,0.2-5.25c0.3-1.034,0.483-1.8,0.55-2.3c0.167-0.867,0.034-1.533-0.4-2c-0.6-0.7-1.133-1.517-1.6-2.45
                c-0.566-1.133-0.833-2.117-0.8-2.95c0.033-1.333,0.167-2.367,0.4-3.1c0.367-1.267,1.05-2.267,2.05-3
                C4.417,4.25,6.483,3.317,8.65,2.85z" />
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
                                <svg class="wing left" viewBox="0 0 50 100">
                                    <use class="left" xlink:href="#shape-butterfly-1"></use>
                                </svg>
                                <svg class="wing right" viewBox="0 0 50 100">
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

    // Apply dynamic styles from attributes
    this._applyDynamicStyles();
  }

  // Define which attributes to observe for changes
  static get observedAttributes() {
    // You can add more attributes here as needed for customization
    return [
      'data-top',
      'data-left',
      'data-main-animation-duration',
      'data-wing-animation-duration',
      'data-scale',
      'data-idx' // To identify specific butterfly instances
    ];
  }

  // Callback for when observed attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this._applyDynamicStyles(); // Reapply styles when attributes change
    }
  }

  _applyDynamicStyles() {
    const container = this.shadowRoot.querySelector('.butterfly_container');

    if (container) {
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
      }

      // Apply scale class
      container.classList.remove('scale_half', 'scale_third', 'scale_quarter'); // Clear previous scale
      if (scaleClass === 'half') {
        container.classList.add('scale_half');
      } else if (scaleClass === 'third') {
        container.classList.add('scale_third');
      } else if (scaleClass === 'quarter') {
        container.classList.add('scale_quarter');
      }
    }
  }
}

customElements.define('custom-butterfly-animation', ButterflyAnimation);