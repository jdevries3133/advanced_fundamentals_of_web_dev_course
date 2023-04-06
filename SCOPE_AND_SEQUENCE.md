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
