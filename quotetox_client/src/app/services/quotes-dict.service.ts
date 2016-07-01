// Angular 2 objects

import {Injectable} from '@angular/core';

@Injectable()

export class QuoteDictService {
  public quotes: any;
  constructor() {
    this.quotes = [
      {
        quote: "Discipline will drive your success in the most difficult circumstances.",
        author: ''
      },
      {
        quote: "Zero optionality forces you to explore every option.",
        author: ''
      },
      {
        quote: "See the opportunity. Seize the opportunity",
        author: ''
      },
      {
        quote: "Every day you don't quit is one day closer to your destiny.",
        author: ''
      },
      {
        quote: "Be you-nique!",
        author: ''
      },
      {
        quote: "Zero Optionality is a great state to start in to eventually have access to optionality.",
        author: ''
      },
      {
        quote: "It's one thing to seize the opportunity, but beyond that is the ability to see an opportunity to create the the opportunity.",
        author: ''
      },
      {
        quote: "Be a legend. Leave a legacy.",
        author: ''
      },
      {
        quote: "There's a saying in basketball, live by the 3, die by the 3. The difference between basketball and business, however, is basketball has truncated outcome distribution. No matter how great of a shooter you are or how far you shoot from the best you can do is a 4 point play. In business you can occasionally take a shot and score 1,000,000 points. This is called long tail distribution. And this is why it's important to be bold, take big risk and shot your shot. The way to win is to score a lot, the way to score a lot is to shoot more.",
        author: ''
      },
      {
        quote: "Focus on less to see more.",
        author: ''
      },
      {
        quote: "The thing I learned is that I need to keep learning",
        author: ''
      },
      {
        quote: "Your Start + Your struggle + Your Success = Your Story.",
        author: ''
      },
      {
        quote: "You're on to something when your conviction outranks your circumstances.",
        author: ''
      },
      {
        quote: "Stop down playing the greatness within you. Success favors the bold.",
        author: ''
      },
      {
        quote: "Use differences to create value.",
        author: ''
      },
      {
        quote: "I CREATE. I TAKE RISK. I LIVE MY PASSION. I AM AN ENTREPRENEUR",
        author: ''
      },
      {
        quote: "You can't spell learn without earn.",
        author: ''
      },
      {
        quote: "Basic, boring, regular things are waiting on someone to have incredible ideas about turning them into amazing opportunities. Greatness isn't hiding, it's right there... Look. You see it?",
        author: ''
      },
      {
        quote: "When you cease to fear complex problems and commit to embracing them, solutions will come easier to you than most. They panic, you become the calm in the storm. Peace. Poise. Power.",
        author: ''
      },

      {
        quote: 'The better the idea, the better chances you have of continuing to execute when it gets tough. The more likely people are to be attracted to your vision. A fan of great ideas.',
        author: ''
      },
      {
        quote: "If you're locked in on building 100 year company, you won't be stressed about the next 10 months. If you're building a $500B company you won't get stagnant behind $500k here and $500k there. Keep working. Stay strategic. Stay focused on your vision. Your purpose has to be your priority.",
        author: ''
      },
      {
        quote: 'Give people a reason to come to work, not just a place to go to work. - Simon Sinek',
        author: ''
      },
      {
        quote: 'Real difficulties can be overcome; it is only the imaginary ones that are unconquerable. - Theodore N. Vail',
        author: ''
      },
      {
        quote: 'Business & code work together so well because they are both abstract.',
        author: ''
      },
      {
        quote: "Impossible is just a big word thrown around by small men who find it easier to live in the world they’ve been given than to explore the power they have to change it. Impossible is not a fact. It’s an opinion. Impossible is not a declaration. It’s a dare. Impossible is potential. Impossible is temporary. Impossible is nothing.- Muhammad Ali",
        author: ''
      },
      {
        quote: 'Want a big business? Solve a big problem.',
        author: ''
      },
      {
        quote: 'Dream Bigger. Fail Faster. Get Better.',
        author: ''
      },
      {
        quote: "We're not held back by the teaching we didn’t receive in the past but by the learning we’re not doing in the present.",
        author: ''
      },
      {
        quote: 'Leaders have to set a tone of intolerance for anything that gets in the way of success.',
        author: ''
      },
      {
        quote: 'The early struggles become the stories of the successful.',
        author: ''
      },
      {
        quote: 'Prototype as if you are right. Listen as if you are wrong. - JB',
        author: ''
      },
      {
        quote: 'Having your dream is one thing. Living your dream is everything. Dream big. Work relentlessly.',
        author: ''
      },
      {
        quote: "If you can't find a way. Make a way.",
        author: ''
      },
      {
        quote: 'Expectations & pressure originate from the same place.',
        author: ''
      },
      {
        quote: 'Big thinking precedes great achievement. - Wilferd A. Peterson',
        author: ''
      },
      {
        quote: 'Entrepreneurs give people something to believe in, not just something to do.',
        author: ''
      },
      {
        quote: "I start with the premise that anything is possible. There's an unlimited amount of opportunity in this universe.",
        author: ''
      },
      {
        quote: 'Anything is always possible in this world. Everything only becomes impossible in our minds.',
        author: ''
      },
      {
        quote: 'The only way to defeat pessimism is with optimism.',
        author: ''
      },
      {
        quote: 'Risk > regret.',
        author: ''
      },
      {
        quote: "I start with the premise that anything is possible. There's an unlimited amount of opportunity in this universe.",
        author: ''
      },
      {
        quote: 'Never be ashamed to be yourself. We are all a work in progress.',
        author: ''
      },
      {
        quote: "The most important and most difficult project I will work on improving in this life, is me. It's about getting better.",
        author: ''
      },
      {
        quote: "When it's all said and done my goal is to have done more than I said.",
        author: ''
      },
      {
        quote: "Have the audacity to dream as big as you'd like.",
        author: ''
      },
      {
        quote: 'You must let go of good to get to great.',
        author: ''
      },
      {
        quote: 'How do we dream bigger = imagination.',
        author: ''
      },
      {
        quote: 'Imagination leads to Vision and that leads to greatness.',
        author: ''
      },
      {
        quote: 'Greatness is accomplishing what you once believed to be impossible.',
        author: ''
      },
      {
        quote: "Success is not about right or wrong it's about certainty.",
        author: ''
      },
      {
        quote: 'My possibilities define me, not my problems.',
        author: ''
      },
      {
        quote: 'Go there before you get there.',
        author: ''
      },
      {
        quote: 'Dare to be different.',
        author: ''
      },
      {
        quote: "Be patient but don't wait.",
        author: ''
      },
      {
        quote: 'Think Bigger. Fail Faster. Get Better.',
        author: ''
      },
      {
        quote: 'While you can buy luxury, legacy can only be built.',
        author: ''
      },
      {
        quote: 'Giving is the greatest human experience.',
        author: ''
      },
      {
        quote: 'Pressure is a privilege. It gives you the opportunity to achieve the impossible. - Tim Grover',
        author: ''
      },
      {
        quote: 'A smooth sea has never produced a skillful mariner.',
        author: ''
      },
      {
        quote: 'What if I told you, our goals are just well dressed limits we place on ourselves.',
        author: ''
      },
      {
        quote: 'After the final no there comes a yes And on that yes the future world depends. - Wallace Stevens ',
        author: ''
      },
      {
        quote: "You're either living your dream or living in fear.",
        author: ''
      },
      {
        quote: 'Be flexible be agile. Iteration as improvement.',
        author: ''
      },
      {
        quote: "Success doesn't change you. You've got to change to become successful.",
        author: ''
      },
      {
        quote: "You have to be burning with an idea, or a problem. If you're not passionate enough from the start, you'll never stick it out. - Steve jobs",
        author: ''
      },
      {
        quote: 'Somewhere, something incredible is waiting to be known. - Carl Sagan',
        author: ''
      },
      {
        quote: 'Suggested prototypes allowed us to see things in one of two ways: Things that don’t work, and things that need work.',
        author: ''
      },
      {
        quote: 'Logic will get you from A to B. Imagination can take you anywhere',
        author: ''
      },
      {
        quote: 'THINK BIG DREAM BIG',
        author: ''
      },
      {
        quote: 'Saturday -as-a-service #saas',
        author: ''
      },
      {
        quote: 'Decide while others delay. Begin while others procrastinate. Work while others wish. Save while other waste. Persist while others quit. Study while others sleep.',
        author: ''
      },
      {
        quote: 'All you have to do is jump. Handwork and good faith will take care of the rest. - Joshua I. Lewis',
        author: ''
      },
      {
        quote: 'Do more than you can, as if you had everything you needed, to bring where you are going to where you are.',
        author: ''
      },
      {
        quote: 'If you want to build a ship, don’t drum up the to gather wood, divide the work and give orders. Instead, teach them to yearn for the vast and endless sea. - Antoine de Saint-Exupéry',
        author: ''
      },
      {
        quote: "Things to think about Tuesday.  Waiting - the action of staying where one is or delaying action until a particular time or until something else happens.  Patience - the capacity to accept or tolerate delay, trouble, or suffering without getting angry or upset.  Have patience but don't wait.",
        author: ''
      },
      {
        quote: "It won't get easier but you can get better.",
        author: ''
      },
      {
        quote: "Learn Empower Ask questions Dream Engage Rise Speak up Have fun Inspire Prepare.",
        author: ''
      },
      {
        quote: "You don't need more hours in the day to be more productive. You need more energy in your hours. Get your energy up.",
        author: ''
      },
      {
        quote: 'Substance over status.',
        author: ''
      },
      {
        quote: 'Emotions and energy can often have just as much impact on fundraising as milestones and metrics if not more.',
        author: ''
      },
      {
        quote: 'Cheers to the weekend grinders, all sacrifices add up.',
        author: ''
      },
      {
      quote: "For this to work, we have to abandon traditional thinking from top to bottom, & left to right. Do everything differently #startup",
      author: ''
      },
      {
      quote: "I want to be the example of who my dauthers look for in future boyfriend",
      author: ''
      },
      {
      quote: 'This commitment, this sacrifice and these risks that I am taking - I am only able to do that on the strength of I’m doing it for our family. This is not about press for me but the legacy I am trying to leave for my family.',
      author: ''
      },
      {
      quote: "Entrepreneurial life is a roller coaster and the Lewis family has navigated that journey by staying connected. Communication is the key.",
      author: ''
      },
      {
      quote: "For this to work, we have to abandon traditional thinking from top to bottom, & left to right. Do everything differently #startup",
      author: ''
      },
      {
      quote: "Purpose cant be quantified with metrics, it can only be realized w/ the understanding of multiplying your dreams and efforts.",
      author: ''
      },
      {
      quote: "Your success depends on its second letter.",
      author: ''
      },
      {
      quote: "Don't wish it were easier, wish you were better.",
      author: ''
      },
      {
      quote: "Enthusiasm is infectious & energizing. People are motivated by leaders who possess a vision for an amazing today and a better tomorrow.",
      author: ''
      },
      {
      quote: "Theres a distinct difference from being unemployed and entrepreneurship.",
      author: ''
      },
      {
      quote: "We can succeed at almost anything if we have unlimited ambition, passion, enthusiasm and an unyielding dedication! #capacity",
      author: ''
      },
      {
      quote: "Get really good and consistent at the basics.",
      author: ''
      },
      {
      quote: "The start has startled a lot of people. Dont be afraid of being a beginner.",
      author: ''
      },
      {
      quote: "Dreaming of winning doesnt make you a winner, winning makes you a winner.",
      author: ''
      },
      {
      quote: "Most leaders you can see and hear but the unique ones, the special ones you can feel.",
      author: ''
      },
      {
      quote: "2 day is a new day 0 time to waste 1 grand vision 6 times the success 2016 is a 365 step program to turn your dreams into reality.",
      author: ''
      },
      {
      quote: 'Its stories like these that help keep me and the team motivated. Its these stories that reinforce, "yeah... Payroll should be free." Weve been in the lab non stop 15-20 hour days, weekends, all-nighters, disagreements, breakthroughs, highs and lows, setbacks, missed timelines, relationship building, sacrifices and we are still busting our butts and have lots of work to do. But as a team we know its worth it.',
      author: ''
      },
      {
      quote: "Making a difference is the best way to make a dollar. Funny how that works.",
      author: ''
      },
      {
      quote: "In a world thats built on Instant Gratification and so overly focused on time management, time constraints, appointments, schedules, time tables, perfect timing, it hard to create something timeless, but its worth your time to do so.",
      author: ''
      },
      {
      quote: "People are fascinated with how power works and how deals get done. The most intense stories of power and greatness are usually based on someones epic desire and singular focus to accomplish a particular thing.",
      author: ''
      },
      {
      quote: "So many people are upset with their 9 to 5 but they are sleep right now. Theres something special about doing what you love and becoming who you are meant to be. Greatness will require you to demand more of yourself. Ask yourself what are you committed too? What are you risking? #WhatsPossibleWednesdays",
      author: ''
      },
      {
      quote: "Excuses like opportunities will always make themselves available to you.",
      author: ''
      },
      {
      quote: "You never notice the time is right then do it, you always just do it and then realize the time was right.",
      author: ''
      },
      {
      quote: "Create & ignite energy and be able to put capital to work.",
      author: ''
      },
      {
      quote: "There's a difference between starting a #startup and having a #sidebusiness",
      author: ''
      },
      {
      quote: "Until youre ready to risk it all., youre not ready to have it all.",
      author: ''
      },
      {
      quote: "Lots of great #startups started 5-8 years ago. What new great companies are being built now? Hmmm I know 1.",
      author: ''
      },
      {
      quote: "Well designed #pitchdeck -> well designed products -> well designed #startup #designthinking",
      author: ''
      },
      {
      quote: "The bigger the checks the less time investors spend on the decks. 3mins top. Short, beautiful & concise. #startup #pitchdeck",
      author: ''
      },
      {
      quote: "2 rules of #success 1. Never quit 2. Repeat",
      author: ''
      },
      {
      quote: "There should be no need for a casual Friday if you work at a tech startup #Wearwhatyouwantatworkeveryday",
      author: ''
      },
      {
      quote: "Before a business can be built, a dream must be dreamed.",
      author: ''
      },
      {
      quote: "Believe in limitless possibilities and opportunities.",
      author: ''
      },
      {
      quote: "You cant build an A team, with B players. #startups",
      author: ''
      },
      {
      quote: "Investment tip: invest as much as you can in this… YOURSELF.",
      author: ''
      },
      {
      quote: "When solving a really big problem its just as much about finding the right people as it is about finding product marketing fit.",
      author: ''
      },
      {
      quote: "Better to not have a dime than to not have a dream.",
      author: ''
      },
      {
      quote: "Those that create the future, make history.",
      author: ''
      },
      {
      quote: "I do not wake up everyday to be a witness. Success isnt a spectator sport.",
      author: ''
      },
      {
      quote: "Building a great business transcends everything.",
      author: ''
      },
      {
      quote: "Them: Craig what do you actually do? Me: Whatever it takes. #entrepreneur",
      author: ''
      },
      {
      quote: "Whats on the other side of fear? Nothing.",
      author: ''
      },
      {
      quote: "If you are focused on building a great business youre not as nervous as those trying to build #unicorns #substance #Startups",
      author: ''
      },
      {
      quote: 'Everyday is a "weekend". You can also plug in "holiday" or "vacation" or "Friday" whatever we like we should embody that everyday.',
      author: ''
      },
      {
      quote: "Your actions are your equity. If you take no action you have no value.",
      author: ''
      },
      {
      quote: "There is no rule book on how 2change the world. Theres no selection process on who gets 2change it. U just decide & do it.",
      author: ''
      },
      {
      quote: "We arent concerned w/ designing a great vacation package 4our team were more focused on building a company where they dont want a vacation #culture",
      author: ''
      },
      {
      quote: "I propose that execution is not everything. #Entrepreneurship",
      author: ''
      },
      {
      quote: "I want to share free payroll with the world.",
      author: ''
      },
      {
      quote: "Nothing scales like #code The power of startups is that small teams have the power 2build multi-billion $ businesses w/ just lines of code.",
      author: ''
      },
      {
      quote: "u start a #startup & then u transition into building a business. The sooner the better. u can keep the core #culture as you grow.",
      author: ''
      },
      {
      quote: "Everyone has an opinion, dont be distracted from your vision.",
      author: ''
      },
      {
      quote: "Money will chase opportunity.",
      author: ''
      },
      {
      quote: "Strategy: Take risk. Keep showing up when most would quit.",
      author: ''
      },
      {
      quote: "Impossible is just impotent inspiration.",
      author: ''
      },
      {
      quote: "Why not build a biz thats orders of magnitude better than any1 else 4every1 involved. If u arent going 2 build one, join one and go hard.",
      author: ''
      },
      {
      quote: "Being 0 #Revenue BY CHOICE lets you focus solely on hyper-fast customer growth & rely on the financial markets4, I couldnt imagine building a startup w/out a designer itd be like so pointless!",
      author: ''
      },
      {
      quote: "The amount of time u have in this life to leave your legacy is limited. That should be motivation enough. Man I Love Mondays.",
      author: ''
      },
      {
      quote: '"Can I build a tech startup without a technical cofounder?" - Yes. "Can I build a real business without a business cofounder?" - Of course.',
      author: ''
      },
      {
      quote: "Design each and every day around your dreams. Dream->Decide->Do->Dedicate->Deliver",
      author: ''
      },
      {
      quote: "Imagine the things you could do if you just did the things you imagine.",
      author: ''
      },
      {
      quote: "To distance yourself from your problems, dedicate yourself to your purpose.",
      author: ''
      },
      {
      quote: "Customer Success is not a position quote its a way of life.",
      author: ''
      },
      {
      quote: "Your work ethic is where youll discover your WOW factor.",
      author: ''
      },
      {
      quote: "75% of today was problem solving. Understand the barrier, ask the right questions, recognize the opportunity and empower people to execute.",
      author: ''
      },
    ]
  }

  get_quotes(){
    return this.quotes;
  }
}
