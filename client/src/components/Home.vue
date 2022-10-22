<template>
  <div>
    <h3 @click="fetchDataMahasiswa">{{ msg }}</h3>
    <table cellspacing="0" cellpadding="0" v-if="visible">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Kelas</th>
          <th>Nilai</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataMahasiswa" v-bind:key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.class }}</td>
          <td>{{ item.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      dataMahasiswa: [],
      visible: false,
    };
  },
  methods: {
    fetchDataMahasiswa() {
      const fetch = axios.create();

      fetch
        .get('http://localhost:3000/api/mahasiswa')
        .then((response) => {
          const { data } = response;
          this.dataMahasiswa = data;
          this.visible = true;
        })
        .catch((e) => console.error(e));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
}
table {
  width: 100%;
  text-align: left;
  border: none;
}
tbody {
  background-color: #ccc;
}
</style>
