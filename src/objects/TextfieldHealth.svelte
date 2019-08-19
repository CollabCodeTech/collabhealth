<script>
  export let placeholder
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
  }

  .textfield-health::after {
    content: '';
    background-color: var(--color-black-disabled);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--size-border);
  }

  .textfield-health > .input {
    background-color: transparent;
    width: 100%;
    height: 100%;
  }
</style>

<label class="textfield-health">
  <input class="input" type="text" {placeholder} />
</label>
