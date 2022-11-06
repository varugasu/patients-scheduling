# Patients Scheduling

## Context

The main goal of this project is to explore **SvelteKit** and **PocketBase**. I hypothesize that these two are perfect for personal projects.

What is **perfect** for personal projects:

- **Fast** to develop
- Geat **Developer Experience**
- Can **evolve**

## Actors

- **Health Professional**

## Use Cases

- **Register Patient**
- **Schedule sessions**
- **Display next sessions**

_Note: this project is a proof-of-concept. The use cases described here are not meant to represent real-life cases but for practicing software design in a fictional context_

### Register Patient

For every new Patient, the Health Professional must record the Patient's **anamnesis** (Medical History). The Health Professional asks specific questions to understand the Patient's complaints to start the diagnosis and treatment plan.

The anamnesis (in this project) must contain the following information:

- **Patient Name**
- **Birth Date**
- **Date**
- **Personal Medical History**: a checklist of the Patient's personal medical history
  - Heart attack
  - Depression
  - Diabetes
- **complaints**: the notes taken by the Health Professional

### Schedule sessions

- Patients are limited to one session per day
- Only one Patient per session
- Sessions' length can range from 30 minutes to 2 hours

### Display the next sessions

- Health Professionals must easily see all sessions of a single day
- Health Professionals must be able to see sessions in a calendar

## User Experience

TBD

## Technical Solution

TBD
