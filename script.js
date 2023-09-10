function scrollToElement(elementSelector, offset = 280) {
    const element = document.querySelector(elementSelector);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
}
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");

link1.addEventListener('click', (e) => {
    e.preventDefault(); 
    scrollToElement('');
});

link2.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('.hizmet', 200); // "Hizmetler" sayfasına gitmek istiyorsanız ".sss" kullanabilirsiniz.
});


link3.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('.sss', 280); 
});

link4.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToElement('.sosyalmedya', 50);
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}