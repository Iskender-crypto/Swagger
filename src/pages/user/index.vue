<template>
  <div class="container my__container" v-if="loaded">
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="title"><b>Пользователь</b></h1>
        <div class="breadcrumb">
          <router-link class="breadcrumb__item" to="/">Главная</router-link>>
          <router-link class="breadcrumb__item breadcrumb__actived" to="/"
            >Пользователь</router-link
          >
        </div>
      </div>
      <button @click="show(new User({}))" class="btn btn-primarys me-3">
        Добавить
      </button>
    </div>
    <app-table :items="items" :columns="columns">
      <template #id="{ item }">{{ item.id }}</template>
      <template #userName="{ item }">
        <router-link :to="`users/${item.id}`">
          {{ item.userName }}
        </router-link>
      </template>
      <template #password="{ item }">{{ item.password }}</template>
      <template #action="{ item }">
        <div class="d-flex justify-content-end">
          <button @click="show(item)" class="btn btn-primarys me-3">
            Обновить
          </button>
          <button @click="remove(item.id)" class="btn btn-danger me-3">
            Удалить
          </button>
        </div>
      </template>
    </app-table>
    <app-dialog title="Посмотреть книгу" v-if="item != null" ref="dialog">
      <template #body>
        <div class="mb-3">
          <label class="form-label">Заголовок</label>
          <input v-model="item.userName" type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">Содержание</label>
          <textarea
            v-model="item.password"
            class="form-control"
            rows="6"
          ></textarea>
        </div>
      </template>
      <template #footer>
        <button @click="add" class="btn btn-primary">Добавить</button>
        <button @click="update" class="btn btn-success">Сохранить</button>
        <button @click="dialog.modal.hide()" class="btn btn-secondary">
          Закрыть
        </button>
      </template>
    </app-dialog>
  </div>
</template>
<script setup lang="ts">
import { User } from "../../entities/User";
import { useEntities } from "../../hooks/useEntities";
import AppTable from "../../components/app-table.vue";
import AppDialog from "../../components/app-dialog.vue";
import { TableColumn } from "../../models/TableColumn";
const { loaded, items, show, update, remove, add, item, dialog } =
  useEntities<User>("Users");
const columns: TableColumn[] = [
  new TableColumn({
    name: "id",
    caption: "#",
  }),
  new TableColumn({
    name: "userName",
    caption: "Логин",
  }),
  new TableColumn({
    name: "password",
    caption: "Пароль",
  }),
  new TableColumn({
    name: "action",
  }),
];
</script>
<style src="../../assets/css/style.css"></style>
