<template>
  <div class="wrapper">
    <Header class="wrapper__header" />
    <Main class="wrapper__main main">
      <MainHeroAternative />
      <slot></slot>
      <MainPrice class="main__section" />
      <MainPacks class="main__section" />
      <MainScenarios class="main__section" />
      <MainContacts class="main__contacts" />
    </Main>
    <Footer class="wrapper__footer" />
  </div>
</template>
