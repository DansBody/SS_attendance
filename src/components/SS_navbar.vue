<template>
  <nav
    class="navbar fixed-top navbar-dark navbar-expand-lg justify-content-center"
  >
    <div class="container mx-3" id="color">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/church.png"
          alt=""
          height="33"
          class="align-text-bottom me-3 mx-auto"
        />
        <span class="" id="title">竹聖-兒主點名系統</span>
        <!-- <span class="d-inline d-sm-none" id="title">竹聖-兒主點名系統</span> -->
      </a>

      <button
        class="navbar-toggler flex-wrap"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        color="yellow"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/tutorials" class="nav-link" @click.native="scrollToServices">班級點名</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/add" class="nav-link" @click.native="scrollToServices">新增學生</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tutorials" class="nav-link" @click.native="scrollToServices">同學管理</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/tutorials" class="nav-link" @click.native="scrollToServices">加分加點</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

$('.navbar-nav>li>router-link').on('click', function(){
    console.log('我被按了');
    $('.navbar-collapse').collapse('hide');
});

window.onscroll = function () {
  scrollFunction();
};

function scrollToServices(){
  document.getElementById("services").scrollIntoView();
}


function scrollFunction() {
  if ($(window).scrollTop() <= 40) {
    $(".navbar").removeClass("scroll_navbar");
  } else {
    $(".navbar").addClass("scroll_navbar");
  }
}
</script>

<style>

.navbar {
  padding: 30px 0px !important;
  transition-duration: 0.6s;
  background-color: rgba(0, 0, 0, 0.1) !important;
}


/* .navbar {
  background-color: #212529 !important;
} */

.scroll_navbar {
  padding: 10px 0px !important;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.4);
  transition-duration: 0.6s;
  background-color: rgba(33, 37, 41, 1) !important;
}

#title {
  font-weight: bold;
}

@media screen and (max-width: 340px) {
  #title {
    display: none;
  }
}

a.nav-link{
  color: white !important;
  font-weight: 700;
}

a.nav-link:hover {
  color: #ffc800 !important;
}

a.navbar-brand {
  color: #ffc800 !important;
  display: inline-block;
}
</style>
