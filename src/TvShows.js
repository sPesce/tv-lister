import alwaysSunny from './assets/always-sunny.PNG'
import expanse from './assets/expanse.jpg'
import friends from './assets/friends.jpg'
import office from './assets/the-office.jpg'
import manifest from './assets/manifest.png'
import himym from './assets/himym.jpg'
import spongebog from './assets/spongebob.jpg'
import tt from './assets/teen-titans.jpg'
import avatar from './assets/avatar.jpg'
import rugrats from './assets/rugrats.jpg'
import twd from './assets/twd.jpg'
import bb from './assets/breaking-bad.jpg'
import stranger from './assets/stranger-things.jpg'
import mirror from './assets/black-mirror.jpg'

const titles =
[
  "It's Always Sunny in Philadelphia",
  "The Expanse",
  "Friends",
  "The Office",
  "Manifest",
  "How I Met Your Mother",
  "Spongebob Squarepants",
  "Teen Titans",
  "Avatar: The Last Airbender",
  "Rugrats",
  "The Walking Dead",
  "Breaking Bad",
  "Stranger Things",
  "Black Mirror"
];

const releaseYears =
[
  2005,
  2015,
  1994,
  2005,
  2018,
  2005,
  1999,
  2003,
  2005,
  1991,
  2010,
  2008,
  2016,
  2011
];

const genres =
[
  "comedy",
  "sci-fi",
  "comedy",
  "comedy",
  "sci-fi",
  "comedy",
  "animation",
  "animation",
  "animation",
  "animation",
  "horror",
  "crime",
  "horror",
  "sci-fi"

];
const pictures = 
[
  alwaysSunny,
  expanse,
  friends,
  office,
  manifest,
  himym,
  spongebog,
  tt, 
  avatar,
  rugrats, 
  twd,
  bb, 
  stranger, 
  mirror
];

let TvShows = [];
for(let i = 0; i < titles.length; i++)
{
  const show = 
  {
    title: titles[i],
    releaseYear: releaseYears[i],
    genre: genres[i],
    pic: pictures[i],
    id: i+1
  }
  TvShows.push(show);
  
}

export default TvShows;