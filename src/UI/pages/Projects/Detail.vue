<style scoped>
  .detail-subheader{
    background: #fff;
    position: fixed;
    top: 60px;
    margin-left: -1.7em;
    z-index: 999;
    width: 100%;
  }

  .layout{
    display: flex;
  }

  .layout.vertical{
    flex-direction: column;
  }

  .layout.center,
  .layout.center-center{
    align-items: center;
  }

  .layout.center-justufued,
  .layout.center-center{
    justify-content: center;
  }

  #goalDetailWrapper section{
	/* padding-top: 4em; */
	padding: 0 4em;
}

#projectPageTitle{
	background: #000;
	padding: 5em 4em;
	margin-bottom: 2.5em;
	color: #fff;
	background-size: cover;
	background-position: center;
	min-height: 420px;
	border-radius: 3px;
  overflow: hidden;
  position: relative;
}

#projectPageTitle:after{
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	background: linear-gradient(110deg, rgba(0, 0, 0, 1) 28%, rgba(0, 0, 0, 0.4) 45%, rgba(0, 0, 0, 0.3) 65%, rgba(0, 0, 0, 0) 90%);
}

#projectPageTitle > *{
	z-index: 1;
}

#projectPageTitle #text{
	width: 100%;
	max-width: 600px;
}

#projectPageTitle small{
	text-transform: uppercase;
	font-size: 1.15em;
	font-weight: 100;
	letter-spacing: 0.04em;
}

#projectPageTitle h1{
	font-size: 2.3em;
	margin-bottom: 1em;
	text-transform: uppercase;
	line-height: 1.2em;
}

#projectPageTitle ul{
  padding-left: 0;
}

#projectPageTitle li{
  margin-left: 0;
  padding-left: 0;
	display: block;
	width: 600px;
}

#projectPageTitle li:not(:last-of-type){
	margin-bottom: 2em;
}

#projectPageTitle li strong{
	display: block;
	font-size: 1.6em;
	text-transform: none;
}

#quickSummary > div{
	width: 50%;
}

#implementationDetals{
	margin-bottom: 5em;
}

#implementationDetals > div{
	margin: -1em;
	margin-top: -0.5em;
}

.implementation-item{
	padding: 0.5em 1em;
	width: 50%;
}

.implementation-item > div{
	border: 1px solid #555;
	padding: 2em;
	border-radius: 3px;
}

.implementation-item small{
	font-size: 1.1em;
	display: block;
	font-weight: 100;
	text-transform: uppercase;
	margin-bottom: 0.3em;
	letter-spacing: 0.02em;
}

.implementation-item strong{
	font-size: 1.7em;
	position: relative;
	display: block;
}

.implementation-item strong:not(:last-child):after{
	content: '';
	position: absolute;
	left: 0;
	bottom: -0.55em;
	width: 70%;
	max-width: 120px;
	height: 1px;
	background: #ddd;
}

.implementation-item strong + small{
	margin-top: 2em;
}

#aboutProject{
	margin-bottom: 3.4em;
}

#aboutProject p{
	font-weight: 100;
	font-size: 1.5em;
	line-height: 1.8em;
}

#sdgsSection{
	margin-bottom: 3.6em;
}

.sdg-item{
	width: 130px;
	margin-right: 0.5em;
	margin-top: 1.5em;
	margin-bottom: 1em;
}

.sdg-item img{
	width: 100%;
}

.section-header{
	font-size: 2em;
	margin-bottom: 0.6em;
	font-family: "Open Sans", sans-serif;
}

#impactSection{
	margin-bottom: 4em;
}

#impactSection > .layout{
	margin: 0 -1em;
}

.impact-item{
	margin: 1em;
	min-width: 250px;
	max-width: 250px;
	text-align: center;
}

.impact-item .number{
	background: #f0f0f0;
	height: 180px;
	width: 180px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 6px double #ddd;
	font-family: "GT Walsheim", sans-serif;
	font-size: 2.5em;
	margin-bottom: 0.5em;

	background: #fffbf4;
	border-color: #eacf9d;
	color: #b78320;
}

.impact-item h3{
	font-family: "Open Sans", sans-serif;
	font-size: 1.6em;
	line-height: 1.3em;
}

#images{
	height: 550px;
	margin-top: 1.5em;
	margin-bottom: 4em;
}

#images > div{
	overflow: hidden;
}

#images div{
	position: relative;
	border-radius: 5px;
	overflow: hidden;
}

#images img{
	overflow: hidden;
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}

#images > div:first-child{
	margin: 0.5em;
	margin-left: 0;
	width: 35%;
	flex-shrink: 0;
	background: #ccc;
}

#images > div:last-child{
	flex: 1;
}

#images > div:last-child div{
	margin: 0.5em;
	width: 50%;
	height: 50%;
	width: calc(50% - 1em);
	height: calc(50% - 1em);
	background: #ccc;
}

section{
  padding: 0 4em;
}
</style>

<template>
  <div>
    <div class="detail-subheader">
      <v-btn flat>
        <v-icon left>arrow_back</v-icon>
        Back to projects
      </v-btn>
    </div>

    <div id="projectPageTitle" class="layout wrap start" :style="{backgroundImage: `url('${project.image}')`}">
      <div id="text">
        <small>Project Name</small>
        <h1>{{ project.name }}</h1>
        <ul>
          <li>
            <small>Started On</small>
            <strong>January 5, 2017</strong>
          </li>
          <li>
            <small>Target Location</small>
            <strong>Babati, Kiteto, Manyara</strong>
          </li>
        </ul>
      </div>
    </div>

    <section id="aboutProject">
      <h2 class="section-header">
        Project Description
      </h2>
      <p>
        {{ project.description }}
      </p>
    </section>

    <section id="implementationDetals">
      <div class="layout wrap">
        <div class="implementation-item">
          <div>
            <small>Organisation</small>
            <strong>
              {{ project.organisation }}
            </strong>

            <small>Partners</small>
            <strong>
              CRDB, Contemporary Woman
            </strong>
          </div>
        </div>

        <div class="implementation-item">
          <div>
            <small>Project Cost</small>
            <strong>
              TSHS. 85 Million
            </strong>

            <small>Funded By</small>
            <strong>
              Vodacom Tanzania
            </strong>
          </div>
        </div>
      </div>
    </section>

    <section id="sdgsSection">
      <h2 class="section-header">
        SDGs Covered
      </h2>

      <div class="layout start wrap">
        <div class="sdg-item" v-for="(goal, index) in project.goals" :key="index">
          <img :src="`${require(`@/assets/img/sdgs/goal-${goal.number}/GOAL_${goal.number}_SVG/TheGlobalGoals_Icons_Color_Goal_${goal.number}.svg`)}`" alt="">
        </div>
      </div>
    </section>

    <section id="impactSection">
      <h2 class="section-header">
        Project's Impact
      </h2>

      <div class="layout wrap start">
        <div class="impact-item layout vertical center-center">
          <span class="number">
            1,620+
          </span>
          <h3>Girls Sponsored</h3>
        </div>

        <div class="impact-item layout vertical center-center">
          <span class="number">
            380+
          </span>
          <h3>Women Reached</h3>
        </div>

        <div class="impact-item layout vertical center-center">
          <span class="number">
            90+
          </span>
          <h3>Sessions Conducted</h3>
        </div>
      </div>
    </section>

    <section id="gallerySection">
      <h2 class="section-header">
        Project In Action
      </h2>

      <div id="images" class="layout wrap">
        <div>
          <img src="https://d279m997dpfwgl.cloudfront.net/wp/2019/05/0506_schoolgirls1.jpg" alt="">
        </div>

        <div class="layout wrap">
          <div>
            <img src="https://www.globalpeace.org/sites/default/files/styles/media_gallery_large/public/images/galleries/2014.%2007.18%20Worldwide%20Commemorations%20of%20Nelson%20Mandela%20Day/GPFKenya_Mandela%20Garden_07.jpg?itok=ewAx7I6z" alt="">
          </div>
          <div>
            <img src="http://dtacbpxwt71jw.cloudfront.net/wp-content/uploads/2017/03/1488707780_maxresdefault.jpg" alt="">
          </div>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliuisJfPQ9Ba6g2dUo68M0TEpfJ6aoFSpJKGLYlYNTJzG_1rO" alt="">
          </div>

          <div>
            <img src="https://www.canoncollins.org.uk/sites/canoncollins.org.uk/files/for_website_0.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProjectDetail',
  props: {
    projectId: {
      default: null,
      required: true
    }
  },
  data(){
    return {
      project: {}
    }
  },
  mounted(){
    this.project = this.projects.find(p => p.id == parseInt(this.projectId));
  },
  computed: {
    ...mapState(['projects', 'fetchingProjects'])
  }
}
</script>
