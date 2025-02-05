import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function ColorsTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          🌍 2024 - The Future of Connectivity Today, our contact book app is
          trusted by thousands of users worldwide. We continue innovating,
          integrating AI-powered networking tools, and shaping the future of
          digital communication.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          🔐 2023 - Security & Performance Enhancements We implemented
          end-to-end encryption, multi-device synchronization, and performance
          optimizations to ensure a seamless and secure user experience.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          🔄 2022 - Major Updates & Business Expansion Based on user feedback,
          we enhanced our app with advanced search, contact sharing, and
          AI-powered suggestions. Our team grew, and we expanded to
          international markets.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          📱 2021 - First Launch & User Feedback The initial version of our app
          was released, receiving valuable feedback from early adopters. We
          introduced key features like smart contact categorization and one-tap
          dialing.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          💡 2020 - Development Begins We started building the first prototype,
          focusing on an intuitive UI, secure cloud storage, and fast
          synchronization across devices.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          🚀 2019 - The Idea Was Born A small team of passionate developers
          envisioned a seamless, user-friendly contact book app that would
          simplify how people manage their connections.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
