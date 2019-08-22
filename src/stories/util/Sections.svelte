<script>
  import Code from './Code.svelte'

  let activeCode = false
  let contentLink = 'Mostrar código'

  export let title = 'title not defined'
  export let description = 'description not defined'
  export let exampleImport = 'exampleImport not defined'
  export let exampleUse = 'exampleUse not defined'
  export let dark = false
  export let darkLight = false
  export let center = false

  function handleClick() {
    console.log('eita')

    if (activeCode) {
      contentLink = 'Mostrar código'
      activeCode = false
    } else {
      contentLink = 'Esconder código'
      activeCode = true
    }
  }
</script>

<style>
  :root {
    --color-sbcollab-first: #f25a70;
    --color-sbcollab-first-light: rgba(242, 90, 112, 0.4);

    --color-sbcollab-second: ##fffcee;
    --color-sbcollab-third: #3a4042;
    --color-sbcollab-third-light: rgba(58, 64, 66, 0.8);
    --color-sbcollab-fourth: #828282;
    --color-sbcollab-fourth-light: rgba(130, 130, 130, 0.2);
  }

  .container {
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
  }

  .section-sbcollab > .header {
    background-color: var(--color-sbcollab-second);
    box-sizing: border-box;
    height: 280px;
    padding-top: 80px;
    border-bottom: 1px solid var(--color-sbcollab-first);
    box-shadow: 0 1px 2px var(--color-sbcollab-first-light);
  }

  .section-sbcollab > .section {
    border-bottom: 1px dashed var(--color-sbcollab-first-light);
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .section-sbcollab > .section.last {
    border-bottom: 1px solid var(--color-sbcollab-first);
    padding-bottom: 80px;
  }

  .section-sbcollab .section:last-of-type {
    border: none;
    margin-bottom: 200px;
  }

  .section-sbcollab .title {
    font-size: 36px;
    font-weight: bold;
    color: var(--color-sbcollab-third);
  }

  .section-sbcollab .subtitle {
    font-size: 20px;
    color: var(--color-sbcollab-third);
    margin-bottom: 20px;
  }

  .section-sbcollab .subtitle.highlight {
    font-size: 28px;
    font-weight: bold;
  }

  .section-sbcollab .description {
    font-size: 14px;
    color: var(--color-sbcollab-third-light);
  }

  .section-sbcollab .example {
    position: relative;
    box-sizing: border-box;
    background-color: var(--color-sbcollab-second);
  }
  .section-sbcollab .example.dark {
    background-color: var(--color-dark-black);
  }
  .section-sbcollab .example.dark-light {
    background-color: var(--color-dark-black-light);
  }

  .section-sbcollab .example > div {
    padding: 40px 20px;
    border: 1px solid var(--color-sbcollab-first-light);
  }

  .section-sbcollab .link {
    position: absolute;
    right: 5px;
    top: 0;
    transform: translateY(-140%);
    font-size: 14px;
    text-decoration: none;
  }

  .section-sbcollab .code {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    background-color: var(--color-sbcollab-fourth-light);
    opacity: 0;
    transition: opacity 100ms linear;
  }
  .section-sbcollab .code.active {
    opacity: 1;
  }
</style>

<main class="section-sbcollab">
  <header class="header">
    <div class="container">
      <h1 class="title">{title}</h1>
    </div>
  </header>

  <section class="section">
    <div class="container">
      <h3 class="subtitle">Descrição:</h3>
      <p class="description">{description}</p>
    </div>
  </section>

  <section class="section last">
    <div class="container">
      <h3 class="subtitle">Importe:</h3>

      <Code lang="js">{`${exampleImport}`}</Code>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="subtitle highlight">Exemplo</h2>

      <article
        class={`example 
          ${dark ? 'dark' : ''} 
          ${darkLight ? 'dark-light' : ''}`}>
        <div class="wrap">
          <a
            href="#show-code"
            class="link"
            on:click|preventDefault={handleClick}>
            {contentLink}
          </a>
          <slot />
          <div id="show-code" class={`code ${activeCode ? 'active' : ''}`}>
            <Code>{`${exampleUse}`}</Code>
          </div>
        </div>
      </article>
    </div>
  </section>
</main>
