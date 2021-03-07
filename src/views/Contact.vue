<template>
  <div class="view" >
  <h1 class="title"><span>Contacto:</span></h1> 
  <div class="father" id="contactDiv">
      <img id="contactPicture" src="../assets/contact.jpeg" alt="">
      <form id="contactForm" action="mailto:hnlopez89@gmail.com" method="post" enctype="text/plain">
        <input name="recipient" value="hnlopez89@gmail.com" type="hidden">
          <label for="name">Nombre:</label>
          <input type="text" name="name">
          <label for="email">Correo electrónico:</label>
          <input type="text" name="mail">
          <label for="text">Mensaje:</label>
          <input id="comment" type="text" name="comment" cols="60" rows="10">
          <div>
          <input id="submit" type="submit" value="Enviar">
          </div>
      </form>


  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>