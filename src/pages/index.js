import React from 'react'
import Comment from '../components/comment'
import jordan2 from '../images/jordan2.jpg'
import bball from '../images/bball.jpg'
import basket from '../images/basket.jpg'
import blog from './blog.css';




const IndexPage = () => (
  <div>
    <h1 className="fontheader" >Jordan Glover's Sports Blog</h1>


    <br />
    <h2 className="title">Who's your choice? Jordan Glover analyzes his pick(s) for the most likely NBA Rookie of The 2018-2019 NBA Season as the season progresses. Who'll fulfill his expectations and potential? Who will prove to be the standout, and who appears to be a likely a "D-League Developer".</h2>
    <br/>

    <div className="container">
    <span>Photo by Marius Christensen</span><img src={bball} alt={bball}/><img src={jordan2} alt={jordan2}/><span>Ron Artest</span><img src={basket} alt={basket}/>
    
    </div>
 

    <br />
    <br />
    <p className="content">
    A lot of discussion is currently ongoing regarding who was the 'very best pick ' in the 2018 NBA recent college draft. While there are many opinions, most of which surround the notion of team needs, our pick centrally focuses on WHO has the potential to turn a franchise completely 'the hell' around. For example, consider the impact of last year's ROY, Ben Simmons of the Philadelphia 76ers organization. Will one of the top ten picks of this year's draft catapult that franchise into the playoffs like Donovan Mitchell and others offered? (e.g.-Jason Tatum)? Hmmmm, is there someone like that in the 2018-2019 NBA season? We think so, and, here's the 'low down' on prospective candidates, supporting professional and critical evaluations along with some hard, cold statistical data/implications. So, here we go again! The anticipation is overwhelming and collosally our 'appetites' were 'satiated' by the performances of last season's rookie class by the likes of players like Ben, Donovan, AND one of my favorites, Celtics forward Mr. "Ice Water In My Veins", Jason Tatum!  
    He was a prolific player last season with the Celts winning the respect of the league with the significant contributions he brought to the New England terrain, not to be overshadowed by an unbelievable performance against the Cleveland Cavaliers in the playoffs.   
    </p>

    <p className="content">
    Lebron's on the west coast now....Laker's in the playoffs you think? Hmmm, let me see, how many times has "The King" missed the post season competition lately? Where's your money on that issue?....Lol.


    </p>
    <p className="content">
      Don't sleep on the opportunity to be a contributor to journalistic and professionl reference to the sports industry in general. You can be a part of an online team of documentational analysis we call 'The Real B-Baller' on the upcoming competiton. Let your experties be known and participate in goal oriented research to analyze the quality of your favorite sport's goals. What's that all about? Be a part of our future features entitled 'The B-Ball Einstein Squad' that will certainly have media celebrities like Stephen A. Smith "sweatin' " our online following! "Hey, did you hear what's 'trending' on Jordan's Blog"? " 'The B-Ball Einstein Squad' called it out last week!" "I saw it on their chat DM line and now I'm a Twitter follower!" "That's how i found out about that AAU game where that super kid with the crazy hops played!" "Now he's got a bunch of D-1 schools after him after he was located by Jordan's Blog!" "i'm talking to professional scouts now!" 
      <br />
      Go ahead, give me your opinions if you love the game. Let me know your thoughts in the comment section below, ...don't get left out of the "loop". The season's just starting and it's going to be "hot".....What's your 'B-Ball ' IQ?
    </p>
    <p className="content">- Jordan Thomas Glover</p>
    <Comment />
  </div>
)

export default IndexPage
