<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title">
          <b>{{ model.title }}</b>
        </h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item" to="/books">Книги</router-link>>
          <router-link
            class="breadcrumb__item breadcrumb__actived"
            to="/books/:id"
            >{{ model.title }}</router-link
          >
        </div>
      </div>
    </div>
    <div class="card p-4">
      <p class="mb-2"><b>Заголовок: </b>{{ model.title }}</p>
      <p class="mb-2"><b>Содержание: </b>{{ model.description }}</p>
      <p class="mb-2"><b>Количество страниц: </b>{{ model.pageCount }}</p>
      <p class="mb-2"><b>Отрывок: </b>{{ model.excerpt }}</p>
      <p class="mb-2"><b>Дата публикации: </b>{{ model.publishDate }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import { Book } from "../../entities/Book";
import { useEntity } from "../../hooks/useEntity";
const { params } = useRoute();
const { model, loaded } = useEntity<Book>(`books`, +params.id);
</script>
<style src="../../assets/css/style.css"></style>
