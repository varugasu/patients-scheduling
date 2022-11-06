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

- **Register new Patient**
- **Schedule sessions**
- **Display next sessions**

All Use Cases can only be executed after the Health Professional has authenticated with an email and password

_Note: this project is a proof-of-concept. The use cases described here are not meant to represent real-life cases but for practicing software design in a fictional context_

### Register new Patient

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

After authenticating, the Health Professional must see the following page:

![alt text](docs/main-page.png 'Main Page')

This screen covers the **Display next sessions** use case

### Register new Patient

![alt text](docs/new-patient.png 'New Patient')

### Schedule sessions

![alt text](docs/schedule-session.png 'Schedule Session')

## Technical Solution

TBD
