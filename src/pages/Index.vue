<template>
  <Layout>
    <b-container fluid class="p-0" id="nav-scroller" ref="content">
      <About/>
      <hr class="m-0">
      <Skills/>
      <hr class="m-0">
      <Experience/>
      <hr class="m-0">
      <Interests/>
      <hr class="m-0">
      <Contact/>
      <hr class="m-0">
      <Footer/>
    </b-container>
  </Layout>
</template>

<script>
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Interests from "../components/Interests";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  components: {
    About,
    Experience,
    Skills,
    Interests,
    Contact,
    Footer
  },
  metaInfo: {
    title: "Thomas Chapuis",
    titleTemplate: "%s - Developeur Web Fullstack Freelance"
  }
};
</script>

<style lang="scss">
.subheading {
  font-weight: 500;
  font-family: "Fira Sans Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5rem;
}

.fa-ul > li {
  display: flex;
  align-items: center;
}

.dev-icons {
  font-size: 3rem;
}

.dev-icons .list-inline-item svg:hover {
  color: var(--primary);
}

section.resume-section {
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
  max-width: 75rem;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}
</style>
