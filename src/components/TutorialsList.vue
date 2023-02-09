<template>
  <div class="list row mx-auto">
    <div class="col-md-8 mx-auto">
      <div class="input-group mb-3 pb-3">
        <input
          type="text"
          class="form-control"
          placeholder="以學生姓名搜尋"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>

    <div class="row gx-3 gy-3">
      <div class="col-md-6 justify-content-center">
        <div class="row student-list">
          <h4 class="student-list-title">學生清單</h4>
        </div>

        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(tutorial, index) in tutorials"
            :key="index"
            @click="setActiveTutorial(tutorial, index)"
          >
            {{ tutorial.title }}
          </li>
        </ul>

        <!-- <div class="row p-3">
          <div class="col-md-10 text-center">
            <button
              class="m-3 btn btn-sm btn-danger mx-auto remove_btn"
              @click="removeAllTutorials"
            >
              Remove All
            </button>
          </div>
        </div> -->
      </div>
      <div class="col-md-6 text-center">
        <div v-if="currentTutorial">
          <h4 class="student-list-title">學生詳細資料</h4>
          <div class="pb-2 description">
            <label><strong>姓名:</strong></label> {{ currentTutorial.title }}
          </div>
          <div class="pb-2 description">
            <label><strong>年級:</strong></label>
            {{ currentTutorial.description }}
          </div>
          <div class="pb-2 description">
            <label><strong>班別:</strong></label>
            {{ currentTutorial.class }}
          </div>
          <div class="pb-2 description">
            <label><strong>點數:</strong></label>
            {{ currentTutorial.point }}
          </div>
          <div class="pb-2 description">
            <label><strong>生日:</strong></label>
            {{ currentTutorial.birth }}
          </div>
          <!-- <div class="pb-2 description">
            <label><strong>Status:</strong></label>
            {{ currentTutorial.published ? "Published" : "Pending" }}
          </div> -->

          <div class="row p-2 justify-content-center">
            <div class="col-md-10 text-center">
              <router-link
                :to="'/tutorials/' + currentTutorial.id"
                class="btn btn-warning edit_btn"
                >Edit</router-link
              >
            </div>
          </div>
        </div>
        <div v-else>
          <br />
          <p>點擊學生以查看詳細</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveTutorials() {
      TutorialDataService.getAll()
        .then((response) => {
          this.tutorials = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTutorials();
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
    },

    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      TutorialDataService.findByTitle(this.title)
        .then((response) => {
          this.tutorials = response.data;
          this.setActiveTutorial(null);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTutorials();
  },
};
</script>

<style>
.edit_btn {
  font-weight: 700 !important;
}

.remove_btn {
  font-weight: 700 !important;
}

.student-list-title {
  font-weight: 700 !important;
}

.student-list {
  text-align: center !important;
  justify-content: center !important;
}

.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

.description{
  text-align: left;
  margin-left: 4rem;
}
</style>
