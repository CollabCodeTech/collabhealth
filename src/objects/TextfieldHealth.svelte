<script>
  export let required = false
  export let label = 'Label not defined'
  export let type = 'text'
  export let className = ''
  export let dark = false

  let fill = false
  let valid = true
  let animation = false

  function handleFocusin() {
    animation = false
  }

  function handleFocusout({ target }) {
    fill = target.value !== ''
    const isEmpty = fill === false
    const isValid = fill && target.checkValidity()

    valid = isEmpty || isValid
    animation = true
  }
</script>

<style>
  .textfield-health {
    display: flex;
    align-items: center;
    position: relative;
    background-color: var(--color-gray-light);
    font-size: var(--size-third);
    font-weight: normal;
    border-radius: var(--gap-radius) var(--gap-radius) 0 0;
    padding: var(--gap-second);
    border-bottom: var(--size-border) solid var(--color-black-disabled);
    margin-bottom: var(--gap-second);
    cursor: text;
  }

  .textfield-health:focus-within {
    border-bottom-color: var(--color-primary-500);
  }

  .textfield-health.invalid {
    border-bottom-color: var(--color-error-light);
  }

  .dark.textfield-health {
    background-color: var(--color-dark-black-light);
    border-bottom-color: var(--color-dark-light);
  }

  .dark.textfield-health:focus-within {
    border-bottom-color: var(--color-primary-300);
  }

  .dark.textfield-health.invalid {
    border-bottom-color: var(--color-dark-error-light);
  }

  .textfield-health::after {
    content: '';
    background-color: var(--color-black-disabled);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--size-border-focus);
    transform: scaleX(0);
    transition: transform 150ms linear;
  }

  .textfield-health:focus-within::after {
    transform: scaleX(1);
    background-color: var(--color-primary-500);
  }

  .dark.textfield-health:focus-within::after {
    transform: scaleX(1);
    background-color: var(--color-primary-300);
  }

  .dark.textfield-health.invalid::after {
    background-color: var(--color-dark-error-light);
  }

  .textfield-health > .label {
    position: absolute;
    left: var(--gap-second);
    color: var(--color-black-disabled);
    transform-origin: left top;
    transition: transform 100ms linear;
  }

  .textfield-health.invalid > .label {
    color: var(--color-error-light);
  }

  .textfield-health.animation.invalid > .label {
    animation: labelError 200ms ease-in;
  }

  .dark.textfield-health > .label {
    color: var(--color-dark-light);
  }

  .dark.textfield-health.invalid > .label {
    color: var(--color-dark-error-light);
  }

  .textfield-health > .label::selection {
    background-color: none;
  }

  .textfield-health:focus-within > .label,
  .textfield-health.fill > .label {
    color: var(--color-primary-500);
    transform: scale(0.75) translateY(-10px);
  }

  .dark.textfield-health:focus-within > .label,
  .dark.textfield-health.fill > .label {
    color: var(--color-dark-light);
  }

  .textfield-health.invalid:focus-within > .label,
  .textfield-health.invalid.fill > .label {
    color: var(--color-error-light);
  }

  .dark.textfield-health.invalid:focus-within > .label,
  .dark.textfield-health.invalid.fill > .label {
    color: var(--color-dark-error-light);
  }

  .textfield-health > .input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    line-height: 1.4em;
    transform-origin: left bottom;
    transition: transform 100ms linear;
    color: var(--color-black-high-emphasis);
  }

  .dark.textfield-health > .input {
    caret-color: var(--color-dark-white-extra);
    color: var(--color-dark-white-extra);
  }

  .textfield-health > .input:focus {
    outline: none;
  }

  .textfield-health:focus-within > .input,
  .textfield-health.fill > .input {
    transform: translateY(8px);
  }

  .textfield-health > .input:focus:invalid,
  .textfield-health > .input:-moz-ui-invalid {
    outline: none;
    box-shadow: none;
  }

  @keyframes labelError {
    33% {
      transform: scale(0.75) translate(5px, -10px);
    }
    66% {
      transform: scale(0.75) translate(-5px, -10px);
    }
    100% {
      transform: scale(0.75) translate(0, -10px) translateY(0);
    }
  }
</style>

<label
  class={`${className} textfield-health 
          ${fill ? 'fill' : ''} ${valid ? '' : 'invalid'} 
          ${animation ? 'animation' : ''}
          ${dark ? 'dark' : ''}`}
  on:focusout={handleFocusout}
  on:focusin={handleFocusin}>
  <span class="label">{label}</span>
  <input class="input" {type} {required} on:invalid|preventDefault />
</label>
