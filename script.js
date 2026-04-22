const articles = [
    {
        title: "How to Learn a Handstand: Building Control",
        category: "Gymnastics Basics",
        image: "handstand.jpg",
        date: "April 19, 2026",
        content: `
            <h4>Starting With the Position</h4>
            <p>Learning a handstand is about body position, control, and takes patience. Many struggle with learning a handstand because they treat it like a trick instead of a slow skill that takes control.</p>
            
            <p>The first thing I would tell anyone that is trying to learn a handstand is to stop trying to balance before reaching the proper body alignment. If your feet, hips, shoulders, and hands are not all aligned in the right way, the balancing is a lot harder to do. A good way to start this is doing handstands against a wall. This makes you hold the correct body position while not having to worry about balancing. This is important because the fundamentals of gymnastics are based on the right form of a handstand.</p>

            <h4>Slowly Gaining Control</h4>
            <p>A very common mistake people make is trying to kick all the way up to the handstand without building the strength up first. The best way to start is by exercises like hollow holds and wall handstands. This builds the strength used to control the handstand and what makes actual progress. From what I have seen, the athletes that improve the fastest are the ones who are consistent with training their basics instead of rushing new skills.</p>

            <h4>Why Patience Matters</h4>
            <p>A handstand is able to teach something that is a lot bigger than just one skill. This is that progress comes from a plan. The only way a person gets better is by showing up everyday and paying attention to details. Slowly but surely if you change one thing at a time you will get better.</p>

            <p><a href="http://gymnasticshq.com/how-to-do-a-handstand/" target="_blank">Handstand Tutorial</a></p>
        `
    },
    {
        title: "What Gymnastics has Taught me About Discipline",
        category: "Discipline & Success",
        image: "article3.png",
        date: "April 19, 2026",
        content: `
            <h4>Progress Comes from Habits</h4>
            <p>Throughout the years gymnastics has taught me that performing well is not something that happens at random. It is a product of good habits and the environment you put yourself in. This is not specific to gymnastics though, this is seen in school and even in the professional world.</p>

            <p>Something my coach told me is “Everyone just sees the final routine”. Now, this never really registered to me until I got older, however now it makes a lot more sense now that I have matured. Although people see what you do on the competition floor, they don’t see anything that goes on behind the scenes. This is why having the discipline to create consistency is everything. Not only this, but trusting in the processing follows as a result of the consistency. Having this mindset has helped me in the gym, but even beyond that.</p>

            <p>This mindset shaped how I work beyond gymnastics. As someone who is majoring in cybersecurity, I do very similar things when I solve problems. When I am solving a problem, it usually comes from a very consistent system that I put in place. For instance, when coding, I go through error and error again, however, the consistency is what eventually gets me to the finish line. I feel like Penn State’s Cybersecurity program puts a major emphasis on problem solving, which is why I connect with it so well.</p>

            <h4>Performance That is Both Mental and Physical</h4>
            <p>Another lesson that I have learned from gymnastics is that having talent just is not enough. You need to be driven and consistent. But most importantly you have to stay focused. Being disciplined in and out of the gym is what keeps me going even when days are bad.</p>

            <h4>Why it is Important Professionally</h4>
            <p>Gymnastics has always been so much more than just a sport to me. It has built me into a very disciplined person and has made me more resilient. These translate from athletics to the professional world. This is a very important message that I want my brand to reflect. I am a person who knows growth and can continue to show up with purpose even under pressure.</p>

            <p><a href="https://wellbeingmagazine.com/how-sports-cultivate-discipline-and-success/" target="_blank">How Sports contribute to discipline</a></p>
        `
    },
    {
        title: "Why Your Brand Matters in NIL College Era",
        category: "NIL & Branding",
        image: "brand.jpg",
        date: "April 19, 2026",
        content: `
            <h4>NIL Changed the Game</h4>
            <p>For student athletes, personal branding is so important. It is how opportunities are created for them. A strong brand helps show people who you are beyond your sport.</p>

            <p>For only a couple years now, the NCAA now allows student athletes to receive compensation from third parties for the use of their name, image, and likeness. This can mean that reputation behind an athlete is more important now than it ever has been before. Personal branding is not just about getting deals but it is about the credibility that you build up along the way.</p>

            <h4>A Good Brand Should Feel Real</h4>
            <p>Some of the strongest personal brands I have seen are not just ones with high follower counts. While this may seem a bit odd, the best personal brands are ones that feel authentic. A profile that feels relatable is able to build trust a lot faster than one that just focuses on trends. This matters a lot because people can tell when someone is genuine or not.</p>

            <p>In addition, a relatable brand is so much easier to keep up with in the long run. Instead of always doing what is popular at the time, you are building a brand that is “who you are”. Over time, this allows people to connect with you and create a sense of loyalty.</p>

            <h4>What I Want my Brand to Reflect</h4>
            <p>For me, I try to make my brand reflect everything about me. From athletics to academics and even my personal relationships, I try to let people know who I really am. I want my audience to see me as someone who is not only disciplined, but also goes through the same struggles as them. This includes how I train, how I manage school, and how I am able to handle injuries that come with gymnastics. In general I think that transparency is what makes a brand relatable and all athletes should strive for it.</p>

            <p><a href="https://www.espn.com/college-sports/story/_/id/41040485/what-nil-college-sports-how-do-athlete-deals-work" target="_blank">What is NIL in College Sports</a></p>
        `
    }
];

function openArticle(index) {
    const article = articles[index];
    const modal = document.getElementById('article-modal');
    const header = document.getElementById('modal-header');
    const body = document.getElementById('modal-body');

    header.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <div class="article-meta">
            <span>${article.category}</span>
            <span>By: Robert Alessio Jr. ${article.date}</span>
        </div>
    `;

    body.innerHTML = `
        <h2>${article.title}</h2>
        ${article.content}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeArticle() {
    const modal = document.getElementById('article-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('article-modal');
    if (event.target == modal) {
        closeArticle();
    }
}

