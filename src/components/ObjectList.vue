<template>
  <n-table

      striped
      id="tablaPrincipal"
      :single-line="false"
      style="
          text-align: center;
          margin-top: 2%;
          padding: 5%"
  >
    <thead>
    <tr>
      <th>Id</th>
      <th>Nombre</th>
      <th>Calidad</th>
      <th>Pool</th>
      <th>Imagen</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="Objeto in Objetos" :key="Objeto.Id">
      <td>{{ Objeto.Id }}</td>
      <td>{{ Objeto.Nombre }}</td>
      <td>{{ Objeto.Calidad }}</td>
      <td>{{ Objeto.Pool }}</td>
      <td><img class="objetoImagen" :src="Objeto.Imagen" alt="que ha pasao"></td>
    </tr>
    </tbody>
  </n-table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Objetos: []
    }
  },
  async mounted() {
    let datos = await axios.get(
        "https://hrialosnujxipkodwjdm.supabase.co/rest/v1/Objetos?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyaWFsb3NudWp4aXBrb2R3amRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNjg4ODEsImV4cCI6MjAxNDg0NDg4MX0.I8OaEwuxtSiLwDYpkrtIJsW2ygsRQ0EwYx0fw85aukU"
    )
    this.Objetos = datos.data;
  }
}
</script>

<style>

.objetoImagen {
  width: 64px;
  height: 64px;
}

</style>