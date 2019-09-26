---
title: Home
js: ./assets/js/index-anim.js
---

{% include card.html %}

<div id="quad">
  {%  for post in site.posts limit:4 %}
    <figure>
      <img src="{{post.postimage}}" alt="GnR">
      <figcaption><a href="{{post.url}}">{{post.title}}</a></figcaption>
    </figure>
  {% endfor %}
</div>
