'use client'
import Link from 'next/link'
import { HoverEffect } from "./ui/card-hover-effect";


function UpcomingWebinars() {

    const featuredWebinars = [
  {
    title: 'Mastering Vocal Techniques',
    description:
      'Learn professional breathing, pitch control, and vocal exercises to strengthen your singing abilities.',
    slug: 'mastering-vocal-techniques',
    isFeatured: true,
  },
  {
    title: 'Guitar Essentials for Beginners',
    description:
      'Discover chords, strumming patterns, and practice routines to build a strong guitar foundation.',
    slug: 'guitar-essentials-for-beginners',
    isFeatured: true,
  },
  {
    title: 'Music Production with Modern DAWs',
    description:
      'Explore recording, mixing, and mastering techniques using industry-standard digital audio workstations.',
    slug: 'music-production-with-modern-daws',
    isFeatured: false,
  },
  {
    title: 'Piano Performance and Expression',
    description:
      'Enhance your piano playing with techniques focused on dynamics, interpretation, and stage confidence.',
    slug: 'piano-performance-and-expression',
    isFeatured: true,
  },
  {
    title: 'Writing Songs That Connect',
    description:
      'Learn songwriting fundamentals, lyric writing, melody creation, and storytelling through music.',
    slug: 'writing-songs-that-connect',
    isFeatured: false,
  },
];

  return (
    <div className='p-12 bg-gray-900'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance your Musical Journey</p>
            </div>

            <div className='mt-10'>
                 <HoverEffect items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: '/'
                    }
                 ))} />
            </div>

            <div className='mt-10 text-center'>
                <Link href={"/courses"}
                className="px-8 py-2 rounded-md bg-white text-black font-bold transition duration-200 hover:bg-black hover:text-white border-2 border-transparent hover:border-teal-500"
                >
                    View All Courses
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars