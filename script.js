const articles = [
    {
        title: "The Evolution of NIL: How Athlete Branding is Redefining the NCAA",
        category: "Athlete Branding",
        image: "article1.png",
        date: "April 15, 2024",
        content: `
            <h4>The Shift in Collegiate Commercialization</h4>
            <p>The introduction of Name, Image, and Likeness (NIL) rights has fundamentally transformed the collegiate experience. Student-athletes are no longer just competitors; they are now evolving digital entrepreneurs managing global brands.</p>
            
            <p>Strategic branding allows athletes to monetize their influence while still in school. This shift requires a professional mindset that balances academic responsibilities with the demands of constant digital content creation today.</p>

            <h4>Building a Digital Legacy through Authorship</h4>
            <p>Consistency in how you present yourself online is essential for long-term success. By sharing authentic stories, you create a dedicated community that follows your journey from college into your professional life.</p>

            <p>According to current reports from <a href="https://www.ncaa.org" target="_blank">NCAA News</a>, athletes who actively engage in personal branding are significantly better prepared for post-graduate career transitions in competitive industries lately.</p>

            <p>For a gymnast, this means showcasing the discipline required for every routine. It proves your worth to sponsors and future employers by demonstrating elite levels of commitment and high-level technical expertise.</p>

            <p>Visual rhetoric plays a massive role in this digital ecosystem. Using high-quality imagery, like the visualization above, ensures that your message resonates with a broader audience while maintaining professional standards.</p>
        `
    },
    {
        title: "IST on the Mat: Using Information Technology to Optimize Performance",
        category: "Tech & Performance",
        image: "article2.png",
        date: "April 18, 2024",
        content: `
            <h4>Quantifying the Art of Gymnastics</h4>
            <p>As an Information Science and Technology major, I see gymnastics through a lens of data. Every rotation, landing, and muscular adjustment can be quantified to improve athletic performance and safety.</p>

            <p>By leveraging motion capture technology and data analytics, we can identify subtle inefficiencies. This technical approach allows for precise adjustments that lead to higher execution scores and reduced risk of injuries.</p>

            <h4>The Future of Athletic Data Analysis</h4>
            <p>Integrating complex IT systems into training routines is the next frontier of sport. Professionals who understand both the physical and technical aspects of their discipline will lead this modern evolution.</p>

            <p>Innovations in sports tech, as highlighted by <a href="https://www.ieee.org" target="_blank">IEEE Spectrum</a>, are making elite-level coaching more accessible. Data-driven insights provide an objective foundation for feedback that goes beyond traditional observation.</p>

            <p>Your digital profile should reflect this intersection of skills. By demonstrating your ability to handle complex information, you prove your value as a multi-dimensional professional in the technical workforce today.</p>

            <p>Modern business architecture depends on high-quality data management. Applying these principles to athletics provides a unique perspective that translates well into careers in software development, data science, and systems analysis.</p>
        `
    },
    {
        title: "The Anatomy of Resilience: Overcoming Setbacks in Athletics",
        category: "Personal Resilience",
        image: "article3.png",
        date: "April 20, 2024",
        content: `
            <h4>The Mental Framework of a Champion</h4>
            <p>Gymnastics is a sport defined by gravity and the constant possibility of failure. Overcoming significant injuries requires a mental framework that prioritizes long-term goals over immediate physical or emotional setbacks.</p>

            <p>Resilience is not just about physical recovery; it is about cognitive adaptation. Learning to view obstacles as opportunities for growth is essential for maintaining excellence in both sports and professional academics.</p>

            <h4>Embracing the Digital Tattoo</h4>
            <p>Sharing the journey of recovery creates a powerful narrative of strength. This transparency helps build a brand centered on authenticity, which is highly valued by modern recruiters and industry leaders alike.</p>

            <p>Recent studies in <a href="https://www.fastcompany.com" target="_blank">Fast Company</a> suggest that candidates who demonstrate resilience through personal stories are more likely to succeed in high-pressure corporate environments during their careers.</p>

            <p>Your online presence acts as a permanent record of your character. By managing your "digital tattoo" with care, you ensure that potential employers see a professional who remains undeterred by adversity.</p>

            <p>Maintaining a professional tone while sharing personal struggles is a delicate balance. It demonstrates emotional intelligence and a sophisticated understanding of how to communicate complex human experiences to a professional audience.</p>
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
            <span>By Bobby Alessio</span>
            <span>${article.date}</span>
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

