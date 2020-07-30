<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about" itemscope itemtype="http://schema.org/Person">
    <div class="w-100">
      <h1 class="mb-1">
        <span id="fullname" itemprop="name">
          Thomas <strong class="text-primary">Chapuis</strong>
        </span>
      </h1>
      <h2 class="h3" itemprop="jobTitle">
        Développeur <strong class="text-primary">Fullstack</strong>
      </h2>
      <div class="subheading mb-5">
        <a href="tel:+33676221152" class="ninja" itemprop="telephone">06 76 22 11 52</a> ·
        <a
            href="mailto:chapuis.t@protonmail.com" itemprop="email"
        >chapuis.t@protonmail.com</a>
      </div>
      <p
          class="lead mb-3" itemprop="description"
      >Je suis développeur Web Fullstack expérimenté, en freelance, spécialisé dans les technologies PHP et notamment le framework
        Symfony. J'ai eu l'occasion de travailler sur des projets pour de grands groupes mais également
        m'adapter aux contraintes de plus petites structures.
      </p>
      <p class="lead mb-3">
        Mes expériences m'ont permis d’acquérir des compétences dans de nombreux domaines : développement front-end,
        test unitaire, architecture Docker ...
      </p>
      <p class="lead mb-5">
        Je me mets constamment au défi d'atteindre des buts ambitieux, avec de l’intérêt pour l'humain et le travail en
        équipe.
      </p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/thomas-chapuis/" target="_blank" rel="noopener noreferrer" title="Linkedin">
          <font-awesome :icon="['fab', 'linkedin']"/>
        </a>
        <a href="https://gitlab.com/amstr4d" target="_blank" rel="noopener noreferrer" title="Gitlab">
          <font-awesome :icon="['fab', 'gitlab']"/>
        </a>
        <a href="https://github.com/amstr4d" target="_blank" rel="noopener noreferrer" title="Github">
          <font-awesome :icon="['fab', 'github']"/>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .social-icons a {
    cursor: pointer;
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: var(--secondary);
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;
    transition: background-color .2s;

    @media (max-width: 380px) {
      margin-right: 0.5rem;
    }

    @media (max-width: 350px) {
      margin-right: 0.2rem;
    }
  }

  .social-icons a:last-child {
    margin-right: 0;
  }

  .social-icons a:hover {
    background-color: var(--primary);
  }
</style>
