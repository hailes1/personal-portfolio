<template>
  <nav>
    <!-- Navigation Links -->
    <div :class="['nav-links', { open: isMenuOpen }]">
      <ul id="navbar-nav">
        <div class="time-section">
          <p>{{ currentTime }}</p>
        </div>
        <li>
          <a href="#home">Home</a>
        </li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li @click="downloadCV"><a href="#CV">CV</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import downloadLocalPDF from '../utils/generate_CV.js'

export default {
  name: 'Navigation',
  data() {
    return {
      currentTime: '',
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
    downloadCV() {
      // Call the downloadLocalPDF function
      downloadLocalPDF('src/data/Resume - 11:12:24.pdf', 'report.pdf')
    },
  },
  mounted() {
    // Set initial time and update every minute
    this.updateTime()
    setInterval(this.updateTime, 60000) // Update every 60 seconds
  },
}
</script>

<style></style>
