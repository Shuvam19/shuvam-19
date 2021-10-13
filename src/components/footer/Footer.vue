<template>
  <div id="footer">
    <p class="get-in-touch">Get In Touch</p>
    <div class="external-links">
      <div class="individual-link" v-for="link in listOfLinks" :key="link.name">
        <a :href="link.to" target="_blank">
          <icon-base
            :color="color"
            :hoverColor="hoverColor"
            :width="24"
            :height="24"
          >
            <component :is="'Icon' + link.name" />
          </icon-base>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "../../assets/icons/IconBase.vue";
import IconCodeChef from "../../assets/icons/IconCodeChef.vue";
import IconFaceBook from "../../assets/icons/IconFaceBook.vue";
import IconGithub from "../../assets/icons/IconGithub.vue";
import IconGmail from "../../assets/icons/IconGmail.vue";
import IconInstagram from "../../assets/icons/IconInstagram.vue";
import IconLinkedin from "../../assets/icons/IconLinkedin.vue";
import IconTwitter from "../../assets/icons/IconTwitter.vue";

export default {
  name: "Footer",
  components: {
    IconBase,
    IconCodeChef,
    IconFaceBook,
    IconGithub,
    IconGmail,
    IconInstagram,
    IconLinkedin,
    IconTwitter,
  },
  data() {
    return {
      color: "#b0bbda",
      hoverColor: "#64ffda",
      listOfLinks: [
        {
          name: "CodeChef",
          to: "https://www.codechef.com/users/shuvam19",
        },
        {
          name: "Github",
          to: "https://github.com/Shuvam19",
        },
        {
          name: "Gmail",
          to: "mailto:shuvam1982000@gmail.com",
        },
        {
          name: "Instagram",
          to: "https://www.instagram.com/shuvam198/",
        },
        {
          name: "Linkedin",
          to: "https://www.linkedin.com/in/shuvam19/",
        },
        {
          name: "Twitter",
          to: "https://twitter.com/shuvam_19",
        },
      ],
    };
  },
};
</script>

<style scoped>
#footer {
  padding: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.get-in-touch {
  margin: 0px;
  font-size: 4vw;
  font-weight: 700;
  font-family: sans-serif;
  color: #b0bbda;
}

.external-links {
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.individual-link {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 767px) {
  .get-in-touch {
    font-size: 50px;
  }
}
</style>