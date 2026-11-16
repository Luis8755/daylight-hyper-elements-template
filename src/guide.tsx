import {
  Button,
  Column,
  defineTheme,
  Email,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Page,
  Row,
  Section,
  Span,
  Text,
} from "@hyper-elements/react";
import type { ReactNode } from "react";

const C = {
  ink: "#163a35",
  inkDeep: "#102d29",
  paper: "#f7f6ef",
  white: "#fffef9",
  muted: "#65766f",
  line: "#dce4da",
  lime: "#d9ed8b",
  mint: "#e7efe4",
  coral: "#d86d4d",
};

const brand = defineTheme({
  colors: {
    background: C.paper,
    foreground: C.ink,
    primary: C.lime,
    primaryForeground: C.ink,
    muted: C.muted,
    border: C.line,
  },
  fonts: {
    body: "Arial, Helvetica, sans-serif",
    heading: "Georgia, 'Times New Roman', serif",
  },
  components: {
    Heading: {
      by: {
        level: {
          1: { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700 },
          2: { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700 },
          3: { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700 },
        },
      },
    },
  },
});

const stops = [
  {
    number: "01",
    time: "09:00",
    kind: "COFFEE + WANDER",
    place: "Ease into Nørrebro",
    detail: "Find a good coffee, then let the side streets set the pace. Keep the first hour loose; the best start is the one that does not feel scheduled.",
  },
  {
    number: "02",
    time: "11:30",
    kind: "GREEN PAUSE",
    place: "Take the scenic way in",
    detail: "Head toward the inner city with time for a park or a quiet bench. This is the built-in breather before the afternoon gets busier.",
  },
  {
    number: "03",
    time: "13:00",
    kind: "LUNCH",
    place: "Refuel at Torvehallerne",
    detail: "A market-hall lunch makes it easy for everyone to choose their own thing. Leave room for a slow browse, not just a quick stop.",
  },
  {
    number: "04",
    time: "15:30",
    kind: "HARBOR HOUR",
    place: "Follow the water at Nyhavn",
    detail: "Trade the checklist for a waterside stroll. Pause for a view, a photo, or simply a few minutes with nowhere else to be.",
  },
  {
    number: "05",
    time: "18:30",
    kind: "DINNER",
    place: "Wind down in Christianshavn",
    detail: "Finish across the canal with an unhurried dinner. If you have a place in mind, check hours and reserve ahead when needed.",
  },
];

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <Text
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: 1.8,
        color: light ? C.lime : C.muted,
      }}
    >
      {children}
    </Text>
  );
}

function StopCard({ stop, compact }: { stop: (typeof stops)[number]; compact: boolean }) {
  return (
    <Row style={{ gap: compact ? 12 : 18, alignItems: "start" }}>
      <Column
        style={{
          width: compact ? 58 : 70,
          backgroundColor: C.mint,
          borderRadius: 14,
          padding: compact ? 10 : 13,
          gap: 4,
          alignItems: "center",
        }}
      >
        <Text style={{ color: C.coral, fontSize: 12, fontWeight: 700 }}>{stop.number}</Text>
        <Text style={{ color: C.ink, fontSize: 13, fontWeight: 700 }}>{stop.time}</Text>
      </Column>
      <Column
        style={{
          flex: 1,
          backgroundColor: C.white,
          border: `1px solid ${C.line}`,
          borderRadius: 16,
          padding: compact ? 16 : 20,
          gap: 8,
        }}
      >
        <Eyebrow>{stop.kind}</Eyebrow>
        <Heading level={3} style={{ color: C.ink, fontSize: compact ? 20 : 23, lineHeight: 1.15 }}>
          {stop.place}
        </Heading>
        <Text style={{ color: C.muted, fontSize: 14, lineHeight: 1.55 }}>{stop.detail}</Text>
      </Column>
    </Row>
  );
}

function GuideContent({ mapSrc, compact }: { mapSrc: string; compact: boolean }) {
  return (
    <>
      <Section style={{ backgroundColor: C.ink, color: C.white, padding: compact ? 24 : 40, gap: 26 }}>
        <Column style={{ gap: 8 }}>
          <Text style={{ color: C.white, fontSize: 14, fontWeight: 700, letterSpacing: 1.5 }}>DAYLIGHT</Text>
          <Text style={{ color: "#bed0c3", fontSize: 11, letterSpacing: 1.3 }}>FIELD NOTES · NO. 01</Text>
        </Column>
        <Row stackOnMobile style={{ gap: compact ? 18 : 34, alignItems: "center" }}>
          <Column style={{ flex: 1, gap: 18 }}>
            <Eyebrow light>ONE UNHURRIED DAY · COPENHAGEN</Eyebrow>
            <Heading
              level={1}
              style={{
                color: C.white,
                fontSize: compact ? 42 : 58,
                mobile: { fontSize: compact ? 36 : 46 },
                lineHeight: 1.04,
              }}
            >
              Let the city set the pace.
            </Heading>
            <Text style={{ color: "#d7e1d8", fontSize: 16, lineHeight: 1.55 }}>
              A five-stop Copenhagen day, built around good pauses, easy choices, and room to wander.
            </Text>
            <Button
              href="#itinerary"
              style={{
                backgroundColor: C.lime,
                color: C.inkDeep,
                borderRadius: 999,
                padding: [12, 18],
                fontSize: 13,
                fontWeight: 700,
                alignSelf: "start",
              }}
            >
              Follow the day ↓
            </Button>
          </Column>
          <Column style={{ flex: 1, gap: 9, alignItems: "center" }}>
            <Image
              src={{ src: mapSrc, width: 840, height: 520 }}
              alt="Original schematic route illustration showing five stops and a winding path across Copenhagen."
              style={{ width: compact ? 270 : 420, maxWidth: "100%", borderRadius: 18 }}
            />
            <Text style={{ color: "#bed0c3", fontSize: 11, textAlign: "center" }}>
              A schematic, not-to-scale route
            </Text>
          </Column>
        </Row>
      </Section>

      <Section style={{ backgroundColor: C.paper, color: C.ink, padding: compact ? 24 : 40, gap: 22 }}>
        <Column style={{ gap: 8 }}>
          <Eyebrow>THE GOOD, SLOW VERSION</Eyebrow>
          <Heading id="itinerary" level={2} style={{ color: C.ink, fontSize: compact ? 30 : 38, lineHeight: 1.12 }}>
            Five stops. Plenty of breathing room.
          </Heading>
          <Text style={{ color: C.muted, fontSize: 15, lineHeight: 1.5 }}>
            Use the times as a gentle rhythm, not a deadline. Skip a stop if a good moment asks you to stay longer.
          </Text>
        </Column>
        <Column style={{ gap: 12 }}>
          {stops.map((stop) => (
            <StopCard key={stop.number} stop={stop} compact={compact} />
          ))}
        </Column>
      </Section>

      <Section style={{ backgroundColor: C.mint, color: C.ink, padding: compact ? 24 : 40, gap: 18 }}>
        <Row stackOnMobile style={{ gap: 24, alignItems: "start" }}>
          <Column style={{ flex: 1, gap: 9 }}>
            <Eyebrow>MAKE IT YOURS</Eyebrow>
            <Heading level={2} style={{ color: C.ink, fontSize: compact ? 25 : 30, lineHeight: 1.15 }}>
              Keep the plan light.
            </Heading>
            <Text style={{ color: C.muted, fontSize: 14, lineHeight: 1.5 }}>
              The point is a day that feels like yours. Choose three stops, add a favorite, and leave a little blank space.
            </Text>
          </Column>
          <Column style={{ flex: 1, gap: 8 }}>
            <List type="bullet" style={{ color: C.ink, fontSize: 14, lineHeight: 1.5, gap: 6, indent: 18 }}>
              <ListItem>Check current opening hours before you go.</ListItem>
              <ListItem>Leave extra time for transit and weather.</ListItem>
              <ListItem>Book dinner ahead if your group needs a table.</ListItem>
            </List>
          </Column>
        </Row>
        <Text style={{ color: C.muted, fontSize: 11, lineHeight: 1.45 }}>
          Sample itinerary only. Times and the route illustration are indicative; confirm local details before travelling.
        </Text>
      </Section>

      <Section style={{ backgroundColor: C.inkDeep, color: C.white, padding: compact ? 22 : 32, gap: 12, alignItems: "center" }}>
        <Text style={{ color: C.lime, fontSize: 12, fontWeight: 700, letterSpacing: 1.5 }}>DAYLIGHT</Text>
        <Text style={{ color: "#d7e1d8", fontSize: 12, textAlign: "center", lineHeight: 1.45 }}>
          A small, reusable template for a better kind of day out.
        </Text>
        <Text style={{ color: "#d7e1d8", fontSize: 11, textAlign: "center" }}>
          Built with <Span style={{ color: C.lime, fontWeight: 700 }}>Hyper Elements</Span> · one source, web + email
        </Text>
        <Link href="#itinerary" style={{ color: C.lime, fontSize: 12, fontWeight: 700, textDecoration: "underline" }}>
          Back to the itinerary ↑
        </Link>
      </Section>
    </>
  );
}

export function pageGuide(mapSrc: string) {
  return (
    <Page
      theme={brand}
      width={1040}
      title="Daylight — Copenhagen in one unhurried day"
      description="A five-stop, slow-paced sample itinerary for Copenhagen, rendered with Hyper Elements."
      lang="en"
      style={{ backgroundColor: C.paper, color: C.ink, gap: 0 }}
    >
      <GuideContent mapSrc={mapSrc} compact={false} />
    </Page>
  );
}

export function emailGuide(mapSrc: string) {
  return (
    <Email
      theme={brand}
      width={640}
      title="Daylight — Copenhagen in one unhurried day"
      previewText="Five gentle stops for a Copenhagen day, with plenty of room to wander."
      lang="en"
      style={{ backgroundColor: C.paper, color: C.ink, gap: 0 }}
    >
      <GuideContent mapSrc={mapSrc} compact />
    </Email>
  );
}
