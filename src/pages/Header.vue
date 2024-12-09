<template>
  <header id="home" class="bg">
    <Navigation />
    <!-- Introduction Section -->
    <section :style="{ backgroundColor: 'black' }">
      <p>{{ main.intro }}</p>
      <p>{{ main.education }}</p>
      <!-- Skills Section -->
      <div class="skills-category">
        <h3 :style="{ margin: '10px 0' }">Design</h3>
        <li>Figma</li>
        <li>Illustrator</li>

        <h3 :style="{ margin: '10px 0' }">Development</h3>
        <li>Python</li>
        <li>Java</li>
        <li>R</li>
        <li>HTML / CSS</li>
        <li>JavaScript</li>
        <li>C++</li>
        <li>C</li>
      </div>
    </section>
    <!-- Banner Component -->
    <Banner />
    
  </header>
</template>

<script>
import Banner from '../components/Banner.vue'
import data from '../data/data.json'
import Navigation from './Navigation.vue'
export default {
  name: 'HeaderIntro',
  components: {
    Banner,
    Navigation,
  },
  data() {
    return {
      main: data.main,
      currentTime: '', // Holds the formatted time
      isMenuOpen: false, // State for toggling the menu
    }
  },
  methods: {
    updateTime() {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes()
      const amPm = hours >= 12 ? 'PM' : 'AM'
      // Format time as HH:MM AM/PM
      this.currentTime = `${(hours % 12 || 12)
        .toString()
        .padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${amPm}`
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen // Toggle the menu open/close state
    },
  },
  mounted() {
    // Set initial time and update every minute
    this.updateTime()
    setInterval(this.updateTime, 60000) // Update every 60 seconds
  },
}
</script>

<style lang="scss">
header {
  position: relative;
  height: 100vh;
  background-size: cover;
  background-color: #f1f1f1; // Add the path to your background image here

  // Additional styling for background image
  background-position: center; // Center the background image
  background-repeat: no-repeat;
  nav {
    display: flex;
    background-color: black;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;

    a {
      text-decoration: none;
      font-family: 'Arial', sans-serif;
      font-size: 1.5rem;
      font-weight: bold;
      color: #fff;
      transition: color 0.3s ease;

      &:hover {
        color: #90ee90; // Highlight color for hover state
      }
    }

    button {
      background-color: transparent;
      border: 2px solid #fff;
      color: #fff;
      padding: 0.5rem 1.5rem;
      font-size: 1rem;
      font-family: 'Arial', sans-serif;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #90ee90;
        border-color: #90ee90;
        color: #fff;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 5px #ed2024;
      }
    }

    #navbar-nav {
      display: flex;
      list-style: none;
      gap: 1.5rem;
      align-items: left;
      li {
        a {
          font-family: 'Arial', sans-serif;
          font-size: 1rem;
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;

          &:hover {
            color: #90ee90;
          }
        }
      }
    }
  }
}
.time-section {
  position: absolute;
  top: 10px; /* Adjust to your preference */
  right: 10px; /* Align to the right side of the page */
  color: #90ee90;
  font-size: 1.5rem;
  padding: 10px;
  font-family: Arial, sans-serif;
  text-align: right; /* Ensures text aligns cleanly */
}
.skills-category {
  text-align: left;
  padding-top: 2rem;
  padding-left: 2rem;
}
</style>
