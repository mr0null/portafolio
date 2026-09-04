<script setup>
import { data as paginas } from '../laboratorio.data'
</script>

# Laboratorio

Acá voy dejando experimentos, pruebas y cosas que vaya aprendiendo.

<ul>
  <li v-for="pagina in paginas" :key="pagina.url">
    <a :href="pagina.url">
      {{ pagina.titulo }}
    </a>
  </li>
</ul>
