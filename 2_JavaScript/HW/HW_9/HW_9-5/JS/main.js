// import {coursesArray} from './arrays-1.js';
//
// console.log(coursesArray);
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей,
// для властивості modules зробити список з елементами

 const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (let course of coursesArray) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('coursesDescription');

    const TitleDiv = document.createElement('div');
    TitleDiv.classList.add('coursesTitle');
    TitleDiv.innerText = `Назва курсу ${course.title}`;

    const durationDiv = document.createElement('div');
    durationDiv.classList.add('coursesDuration');

    const monthDurationDiv = document.createElement('div');
    monthDurationDiv.classList.add('Duration');
    monthDurationDiv.innerHTML = `<span>Термін:</span> ${course.monthDuration} міс.`;

    const hourDurationDiv = document.createElement('div');
    hourDurationDiv.classList.add('Duration');
    hourDurationDiv.innerHTML = `<span>Обсяг:</span> ${course.hourDuration} год`;

    durationDiv.append(monthDurationDiv, hourDurationDiv);


    const modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modulesDiv');
    const modlesP = document.createElement('p');
    modlesP.classList.add('modlesP');
    modlesP.innerText = `Програма курсу`
    const ul = document.createElement('ul');
    for (let module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }
    modulesDiv.append(modlesP,ul);


    mainDiv.append(TitleDiv,durationDiv,modulesDiv);
    document.body.append(mainDiv)
}

