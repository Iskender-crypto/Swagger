<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.title }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/activities"
            >Мероприятия</router-link
          >>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/activities/:id"
            >{{ model.title }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>Заголовок: </b>{{ model.title }}</p>
      <p class="mb-2"><b>Срок дата: </b>{{ model.dueDate }}</p>
      <p class="mb-2"><b>Закончен?: </b>{{ model.completed }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { RouterLink, useRoute } from "vue-router";
import { Activity } from "../../entities/Activity";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<Activity>(`activities`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
