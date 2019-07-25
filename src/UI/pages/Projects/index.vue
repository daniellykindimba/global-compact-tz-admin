<style>
  .goal-item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 0.5em;
    margin-top: 0.7em;
    color: #fff;
    text-align: center;
  }
</style>

<template>
  <div>
    <v-snackbar top right v-model="showSnackbar">
      Project Approved
      <v-btn flat color="accent"
        @click="showSnackbar = false">
        Close
      </v-btn>
    </v-snackbar>

    <Loader v-if="fetchingProjects" />

    <v-card v-else-if="!projects" class="mt-2 mx-2 d-inline-flex" flat color="red lighten-3">
      <v-card-text class="subheading">
        <v-icon left>error</v-icon>
        Failed to fetch projects
      </v-card-text>
    </v-card>

    <v-card v-else-if="!projects.length" class="mt-2 mx-2 d-inline-flex" flat color="orange lighten-3">
      <v-card-text class="subheading">
        <v-icon left>warning</v-icon>
        No projects found.
      </v-card-text>
    </v-card>

    <template v-else>
      <v-container grid-list-md pt-0 px-0>
        <v-layout row wrap>
          <template v-for="(project, projectIndex) in projects">
            <v-flex xs12 sm6 md4 pa-3 :key="project.id">
              <v-card>
                <label v-if="!project.image" class="image-picker">
                  <span>No image set</span>
                </label>
                <v-img class="white--text" v-else style="height: 200px" :src="project.image"
                  gradient="to bottom, rgba(100, 115, 201, .3), rgba(25, 32, 72, .9)">
                  <v-card-title primary-title class="align-end fill-height">
                    <h3 class="title pb-2">{{project.name}}</h3>
                  </v-card-title>
                </v-img>

                <!-- <v-card-title primary-title class="pb-0 px-4"> -->
                    <!-- <h3 class="title">{{project.name}}</h3> -->
                <!-- </v-card-title> -->

                <v-card-text class="text-left px-3 pt-3 pb-3">
                  <!-- <div class="mt-3 mb-1 body-2 black--text">
                    Julien King&nbsp; • &nbsp;<span class="grey--text text--darken-1">Organisation Lead</span>
                  </div>
                  <span class="subheading primary--text">
                    +2689372370
                  </span> -->

                  <h5 class="subheading">Goals Covered</h5>
                  <div style="margin: 0 -2em; padding: 0 2em; overflow-x: auto">
                    <v-layout class="mb-1">
                      <div class="goal-item" :style="{background:goal.color}"
                        v-for="(goal, index) in project.goals"
                        :key="index">
                        {{ goal.number }}
                      </div>
                    </v-layout>
                  </div>

                  <!-- <v-divider class="mt-4 mb-3" /> -->
                  <h5 class="subheading mt-2 mb-1">Project Lead &nbsp;<span class="grey--text text--darken-1">(Ben Ally)</span></h5>
                  <span class="subheading primary--text">
                    +2679122034
                  </span>
                </v-card-text>

                <v-divider />

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <template v-if="!project.approved">
                    <v-btn flat color="grey darken-2"
                      :disabled="projectsBeingApproved.indexOf(projectIndex) !== -1"
                      :loading="projectsBeingApproved.indexOf(projectIndex) !== -1"
                      @click="approveProject(projectIndex)">
                      <v-icon color="green" left>check</v-icon> Approve
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-divider class="my-2" vertical></v-divider>
                    <v-spacer></v-spacer>
                  </template>
                  <v-btn flat color="grey darken-2">
                    <v-icon left>remove_red_eye</v-icon>
                    <span v-if="project.approved">VIEW &nbsp;</span>Details
                  </v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>
          </template>
        </v-layout>
      </v-container>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Projects',
  mounted(){
    if(!this.projects && !this.fetchingProjects)
      this.$store.dispatch('getProjects');
  },
  data(){
    return {
      stateProjects: [],
      showSnackbar: false,
      projectsBeingApproved: []
    }
  },
  computed: {
    ...mapState(['projects', 'fetchingProjects'])
  },
  watch: {
    projects(newValue){
      console.log("Projects changed: ", newValue);
      this.stateProjects = newValue;
    }
  },
  methods: {
    async approveProject(index){
      this.projectsBeingApproved.push(index);
      await { then: resolve => setTimeout(resolve, 3000) }
      this.showSnackbar = true;
      this.projectsBeingApproved.splice(index, 1);
      const project = this.stateProjects[index];
      project.approved = true;
      this.$set('stateProjects', index, project);
    }
  }
}
</script>
