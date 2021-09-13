<template>
  <div class="footer" v-show="true">
    <div></div>
    <div class="external-links">
      <div class="individual-link" v-for="link in listOfLinks" :key="link.name">
        <a :href="link.to">
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
import IconBase from "../icons/IconBase.vue";
import IconCodeChef from "../icons/IconCodeChef.vue";
import IconFaceBook from "../icons/IconFaceBook.vue";
import IconGithub from "../icons/IconGithub.vue";
import IconGmail from "../icons/IconGmail.vue";
import IconInstagram from "../icons/IconInstagram.vue";
import IconLinkedin from "../icons/IconLinkedin.vue";
import IconTwitter from "../icons/IconTwitter.vue";

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
          to: "https://github.com/Shuvam19",
        },
        {
          name: "Github",
          to: "https://github.com/Shuvam19",
        },
        {
          name: "FaceBook",
          to: "https://github.com/Shuvam19",
        },
        {
          name: "Gmail",
          to: "https://github.com/Shuvam19",
        },
        {
          name: "Instagram",
          to: "https://github.com/Shuvam19",
        },
        {
          name: "Linkedin",
          to: "https://github.com/Shuvam19",
        },
        {
          name: "Twitter",
          to: "https://github.com/Shuvam19",
        },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.external-links {
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.individual-link {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>