const logArr = [
  /** Template for new entries
  {
    version: `v1.0.0`,
    date: `2022-01-01`,
    list: [
      {
        label: [`add/update/fix/system/blocked/remove`],
        detail: `New stuff`
      }
    ]
  },
  **/
  {
    version: `3.02.4`,
    date: `April 21, 2025 `,
    list: [
      {
        label: [`add`],
        detail: `Added Archery World Tour`
      },
      {
        label: [`add`],
        detail: `Added Astro Survivors`
      },
      {
        label: [`add`],
        detail: `Added A Small World Cup`
      },
      {
        label: [`add`],
        detail: `Added Happy Wheels`
      },
      {
        label: [`add`],
        detail: `Added Spacebar Clicker`
      },
      {
        label: [`add`],
        detail: `Added Spiral Roll`
      },
      {
        label: [`add`],
        detail: `Added Police Chase`
      },
      {
        label: [`add`],
        detail: `Added Zombie Derby: Pixel Survival`
      },
      {
        label: [`system`],
        detail: `Fixed some mobile UI`
      },
      {
        label: [`system`],
        detail: `Organized Game Codes`
      }
    ]
  },
  {
    version: `3.02.0`,
    date: `April 10, 2025 `,
    list: [
      {
        label: [`system`],
        detail: `Redesigned certain UI`
      },
      {
        label: [`system`],
        detail: `Launched another URL`
      }
    ]
  },
  {
    version: `3.01.4`,
    date: `March 31, 2025 `,
    list: [
      {
        label: [`add`],
        detail: `Added Pokey Stick`
      },
      {
        label: [`add`],
        detail: `Added FLIPTHEGUN`
      },
      {
        label: [`system`],
        detail: `Renamed Kruated Phear URL`
      },
      {
        label: [`system`],
        detail: `Integrated shared website launcher`
      }
    ]
  },
  {
    version: `3.01.2`,
    date: `March 15, 2025 `,
    list: [
      {
        label: [`add`],
        detail: `Added Cactus McCoy`
      },
      {
        label: [`add`],
        detail: `Added OpenTTD`
      },
      {
        label: [`add`],
        detail: `Added Minicraft`
      },
      {
        label: [`add`],
        detail: `Added Snail Bob`
      }
    ]
  },
  {
    version: `3.01.0`,
    date: `March 10, 2025 `,
    list: [
      {
        label: [`add`],
        detail: `Added Iron Snout`
      },
      {
        label: [`add`],
        detail: `Added Hills of Steel`
      },
      {
        label: [`system`],
        detail: `Akura Myth now public`
      }
    ]
  },
  {
    version: `3.00.9`,
    date: `February 9, 2025 `,
    list: [
      {
        label: [`add`],
        detail: `Added One Chance`
      },
      {
        label: [`add`],
        detail: `Added Under The Red Sky`
      },
      {
        label: [`add`],
        detail: `Added Super Fowlst`
      },
      {
        label: [`add`],
        detail: `Added Spelunky`
      },
      {
        label: [`add`],
        detail: `Added The Final Earth 2`
      },
      {
        label: [`add`],
        detail: `Added Like A King!`
      },
      {
        label: [`add`],
        detail: `Added Ball Mayhem`
      },
      {
        label: [`add`],
        detail: `Added Wii`
      },
      {
        label: [`add`],
        detail: `Added Xbox 360`
      },
      {
        label: [`add`],
        detail: `Added 60 Seconds Burger Run`
      }
    ]
  },
  {
    version: `3.00.7`,
    date: `February 4, 2025 `,
    list: [
      {
        label: [`add`],
        detail: `Added Dadish`
      },
      {
        label: [`add`],
        detail: `Added Choppy Orc`
      },
      {
        label: [`add`],
        detail: `Added Cow Bay`
      },
      {
        label: [`add`],
        detail: `Added Candy Crush`
      },
      {
        label: [`add`],
        detail: `Added Bad Piggies`
      },
      {
        label: [`add`],
        detail: `Added Burrito Bison: Launcha Libre`
      },
      {
        label: [`add`],
        detail: `Added Block Blast`
      },
      {
        label: [`system`],
        detail: `K.P.D. now public`
      }
    ]
  },
  {
    version: `3.00.5`,
    date: `February 2, 2025 `,
    list: [
      {
        label: [`add`],
        detail: `Added Plants vs. Zombies`
      },
      {
        label: [`add`],
        detail: `Added Santy Is Home`
      },
      {
        label: [`add`],
        detail: `Added We Become What We Behold`
      },
      {
        label: [`add`],
        detail: `Added Space Garden`
      },
      {
        label: [`add`],
        detail: `Added The Visitor Returns`
      },
      {
        label: [`system`],
        detail: `Main website brought back online again!`
      }
    ]
  },
  {
    version: `3.00.3`,
    date: `January 2, 2025 `,
    list: [
      {
        label: [`add`],
        detail: `Added Johnny Rocketfingers 2`
      },
      {
        label: [`add`],
        detail: `Added Kiwi Clicker`
      },
      {
        label: [`update`],
        detail: `Huge UI update`
      },
      {
        label: [`system`],
        detail: `Optimized code to v3.00.0`
      },
      {
        label: [`remove`],
        detail: `Removed a few unpopular games`
      }
    ]
  },
  {
    version: `2.02.7`,
    date: `December 9, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Idle Startup Tycoon`
      },
      {
        label: [`add`],
        detail: `Added Opposum Country`
      },
      {
        label: [`add`],
        detail: `Added RetrohauntR`
      },
      {
        label: [`add`],
        detail: `Added Fly Car Stunt 4`
      },
      {
        label: [`add`],
        detail: `Added Traffic Mania`
      },
      {
        label: [`add`],
        detail: `Added Low's Adventures`
      },
      {
        label: [`add`],
        detail: `Added Rally Point 3`
      },
      {
        label: [`fix`],
        detail: `Fixed a few bugs`
      }
    ]
  },
  {
    version: `2.02.6`,
    date: `December 1, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Eagle Ride`
      },
      {
        label: [`add`],
        detail: `Added Gold Digger FRVR`
      },
      {
        label: [`add`],
        detail: `Added Idle Gun`
      },
      {
        label: [`system`],
        detail: `Changed default theme to christmas theme`
      },
      {
        label: [`system`],
        detail: `Changed some game icons`
      }
    ]
  },
  {
    version: `2.02.2`,
    date: `November 10, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added 10-103`
      },
      {
        label: [`add`],
        detail: `Added 4WD Off Road Driving Sim`
      },
      {
        label: [`add`],
        detail: `Added Adventure Capitalist`
      },
      {
        label: [`add`],
        detail: `Added Ascii Space`
      },
      {
        label: [`add`],
        detail: `Added Assessment Examination`
      },
      {
        label: [`add`],
        detail: `Added Bank Robbery 2`
      },
      {
        label: [`add`],
        detail: `Added Blumgi Castle`
      },
      {
        label: [`add`],
        detail: `Added Bossy Toss`
      },
      {
        label: [`add`],
        detail: `Added Car Drawing Game`
      },
      {
        label: [`add`],
        detail: `Added Clean Up IO`
      },
      {
        label: [`add`],
        detail: `Added Cover Orange: Gangsters`
      },
      {
        label: [`add`],
        detail: `Added Day of Meat Radiation`
      },
      {
        label: [`system`],
        detail: `Changed some game icons`
      },
      {
        label: [`system`],
        detail: `Changed default theme back to Default™ theme`
      },
      {
        label: [`system`],
        detail: `Reduced and organized code`
      }
    ]
  },
  {
    version: `2.02.0`,
    date: `October 7, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Soul Jumper`
      },
      {
        label: [`add`],
        detail: `Added Protektor`
      },
      {
        label: [`update`],
        detail: `Updated NetSpate!`
      },
      {
        label: [`system`],
        detail: `Changed default theme to halloween theme`
      },
      {
        label: [`remove`],
        detail: `Removed LioProxy`
      }
    ]
  },
  {
    version: `2.01.7`,
    date: `October 1, 2024 `,
    list: [
      {
        label: [`fix`],
        detail: `Small UI fixes`
      },
      {
        label: [`remove`],
        detail: `Removed waflash games to ruffle`
      }
    ]
  },
  {
    version: `2.01.5`,
    date: `September 23, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Universal Paperclips`
      }
    ]
  },
  {
    version: `2.01.4`,
    date: `September 10, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Fancade`
      },
      {
        label: [`add`],
        detail: `Added Polytrack`
      }
    ]
  },
  {
    version: `2.01.1`,
    date: `August 26, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added 10 More Bullets`
      },
      {
        label: [`add`],
        detail: `Added Donkey Kong`
      },
      {
        label: [`add`],
        detail: `Added Jacksmith`
      },
      {
        label: [`add`],
        detail: `Added Burger Tycoon`
      },
      {
        label: [`add`],
        detail: `Added Clear Vision Elite`
      },
      {
        label: [`add`],
        detail: `Added Banjo Kazooie`
      },
      {
        label: [`fix`],
        detail: `Small bug fixes`
      }
    ]
  },
  {
    version: `2.00.9`,
    date: `August 16, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added import/export game data!`
      },
      {
        label: [`fix`],
        detail: `Fixed more bugs`
      }
    ]
  },
  {
    version: `2.00.3`,
    date: `August 13, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added launcher games`
      },
      {
        label: [`add`],
        detail: `Added more fnaf games`
      },
      {
        label: [`add`],
        detail: `Added better and more loading screens`
      },
      {
        label: [`fix`],
        detail: `Fixed many bugs`
      },
      {
        label: [`system`],
        detail: `Fixed and changed game urls`
      },
      {
        label: [`system`],
        detail: `Changed official url link`
      },
      {
        label: [`system`],
        detail: `Reduced and organized more js code`
      }
    ]
  },
  {
    version: `2.00.0`,
    date: `August 11, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added better mobile support`
      },
      {
        label: [`add`],
        detail: `Added some new features somewhere. (Forgot where)`
      },
      {
        label: [`system`],
        detail: `Released for testing on github page`
      },
      {
        label: [`system`],
        detail: `More features and bug fixes will come in official release!`
      },
      {
        label: [`system`],
        detail: `Huge UI changes! (Version 2.00.0 now)`
      },
      {
        label: [`system`],
        detail: `Reduced and organized code`
      },
      {
        label: [`remove`],
        detail: `Optimized so much extra code!`
      }
    ]
  },
  {
    version: `1.14.5`,
    date: `May 15, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Jelly Truck`
      },
      {
        label: [`add`],
        detail: `Added Astray Normal`
      },
      {
        label: [`add`],
        detail: `Added Astray Hardcore`
      },
      {
        label: [`add`],
        detail: `Added Whack a Mole`
      },
      {
        label: [`add`],
        detail: `Added Rodeo Stampede`
      },
      {
        label: [`system`],
        detail: `Last update for the school year! See you next school year with a redesign!`
      }
    ]
  },
  {
    version: `1.14.4`,
    date: `May 5, 2024 `,
    list: [
      {
        label: [`fix`],
        detail: `Changed the domain to the current one!`
      },
      {
        label: [`remove`],
        detail: `Removed Angry Birds (Sorry, hosting policies..)`
      },
      {
        label: [`remove`],
        detail: `Removed Resent Client (Bulky and useless.)`
      },
      {
        label: [`blocked`],
        detail: `They blocked vcc77.bitbucket.io (probably because of mc-js again!)`
      }
    ]
  },
  {
    version: `1.14.3`,
    date: `April 30, 2024 `,
    list: [
      {
        label: [`fix`],
        detail: `Changed the domain to the current one!`
      },
      {
        label: [`system`],
        detail: `Huge website changes coming soon?`
      },
      {
        label: [`blocked`],
        detail: `They blocked vul77.bitbucket.io (probably because of mc-js)`
      }
    ]
  },
  {
    version: `1.14.1`,
    date: `April 24, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added IRV77Hub Theme`
      },
      {
        label: [`update`],
        detail: `Added Minecraft JS mobile support`
      }
    ]
  },
  {
    version: `1.14.0`,
    date: `April 23, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added DVD Bounce`
      },
      {
        label: [`fix`],
        detail: `Fixed Grumace`
      },
      {
        label: [`fix`],
        detail: `Fixed 1v1 lol`
      },
      {
        label: [`system`],
        detail: `Happy National Rape Day!`
      }
    ]
  },
  {
    version: `1.13.8`,
    date: `April 22, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Cat Gunner: Super Zombie Shoot`
      },
      {
        label: [`add`],
        detail: `Added Neverending Legacy`
      },
      {
        label: [`add`],
        detail: `Added Minecraft JS`
      },
      {
        label: [`add`],
        detail: `Added Idle Dices`
      },
      {
        label: [`add`],
        detail: `Added Strange Insults`
      },
      {
        label: [`add`],
        detail: `Added Mini Shooters`
      },
      {
        label: [`add`],
        detail: `Added Google Breakout`
      },
      {
        label: [`add`],
        detail: `Added Big Red Button`
      },
      {
        label: [`add`],
        detail: `Added Mindustry`
      },
      {
        label: [`add`],
        detail: `Added Edge Not Found`
      },
      {
        label: [`add`],
        detail: `Added xx142-b2.exe`
      },
      {
        label: [`add`],
        detail: `Added Grumace`
      },
      {
        label: [`add`],
        detail: `Added Make Sure It's Closed`
      },
      {
        label: [`update`],
        detail: `Changed some game names`
      },
      {
        label: [`fix`],
        detail: `Fixed some UI bugs`
      },
      {
        label: [`fix`],
        detail: `Fixed Burger Bounty`
      }
    ]
  },
  {
    version: `1.13.5`,
    date: `April 17, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Fix it Felix Jr.`
      },
      {
        label: [`fix`],
        detail: `Fixed all emulator games`
      }
    ]
  },
  {
    version: `1.13.3`,
    date: `April 16, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Feedvid Live`
      },
      {
        label: [`add`],
        detail: `Added Old System Theme!`
      },
      {
        label: [`update`],
        detail: `Changed some UI`
      }
    ]
  },
  {
    version: `1.13.1`,
    date: `April 10, 2024 `,
    list: [
      {
        label: [`fix`],
        detail: `Changed the domain to the current one!`
      },
      {
        label: [`blocked`],
        detail: `They finally blocked irv77.netlify.app`
      }
    ]
  },
  {
    version: `1.11.8`,
    date: `April 7, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Bacon may Die`
      },
      {
        label: [`add`],
        detail: `Added Barbershop inc.`
      },
      {
        label: [`add`],
        detail: `Added Colorup`
      },
      {
        label: [`update`],
        detail: `Made Other games alphabetized`
      }
    ]
  },
  {
    version: `1.11.3`,
    date: `April 4, 2024 `,
    list: [
      {
        label: [`update`],
        detail: `Updated Game Name and Description display`
      },
      {
        label: [`fix`],
        detail: `Fixed games that didn't update tab names/icons`
      }
    ]
  },
  {
    version: `1.11.0`,
    date: `April 2, 2024 `,
    list: [
      {
        label: [`update`],
        detail: `Updated Slowroads.io`
      }
    ]
  },
  {
    version: `1.10.9`,
    date: `Mar 31, 2024 `,
    list: [
      {
        label: [`update`],
        detail: `Added even more mobile support in some menus`
      },
      {
        label: [`fix`],
        detail: `Fixed some discord embeds`
      }
    ]
  },
  {
    version: `1.10.7`,
    date: `Mar 30, 2024 `,
    list: [
      {
        label: [`update`],
        detail: `Added more mobile support in some menus`
      }
    ]
  },
  {
    version: `1.10.6`,
    date: `Mar 27, 2024 `,
    list: [
      {
        label: [`update`],
        detail: `Reorginized/fixed flash games`
      },
      {
        label: [`fix`],
        detail: `Fixed 1v1.lol`
      },
      {
        label: [`fix`],
        detail: `Fixed Justfall.lol`
      }
    ]
  },
  {
    version: `1.10.3`,
    date: `Mar 26, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Slide in the Woods`
      },
      {
        label: [`add`],
        detail: `Added Kids vs Icecream`
      },
      {
        label: [`add`],
        detail: `Added Neon Flytron`
      },
      {
        label: [`add`],
        detail: `Added Build Bridges`
      },
      {
        label: [`add`],
        detail: `Added Deadly Descent`
      },
      {
        label: [`add`],
        detail: `Added Rolling Forests`
      },
      {
        label: [`add`],
        detail: `Added Pillar Valley`
      },
      {
        label: [`add`],
        detail: `Added 30 Dollar Soundboard`
      },
      {
        label: [`add`],
        detail: `Added Eggy Car`
      },
      {
        label: [`add`],
        detail: `Added Red Ball 4`
      },
      {
        label: [`add`],
        detail: `Added The Visitor`
      },
      {
        label: [`add`],
        detail: `Added Ice Scream 1`
      },
      {
        label: [`add`],
        detail: `Added Burger Bounty`
      },
      {
        label: [`add`],
        detail: `Added Moto Road Rash 3D`
      },
      {
        label: [`update`],
        detail: `Changed/Updated Highway Traffic/Racer`
      },
      {
        label: [`update`],
        detail: `Changed some game icons`
      }
    ]
  },
  {
    version: `1.9.7`,
    date: `Mar 25, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Granny`
      },
      {
        label: [`update`],
        detail: `Redid Home Page`
      },
      {
        label: [`system`],
        detail: `Redid code for changelog!`
      }
    ]
  },
  {
    version: `1.9.5`,
    date: `Mar 24, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added NetSpate`
      },
      {
        label: [`fix`],
        detail: `Fixed Money Land`
      }
    ]
  },
  {
    version: `1.9.4`,
    date: `Mar 20, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added 4x4 Offroad Drive`
      },
      {
        label: [`add`],
        detail: `Added Wheely`
      },
      {
        label: [`add`],
        detail: `Added Money Land`
      },
      {
        label: [`fix`],
        detail: `Fixed Janissary Towers`
      },
      {
        label: [`fix`],
        detail: `Fixed Shortcut Run`
      },
      {
        label: [`fix`],
        detail: `Fixed Two Punk Racing`
      },
      {
        label: [`system`],
        detail: `Optimized Code`
      },
      {
        label: [`system`],
        detail: `Made elements more consistent`
      }
    ]
  },
  {
    version: `1.8.6`,
    date: `Mar 19, 2024 `,
    list: [
      {
        label: [`fix`],
        detail: `Fix/Updated Doom`
      },
      {
        label: [`fix`],
        detail: `Fixed some broken emulators`
      }
    ]
  },
  {
    version: `1.8.4`,
    date: `Mar 18, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Themes Tab`
      },
      {
        label: [`add`],
        detail: `Added Glitch Theme!`
      },
      {
        label: [`update`],
        detail: `Updated pages, themes, and assets`
      },
      {
        label: [`system`],
        detail: `Optimized Code`
      },
      {
        label: [`system`],
        detail: `Made elements more consistent`
      },
      {
        label: [`blocked`],
        detail: `Construct 3 Games aren't currently working (Being fixed)`
      },
      {
        label: [`blocked`],
        detail: `Recoil isn't currently working (Being fixed)`
      },
      {
        label: [`remove`],
        detail: `Removed the extra 8 Ball Game`
      },
    ]
  },
  {
    version: `1.7.9`,
    date: `Mar 17, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Marble Dash`
      },
      {
        label: [`add`],
        detail: `Added Maze Planet 3D`
      },
      {
        label: [`add`],
        detail: `Added Free the Key`
      },
      {
        label: [`add`],
        detail: `Added Sling Drift`
      },
      {
        label: [`add`],
        detail: `Added 8 Ball Pool`
      },
      {
        label: [`add`],
        detail: `Added The Little Giant`
      },
      {
        label: [`add`],
        detail: `Added Shortcut Run`
      },
      {
        label: [`add`],
        detail: `Added Gun Mayhem 2`
      },
      {
        label: [`add`],
        detail: `Added Recoil`
      },
      {
        label: [`add`],
        detail: `Added Rio Rex`
      },
      {
        label: [`add`],
        detail: `Added Striker Dummies`
      },
      {
        label: [`add`],
        detail: `Added Poor Bunnies`
      },
      {
        label: [`add`],
        detail: `Added Baseball Fury`
      },
      {
        label: [`add`],
        detail: `Added Cube Flip`
      },
      {
        label: [`add`],
        detail: `Added Pizza Tower`
      },
      {
        label: [`add`],
        detail: `Added Snow Rider 3D`
      },
      {
        label: [`add`],
        detail: `Added Two Punk Racing`
      }
    ]
  },
  {
    version: `1.7.1`,
    date: `Mar 16, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Ultimate Car Driving`
      },
      {
        label: [`add`],
        detail: `Added Stunt Car Challenge 3`
      },
      {
        label: [`system`],
        detail: `Optimized Code`
      },
      {
        label: [`system`],
        detail: `Made elements more consistent`
      }
    ]
  },
  {
    version: `1.6.9`,
    date: `Mar 15, 2024 `,
    list: [
      {
        label: [`update`],
        detail: `Changed About page`
      },
      {
        label: [`update`],
        detail: `Changed 404 page`
      },
      {
        label: [`fix`],
        detail: `Fixed FNAF 2`
      },
      {
        label: [`fix`],
        detail: `Fixed Riddle School 5`
      },
      {
        label: [`system`],
        detail: `Updated Ruffle`
      },
      {
        label: [`system`],
        detail: `Tied up loose ends`
      }
    ]
  },
  {
    version: `1.6.6`,
    date: `Mar 14, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added FortZ`
      },
      {
        label: [`add`],
        detail: `Added some Flashbacks`
      },
      {
        label: [`add`],
        detail: `Added 2 new themes! (Pure Darkness and Fellout)`
      },
      {
        label: [`update`],
        detail: `Changed About page`
      },
      {
        label: [`update`],
        detail: `Added the settings appearance`
      }
    ]
  },
  {
    version: `1.6.0`,
    date: `Mar 13, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Janissary Battles`
      },
      {
        label: [`add`],
        detail: `Added Mini Golf World`
      },
      {
        label: [`add`],
        detail: `Added Master Chess`
      }
    ]
  },
  {
    version: `1.5.1`,
    date: `Mar 12, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added Monkey Mart`
      },
      {
        label: [`add`],
        detail: `Added Highway Traffic`
      },
      {
        label: [`add`],
        detail: `Added 4 Colors Monument Edition`
      },
      {
        label: [`update`],
        detail: `Fixed/polished the Game system selection`
      },
      {
        label: [`update`],
        detail: `Polished changelog page`
      },
      {
        label: [`update`],
        detail: `Reworked some theme colors`
      },
      {
        label: [`update`],
        detail: `Remade the settings page`
      },
      {
        label: [`fix`],
        detail: `Fixed YoHoHo.io`
      }
    ]
  },
  {
    version: `1.4.5`,
    date: `Mar 11, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added navbar icons`
      },
      {
        label: [`add`],
        detail: `Added Game system selection`
      },
      {
        label: [`update`],
        detail: `Changed the 404 page`
      }
    ]
  },
  {
    version: `1.4.3`,
    date: `Mar 10, 2024 `,
    list: [
      {
        label: [`add`],
        detail: `Added changelog!`
      },
      {
        label: [`update`],
        detail: `Minor Appearance Changes`
      },
      {
        label: [`system`],
        detail: `Optimized code`
      }
    ]
  }
];