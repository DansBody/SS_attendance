<template>
  <main role="main">
    <!-- carousel-輪播圖片的部分，使用Naive UI的NCarousel -->

    <n-carousel autoplay draggable class="carousel">
      <img class="carousel-item" src="../assets/主日學-1.jpg" />
      <img class="carousel-item" src="../assets/主日學-2.jpg" />
      <img class="carousel-item" src="../assets/主日學-3.jpg" />
    </n-carousel>

    <!-- 輔助選單區塊 -->

    <div class="container introduction" id="menu-assist">
      <!-- carousel下面的字 -->
      <div class="row">
        <div class="col-lg-4 mx-auto">
          <h1 class="title_function">網站功能</h1>
        </div>
        <h1></h1>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-pencil_2.svg/512px-Circle-icons-pencil_2.svg.png"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="pt-3 title_function">班級點名</h2>
          <p>執行學生點名的功能</p>
          <p>
            <router-link
              to="/tutorials"
              @click.native="scrollToServices"
              class="btn btn-secondary next_btn"
              >Next »</router-link
            >
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src="https://freeiconshop.com/wp-content/uploads/edd/clipboard-flat.png"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="pt-3 title_function">新增學生</h2>
          <p>執行加入新同學資訊的功能</p>
          <p>
            <router-link
              to="/add"
              @click.native="scrollToServices"
              class="btn btn-secondary next_btn"
              >Next »</router-link
            >
            <!-- <a class="btn btn-secondary next_btn"  href="#services" role="button"
              >Next »</a> -->
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Circle-icons-brush-pencil.svg/1024px-Circle-icons-brush-pencil.svg.png"
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2 class="pt-3 title_function">加分加點</h2>
          <p>執行個別學生的加分功能</p>
          <p>
            <router-link
              to="/tutorials"
              @click.native="scrollToServices"
              class="btn btn-secondary next_btn"
              >Next »</router-link
            >
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" id="services" />

      <!-- 功能區 -->

      <div class="container mx-auto">
        <router-view v-slot="{ Component }">
          <transition name="slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>

      <hr class="featurette-divider" />

      <!-- <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Oh yeah, it's that good.
            <span class="text-muted">See for yourself.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1819b572540%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1819b572540%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
            style="width: 500px; height: 500px"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            And lastly, this one. <span class="text-muted">Checkmate.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            data-src="holder.js/500x500/auto"
            alt="500x500"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22500%22%20height%3D%22500%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20500%20500%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1819b572540%20text%20%7B%20fill%3A%23AAAAAA%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A25pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1819b572540%22%3E%3Crect%20width%3D%22500%22%20height%3D%22500%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22185.1171875%22%20y%3D%22261.1%22%3E500x500%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            data-holder-rendered="true"
            style="width: 500px; height: 500px"
          />
        </div>
      </div> -->

      <!-- <hr class="featurette-divider" /> -->

      <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->

    <!-- FOOTER -->
    <footer class="container">
      <a href="#" class="btn btn-primary btn-back mb-5">Back to top</a>
      <p>© 2022-2025 ChuSheng, Org.</p>
    </footer>
  </main>
</template>

<script setup>
import { NCarousel } from "naive-ui";
import todoList from "./TutorialsList.vue";

function scrollToServices() {
  document.getElementById("services").scrollIntoView();
}
</script>

<style>
@import "../style/SS_intro.css";
</style>
