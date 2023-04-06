# First Course

This is the first course that will go onto the platform.

# Overview

Title: Advanced Fundamentals of Web Development
Duration: 18 weeks

This course leads students through a pragmatic deep dive into the fundamental
building blocks of the web. We forgo frameworks and abstractions so that we can
get deep into the heart of what makes the web tick. We start with low-level
labs that will stretch understanding of what the HTTP protocol is, and what it
can do.

This highly interactive course is built to develop first-principles thinking on
web technologies, By developing a strong understanding of the foundation upon
which we build web applications, you will gain an intuitive understanding of
how high-level and abstract technologies like React, GraphQL, tRPC, and Next.js
work. More importantly, you will understand why we reach for these high-level
niceties, having had the experience of working without these tools. Not only
that, while the JavaScript framework de jour changes every few years, the
knowledge you glean from this course will be evergreen.

By the end of the course, you will be able to build a beautiful, complex,
interactive full-stack web application using nothing but vanilla client-side
JavaScript, Express, and a SQL database. You will build this application
creatively from scratch! There will be none of the typical tutorial
anti-patterns of "just copy this 1000 line blob of goo and go build this other
part over there"

# Technologies Taught

- HTTP protocol
- JavaScript
- Express
- HTML & CSS
- SQL
- JSON & fetch

# Concepts Taught

- creating server-rendered dynamic web applications
- creating client-side-javascript-driven web applications
- data modeling in an RDBMS
- RESTful JSON API design patterns

# Prerequisites

- Basic javascript (or similar) competency
  - variables
  - boolean expressions
  - conditional control flow (`if` / `if else` / `else`, `switch` statements)
  - functions
  - promises & `async` / `await`
- Knowledge of HTML and CSS
  - this is a bit of a soft requirement, if you don't have it, the course won't
    cover it, and your websites will look quite ugly. The course will focus on
    the logical behavior of the web pages more than the appearance, so you'll
    have to bring this knowledge with you if you want your work to look
    visually appealing
  - that being said, you won't be 100% hung out to dry here, but definitely
    expect some ugly duckling websites if you have zero prior knowledge, and
    that's OK! If it works, it works :)

# Scope

- The HTTP protocol
  - content-types
  - request and response headers
  - response codes
  - request types (`GET`, `PUT`, `PATCH`)
- Patterns for serving html over http
  - routing, linking, and URL parameters
  - forms and persisting state in the DOM
- server-side data persistence
  - SQL
  - block storage (disk & AWS S3)
- user input sanitization
  - for SQL
  - for HTML
- limitations of server-generated HTML, and how to overcome them
  - full-page reload
  - latency
  - poor complexity scaling for rich app-like UIs
- client-side JavaScript
  - DOM manipulation
  - fetch API
- JSON
  - creating a plain-text weather API with regex data parsing
  - rewriting the same with JSON to truly understand what the hype is all about
- RESTful API design, building complex and scalable apps

We'll use a spiral curricula with interactive lab-based learning, so the
sequence won't be that, exactly.

# Sequence

## Week 1

Students do the [exploration
project](https://github.com/Code-the-Dream-School/node-express-course/pull/56)
that I made yesterday.

## Week 2

Follow-up explore project w/ `<form>`

This will basically be my
[`node_data_mvp`](https://github.com/jdevries3133/node_data_mvp) repo on github

## Week 3

Revisit week 1 to fully delve into the XSS magic, discuss user input
sanitization.

Naturally, this also leads to a review of client-side javascript, exploring how
we can create a dialog between server & client. Overall, we should still be in
the review zone a bit.

## Week 4-6

Spiral curriculum of SQL, HTML-driven pages, and heavily scaffolded consumption
of REST APIs.

Introduce naive trust-based authorization without authentication, so we can
have users & "owned" data via cookies, but anyone can pretend to be anyone
else. We'll add authentication later.

### Lab 1

- SQL w/ a pre-populated database
- Server-generated HTML

### Lab 2

- Cookies to identify the current user
- Forms
- Saving user input via SQL

## Week 7-9

Mid-course project

## Week 10

Block storage with multer; disk-based and in S3. We will learn the strategy of
saving the file in block storage using a content hash, then storing that hash
in the database with metadata (filename, file type, owner, etc.)

## Week 11

Authentication:

- users in the DB
- hashed passwords
- HMAC secure session tokens

## Week 12-16

Repeat wk 4-6 spiral, add content from the last 2 weeks.

Labs will use more single-page application SPA patterns where appropriate to be
extra interactive.

### Lab 1

Creating a plain-text API, then converting it to RESTful JSON API

### Lab 2

Create a website with images and videos.

### Lab 3

Create and document an API

### Lab 4

Build something using a classmate's API

## Week 16-18

Final projects
