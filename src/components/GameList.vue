<template>
  <div id="app">
    <h1>Tienda 32 Bits</h1>
    <h3>Lista de juegos</h3>
    <table class="double-border-table">
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, i) in games" :key="i">
          <td>{{ game.codigo }}</td>
          <td>{{ game.nombre }}</td>
          <td>{{ game.stock }}</td>
          <td>${{ game.precio }}</td>
          <td>
            <button @click="Incrementar(i)">+</button>
            <button @click="Disminuir(i)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'App',

  computed: {
    ...mapState(['games']),
  },
  methods: {
    ...mapActions(['fetchGames', 'Incrementar', 'Disminuir']),

  },
  created() {
    this.fetchGames();
  },
};
</script>
<style>
.double-border-table {
  border-collapse: collapse;
  width: 80%;
  margin-left: 150px;

}

.double-border-table th,
.double-border-table td {
  border: 3px double black;
  padding: 5px;
  text-align: center;
}

.double-border-table th {
  font-weight: bold;
}
</style>
