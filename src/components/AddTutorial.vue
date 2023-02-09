<template>
  <div class="submit-form">
    <div class="row justify-content-center">
      <div class="col-md-7">
        <div v-if="!submitted">
          <div class="form-group pb-3">
            <label for="title">姓名</label>
            <input
              type="text"
              class="form-control"
              id="title"
              required
              v-model="tutorial.title"
              name="title"
              placeholder="王大白"
            />
          </div>

          <div class="form-group pb-3">
            <label for="description">年級</label>
            <input
              class="form-control"
              id="description"
              required
              v-model="tutorial.description"
              name="description"
            />
          </div>

          <div class="form-group pb-3">
            <label for="class">班級</label>
            <select
              class="form-select"
              required
              v-model="tutorial.class"
              name="class"
            >
              <option disabled value="">請選擇</option>
              <option value="初小級">初小級</option>
              <option value="中小級">中小級</option>
              <option value="高小級">高小級</option>
            </select>
            <!-- <input
              class="form-control"
              id="class"
              required
              v-model="tutorial.class"
              name="class"
              placeholder="初小級、中小級"
            /> -->
          </div>

          <div class="form-group pb-3">
            <label for="birth">生日</label>
            <n-date-picker
              type="date"
              required
              v-model:formatted-value="birth"
              name="birth"
              placeholder="請選擇日期"
              input-readonly
            />
          </div>

          <button @click="saveTutorial" class="btn btn-success mt-3">
            送出
          </button>
        </div>

        <div v-else>
          <h4>學生新增完成 !</h4>
          <!-- <button class="btn btn-success" @click="newTutorial" >Add</button> -->
          <router-link
            to="/tutorials"
            @click="newTutorial"
            class="btn btn-success mt-3"
            >返回</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";
import { NDatePicker } from "naive-ui";
import { ref } from "vue";

// 測試用
// const testbirth = ref("2007.06.30")
// $(function(){
//   $('#datepicker').datepicker();
// });

export default {
  components: {
    NDatePicker,
  },
  name: "add-tutorial",
  data() {
    return {
      chooseDate:"請選擇日期",
      tutorial: {
        id: null,
        title: "",
        description: "",
        class: "",
        point: 0,
        published: false,
      },
      submitted: false,
      birth:null
    };
  },
  methods: {
    // 測試用
    // showMessage(){
    //   console.log(this.tutorial.description);
    //   console.log(this.birth);
    //   console.log('我在這')
    // },

    saveTutorial() {
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        class: this.tutorial.class,
        birth: this.birth,
        point: this.tutorial.point,
      };

      TutorialDataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;

          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>

<style>
.input-group-append {
  cursor: pointer;
}

.submit-form {
  max-width: 300px;
  margin: auto;
}

.dropdown-menu {
  padding: 0.5rem;
}

.form-control::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
            color: black;
            opacity: 0.3; /* Firefox */
}
</style>
