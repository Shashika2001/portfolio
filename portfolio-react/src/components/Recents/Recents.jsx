import React from 'react'
import './Recents.css'

export default function Recents() {
  return (
    <div className='recents'>
        <h1>I hope to add here my life events.</h1>
        <marquee>Shashika</marquee>

      
    </div>
    <div class="container">
    <h1>Latest Events</h1>
    <p>Stay updated with the latest happenings!</p>
</div>
</header>
<main class="container">
<section class="events">
    <article class="event">
        <h2>Event Title 1</h2>
        <p class="date">November 20, 2024</p>
        <p>Join us for an insightful workshop on modern web development trends. Open for all skill levels.</p>
        <a href="#" class="btn">Read More</a>
    </article>
    <article class="event">
        <h2>Event Title 2</h2>
        <p class="date">December 5, 2024</p>
        <p>Explore AI-powered tools and how they can transform your projects. Don't miss this!</p>
        <a href="#" class="btn">Read More</a>
    </article>
    <article class="event">
        <h2>Event Title 3</h2>
        <p class="date">December 15, 2024</p>
        <p>A networking event for professionals in the tech industry. Register now to secure your spot.</p>
        <a href="#" class="btn">Read More</a>
    </article>
</section>
</main>
<footer>
<div class="container">
    <p>© 2024 Your Portfolio. All rights reserved.</p>
</div>
</footer>
  )
}
