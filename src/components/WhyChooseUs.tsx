"use client";
import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
    description:
      'Embark on a musical journey that is uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
  },
  {
    title: 'Learn from Industry Experts and Passionate Mentors',
    description:
      'Gain valuable insights from experienced musicians and dedicated instructors who are committed to your success. Through hands-on lessons and expert guidance, you will develop the skills and confidence needed to excel in your musical pursuits.',
  },
  {
    title: 'Unlock Your Creativity Through Interactive Music Lessons',
    description:
      'Experience engaging lessons designed to inspire creativity and self-expression. Whether you are a beginner or an advanced musician, our innovative teaching methods help you explore new ideas and reach your full artistic potential.',
  },
  {
    title: 'Build Confidence with Performance and Collaboration Opportunities',
    description:
      'Step onto the stage and showcase your talent in a supportive environment. Collaborate with fellow musicians, participate in live performances, and gain real-world experience that strengthens your confidence and musical abilities.',
  },
  {
    title: 'Master Modern Music Skills with Comprehensive Training',
    description:
      'From music theory and ear training to composition and performance, our well-rounded curriculum covers every aspect of musical development. Learn the essential techniques needed to thrive in today’s dynamic music landscape.',
  },
  {
    title: 'Join a Vibrant Community of Music Enthusiasts',
    description:
      'Become part of a welcoming community where students share their passion for music and support one another’s growth. Build lasting connections, exchange ideas, and find inspiration through collaborative learning experiences.',
  },
];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs