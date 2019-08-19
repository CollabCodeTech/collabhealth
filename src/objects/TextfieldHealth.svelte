<script>
  export let required = false
  export let label = 'Label not defined'
</script>

<style>
  .textfield-health {
    display: block;
    position: relative;
    background-color: var(--color-gray-light);
    color: var(--color-black-disabled);
    font-size: var(--size-third);
    font-weight: normal;
    border-radius: var(--gap-radius) var(--gap-radius) 0 0;
    padding: var(--gap-second);
    border-bottom: var(--size-border) solid var(--color-black-disabled);
  }

  .textfield-health::after {
    content: '';
    background-color: var(--color-black-disabled);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--size-border-focus);
    transform: scaleX(0) translateY(100%);
    transition: transform 200ms linear;
  }

  .textfield-health:focus-within::after {
    transform: scaleX(1) translateY(100%);
    background-color: var(--color-primary-900);
  }

  .textfield-health > .label {
    position: absolute;
    left: var(--gap-second);
    transition: transform 200ms linear;
    transform-origin: left top;
  }

  .textfield-health > .label::selection {
    background-color: none;
  }

  .textfield-health:focus-within > .label,
  .textfield-health > .input:not(:empty) + .label {
    color: var(--color-primary-900);
    transform: scale(0.75) translateY(-10px);
  }

  .textfield-health > .input {
    background-color: transparent;
    width: 100%;
    height: 100%;
    transform-origin: left bottom;
    transition: transform 200ms linear;
  }

  .textfield-health:focus-within > .input {
    transform: translateY(8px);
  }
</style>

<label class="textfield-health">
  <input class="input" type="text" {required} />
  <span class="label">{label}</span>
</label>
