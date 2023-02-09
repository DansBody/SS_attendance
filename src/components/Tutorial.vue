<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4 class="pb-3">學生詳細資料</h4>
    <form>
      <div class="form-group pb-3">
        <label for="title">名字</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTutorial.title"
        />
      </div>
      <div class="form-group pb-3">
        <label for="description">敘述</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentTutorial.description"
        />
      </div>
      <div class="form-group pb-3">
        <label for="point">點數</label>
        <input
          type="text"
          class="form-control"
          id="point"
          v-model="currentTutorial.point"
        />
      </div>

      <!-- <div class="form-group pb-3">
        <label><strong>Status:</strong></label>
        {{ currentTutorial.published ? "Published" : "Pending" }}
      </div> -->
    </form>

    <!-- <button
      class="badge badge-primary mr-2"
      v-if="currentTutorial.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button> -->
    <!-- <button v-else class="btn btn-primary m-2" @click="updatePublished(true)">
      Publish
    </button> -->

    <button class="btn btn-danger m-2" @click="deleteTutorial">Delete</button>

    <button type="submit" class="btn btn-success m-2" @click="updateTutorial">
      Update
    </button>

    <router-link to="/tutorials" class="btn btn-success m-2">返回</router-link>

    <p class="pt-3">{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorial",
  data() {
    return {
      currentTutorial: null,
      message: "",
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id)
        .then((response) => {
          this.currentTutorial = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updatePublished(status) {
      var data = {
        id: this.currentTutorial.id,
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        point: this.currentTutorial.point,
        published: status,
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then((response) => {
          console.log(response.data);
          this.currentTutorial.published = status;
          this.message = "The status was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTutorial() {
      TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
        .then((response) => {
          console.log(response.data);
          this.message = "更新成功 !";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "tutorials" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
