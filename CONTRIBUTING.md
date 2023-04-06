This is a big job, and I need help! Thank you for your interest, and there's
lots to do for anyone who is excited about the idea for this course!

All we have so far is a rough outline, but there are also 2 moderately baked
assignments in different repositories (cited in the scope & sequence). There
are two ways you can contribute:

- Develop curriculum content
- Develop the web application

# Scope & Sequence Feedback

At this time, the scope and sequence are subject to change, because the
authoring of curriculum content is not happening. What do you think? Open an
issue and/or open a PR if you'd like to contribute to the scope and sequence.

# Curriculum Content

This is what we need the most first. Look at the scope and sequence, and take
ownership over producing content for a week. Slack me (for Code the Dream
folks) or email me at jdevries3133@gmail.com to discuss before you embark on a
week. On approval, I'll create an
[issue](https://github.com/jdevries3133/advanced_fundamentals_of_web_dev_course/issues)
to track the work on that week's content and add a note to the scope & sequence
that it's being worked on.

Course content for each week will be accepted if it meets the following
criteria:

- MUST hit all categories of [Bloom's Taxonomy of
  Learning](https://fctl.ucf.edu/teaching-resources/course-design/blooms-taxonomy/)
  proportionally
  - lots of practice
  - a nice chunk of creativity
  - everything in-between
- MUST end with the submission of a creative project
- MUST include a markdown document to become the main "course page"
  - MAY be a HTML file instead if you want to get fancier
  - MAY be a mix of HTML and markdown if you want to implement the templating
    language :)
- MAY include custom video content
- MAY reference outside content, including YouTube videos or blogs
  - outside content MUST be free
  - outside content SHOULD be likely to still exist in 3 years

# Web Application

My idea is for this thing to be "turtles all the way down." In other words,
this repository will have a website written with the same methods taught in the
course. The tech stack will be PostgreSQL, Express, knex, some HTML
sanitization library, and nothing else.

I have a Kubernetes cluster where I can host the site, although all the
container / K8s mumbo jumbo should be kept out of the course repo. When the
time comes, I'll probably create a separate IaC repo that'll consume this one
as a submodule and deploy the site so that this remains focused on the course
content, consumable by students, and something that students can even
contribute back to after finishing the course.

I am creating this with Code the Dream in mind, but packaging the course into a
website offers the opportunity to have a wider reach, and it can also be a good
way for CTD students to become involved in open source.

## Other Stuff

Commits should follow [Conventional
Commits](https://www.conventionalcommits.org/en/v1.0.0/). Commits that contain
curriculum content should use the prefix `cur:` (for curricula).

Please follow the [contributor covenant](https://www.contributor-covenant.org/)
code of conduct. Report violations to jdevries3133@gmail.com.
