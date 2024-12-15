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
          Morningstar which involves building software products.
        </p>
        <p>
          Before joining Morningstar, my passion for research originated from exploring multi-robot systems. 
          Particularly, assessing the impact of physical interference on connectivity in low-cost multi-agent 
          networks. The Rolling Dispersion Algorithm (RDA) my team intended on using, limits the robots’ ranges 
          based on signal intensity. My research was focused on how the physical environment impacts the range 
          of this intensity. Therefore, I modelled, conducted and recorded experiments to measure interference 
          using the B.A.T.M.A.N. interface. This work later helped us conduct the RDA with an increased coverage 
          area. Although I thrived in the research environment,  I wanted to be able to solve problems within the 
          industry.
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
