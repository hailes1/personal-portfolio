<template>
  <section id="projects" class="projects">
    <h2>Projects</h2>
    <div class="project-list">
      <div v-for="(project, index) in projects" :key="index" class="project-item">
        <!-- Left Section: Title -->
        <div class="project-title">
          <div class="case-study">
            <p>{{ `Case Study | No.${index + 1}` }}</p>
          </div>
          <h3>{{ project.title }}</h3>
        </div>

        <!-- Right Section: Description -->
        <div class="project-description">
          <p>{{ project.description }}</p>
          <button @click="viewProject(project.link)">View</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Plant Disease Identifier',
          description:
            'Trained a variety of convolutional neural networks to perform image recognition and classification. We were able to successfully train a neural network that identifies the presence of powdery mildew with 100% accuracy and the absence of powdery mildew with 90% accuracy when tested with new images.',
          link: 'https://github.com/hailes1/Plant-Disease-Identifier',
        },
        {
          title: 'Caf Rate',
          description:
            'Made using React and C++, this application allowed students to rate the Caf food at St. Olaf College',
          link: 'https://github.com/hailes1/CafRate',
        },
        {
          title: 'Traveling Salesperson Problem',
          description:
            'Implemented a simulated annealing algorithm to find approximate solutions to the traveling salesperson problem.',
          link: 'https://github.com/hailes1/MCMProjects/blob/main/Traveling_Salesperson_Problem_Dag.ipynb',
        },
      ],
    }
  },
  methods: {
    viewProject(link) {
      window.open(link, '_blank')
    },
  },
}
</script>

<style scoped>
/* General styling for the project section */
.projects {
  padding: 40px 20px;
  background-color: #121212; /* Dark background */
  color: #ffffff;
  font-family: 'Arial', sans-serif;
}

h2 {
  font-size: 4em;
  text-align: center;
  margin-bottom: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #f5f5f5;
  display: inline-block;
  padding-bottom: 10px;
}
.case-study {
  color: #90ee90;
}
/* Styling the list of projects */
.project-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.project-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: #1e1e1e;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 20px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

/* Add a line before each project */
.project-item::before {
  content: '';
  position: absolute;
  top: -20px; /* Position the line above the project */
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #90ee90; /* Subtle divider color */
}

/* Remove the line from the first project */
.project-item:first-child::before {
  display: none;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

/* Left-hand side: Title */
.project-title {
  flex: 1.3; /* Take up equal space */
  text-align: left; /* Align text to the left */
}

.project-title h3 {
  font-size: 3em;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  color: #ffffff;
}

/* Right-hand side: Description */
.project-description {
  flex: 1.8; /* Slightly more space for the description */
  text-align: right; /* Align text to the right */
  color: #cccccc;
}

.project-description p {
  font-size: 1em;
  line-height: 1.6;
  margin: 0 0 15px 0; /* Add spacing below the paragraph */
}

button {
  background-color: transparent;
  color: #90ee90;
  border: 2px solid #90ee90;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition:
    background-color 0.3s,
    color 0.3s;
}

button:hover {
  background-color: #90ee90;
  color: #ffffff;
}
</style>
