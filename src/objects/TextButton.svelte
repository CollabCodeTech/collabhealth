<script>
  export let content = 'content not defined'
  export let disabled = false
  export let dark = false
</script>

<style>
  .text-button {
    display: flex;
    justify-content: center;
    position: relative;
    text-transform: uppercase;
    color: var(--color-primary-500);
    background-color: transparent;
    border: none;
    font-size: var(--size-second);
    letter-spacing: var(--letter-spacing-nineth);
    padding: var(--gap-zero) var(--gap-first);
    cursor: pointer;
    transition: background-color 150ms linear;
    z-index: 1;
  }
  .text-button.dark,
  .text-button.dark:disabled {
    color: var(--color-dark-light);
  }

  .text-button::after {
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0;
    background-color: #fff;
    transform: scaleX(0.5);
    transition: all 200ms cubic-bezier(0, 0, 0.84, 1.65);
  }

  .text-button:hover:not(:disabled)::after {
    border-radius: var(--size-border-focus);
    opacity: 1;
    background-color: var(--color-primary-50);
    transform: scaleX(1);
  }

  .text-button.dark:hover:not(:disabled)::after {
    background-color: var(--color-dark-white-extra);
  }

  .text-button:disabled {
    color: var(--color-black-disabled);
    cursor: auto;
  }
</style>

<button class={`text-button ${dark ? 'dark' : ''}`} {disabled}>
  {content}
</button>
