import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Gem, Globe2, icons, Landmark, Mountain, Send, Train } from 'lucide-react'
import React from 'react'

const suggestion = [
    {
        title: 'Create New Trip',
        icon: <Globe2 className='text-blue-400 h-5 w-5' />
    },
    {
        title: 'Inspire me where to go',
        icon: <Train className='text-green-600 h-5 w-5' />
    },
    {
        title: 'Discover Hidden Gems',
        icon: <Landmark className='text-blue-400 h-5 w-5' />
    },
    {
        title: 'Adventure Destinations',
        icon: <Mountain className='text-green-600 h-5 w-5' />
    }
]

function Hero() {
  return (
    <div className='mt-24 flex justify-center'>
        {/* content */}
        <div className='max-w-3xl w-full text-center space-y-6'>
            <h1 className='text-xl md:text-5xl font-bold'>Hey, I'm Your Personal <span className='text-primary'>Trip Planner</span></h1>
            <p className='text-lg'>Tell me what you want,  and I'll handle rest: Transport,  Hotel, Trip plan - all in seconds.</p>
        {/* Input Box*/}
        <div>
            <div className='border rounded-2xl p-4 shadow relative'>
                <Textarea placeholder='Create a trip from Colombo to Nuwara Eliya'
                    className = 'w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none'
                />
                <Button size={'icon'} className='absolute bottom-6 right-6'>
                    <Send className='h-4 w-4' />

                </Button>
            </div>
        </div>
        {/* Suggestion List */}
        <div className='flex gap-5 justify-center'>
            {
                suggestion.map((suggestion, index) => (
                    <div key={index} className='flex items-center gap-2 border rounded-full p-2'>
                        {suggestion.icon}
                        <h2 className='text-xs'>{suggestion.title}</h2>
                    </div>
                ))}
        </div>

        {/* Video Section */}
        </div>
    </div>
  )
}

export default Hero