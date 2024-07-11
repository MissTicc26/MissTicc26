document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.animated-img');
    let scrollAmount = 0;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollFraction = (scrollTop / (maxScroll / 4)).toFixed(2); // Adjusted for faster animation
        const translateX = Math.max(-100 + scrollFraction * 200, 0); // From -100vw to 0vw

        // Apply transformation
        img.style.transform = `translateX(${translateX}vw)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the state based on initial scroll position
});