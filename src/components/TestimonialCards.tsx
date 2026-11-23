import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { div } from 'motion/react-client';
import { cn } from "@/lib/utils";

const musicSchoolTestimonials = [
  {
    quote:
      'The piano program exceeded all my expectations. The lessons were engaging, and my instructor helped me progress faster than I ever imagined. I now play confidently at family events and local gatherings.',
    name: 'Sophia Williams',
    title: 'Piano Student',
  },
  {
    quote:
      'I joined as a complete beginner, and within a few months I was performing songs on the guitar. The supportive environment and personalized guidance made learning both enjoyable and rewarding.',
    name: 'Ethan Carter',
    title: 'Guitar Student',
  },
  {
    quote:
      'The vocal training classes helped me improve my technique, confidence, and stage presence. Every lesson was packed with valuable insights that transformed my singing abilities.',
    name: 'Olivia Martinez',
    title: 'Vocal Student',
  },
  {
    quote:
      'What sets this music school apart is the dedication of the instructors. They genuinely care about each student’s growth and provide practical feedback that leads to real improvement.',
    name: 'Noah Anderson',
    title: 'Music Production Student',
  },
  {
    quote:
      'The collaborative atmosphere inspired me to explore new musical styles and challenge myself creatively. I have gained not only technical skills but also lifelong friendships through this program.',
    name: 'Emma Thompson',
    title: 'Violin Student',
  },
];

function MusicSchoolTestimonial() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden text-lg">
        <h2 className='text-2xl font-bold mb-4'>Hear our Harmony: Voices of Success</h2>
        <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <div>
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
            />
        </div>
    </div>
  )
}

export default MusicSchoolTestimonial;