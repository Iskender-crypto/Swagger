<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.userName }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/users"
            >Пользователь</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/users/:id"
            >{{ model.userName }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>Логин: </b>{{ model.userName }}</p>
      <p class="mb-2"><b>Пароль: </b>{{ model.password }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { User } from "../../entities/User";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<User>(`users`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
