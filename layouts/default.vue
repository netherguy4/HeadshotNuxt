<template>
  <div class="wrapper">
    <Header class="wrapper__header" />
    <Main class="wrapper__main main">
      <slot></slot>
      <MainContacts class="main__contacts" />
    </Main>
    <Footer class="wrapper__footer" />
  </div>
</template>
