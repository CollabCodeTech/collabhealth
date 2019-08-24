<script>
  export let content = 'content not defined'
  export let disabled = false
  let active = false

  function handleClick() {
    active = true
  }
  function handleAnimationend() {
    active = false
  }
</script>

<style>
  .contained-button {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: var(--color-primary-500);
    padding: var(--gap-first) var(--gap-third);
    border-radius: var(--size-border-focus);
    border: none;
    color: var(--color-white-high-emphasis);
    font-size: var(--size-second);
    text-transform: uppercase;
    cursor: pointer;
    letter-spacing: var(--letter-spacing-nineth);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
    transition: background-color 200ms linear, box-shadow 200ms linear;
  }

  .contained-button.dark {
    box-shadow: none;
  }

  .contained-button:disabled {
    background-color: var(--color-black-disabled);
    color: var(--color-white-disabled);
    box-shadow: none;
    cursor: auto;
  }

  .contained-button.dark:disabled {
    background-color: var(--color-black-disabled);
  }

  .contained-button:not(:disabled):hover {
    background-color: var(--color-primary-400);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12),
      0px 1px 5px rgba(0, 0, 0, 0.2);
  }

  .contained-button:not(:disabled)::after {
    content: '';
    position: absolute;
    width: 128px;
    height: 128px;
    border-radius: 50%;
    background-color: var(--color-white-light);
    transform: scale(0.5);
    transition: transform 200ms linear;
    opacity: 0;
  }
  .contained-button.active:not(:disabled)::after {
    animation: bubble 400ms linear;
  }

  @keyframes bubble {
    from {
      opacity: 0.5;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>

<button
  class={`contained-button ${active && 'active'}`}
  on:click|preventDefault={handleClick}
  on:animationend={handleAnimationend}
  {disabled}>
  {content}
</button>
