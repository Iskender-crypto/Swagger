<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.id }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/photos"
            >Фотки на обложке </router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/photos/:id"
            >{{ model.id }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>Номер: </b>{{ model.id }}</p>
      <p class="mb-2"><b>Фото: </b><img :src="`${model.url}`" alt="" /></p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { User } from "../../entities/User";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<User>(`CoverPhotos`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
