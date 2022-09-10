# Vue 3: Step by Step

Laracasts tutorial: https://laracasts.com/series/learn-vue-3-step-by-step
Server run: npx serve
Resources server run: npx json-server db.json -p 3001

## Linear Diagram Vue
![Previewing selected aritcle](https://github.com/martinezart87/vue-step-by-step/blob/master/img/Livecycle-Diagram.png)

## Section 1 Getting Started
### Episode 1 Vue 3 Absolute Basics

Let's start...at the beginning! We'll pull in Vue 3 through a CDN, and then review the absolute basics of the framework, including Vue initialization, text interpolation, and reactivity.

Things You'll Learn
- Vue.createApp()
- Text Interpolation
- Reactivity

### Episode 2 Attribute Binding and Event Handling

You'll often want to bind the value of an HTML attribute to an expression. We can allow for this by using the v-bind directive. As part of this lesson, we'll also get a first taste of event handling in Vue.

Things You'll Learn
- v-bind
- v-on

### Episode 3 Lists, Conditionals, and Computed Properties

Let's dig into a few more important concepts in this episode. Using the example of an assignment list, we'll learn how to loop over arrays, conditionally display HTML, and prepare computed properties.

Things You'll Learn
- Computed Properties
- Conditionals
- Loops

## Section 2 Vue Components
### Episode 4 Your First Custom Vue Component

We've now learned the absolute basics of Vue; however, this still looks nothing like real-life Vue applications. Let's begin digging into custom Vue components.

Things You'll Learn
- Component Basics

### Episode 5 One Vue Component Per File

We can technically inline child Vue components, but you'll rarely do so. Instead, a much cleaner approach is to store each Vue component within its own file. Let's take care of that in this episode.

Things You'll Learn
- EcmaScript Imports

### Episode 6 Component Props

If we want our Vue components to be as flexible as possible, we should figure out a way to pass in data from the outside. This way, each "instance" of a component can be configurable. Props allow for this!

Things You'll Learn
- Props
- Class Object Binding

### Episode 7 Bring it All Together

Let's now return to the simple assignment lists that we worked on in episode three. But this time, we'll approach it with fresh eyes and a new understanding of how Vue components work.

Things You'll Learn
- Component Trees
- Refactoring Steps

## Section 3 Event Handling 
### Episode 8 Handle a Form Submission

In this episode, we'll combine forms and events to allow a user to create new assignments on the fly.

Things You'll Learn
- Form Handling

### Episode 9 Parent-Child State Communication

Now, let's throw a wrench into the mix. If we extract a new Vue component, we'll then need to figure out how our components should communicate state changes.

Things You'll Learn
- Props
- Emitting Events

## Section 4 Beyond the Basics
### Episode 10 It's All So Easy

Once you understand the basics of Vue, you'll quickly find that things, which were incredibly time consuming years ago, can now be accomplished in seconds. Let's review a couple examples in this video.

Things You'll Learn
- Assignment Tagging
- Sets

### Episode 11 Component Responsibility

In this episode, we'll discuss component responsibility as we refactor to an AssignmentsTags component. I think of component responsibility in the same way that I think of server-side class responsibility. "Does this bit of logic belong here?"

Things You'll Learn
- Component Refactoring
- Component Responsibility

### Episode 12 A Deeper Look at V-Model

We reviewed the basics of the v-model directive at the beginning of the series, but I think it's time that we take a deeper look. What exactly happens when we apply v-model to an input? And can we also use it on custom Vue components?

Things You'll Learn
- v-model

### Episode 13 Lifecycle Hooks, Fake APIs, and AJAX

So far, we've been hard-coding the list of assignments directly within our Vue component. But of course, that's not overly realistic. Let's switch over to using the fetch() JavaScript API to request data from a fake API.

Things You'll Learn
- Component hooks
- json-server
- Promises

Other
- create db.json
- npm install json-server --save-dev
- npx json-server db.json -p 3001

### Episode 14 More Flexible Components With Slots and Flags

There are many ways to allow for more flexible and configurable components. Let's begin with two simple and obvious techniques: slots and flags.

Things You'll Learn
- Component Slots
- Feature Flags

### Episode 15 Named Slots

So far, we've been working with components that only required a single, default slot. But, of course in real life, you'll encounter situations where you need to insert content in multiple areas. In these cases, we can used named slots.

Things You'll Learn
- Named Slots
- $slots

## Section 5 Vite
