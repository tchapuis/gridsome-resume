<template>
  <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
    <div class="w-100">
      <h2 class="mb-5">Contact</h2>

      <form action="https://formspree.io/xlqjarom" method="POST">
        <div class="form-group mb-3">
          <label for="name">
            Votre nom:
          </label>
          <input id="name" type="email" name="name" class="w-100 form-control">
        </div>

          <div class="form-group mb-3">
            <label for="_replyto">
              Votre email:
            </label>
            <input id="_replyto" type="email" name="_replyto" class="w-100 form-control">
          </div>


        <div class="form-group mb-5">
          <label for="message">
            Votre message:
          </label>
          <textarea id="message" name="message" class="w-100 form-control" rows="4"></textarea>
        </div>


        <button type="submit" class="btn btn-lg btn-primary">Envoyer</button>
      </form>

    </div>
  </section>

</template>

