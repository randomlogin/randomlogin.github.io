---
layout: page
title: Blog
permalink: /blog/
---
## Blog

Occasional findings and notes.

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y %B %-d" }}</time>
    &mdash; <a href="{{ post.url }}">{{ post.title }}</a>
    {% if post.description %}<div class="post-summary">{{ post.description }}</div>{% endif %}
  </li>
{% endfor %}
</ul>
