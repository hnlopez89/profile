<template>
  <div >
    <header>
      <div>
      <h1>Hugo Nogueira López</h1>
      <h3>Tech and travel</h3>

      </div>
    </header>

    <section >
      <h1 class="title"><span>Inicio:</span></h1> 
      <div id="intro">

      <p>Bienvenidos a mi espacio. En él, podréis navegar y conocer un poco más acerca de mis aventuras, mi trayectoria,
        y mis curiosidades. Mi formación y mi experiencia han estado ligadas al turismo, y esto me ha servido y obligado
        al mismo tiempo a ser un extranjero, un emigrante en tierra ajena, a adaptarme constantemente y a conocer
        personalidades diferentes, otras culturas y otras formas de vida.   
      </p>
      <p>
        Hoy, con la herencia y cicatrices de estas experiencias, y tras el COVID-19, decidí adentrarme en la programación
        web. En este espacio que yo mismo he diseñado, iré publicando mis proyectos, mis trabajos y también compartiré algunas
        impresiones sobre temas que me susciten algún tipo de interés. Espero que os guste.
      </p>
      <p>
        Bienvenidos a mi espacio, bienvenidos a Hugo, tech and travel.
      </p>
      </div>
      <div class="parallax" id="towerBridge">
      <p>Viaje en Enero 2020. Vuelta a Londres. La pandemía comenzaba, y supondría un punto de inflexión global y personal. </p>
      </div>
    </section>

    <section>
      <h1 class="title"><span>Trayectoria:</span></h1> 
    <div class="timeline">
    <div
      v-for="(item, id) in myJson.experiences"
      v-bind:key="id"
      :class='id % 2 ? "timeline-item left" : "timeline-item right"'
    >
      <div >
        <p :class='{project: item.category === project,
              academic: item.category === academic,
              experience: item.category === experience }'> {{item.category}} </p>
        
        <div>
        <h3>{{item.title}}</h3>
        <h4>{{item.company}}</h4>
        <h4>{{item.location}}</h4>
        <h4>{{item.date}}</h4>
        <p id="description">{{item.description}}</p>
        <h3 v-if="item.tasks">Tareas:</h3>
        <ul v-for="(tasks, index) in item.tasks" :key="tasks.id">
          <li>{{tasks}}</li>
        </ul>
        <h3 v-if="item.functionalities">Funcionalidades:</h3>
        <ul v-for="(functionalities, index) in item.functionalities" :key="functionalities.id">
          <li>{{functionalities}}</li>
        </ul>
        <h3 v-if="item.technologies">Tecnologías:</h3>
        <div id="timelineDivPic">
          <div v-for="(technologies, index) in item.technologies" :key="technologies.id">
            <img id="timelinePic" :src="require(`@/assets/icons/${technologies}`)">
          </div>
        </div>

       </div>
      </div>
    </div>
  </div>
    </section>

<!--     <section>
      <h1 class="title"><span>Funcionalidades:</span></h1> 
    </section>

    <section>
    <h1 class="title"><span>Gentes de Martes:</span></h1> 
    </section> -->

  </div>
</template>

<script>
import json from './../profile.json'


export default {
  name: "Home",
      data() {
    return {
      myJson: json.profile,
      project: 'project',
      academic: 'academic',
      experience: 'experience',
    }
  },
};
</script>
