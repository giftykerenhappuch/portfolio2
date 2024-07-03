document.getElementById('home').addEventListener('click', function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'index.html'; // Redirect to index.html or home page
    }, 1000); // Adjust the delay to match your CSS transition duration
});

document.getElementById('skill').addEventListener('click', function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'skill.html'; // Redirect to skill.html
    }, 1000); // Adjust the delay to match your CSS transition duration
});

document.getElementById('project').addEventListener('click', function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'project.html'; // Redirect to project.html
    }, 1000); // Adjust the delay to match your CSS transition duration
});

document.getElementById('achievement').addEventListener('click', function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'achievement.html'; // Redirect to achievement.html
    }, 1000); // Adjust the delay to match your CSS transition duration
});

document.getElementById('contact').addEventListener('click', function() {
    document.body.classList.add('fade-out');
    setTimeout(function() {
        window.location.href = 'contact.html'; // Redirect to contact.html
    }, 1000); // Adjust the delay to match your CSS transition duration
});
