<template>
  <div id="about">
    <div class="intro">
      <p class="hi">Hey, I am</p>
      <p class="name">Shuvam Kumar</p>
      <p class="few-words">
        I'm a 21 years old Passionate Programmer.Desired to work in an IT firm
        with all my interest.I always look for new opportunities and environment
        which will help me in enhancing my skills everyday.
      </p>
    </div>
    <div class="about-me">
        
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#about {
  margin: 0 40px;
}

.intro {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hi {
  font-size: 2vw;
  color: #64ffda;
  font-family: monospace;
}

.name {
  font-size: 5vw;
  font-weight: 800;
  font-family: sans-serif;
  color: #becaeb;
}

.few-words {
  width: 60vw;
  font-size: 20px;
  margin-top: 10px;
  color: #b0bbda;
  font-family: monospace;
  text-align: center;
}

@media screen and (max-width: 767px) {
  #about {
    margin: 0 20px;
  }
  .intro {
    padding: 0;
  }

  .hi {
    font-size: 20px;
  }

  .name {
    font-size: 30px;
  }

  .few-words {
    width: 100%;
    font-size: 18px;
  }
}
</style>