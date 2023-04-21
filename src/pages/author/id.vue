<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.firstName }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/authors"
            >Авторы</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/authors/:id"
            >{{ model.firstName }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>Номер книга: </b>{{ model.idBook }}</p>
      <p class="mb-2"><b>Имя: </b>{{ model.firstName }}</p>
      <p class="mb-2"><b>Фамилия: </b>{{ model.lastName }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { Author } from "../../entities/Author";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<Author>(`authors`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
