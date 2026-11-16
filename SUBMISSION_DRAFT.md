# Hyper Elements Template Challenge — submission draft

**Official discussion form**  
https://github.com/hyper-elements/hyper-elements/discussions/new?category=challenge-submissions

**Title**  
Daylight — Copenhagen, in one unhurried day

**Repository URL**  
[Add the public GitHub repository URL after the project and repository name are approved.]

**Submission text**

Daylight is a remixable city-guide template that turns one itinerary into both a responsive web page and an email. The Copenhagen example pairs a flexible five-stop day plan with an original schematic route illustration and practical reminders to check local details before travelling.

Hyper Elements is used for the actual output, not just as a dependency: one shared `GuideContent` component is rendered under both the `Page` and `Email` roots. The build runs `validate()` and records `outline()` for each output, then generates responsive page HTML, email-safe HTML, and plain-text email.

To try it locally, use Node.js 20 or newer:

```bash
npm install
npm run build
```

Open `dist/daylight-page.html` in a browser. The source, generated preview screenshots, and the email output are included in the repository. No API key or hosted service is needed.

The itinerary is a sample rather than live travel advice; times and the route are illustrative.

**Checklist before submission**

- Replace the repository URL placeholder with the approved public repository URL.
- Confirm the public repository contains the reviewed source and both rendered preview images.
- Star the official Hyper Elements repository from the user's GitHub account, if not already starred.
- Paste the approved title and submission text into the official `challenge-submissions` discussion form.
