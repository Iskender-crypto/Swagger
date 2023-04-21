<template>
  <nav>
    <ul class="nav__menu">
      <li>
        <router-link to="/" class="nav__router admin">Админ</router-link>
      </li>
      <li>
        <router-link class="nav__router" to="/authors">Авторы</router-link>
      </li>
      <li>
        <router-link class="nav__router" to="/books">Книги</router-link>
      </li>
      <li>
        <router-link class="nav__router" to="/users">Пользователи</router-link>
      </li>
      <li>
        <router-link class="nav__router" to="/photos"
          >Фотки на обложке</router-link
        >
      </li>
      <li>
        <router-link class="nav__router" to="/activities"
          >Мероприятия</router-link
        >
      </li>
      <li>
        <router-link class="nav__router" to="/login/register"
          >Войти</router-link
        >
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  position: fixed;
  left: 0px;
  height: 100vh;
  background-color: rgb(185, 227, 167);
  padding: 30px;
}
ul,
ol,
li,
dl {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav__router {
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  margin: 10px 0px;
  display: block;
  padding: 15px;
  color: black;
  border-radius: 15px;
}
.nav__router:hover {
  background-color: rgb(33, 52, 30);
  color: white;
}

.admin {
  font-size: 50px;
  color: black;
  font-weight: 700;
}
.admin:hover {
  color: black;
  font-weight: 700;
  background-color: transparent;
}
</style>
