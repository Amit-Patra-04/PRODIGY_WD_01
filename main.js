window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'blue';
    } else {
        navbar.style.backgroundColor = '';
    }
});

document.querySelectorAll('.navbar ul li a').forEach(item => {
    item.addEventListener('mouseover', function() {
        const navbar = document.querySelector('.navbar');
        navbar.style.backgroundColor = '#7CB518';
        item.style.borderBottom = '2px solid #54badf';
        item.style.color = '#fff';
    });

    item.addEventListener('mouseout', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'blue';
        } else {
            navbar.style.backgroundColor = '';
        }
        item.style.borderBottom = '';
        item.style.color = '';
    });
});