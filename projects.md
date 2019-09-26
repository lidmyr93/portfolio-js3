---
title: Projects
js: /assets/js/projects.js
---

<div class="projects-container">
  {% include project-svg.html %}
<div class="image-gallery-container">
<ul class="project-ul">
{% for post in site.posts %}
  <li>
  <a href="{{post.url}}">
    <span class="project-span">{{post.title}}</span>
    <img src='{{post.postimage}}' />
  </a>
  </li>
  {% endfor %}
</ul>
</div>
</div>
