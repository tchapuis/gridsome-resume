<template>
  <b-navbar class="fixed-top" toggleable="lg" type="dark" variant="primary" id="sideNav">
    <b-navbar-brand v-on:click.prevent="$scrollTo('#about')">
      <span class="d-block d-lg-none">Thomas Chapuis</span>
      <span class="d-none d-lg-block">
        <g-image
          alt="Photo de Thomas Chapuis"
          src="../assets/images/thomas-200x200.jpg"
          class="img-fluid img-profile rounded-circle mx-auto mb-2"
        />
      </span>
    </b-navbar-brand>

    <b-collapse id="navbarSupportedContent" is-nav v-b-scrollspy>
      <b-navbar-nav>
        <b-nav-item v-on:click.prevent="$scrollTo('#about')" href="#about">
          Présentation
        </b-nav-item>
        <b-nav-item v-on:click.prevent="$scrollTo('#skills')" href="#skills">
          Compétences
        </b-nav-item>
        <b-nav-item v-on:click.prevent="$scrollTo('#experience')" href="#experience">
          Expériences
        </b-nav-item>
        <b-nav-item v-on:click.prevent="$scrollTo('#interests')" href="#interests">
          Hobbies
        </b-nav-item>
        <b-nav-item v-on:click.prevent="$scrollTo('#contact')" href="#contact">
          Contactez-moi
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped lang="scss">
.navbar-brand,
.nav-item {
  cursor: pointer;
}

#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
}

#sideNav .navbar-toggler:focus {
  outline-color: #d48a6e;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }
  #sideNav .navbar-collapse {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}
</style>
