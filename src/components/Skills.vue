<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
    <div class="w-100">
      <h2 class="mb-5">Compétences</h2>

      <div class="subheading mb-3">Langages de programmation & outils</div>
      <ul class="list-inline dev-icons">
        <li class="list-inline-item" title="Symfony">
          <font-awesome :icon="['fab', 'symfony']"/>
        </li>
        <li class="list-inline-item" title="PHP">
          <font-awesome :icon="['fab', 'php']"/>
        </li>
        <li class="list-inline-item" title="HTML5">
          <font-awesome :icon="['fab', 'html5']"/>
        </li>
        <li class="list-inline-item" title="CSS3">
          <font-awesome :icon="['fab', 'css3-alt']"/>
        </li>
        <li class="list-inline-item" title="Javascript">
          <font-awesome :icon="['fab', 'js-square']"/>
        </li>
        <li class="list-inline-item" title="Vue.js">
          <font-awesome :icon="['fab', 'vuejs']"/>
        </li>
        <li class="list-inline-item" title="SASS">
          <font-awesome :icon="['fab', 'sass']"/>
        </li>
        <li class="list-inline-item" title="LESS">
          <font-awesome :icon="['fab', 'less']"/>
        </li>
        <li class="list-inline-item" title="Wordpress">
          <font-awesome :icon="['fab', 'wordpress']"/>
        </li>
        <li class="list-inline-item" title="npm">
          <font-awesome :icon="['fab', 'npm']"/>
        </li>
        <li class="list-inline-item" title="Docker">
          <font-awesome :icon="['fab', 'docker']"/>
        </li>
        <li class="list-inline-item" title="Git">
          <font-awesome :icon="['fab', 'git-square']"/>
        </li>
      </ul>

      <div class="subheading mb-3">Workflow</div>
      <ul class="fa-ul mb-0">
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Mobile-First, Responsive Design
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Tests unitaires &amp; Debugging
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Intégration & déploiement continue
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Méthode Agile &amp; Scrum
        </li>
        <li>
          <font-awesome class="fa-li" :icon="['fas', 'check']"/>Frameworks JavaScript d'avant-garde
        </li>
      </ul>
    </div>
  </section>
</template>
