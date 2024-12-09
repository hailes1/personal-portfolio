<template>
  <section id="about" class="about">
    <!-- Main Content Section -->
    <div class="about-content">
      <!-- Image Section -->
      <div class="about-image">
        <img src="../images/profile.png" alt="Profile Image" style="width: 300px; height: auto" />
      </div>

      <!-- Text Section -->
      <div class="about-text">
        <h2>Design + Engineering + Me</h2>
        <p>
          Throughout my life, I have been compelled by the desire to understand what fundamentally
          drives complex systems and leverage them to address real-world challenges. Growing up in
          Ethiopia, Mathematics played a pivotal role in shaping my perspective. During college, my
          introduction to Computer Science ignited a profound passion for problem-solving. This idea
          was further reinforced by my research in Prof. Garrett’s lab on combinatorial
          interpretation of Fibonacci identities. I was able to see the power in translating
          mathematical abstractions into computational solutions, revealing the symbiotic
          relationship between these disciplines. This passion has led me to my current role at
          Morningstar which involves building machine learning models and tools for investors.
        </p>
        <p>
          As a design scientist, I aim to rummage in my box of tricks to create seamless experiences
          for all humans by using technology to live harmoniously. Most importantly, I actively
          place the "us" in front of the user and ensure the structure of design doesn't forget its
          purpose and values a distinct practice for the good of humanity.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Arrow from '../components/Arrow.vue'
import Navigation from './Navigation.vue'

export default {
  name: 'About',
  components: {
    Arrow,
    Navigation,
  },
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  background-color: #121212; /* Dark background */
  color: #ffffff;
  font-family: 'Arial', sans-serif;
}
h2 {
  font-size: 1em;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #90ee90;
  display: inline-block;
}
.about-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px; /* Set max width for content */
}
</style>
