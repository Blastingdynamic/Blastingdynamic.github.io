function showProject(projectId) {
    const projects = {
        project1: {
            title: "Project 1",
            description: "Details about Project 1. Add a complete description here.",
            image: "placeholder-image1.jpg"
        },
        project2: {
            title: "Project 2",
            description: "Details about Project 2. Add a complete description here.",
            image: "placeholder-image2.jpg"
        },
        project3: {
            title: "Project 3",
            description: "Details about Project 3. Add a complete description here.",
            image: "placeholder-image3.jpg"
        }
    };

    const project = projects[projectId];

    if (project) {
        const body = document.body;
        body.classList.add('fade-out');
        setTimeout(() => {
            body.innerHTML = `
                <header>
                    <h1>${project.title}</h1>
                </header>
                <section>
                    <h2>${project.title}</h2>
                    <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 20px;">
                    <p>${project.description}</p>
                    <button onclick="location.reload()" style="margin-top: 20px; padding: 10px; border: none; background: #007BFF; color: #fff; border-radius: 4px; cursor: pointer;">Back to Portfolio</button>
                </section>
            `;
            body.classList.remove('fade-out');
            body.classList.add('fade-in');
        }, 300);
    }
}
