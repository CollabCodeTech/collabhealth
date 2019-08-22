<script>
  export let lang
  export let className
</script>

<style>
  :root {
    --color-sbcollab-first: #f25a70;
    --color-sbcollab-first-light: rgba(242, 90, 112, 0.4);

    --color-sbcollab-second: ##fffcee;
    --color-sbcollab-third: #3a4042;
    --color-sbcollab-third-light: rgba(58, 64, 66, 0.8);
    --color-sbcollab-fourth: #828282;
  }
  .code-sbcollab {
    box-sizing: border-box;
    background-color: var(--color-sbcollab-second);
    border: 1px solid var(--color-sbcollab-first-light);
    padding: 40px 20px;
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  .code-sbcollab > .content {
    box-sizing: border-box;
    display: block;
    word-wrap: normal;
    width: 100%;
  }
</style>

<pre class="code-sbcollab">
  <code class={`content ${lang} ${className}`}>
    <slot />
  </code>
</pre>
