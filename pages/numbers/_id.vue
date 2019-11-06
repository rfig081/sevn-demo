<template>
  <div>
    <section><div>WELCOME</div></section>
    <section><div>TO</div></section>
    <section><div>Page # {{ $route.params.id }}</div></section>
  </div>
</template>

<style lang="css" scoped>
section {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

section:nth-child(2) {
  background: rgba(128, 128, 128, .2);
}

section > div {
  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(100vh/3);
  width: 100vw;
}
</style>
